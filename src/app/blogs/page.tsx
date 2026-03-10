import Link from 'next/link';
import { blogs } from '@/data/store';

export default function BlogsPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold">Blogs: Plant Care, Tips & Tricks</h1>
      <div className="mt-6 space-y-4">
        {blogs.map((blog) => (
          <article key={blog.slug} className="card p-5">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <Link href={`/blogs/${blog.slug}`} className="text-leaf">Read article</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
