import { getAllProjects } from "@/lib/getProjects";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { getHero } from "@/lib/getHero";
import { getServices } from "@/lib/getServices";

export default function Home() {
  const hero = getHero();
  const projects = getAllProjects();
  const services = getServices();

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
          {hero.title}
        </h1>

        <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl">
          {hero.description}
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
        className="py-20 px-6 md:px-16 lg:px-32 bg-[#ECF0DB] dark:bg-neutral-800"
      >
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          About Me
        </h2>

        <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed text-lg">
          {hero.about}
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
        className="py-20 px-6 md:px-16 lg:px-32 bg-[#ECF0DB] dark:bg-neutral-800"
      >
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-10">
          Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 flex flex-col"
            >
              {/* Nome do Serviço */}
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {service.name}
              </h3>

              {/* Descrição */}
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                {service.description}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature: string, idx: number) => (
                    <li
                      key={idx}
                      className="text-neutral-700 dark:text-neutral-300 pl-5 relative"
                    >
                      <span className="absolute left-0 top-2 w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
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
            className="p-3 rounded-lg bg-[#F5F8ED] dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-lg bg-[#F5F8ED] dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />
          <textarea
            placeholder="Your message"
            className="p-3 rounded-lg bg-[#F5F8ED] dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
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
                <a href={hero.socials[1].url} className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={hero.socials[0].url} className="hover:underline">
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
