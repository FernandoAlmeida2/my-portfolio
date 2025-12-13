import { getAllProjects } from "@/lib/getProjects";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { getHero } from "@/lib/getHero";
import { getServices } from "@/lib/getServices";
import Image from "next/image";

export default function Home() {
  const hero = getHero();
  const projects = getAllProjects();
  const services = getServices();

  return (
    <div className="font-albert flex flex-col dark:bg-neutral-900">
      {/* ===========================
          HEADER
      ============================ */}
      <header className="font-montserrat py-4 px-4 md:px-16 lg:px-32 bg-[#1A2601] text-white font-semibold ">
        <div className="flex md:flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
          <div>
            <ul className="flex md:mt-3 space-y-2 gap-5 md:gap-20 text-xs md:text-xl">
              <li>
                <Link href="#about" className="hover:underline">
                  About me
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="md:mt-3 flex items-center gap-2 md:gap-6">
              {/* LinkedIn */}
              <a
                href={hero.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/icons/linkedin-white.png"
                  alt="LinkedIn icon"
                  width={32}
                  height={32}
                  className="object-contain w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
                />
              </a>

              {/* GitHub */}
              <a
                href={hero.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition hidden md:block"
              >
                <Image
                  src="/icons/github-white.png"
                  alt="GitHub icon"
                  width={32}
                  height={32}
                  className="object-contain w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* ===========================
          HERO / PRESENTATION
      ============================ */}
      <section
        id="presentation"
        className="min-h-180 md:min-h-screen flex flex-col justify-between items-center bg-white dark:bg-neutral-900 mt-15 md:mt-25"
      >
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-4xl md:text-6xl font-bold dark:text-neutral-100">
            {hero.title}
          </h1>

          <p className="text-justify text-lg md:text-2xl font-light dark:text-neutral-300 max-w-lg leading-7 px-4">
            {hero.description}
          </p>
          <div className="font-montserrat flex justify-center gap-8 mt-6">
            <Link
              href="#projects"
              className="px-6 py-3 bg-[#1A2601] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-base md:text-xl text-bold text-white rounded-xl hover:bg-black transition"
            >
              See my projects
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 border border-[rgba(178,178,178,1)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-base md:text-xl dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="">
          <Image
            src="/profile.png"
            alt="profile img"
            width={510}
            height={477}
          />
        </div>
      </section>

      {/* ===========================
          ABOUT ME
      ============================ */}
      <section
        id="about"
        className="flex flex-col py-20 px-6 md:px-16 lg:px-32 bg-[#ECF0DB] dark:bg-neutral-800"
      >
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1A2601] dark:text-neutral-100 mb-6">
            About Me
          </h2>

          <p className="text-black font-light dark:text-neutral-300 max-w-3xl leading-relaxed text-base md:text-xl">
            {hero.about}
          </p>
        </div>
      </section>

      {/* ===========================
          PROJECTS
      ============================ */}
      <section
        id="projects"
        className="py-20 px-6 md:px-16 lg:px-32 bg-white dark:bg-neutral-900"
      >
        <h2 className="text-[#1A2601] text-2xl md:text-4xl font-bold dark:text-neutral-100 mb-10">
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
        <h2 className="text-[#1A2601] text-2xl md:text-4xl font-bold dark:text-neutral-100 mb-10">
          Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F5F8ED] dark:bg-neutral-900 rounded-xl shadow-md p-6 flex flex-col"
            >
              {/* Nome do Serviço */}
              <h3 className="md:text-xl font-semibold dark:text-neutral-100">
                {service.name}
              </h3>

              {/* Descrição */}
              <p className="md:text-xl mt-3 dark:text-neutral-300">
                {service.description}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature: string, idx: number) => (
                    <li
                      key={idx}
                      className="md:text-xl dark:text-neutral-300 pl-5 relative"
                    >
                      <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg-neutral-500 rounded-full"></span>
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
        <h2 className="text-[#1A2601] text-2xl md:text-4xl font-bold dark:text-neutral-100 mb-6">
          Contact
        </h2>

        <p className="md:text-xl font-light dark:text-neutral-300 mb-8">
          Feel free to send me a message. Let’s build something amazing
          together.
        </p>

        <form className="font-montserrat grid gap-5 max-w-2xl">
          <input
            type="text"
            placeholder="Your name"
            className="p-3 rounded-lg bg-[#F5F8ED] dark:bg-neutral-800 text-[#5E5353] text-xs md:text-sm dark:text-neutral-100"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-lg bg-[#F5F8ED] dark:bg-neutral-800 text-[#5E5353] text-xs md:text-sm dark:text-neutral-100"
          />
          <textarea
            placeholder="Your message"
            className="p-3 rounded-lg bg-[#F5F8ED] dark:bg-neutral-800 text-[#5E5353] text-xs md:text-sm dark:text-neutral-100"
            rows={5}
          ></textarea>

          <button
            type="submit"
            className="px-8 py-4 bg-[#1A2601] text-white rounded-xl hover:bg-[#292d14] text-sm md:text-base transition w-fit"
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
