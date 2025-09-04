"use client";
import { motion } from "framer-motion";
import useSWR from "swr";
import { useRef } from "react";
type Item = { year: string; title: string; detail: string };
const fetcher = (u: string) => fetch(u).then(r=>r.json());
export function Timeline() {
  const { data } = useSWR<Item[]>("/api/timeline", fetcher);
  const track = useRef<HTMLDivElement>(null);
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Timeline</h2>
      <div className="mt-4 overflow-x-auto">
        <div ref={track} className="flex gap-3 min-w-max pr-4">
          {data?.map((it, i) => (
            <motion.div key={i} className="card p-4 min-w-[280px]" drag="x" dragConstraints={track}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-sm text-muted">{it.year}</div>
              <div className="font-medium">{it.title}</div>
              <p className="text-muted">{it.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
