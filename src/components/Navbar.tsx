import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Shop', '/category/indoor-plants'],
  ['Blogs', '/blogs'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['FAQ', '/faq']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg text-leaf">Sapnaneer Nursery</Link>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(([label, href]) => (
            <li key={href}><Link href={href} className="hover:text-leaf">{label}</Link></li>
          ))}
        </ul>
        <div className="flex gap-3 text-sm">
          <Link href="/cart">Cart</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
