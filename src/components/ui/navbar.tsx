"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Navbar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const pathName = usePathname();
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(70);
    }, 400);
    setTimeout(() => {
      setProgress(100);
    }, 700);
  }, [pathName]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 800);
  }, []);

  return (
    <nav className="p-0 bg-background/50 sticky top-0 border-b backdrop-blur-0 z-10 py-3">
      <LoadingBar
        color="#6028ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* Medium header section ends here */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-semibold text-2xl">
            Malik Blog
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            className="relative transition-transform duration-300 hover:scale-110 hover:font-semibold"
            href="/"
          >
            <span className="inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Home
            </span>
          </Link>
          <Link
            className="relative transition-transform duration-300 hover:scale-110 hover:font-semibold"
            href="/about"
          >
            <span className="inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              About
            </span>
          </Link>
          <Link
            className="relative transition-transform duration-300 hover:scale-110 hover:font-semibold"
            href="/blog"
          >
            <span className="inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Blog
            </span>
          </Link>
          <Link
            className="relative transition-transform duration-300 hover:scale-110 hover:font-semibold"
            href="/contact"
          >
            <span className="inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </span>
          </Link>
          <div className="flex items-center">
            <Button
              className="mx-1 transition-transform duration-500 hover:scale-110"
              variant="outline"
            >
              Login
            </Button>
            <Button
              className="mx-1 transition-transform duration-500 hover:scale-110"
              variant="outline"
            >
              Sign Up
            </Button>
            <ModeToggle />
          </div>
        </div>
        {/* Mobile header section starts here */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-5 text-2xl flex flex-row">
                  {" "}
                  <span className="py-8 text-left">Malik Blog</span>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 text-xl text-left text-black dark:text-white">
                    <Link
                      href="/"
                      className="hover:font-semibold transition-transform duration-500 relative"
                    >
                      <span className="inline-block relative after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full">
                        Home
                      </span>
                    </Link>
                    <Link
                      href="/about"
                      className="hover:font-semibold transition-transform duration-500 relative"
                    >
                      <span className="inline-block relative after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full">
                        About
                      </span>
                    </Link>
                    <Link
                      href="/blog"
                      className="hover:font-semibold transition-transform duration-500 relative"
                    >
                      <span className="inline-block relative after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full">
                        Blog
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:font-semibold transition-transform duration-500 relative"
                    >
                      <span className="inline-block relative after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full">
                        Contact
                      </span>
                    </Link>
                    <div>
                      <Button
                        className=" my-56 mx-2 text-xs transition-transform duration-500 hover:scale-110"
                        variant="outline"
                      >
                        Login
                      </Button>
                      <Button
                        className=" my-56 mx-2 text-xs transition-transform duration-500 hover:scale-110"
                        variant="outline"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        {/* Mobile header section ends here */}
      </div>
      {/* Medium header section ends here */}
    </nav>
  );
};

export default Navbar;
