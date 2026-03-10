export default function CartPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-4">Cart (Left Slide-Out Preview)</h1>
      <div className="relative h-[420px] rounded-2xl bg-slate-100 p-4">
        <aside className="absolute left-0 top-0 h-full w-full max-w-sm card p-5">
          <h2 className="font-semibold">Your Cart</h2>
          <div className="mt-3 space-y-3 text-sm">
            <p>Fiddle Leaf Fig × 1 — ₹749</p>
            <p>Aloe Vera × 1 — ₹349</p>
          </div>
          <p className="mt-4 font-semibold">Total: ₹1,098</p>
        </aside>
      </div>
    </section>
  );
}
