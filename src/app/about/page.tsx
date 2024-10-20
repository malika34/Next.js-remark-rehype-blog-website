"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.div
        className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0"
              whileHover={{ rotate: 6 }}
            >
              <div className="relative w-60 h-60 rounded-full overflow-hidden">
                <Image
                  src="/images/myimg-2.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </motion.div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <motion.h1
                className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                whileHover={{ opacity: 0.8 }}
              >
                About Me
              </motion.h1>
              <motion.p
                className="text-gray-600 dark:text-gray-50 text-lg mb-4"
                whileHover={{ opacity: 0.8 }}
              >
                Hello there! As a front-end developer with a strong interest in
                technology, my name is Malik Musadiq Ahmed. This blog serves as
                my own online space where I offer advice, commentary, and useful
                knowledge about web development and current technological
                developments. I think learning should never end, and I
                can&apos;t wait to support you as you become an expert coder!
              </motion.p>
              <motion.p
                className="text-gray-600 dark:text-gray-50 text-lg"
                whileHover={{ opacity: 0.8 }}
              >
                There are many resources available specifically for you,
                regardless of your skill level or where you are in the learning
                process. Together, let&apos;s explore the exciting field of
                programming and make learning fun!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Malik&apos;s Journey as a Coder
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600 dark:text-gray-50"
              whileHover={{ opacity: 0.8 }}
            >
              Here&apos;s How Malik Progressed from a Novice to a seasoned
              Front-End Developer in the World of Programming.
            </motion.p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div className="md:w-1/3" whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/learn.jpg"
                  alt="malik as a beginner"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-white"
                  whileHover={{ opacity: 0.8 }}
                >
                  The Spark of Curiosity
                </motion.h3>
                <motion.p
                  className="mt-4 text-gray-600 dark:text-gray-50"
                  whileHover={{ opacity: 0.8 }}
                >
                  Malik started learning to code in GIAIC (GOVERNOR INITIATIVE
                  FOR ARTIFICIAL INTELLIGENCE AND COMPUTING), where he happened
                  to come upon Typescript, his first programming language. Malik
                  developed a passion for software development after initially
                  having a simple interest and spending numerous hours
                  experimenting with coding, creating little projects, and
                  studying the principles of software development.
                </motion.p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <motion.div className="md:w-1/3" whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/new-skills.jpg"
                  alt="Harry learning new skills"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-white"
                  whileHover={{ opacity: 0.8 }}
                >
                  Diving Deeper
                </motion.h3>
                <motion.p
                  className="mt-4 text-gray-600 dark:text-gray-50"
                  whileHover={{ opacity: 0.8 }}
                >
                  Following his mastery of the fundamentals, Malik&apos;s
                  curiosity increased. He started looking into more advanced
                  subjects like web programming, algorithms, and data
                  structures. Malik&apos;s skill set was rapidly increased by
                  enrolling in the Presidential Initiative for Artificial
                  Intelligence & Computing (PIAIC) course, online courses, and
                  coding bootcamps. In order to use his skills in practical
                  settings, he started taking on freelancing tasks, which helped
                  him further establish his competence.
                </motion.p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <motion.div className="md:w-1/3" whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/challenges.jpg"
                  alt="Harry working on a big project"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-white"
                  whileHover={{ opacity: 0.8 }}
                >
                  Taking on Challenges
                </motion.h3>
                <motion.p
                  className="mt-4 text-gray-600 dark:text-gray-50"
                  whileHover={{ opacity: 0.8 }}
                >
                  Malik is a front-end developer that is always up for a
                  challenge. He pushes his limits and is constantly looking for
                  ways to learn and get better, whether it is by working on
                  little projects or participating in online groups. Although
                  there have been challenges along the way, each one has
                  provided an opportunity to learn something new. Malik is
                  committed to improving his abilities and is aiming to become a
                  more proficient developer gradually.
                </motion.p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <motion.div className="md:w-1/3" whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/giving-back.jpg"
                  alt="Malik mentoring others"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-white"
                  whileHover={{ opacity: 0.8 }}
                >
                  Giving Back
                </motion.h3>
                <motion.p
                  className="mt-4 text-gray-600 dark:text-gray-50"
                  whileHover={{ opacity: 0.8 }}
                >
                  Malik is still learning how to be a competent coder, but he
                  already sees the value of teamwork and community. Despite his
                  constant learning, Malik takes pleasure in imparting the
                  knowledge he has acquired. Malik is dedicated to giving back
                  to the programming community, whether it is by guiding
                  newcomers to the field or working on collaborative projects.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
