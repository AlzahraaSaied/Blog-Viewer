import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import {DefaultPagination} from "@/components/DefaultPagination"

export const metadata = {
  title: "The Blog",
  description: "A simple blog built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <Header />
        <main>{children}</main>
        <DefaultPagination/>
      </body>
    </html>
  );
}
