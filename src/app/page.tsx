import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { blogs, products } from '@/data/store';

export default function Home() {
  const featured = products.filter((p) => p.featured);
  return (
    <div className="space-y-14 py-8">
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm text-leaf font-medium">Best Plant Shop in Bangladesh</p>
          <h1 className="mt-3 text-4xl font-bold">Grow Your Dream Garden with Nature&apos;s Best</h1>
          <p className="mt-4 text-slate-600">Premium indoor & outdoor plants, tools, and accessories delivered to your doorstep.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/category/indoor-plants" className="rounded-full bg-leaf px-5 py-2 text-white">Shop Now</Link>
            <Link href="/about" className="rounded-full border px-5 py-2">Visit Our Story</Link>
          </div>
        </div>
        <Image src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b" alt="gardening" width={700} height={550} className="card h-[380px] w-full object-cover" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Bestsellers</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="card bg-leaf p-8 text-white flex items-center justify-between">
        <div><h3 className="text-2xl font-bold">Transform Your Space</h3><p>Create your own green corner with easy-care plants.</p></div>
        <Link href="/checkout" className="rounded-full bg-white px-5 py-2 text-forest">Start Shopping</Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Beginner-Friendly Plants</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center">Plant Care Tips & Guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {blogs.map((blog) => (
            <article key={blog.slug} className="card overflow-hidden">
              <Image src={blog.image} alt={blog.title} width={700} height={400} className="h-56 w-full object-cover" />
              <div className="p-4"><h3 className="font-semibold">{blog.title}</h3><p className="text-sm text-slate-600">{blog.excerpt}</p><Link className="text-leaf text-sm" href={`/blogs/${blog.slug}`}>Read More →</Link></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
