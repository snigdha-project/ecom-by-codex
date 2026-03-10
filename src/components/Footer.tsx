import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4 text-sm">
        <div>
          <h3 className="font-semibold">Sapnaneer Nursery</h3>
          <p className="mt-2 text-white/80">Plants and gardening accessories for healthy, beautiful spaces.</p>
        </div>
        <div><h4 className="font-semibold">Shop</h4><ul className="mt-2 space-y-2 text-white/80"><li>Indoor Plants</li><li>Outdoor Plants</li><li>Accessories</li></ul></div>
        <div><h4 className="font-semibold">Help</h4><ul className="mt-2 space-y-2 text-white/80"><li><Link href="/contact">Contact</Link></li><li><Link href="/faq">FAQ</Link></li><li><Link href="/checkout">Shipping</Link></li></ul></div>
        <div><h4 className="font-semibold">Legal</h4><ul className="mt-2 space-y-2 text-white/80"><li><Link href="/legal/privacy">Privacy Policy</Link></li><li><Link href="/legal/terms">Terms</Link></li><li><Link href="/legal/refund">Refund Policy</Link></li></ul></div>
      </div>
    </footer>
  );
}
