
export const metadata = {
  title: "Blog - InkPress",
  description: "Read the latest posts from InkPress.",
};

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-gray-600 mb-8">
        Discover insights, tutorials, and stories from our team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <article
            key={i}
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >
              <img
              src={`https://picsum.photos/seed/blog${i}/600/300`}
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />
              
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Blog Post {i}</h2>
              <p className="text-gray-700 mb-3">
                A brief description about the topic discussed in this article.
              </p>
              <button className="text-sm text-blue-600 underline-offset-2">
                Read more 
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
