export const metadata = {
  title: "Newsletter - InkPress",
  description: "Subscribe to updates from InkPress.",
};

export default function NewsletterPage() {
  return (
    <main className="container mx-auto p-6 my-10">
      <h1 className="text-4xl font-bold mb-2">Subscribe to our Newsletter</h1>
      <p className="text-gray-600 mb-6">
        Get the latest articles and project updates delivered straight to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-stone-800 text-white px-4 py-2 rounded-md hover:bg-stone-700 transition"
        >
          Subscribe
        </button>
      </form>
    </main>
  );
}
