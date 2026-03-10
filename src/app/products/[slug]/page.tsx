import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/store';

const reviews = [
  { name: 'Nusrat', text: 'Healthy plant, well packed and beautiful.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  { name: 'Arafat', text: 'Great quality and care instructions were helpful.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' }
];

export default function SingleProduct({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug) ?? products[0];
  const similar = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <section className="py-10 space-y-8">
      <p className="text-sm text-leaf">Single Product Template</p>
      <div className="grid gap-8 md:grid-cols-2">
        <Image src={product.image} alt={product.name} width={700} height={500} className="card h-96 w-full object-cover" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2">{product.description}</p>
          <p className="mt-2">₹{product.price} · ⭐ {product.rating}</p>
          <p className="mt-1 text-sm">Stock: {product.stock}</p>
          <button className="mt-4 rounded bg-leaf px-5 py-2 text-white">Add to cart</button>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold">User Reviews & Images</h2>
        <p className="text-sm text-slate-600">Users can add reviews with images; admins can moderate/delete comments.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-xl border p-3 flex items-center gap-3">
              <Image src={review.image} alt={review.name} width={70} height={70} className="h-14 w-14 rounded-full object-cover" />
              <div><p className="font-semibold">{review.name}</p><p className="text-sm">{review.text}</p></div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Similar Products</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{similar.map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </div>
    </section>
  );
}
