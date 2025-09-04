"use client";
import useSWR from "swr";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

type Testimonial = { name: string; role: string; quote: string };

// typed fetcher so TS knows `u` is a string and the return type
const fetcher = (u: string): Promise<Testimonial[]> =>
  fetch(u).then((r) => r.json());

export function Testimonials() {
  const { data = [] } = useSWR<Testimonial[]>("/api/testimonials", fetcher);
  const controls = useAnimationControls();

  useEffect(() => {
    const id = setInterval(() => controls.start({ x: "-=100%" }), 4000);
    return () => clearInterval(id);
  }, [controls]);

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <div className="relative mt-4 overflow-hidden">
        <motion.div
          className="flex gap-3"
          animate={controls}
          transition={{ ease: [0.2, 0.8, 0.2, 1], duration: 0.6 }}
          onMouseEnter={() => controls.stop()}
        >
          {data.map((t, i) => (
            <blockquote key={i} className="card p-4 max-w-sm">
              <p>“{t.quote}”</p>
              <footer className="mt-3 text-sm text-muted">
                — {t.name}, {t.role}
              </footer>
            </blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
