import { getAllProjects } from "@/lib/getProjects";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import ProjectsCarousel from "./components/ProjectsCarousel";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col">
      {/* ===========================
          HERO / PRESENTATION
      ============================ */}
      <section
        id="presentation"
        className="min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-32 bg-white dark:bg-neutral-900"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100">
          Fernando Almeida
        </h1>

        <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl">
          Full-stack developer focused on building efficient, scalable and
          user-friendly applications. Turning ideas into high-quality digital
          experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            See my projects
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3 border border-neutral-400 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            Contact me
          </Link>
        </div>
      </section>

      {/* ===========================
          ABOUT ME
      ============================ */}
      <section
        id="about"
        className="py-20 px-6 md:px-16 lg:px-32 bg-neutral-50 dark:bg-neutral-800"
      >
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          About Me
        </h2>

        <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed text-lg">
          I’m a Brazilian full-stack developer passionate about clean code,
          performance and creating solutions that generate real impact. I work
          with modern technologies such as React, TypeScript, Next.js, Java,
          Spring Boot, PostgreSQL, and Docker — always focused on quality,
          maintainability, and a great user experience.
        </p>
      </section>

      {/* ===========================
          PROJECTS
      ============================ */}
      <section
        id="projects"
        className="py-20 px-6 md:px-16 lg:px-32 bg-white dark:bg-neutral-900"
      >
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-10">
          My Projects
        </h2>

        <ProjectsCarousel projects={projects} />

      </section>

      {/* ===========================
          SERVICES
      ============================ */}
      <section
        id="services"
        className="py-20 px-6 md:px-16 lg:px-32 bg-neutral-50 dark:bg-neutral-800"
      >
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-10">
          Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Full-Stack Development",
              desc: "Complete web applications using React, Next.js, Java, Spring Boot and modern architecture.",
            },
            {
              title: "API & Backend Engineering",
              desc: "Creation of scalable APIs, authentication flows, microservices, and database modeling.",
            },
            {
              title: "UI / UX Implementation",
              desc: "Pixel-perfect interfaces with Tailwind, animations, responsiveness and accessibility.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {service.title}
              </h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===========================
          CONTACT
      ============================ */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 lg:px-32 bg-white dark:bg-neutral-900"
      >
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          Contact
        </h2>

        <p className="text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl">
          Feel free to send me a message. Let’s build something amazing
          together.
        </p>

        <form className="grid max-w-xl gap-5">
          <input
            type="text"
            placeholder="Your name"
            className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />
          <textarea
            placeholder="Your message"
            className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            rows={5}
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition w-fit"
          >
            Send message
          </button>
        </form>
      </section>

      {/* ===========================
          FOOTER
      ============================ */}
      <footer className="py-12 px-6 md:px-16 lg:px-32 bg-neutral-950 text-neutral-300">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:underline">
                  About me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-3">Email: fernandoalmeida@fisica.ufc.br</p>
            <p>Location: Brazil</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/fernandoalmeida1990/" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/FernandoAlmeida2/" className="hover:underline">
                  GitHub
                </a>
              </li>
              {/*<li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>*/}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} Fernando Almeida. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
