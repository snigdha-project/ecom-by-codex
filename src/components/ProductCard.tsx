import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/store';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card overflow-hidden">
      <Image src={product.image} alt={product.name} width={500} height={400} className="h-48 w-full object-cover" />
      <div className="p-4">
        <p className="text-xs text-leaf">{product.category}</p>
        <Link href={`/products/${product.slug}`} className="font-semibold hover:text-leaf">{product.name}</Link>
        <p className="text-sm mt-1">₹{product.price} · ⭐ {product.rating}</p>
      </div>
    </article>
  );
}
