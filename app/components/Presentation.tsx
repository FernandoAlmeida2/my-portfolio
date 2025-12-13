"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Presentation({ hero }: any) {
  return (
    <section
      id="presentation"
      className="min-h-180 md:min-h-screen flex flex-col justify-between items-center bg-white dark:bg-neutral-900 mt-15 md:mt-25"
    >
      {/* Texto */}
      <motion.div
        className="flex flex-col text-center gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold dark:text-neutral-100"
        >
          {hero.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-justify text-lg md:text-2xl font-light dark:text-neutral-300 max-w-lg leading-7 px-4"
        >
          {hero.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-montserrat flex justify-center gap-8 mt-6"
        >
          <Link
            href="#projects"
            className="px-6 py-3 bg-[#1A2601] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-base md:text-xl font-bold text-white rounded-xl hover:bg-black transition"
          >
            See my projects
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3 border border-[rgba(178,178,178,1)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-base md:text-xl dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            Contact me
          </Link>
        </motion.div>
      </motion.div>

      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src="/profile.png"
          alt="profile img"
          width={510}
          height={477}
          priority
        />
      </motion.div>
    </section>
  );
}
