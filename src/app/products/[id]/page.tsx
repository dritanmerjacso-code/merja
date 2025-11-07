"use client";

import { usePathname } from "next/navigation";

const DB: Record<string, { name: string; details: string[] }> = {
  "propolis-oregano": {
    name: "Propolis + Oregano",
    details: [
      "Use case: targeted support for throat, immunity and upper respiratory comfort.",
      "Suggested use: 2–3 times per day after meals, or as advised by your practitioner.",
      "Caution: not recommended for individuals allergic to bee products.",
    ],
  },
  "reumer-cream": {
    name: "Reumer Cream",
    details: [
      "Use case: localized comfort for joints and overworked muscles.",
      "Apply a thin layer 2x daily on clean, dry skin and massage until absorbed.",
    ],
  },
  "vitamin-c-serum": {
    name: "Vitamin C Serum",
    details: [
      "Use case: brightening, antioxidant support, more even skin tone.",
      "Apply on clean skin in the morning. Always follow with SPF.",
    ],
  },
};

export default function ProductDetailPage() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const id = segments[segments.length - 1];
  const item = DB[id];

  if (!item) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Product not found.</h1>
        <p className="mt-2 text-sm text-neutral-500">
          ID from URL: <code>{id || "undefined"}</code>
        </p>
        <a
          href="/products"
          className="mt-4 inline-block rounded-2xl border px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Back to products
        </a>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">{item.name}</h1>
      <p className="text-sm text-neutral-600">
        Crafted by Merja Herbs with a clear functional purpose and transparent usage guidance.
      </p>

      <div className="rounded-2xl border bg-white p-4">
        <h2 className="mb-2 font-semibold">Clinical Snapshot</h2>
        <ul className="list-disc pl-5 text-neutral-700 text-sm space-y-1">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <a
          href="/chat"
          className="rounded-2xl border px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Ask Merja AI about this product
        </a>
        <a
          href="/products"
          className="rounded-2xl border px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Back to products
        </a>
      </div>
    </section>
  );
}
