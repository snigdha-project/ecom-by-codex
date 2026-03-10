export default function CheckoutPage() {
  return (
    <section className="py-10 grid gap-6 md:grid-cols-3">
      <form className="md:col-span-2 card p-6 space-y-3">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <input className="w-full rounded border p-2" placeholder="Full name" />
        <input className="w-full rounded border p-2" placeholder="Phone" />
        <input className="w-full rounded border p-2" placeholder="Address" />
        <input className="w-full rounded border p-2" placeholder="Coupon code" />
        <button className="rounded bg-leaf px-4 py-2 text-white">Place Order</button>
      </form>
      <aside className="card p-6"><h2 className="font-semibold">Order Summary</h2><p className="mt-2">Subtotal: ₹1,248</p><p>Shipping: ₹80</p><p className="font-semibold">Total: ₹1,328</p></aside>
    </section>
  );
}
