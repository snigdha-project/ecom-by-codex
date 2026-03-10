import Link from 'next/link';

export default function LegalIndex() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold">Legal Pages</h1>
      <ul className="mt-4 list-disc pl-6 text-leaf space-y-2">
        <li><Link href="/legal/privacy">Privacy Policy</Link></li>
        <li><Link href="/legal/terms">Terms & Conditions</Link></li>
        <li><Link href="/legal/refund">Refund & Return Policy</Link></li>
      </ul>
    </section>
  );
}
