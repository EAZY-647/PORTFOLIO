"use client";
import { motion } from "framer-motion";
import { tokens } from "@/lib/tokens";
import { Github, Linkedin, FileDown } from "lucide-react";
export function Hero() {
  return (
    <section className="container pt-20 pb-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-display">
            I build fast, reliable data platforms.<br/>
            <span className="bg-clip-text text-transparent" style={{backgroundImage: tokens.colors.gradient}}>Delightful & scalable.</span>
          </h1>
          <p className="text-muted mt-3 max-w-[56ch]">
            Data Engineer in London. I ship production-grade pipelines and real-time analytics that move metrics.
          </p>
          <div className="mt-5 flex gap-2">
            <a className="btn btn-primary" href="#projects">View Work</a>
            <a className="btn" href="#contact">Contact</a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a className="btn" href={`https://github.com/${tokens.brand.github}`} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
            <a className="btn" href={tokens.brand.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            <a className="btn" href="/ayush-cv.pdf"><FileDown size={16}/> CV</a>
          </div>
        </div>
        <div className="card p-4 md:p-6">
          <motion.div className="w-full aspect-square rounded-3xl"
            style={{backgroundImage: tokens.colors.gradient}}
            initial={{ filter: "blur(20px)", opacity: 0.8 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          />
          <p className="text-sm text-muted mt-3">Organic gradient blob. Subtle parallax & motion — respects reduced motion.</p>
        </div>
      </div>
    </section>
  );
}
