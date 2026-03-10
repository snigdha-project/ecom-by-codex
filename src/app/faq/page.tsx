const faqs = [
  ['How long does delivery take?', 'Inside Dhaka: 24-48 hours. Outside: 3-5 days.'],
  ['Do you provide plant care support?', 'Yes, free care tips are included with every order.'],
  ['Can I return damaged plants?', 'Yes, report within 24 hours with photos for replacement.']
];

export default function FAQPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-5">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map(([q, a]) => (
          <div key={q} className="card p-5">
            <h2 className="font-semibold">{q}</h2>
            <p className="text-slate-600 mt-1">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
