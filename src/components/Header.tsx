import Link from "next/link";
import ThemeToggle from "./ThemeToggle";


export default function Header() {
  return (
    <header className="border-b border-black container mx-auto py-4">
      <div className="flex items-center justify-between py-5 ">
        <Link href="/" className="font-bold text-lg">
        InkPress 
        </Link>
        <div className="flex items-center gap-6">
  <Link href="/blog" className="text-lg">Blog</Link>
  <Link href="/projects" className="text-lg">Projects</Link>
  <Link href="/about" className="text-lg">About</Link>
  <Link href="/newsletter" className="text-lg">Newsletter</Link>
  <ThemeToggle />
</div>

        
      </div>
    </header>
  );
}
