import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";  
import RecentPosts from "./recentblogs/page";

export const metadata = {
  title: "The Blog - All Posts",
  description: "Browse all blog posts.",
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
const specifications = [
  ["Design","Research"],
  ["Managment","Software Development"],
  ["Frameworks","Tools"],
  ["Saas","Customer Success"],
  ["Podcasts",
  "Leadership",
  "Product"],
  ["Interface",
  "Presentation"],
]
const authors = [
  "Alec Whitten",
  "Demi Wilkinson",
  "Candice Wu",
  "Sarah Lee",
  "John Doe",
  "Maria Smith",
];


function getDateFromId(id: number) {
  const baseDate = new Date(2023, 0, 1);
  baseDate.setDate(baseDate.getDate() + id);

  const parts = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).formatToParts(baseDate);

  const day = parts.find(p => p.type === "day")?.value;
  const month = parts.find(p => p.type === "month")?.value;
  const year = parts.find(p => p.type === "year")?.value;

  return `${day} ${month}, ${year}`;
}


export default async function Home() {
  const posts = await getPosts();

  return (
 <main className="container mx-auto ">

      <h1 className="text-[243.8px] font-extrabold text-center border-b border-black">The Blog</h1>
      <RecentPosts/>
      <span className="font-bold leading-loose inline-block pb-3">All Blog Posts</span>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 border-b mb-5 pb-5 border-black">
        {posts.slice(0, 9).map((post) => {
          const author = authors[post.id % authors.length];
          const date = getDateFromId(post.id);

          return (
            <article
              key={post.id}
              className=" overflow-hidden "
            >
              <Link href={`/posts/${post.id}`} className="block relative w-full h-48">
                <Image
                  src={`https://picsum.photos/seed/${post.id}/600/400`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              <div className="mt-8">
                <div className="flex items-center text-sm text-gray-500 font-semibold mb-2">
                  <span className="mr-1 text-[#6941C6]">{author}</span>
                  <span>•</span>
                  <span className="ml-1 text-[#6941C6]">{date}</span>
                </div>
                <Link href={`/posts/${post.id}`} className="inline-flex font-bold items-center group">
                  <h2 className="text-lg ">
                    {post.title}
                  </h2>
                  <ArrowUpRightIcon className="w-4 h-4 ml-1 text-blue-600" />
                </Link>
                <p className="text-[#667085] dark:text-gray-400 mt-2">
                  {post.body.slice(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
  {specifications[post.id % specifications.length].map((tag) => (
    <span
      key={tag}
      className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
    >
      {tag}
    </span>
  ))}
</div>

              </div>
            </article>
          );
        })}
      </div>
      </main>
  );
  
}
