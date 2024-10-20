"use client";
import Typed from "typed.js";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
function Homepage() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Mobile Development",
        "AI and Machine Learning",
        "Cloud Computing and DevOps",
      ],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main>
      {/* Hero section starts here*/}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Reach Your <span className="font-semibold">Full Potential</span> in
            the <br className="hidden lg:block" /> Field of{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Explore all facets of software development and new technology{" "}
            <br className="hidden lg:block" /> with tutorials, professional
            insights, and practical tips.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>
      {/* Hero section ends here */}

      {/* Pricing section starts here */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Our Pricing Plans
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Choose a plan that fits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hover:cursor-pointer">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full border-2 border-gray-300 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Basic
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">$19/month</p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">✔️</span> Core tools
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">✔️</span> Email Support
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">✔️</span> Basic Analytics
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">✔️</span> 10 Projects
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">✔️</span> 1 GB Cloud Storage
                </li>
              </ul>
              <Button className="my-4" variant="secondary">
                Choose Plan
              </Button>
            </div>
            {/* Standard Plan */}
            <div className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full border-2 border-green-500 relative text-center">
              <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                Best Seller
              </span>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Standard
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">$49/month</p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🔥</span> Advanced Tools
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🔥</span> Priority Support
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🔥</span> Detailed Analytics
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🔥</span> 50 Projects
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🔥</span> 10 GB Cloud Storage
                </li>
              </ul>
              <Button className="my-4" variant="secondary">
                Choose Plan
              </Button>
            </div>
            {/* Premium Plan */}
            <div className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full border-2 border-red-500 relative text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Premium
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">$99/month</p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🚀</span> Premium benefits
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🚀</span> 24/7 Live Chat Support
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🚀</span> Custom Reporting
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🚀</span> Unlimited Projects
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="mr-2">🚀</span> 50 GB Cloud Storage
                </li>
              </ul>
              <Button className="my-4" variant="secondary">
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing section ends here */}

      {/* Clients section starts here */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Hear from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This service has transformed our business. The team is
                incredibly supportive and the tools are top-notch.
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/first-client.jpg"
                  alt="Client 1"
                  className="w-12 h-12 rounded-full mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Daniel Xavier
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    CEO, Trek Tech Corp
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A fantastic experience from start to finish. Highly recommend to
                anyone looking for quality service.
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/second-client.jpg"
                  alt="Client 2"
                  className="w-12 h-12 rounded-full mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Jeffrey Reed
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    CTO, Tidal Wave Technologies
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <p className="text-gray-600 dark:text-gray-300 mb-4 ">
                The best investment we&apos;ve made. The results speak for
                themselves and the support is unmatched.
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/third-client.jpg"
                  alt="Client 3"
                  className="w-12 h-12 rounded-full mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Italo Melo
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    COO, Drive Web Consulting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client section ends here */}

      {/* Top blogs posts starts here */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Top Blog Posts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Discover our most popular articles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hover:cursor-pointer">
            {/* Blog Post 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/TS-VS-JS.png"
                alt="Blog 1"
                className="w-full h-48 object-cover"
                width={500}
                height={192}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Which to Use: TypeScript or JavaScript?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Find out which is ideal for your project by comparing them.
                </p>
                <div className="text-sm mt-4">
                  <span>By Malik</span> | <span>11 October 2024</span>
                </div>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/RE-VS-NE.jpg"
                alt="Blog 2"
                className="w-full h-48 object-cover"
                width={500}
                height={192}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Which is Better: React vs Next.js?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Explore the key differences and find out which is right for
                  modern web development.
                </p>
                <div className="text-sm mt-4">
                  <span>By Malik</span> | <span>11 October 2024</span>
                </div>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/python.png"
                alt="Blog 3"
                className="w-full h-48 object-cover"
                width={500}
                height={192}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Why Python Is the Top Language Today
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Learn why developers favor Python for its simplicity,
                  versatility, and powerful libraries.
                </p>
                <div className="text-sm mt-4">
                  <span>By Malik</span> | <span>11 October 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top blogs posts ends here */}
    </main>
  );
}

export default Homepage;
