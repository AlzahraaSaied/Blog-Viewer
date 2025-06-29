export const metadata = {
  title: "About - InkPress",
  description: "Learn more about InkPress.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold my-2">About InkPress</h1>
      <img
              src={`https://picsum.photos/seed/900/400`}
              alt="Blog Post"
              className="w-full h-100 object-cover"
            />
      <p className=" my-6">
        InkPress is a modern publishing platform where creativity meets
        technology.
      </p>
      <div className="space-y-4">
        <p >
          Founded in 2024, InkPress helps individuals and teams share stories
          and knowledge with a global audience. Our mission is to empower
          creators with beautiful, performant tools.
        </p>
        <p >
          From simple blogs to advanced content strategies, InkPress provides a
          seamless experience for readers and writers alike.
        </p>
      </div>
    </main>
  );
}
