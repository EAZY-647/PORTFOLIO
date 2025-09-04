"use client";
import useSWR from "swr";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Github } from "lucide-react";
type Project = {
  slug: string; title: string; blurb: string; metrics: string[];
  stack: string[]; cover: string; category: string; links: { repo?: string; live?: string };
};
const fetcher = (url: string) => fetch(url).then(r => r.json());
export function Projects() {
  const { data: local } = useSWR<Project[]>('/api/projects', fetcher);
  const { data: gh } = useSWR<any[]>('/api/github', fetcher);
  const [filter, setFilter] = useState<string>("All");
  const items = useMemo(() => {
    const base = (local || []);
    const ghCards: Project[] = (gh || []).slice(0, 9).map((r: any) => ({
      slug: r.name,
      title: r.name.replace(/[-_]/g, " "),
      blurb: r.description || "Open-source repository",
      metrics: r.stargazers_count ? [`★ ${r.stargazers_count}`] : [],
      stack: r.language ? [r.language] : [],
      cover: `https://opengraph.githubassets.com/1/${r.owner.login}/${r.name}`,
      category: "Open-Source",
      links: { repo: r.html_url, live: r.homepage || undefined }
    }));
    const all = [...base, ...ghCards];
    if (filter === "All") return all;
    return all.filter(p => p.category === filter);
  }, [local, gh, filter]);
  const cats = ["All", "Web", "AI", "Robotics", "Open-Source"];
  return (
    <section id="projects" className="container py-12">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex gap-2">
          {cats.map(c => (
            <button key={c} onClick={()=>setFilter(c)} className={`btn ${filter===c ? 'btn-primary' : ''}`} aria-pressed={filter===c}>{c}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {items?.map((p, i) => (
          <motion.article key={p.slug} className="card overflow-hidden"
            initial={{ opacity: 0, y: 18, scale: .98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }} transition={{ delay: i*0.03, duration: .45 }}>
            <div className="relative h-44">
              <Image src={p.cover} alt={p.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              <div className="absolute bottom-2 right-2 flex gap-1 flex-wrap">
                {p.stack.map(s => <span key={s} className="badge bg-black/40 text-white">{s}</span>)}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-muted mt-1">{p.blurb}</p>
              <div className="mt-3 flex items-center gap-2">
                {p.links.live && <a className="btn btn-primary" href={p.links.live} target="_blank" rel="noreferrer">Live</a>}
                {p.links.repo && <a className="btn" href={p.links.repo} target="_blank" rel="noreferrer"><Github size={16}/> Source</a>}
              </div>
              {p.metrics?.length ? <div className="mt-3 flex gap-2 flex-wrap">{p.metrics.map(m => <span key={m} className="badge">{m}</span>)}</div> : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
