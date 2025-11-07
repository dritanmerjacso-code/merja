type Product = {
  id: string;
  name: string;
  blurb: string;
  price: string;
  youtube?: string;
};

const PRODUCTS: Product[] = [
  {
    id: "propolis-oregano",
    name: "Bee propolis with Oregano",
    blurb: "Targeted throat & immune support with propolis and oregano oil.",
    price: "$15.99",
  },
  {
    id: "reumer-cream",
    name: "Reumer  Cream",
    blurb: "Herbal cream for joints, stiffness and muscle tension.",
    price: "$19.99",
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Brightening Serum",
    blurb: "Stabilized Vitamin C for glow, spots and uneven tone.",
    price: "$24.99",
  },
  {
    id: "hemp-tea-relax",
    name: "Harmony Tea",
    blurb: "Soothing blend to unwind in the evening.",
    price: "$19.99",
  },
  {
    id: "liver-detox-tea",
    name: "Detox Tea",
    blurb: "Support for liver, digestion and metabolism.",
    price: "$19.99",
  },
];


export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Products</h1>
      <p className="mb-4 text-sm text-neutral-600 max-w-2xl">
        Curated formulations by Merja Herbs. Each product is designed with a clear purpose:
        real ingredients, clear usage, and transparent expectations.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="rounded-2xl border bg-white p-4">
            <div className="aspect-video rounded-xl bg-neutral-100" />
            <div className="mt-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-neutral-500">
                    {p.blurb}
                  </div>
                </div>
                <div className="text-sm">{p.price}</div>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <a
                  href={`/products/${p.id}`}
                  className="rounded-xl border px-3 py-1 hover:bg-neutral-50"
                >
                  Details
                </a>
                {p.youtube && (
                  <a
                    href={p.youtube}
                    target="_blank"
                    className="rounded-xl border px-3 py-1 hover:bg-neutral-50"
                  >
                    Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
