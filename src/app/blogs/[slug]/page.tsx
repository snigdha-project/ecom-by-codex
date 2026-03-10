import { blogs } from '@/data/store';

export default function SingleBlog({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug) ?? blogs[0];

  return (
    <article className="py-10 max-w-3xl space-y-4">
      <p className="text-sm text-leaf">Blog Template</p>
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p>{blog.body}</p>
    </article>
  );
}
