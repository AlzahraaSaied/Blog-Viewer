export const metadata = {
  title: "Projects - InkPress",
  description: "Explore our work and case studies.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-gray-600 mb-8">
        A showcase of some of our favorite projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Project {i}</h2>
            <p className="text-gray-700 mb-3">
              This project highlights our expertise in design and development.
            </p>
            <button className="text-sm text-blue-600 hover:underline">
              View details 
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
