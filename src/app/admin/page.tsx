const sections = [
  'Product Management: add / edit / delete products',
  'Categories and tags management like WooCommerce',
  'Blog CMS: add / edit / delete posts with status and featured image',
  'Order management: manually update order statuses',
  'Store features: featured products, stock status, and coupon codes'
];

export default function AdminPage() {
  return (
    <section className="py-10 space-y-5">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section} className="card p-5">
            <h2 className="font-semibold">{section}</h2>
            <div className="mt-3 flex gap-2 text-sm">
              <button className="rounded bg-leaf px-3 py-1 text-white">Add</button>
              <button className="rounded border px-3 py-1">Update</button>
              <button className="rounded border px-3 py-1">Delete</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
