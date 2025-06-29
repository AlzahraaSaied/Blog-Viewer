import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

const authors = [
  "Olivia Rhye",
  "Phoenix Baker",
  "Lana Steiner",
  "Demi Wilkinson",
  "Candice Wu",
];

const specifications = [
  ["Design", "Research"],
  ["Presentation", "Interface"],
  ["Management", "Software"],
  ["Frameworks", "Tools"],
  ["Product", "Leadership"],
];

function getDateFromId(id: number) {
  const baseDate = new Date(2023, 0, 1);
  baseDate.setDate(baseDate.getDate() + id);
  return baseDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function RecentPosts() {
  const posts = await getPosts();
  const selected = posts.slice(0, 4);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Recent blog posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {selected.slice(0, 1).map((post) => {
          const author = authors[post.id % authors.length];
          const date = getDateFromId(post.id);
          const tags = specifications[post.id % specifications.length];

          return (
            <article key={post.id} className="lg:col-span-1 flex flex-col ">
              <Link href={`/posts/${post.id}`}>
                <Image
                  src={`https://picsum.photos/seed/${post.id}/592/228`}
                  alt=""
                  width={592}
                  height={228}
                  className="object-cover w-[592px] h-[228px]"
                />
              </Link>
              <div className="py-8">
                <div className="text-sm text-gray-500 mb-1">
                  <span className="text-[#6941C6]">{author}</span>
                  {" • "}
                  <span className="text-[#6941C6]">{date}</span>
                </div>
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-flex items-center group"
                >
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <ArrowUpRightIcon className="w-5 h-5 ml-1 text-blue-600" />
                </Link>
                <p className="text-gray-600 mt-2">
                  {post.body.slice(0, 70)}...
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}

        <div className="flex flex-col gap-8">
          {selected.slice(1, 3).map((post) => {
            const author = authors[post.id % authors.length];
            const date = getDateFromId(post.id);
            const tags = specifications[post.id % specifications.length];

            return (
              <article key={post.id} className="flex ">
                <Link href={`/posts/${post.id}`}>
                  <Image
                    src={`https://picsum.photos/seed/${post.id}/320/200`}
                    alt="the blog post "
                    width={320}
                    height={200}
                    className="object-cover w-[320px] h-[200px]"
                  />
                </Link>

                <div className="ps-3 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-gray-500 mb-2">
                      <span className="text-[#6941C6]">{author}</span>
                      {" • "}
                      <span className="text-[#6941C6]">{date}</span>
                    </div>
                    <Link
                      href={`/posts/${post.id}`}
                      className="inline-flex items-center group"
                    >
                      <h3 className="text-base font-semibold group-hover:text-blue-600 transition">
                        {post.title}
                      </h3>
                      <ArrowUpRightIcon className="w-5 h-5 ml-1 text-blue-600" />
                    </Link>
                    <p className="text-gray-600 mt-3 text-md">
                      {post.body.slice(0, 100)}...
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[14px] font-medium px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full"
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
      </div>

      {selected.slice(3, 4).map((post) => {
        const author = authors[post.id % authors.length];
        const date = getDateFromId(post.id);
        const tags = specifications[post.id % specifications.length];

        return (
          <article key={post.id} className="mt-6 flex overflow-hidden">
            <Link
              href={`/posts/${post.id}`}
              className="relative flex-shrink-0"
            >
              <Image
                src={`https://picsum.photos/seed/${post.id}/592/246`}
                alt="the blog post recent"
                width={592}
                height={246}
                className="object-cover"
              />
            </Link>
            <div className="pl-4 flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="text-[#6941C6]">{author}</span>
                  {" • "}
                  <span className="text-[#6941C6]">{date}</span>
                </div>
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-flex items-center group"
                >
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <ArrowUpRightIcon className="w-5 h-5 ml-1 text-blue-600" />
                </Link>
                <p className="text-gray-600 mt-3 text-md">
                  {post.body.slice(0, 200)}...
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
