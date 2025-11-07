export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Health from herbs. Beauty from nature.
          </h1>
          <p className="mb-6 text-lg text-neutral-600">
            Merja Herbs crafts precise herbal formulas using propolis, essential oils,
            functional creams and teas — uniting Albanian herbal tradition with modern science.
          </p>
          <div className="flex gap-3">
            <a href="/products" className="rounded-2xl border px-4 py-2 hover:bg-neutral-50">
              Explore Products
            </a>
            <a href="/chat" className="rounded-2xl bg-black px-4 py-2 text-white hover:opacity-90">
              Ask Merja AI
            </a>
          </div>
        </div>
        <div className="aspect-square rounded-3xl border bg-white shadow-sm" />
      </div>

      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-semibold">Bestsellers</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Propolis + Oregano", price: "€19", tag: "Immunity" },
            { name: "Reumer Cream", price: "€24", tag: "Muscles & Joints" },
            { name: "Vitamin C Serum", price: "€29", tag: "Skin" },
          ].map((p) => (
            <a key={p.name} href="/products" className="rounded-2xl border bg-white p-4 hover:shadow">
              <div className="aspect-video rounded-xl bg-neutral-100" />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-neutral-500">{p.tag}</div>
                </div>
                <div className="text-sm">{p.price}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
