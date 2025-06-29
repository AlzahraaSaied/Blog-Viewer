"use client"; 

export default function ThemeToggle() {
  return (
    <button
      className="p-2 rounded bg-gray-200 dark:bg-gray-700"
      onClick={() => {
        // Add real toggle logic here
        alert("Toggle dark/light mode");
      }}
    >
      🌓
    </button>
  );
}
