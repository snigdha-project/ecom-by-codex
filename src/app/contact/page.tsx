export default function ContactPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <form className="card p-6 space-y-3">
          <input className="w-full rounded border p-2" placeholder="Name" />
          <input className="w-full rounded border p-2" placeholder="Email" />
          <textarea className="w-full rounded border p-2" placeholder="Message" rows={5} />
          <button className="rounded bg-leaf px-4 py-2 text-white">Send Message</button>
        </form>
        <div className="card p-6">
          <h2 className="font-semibold">Visit or call</h2>
          <p className="mt-2">Dhaka, Bangladesh</p>
          <p>+880 1700-123456</p>
          <p>hello@sapnaneer.com</p>
        </div>
      </div>
    </section>
  );
}
