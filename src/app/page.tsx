export default function Page() {
  const bestsellers = [
    {
      name: "Propolis + Oregano Spray",
      tag: "Immunity & throat",
      price: "€19",
    },
    {
      name: "Reumer Herbal Cream",
      tag: "Joints & muscles",
      price: "€24",
    },
    {
      name: "Vitamin C Brightening Serum",
      tag: "Skin glow",
      price: "€29",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
            Merja Herbs · Herbal Science
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Health from herbs.
            <br />
            Beauty from nature.
          </h1>
          <p className="text-sm md:text-base text-neutral-600 max-w-xl">
            Evidence-inspired herbal formulas crafted in Albania and trusted abroad.
            Propolis, botanical extracts and functional teas designed with clear clinical logic.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/products"
              className="rounded-2xl bg-black px-5 py-2.5 text-sm text-white hover:opacity-90"
            >
              Explore products
            </a>
            <a
              href="/chat"
              className="rounded-2xl border px-5 py-2.5 text-sm hover:bg-neutral-50"
            >
              Ask Merja AI
            </a>
          </div>
          <p className="text-xs text-neutral-500">
            “The doctor treats, nature heals.” — Philosophy behind every formula.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-lime-100/70 via-emerald-50 to-white" />
          <div className="h-full w-full rounded-3xl border bg-white p-4 flex flex-col justify-between gap-4 shadow-sm">
            <div className="text-xs font-medium text-neutral-500">
              Merja Clinical Selection
            </div>
            <div className="space-y-2 text-sm text-neutral-700">
              <p>• Targeted herbal protocols for immunity, joints and skin.</p>
              <p>• Clear usage guidance for doctors, pharmacists and customers.</p>
              <p>• Integrated with Merja AI (coming soon).</p>
            </div>
            <div className="mt-2 text-[10px] text-neutral-400">
              Not a replacement for medical diagnosis. Always consult your physician.
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Bestsellers</h2>
          <a
            href="/products"
            className="text-xs text-neutral-500 hover:text-neutral-800"
          >
            View all products →
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {bestsellers.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border bg-white p-4 hover:shadow-sm transition-shadow"
            >
              <div className="aspect-video rounded-xl bg-neutral-100 mb-3" />
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-[10px] text-neutral-500">{p.tag}</div>
                </div>
                <div className="text-xs text-neutral-800">{p.price}</div>
              </div>
              <a
                href="/products"
                className="mt-3 inline-block text-[10px] text-neutral-600 hover:text-neutral-900"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border bg-black px-5 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.22em] text-lime-300 uppercase">
            Merja AI Assistant
          </div>
          <p className="text-sm text-neutral-200 max-w-lg">
            A guided assistant trained on Merja Herbs principles to help partners and
            customers navigate products and combinations responsibly.
          </p>
        </div>
        <a
          href="/chat"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-xs font-medium text-black hover:bg-neutral-100"
        >
          Open Merja AI (demo)
        </a>
      </div>
    </section>
  );
}
