import ProductCard from '@/components/ProductCard';
import { products } from '@/data/store';

export default function CategoryTemplate({ params }: { params: { slug: string } }) {
  const title = params.slug.replace('-', ' ');
  const filtered = products.filter((p) => p.category.toLowerCase().replace(/\s+/g, '-') === params.slug);

  return (
    <section className="py-10">
      <p className="text-sm text-leaf">Product Category Template</p>
      <h1 className="text-3xl font-bold capitalize">{title}</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {(filtered.length ? filtered : products).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
