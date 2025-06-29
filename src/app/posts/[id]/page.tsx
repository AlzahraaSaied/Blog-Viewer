import { Post } from "@/types/post";
import Link from "next/link";
import { Metadata } from "next";

function getDateFromId(id: number) {
  const baseDate = new Date(2023, 0, 1);
  baseDate.setDate(baseDate.getDate() + id);

  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).formatToParts(baseDate);

  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const year = parts.find((p) => p.type === "year")?.value;

  return `${weekday}, ${day} ${month}, ${year}`;
}

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) {
    return {
      title: "Post Not Found - Blog Viewer",
      description: "This post could not be loaded.",
    };
  }
  const post: Post = await res.json();
  return {
    title: `${post.title} - Blog Viewer`,
    description: post.body,
  };
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Post not found");
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  let post: Post;
  try {
    post = await getPost(params.id);
  } catch (error) {
    console.error("Failed to get post:", error);
    return <div className="p-4 text-red-500">Post not found.</div>;
  }

  const date = getDateFromId(Number(params.id));

  return (
    <main className="container mx-auto p-4">
      <p className="text-sm font-semibold text-[#6941C6] mb-2">{date}</p>

      <h1 className="text-3xl font-bold mt-1 mb-3">{post.title}</h1>

      <img
        src={`https://picsum.photos/seed/${post.id}/1152/426`}
        alt="Blog Post"
        className="w-full h-[426px] object-cover my-5"
      />

      <p className="text-md text-[#C0C5D0] my-6">{post.body}</p>

      <Link href="/" className="text-blue-500 hover:underline">
        &larr; Back to Posts
      </Link>
    </main>
  );
}
