import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "content");
  const files = fs.readdirSync(dirPath);

  return files.map((file) => {
    const fileName = file.replace(/\.md$/, "");
    return {
      slug: fileName,
    };
  });
}

const Blog = async () => {
  const dirPath = path.join(process.cwd(), "content");
  const files = fs.readdirSync(dirPath);

  const blogs = files.map((file) => {
    const fileContent = fs.readFileSync(path.join(dirPath, file), "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden dark:border-2 transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              height={800}
              width={800}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> |{" "}
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
