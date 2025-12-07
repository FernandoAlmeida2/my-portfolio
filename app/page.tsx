import { getAllProjects } from "@/lib/getProjects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Fernando Almeida
        </h1>
        <div>
      <h1>Meus Projetos</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.slug}>{p.title}</li>
        ))}
      </ul>
    </div>
      </main>
    </div>
  );
}
