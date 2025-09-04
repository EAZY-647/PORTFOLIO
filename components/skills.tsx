"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", years: 4 },
  { name: "Pandas", years: 4 },
  { name: "SQL", years: 4 },
  { name: "Airflow", years: 2 },
  { name: "Kafka", years: 2 },
  { name: "Flink", years: 1 },
  { name: "dbt", years: 2 },
  { name: "GCP/AWS", years: 2 },
];

export function Skills() {
  return (
    <section id="about" className="container py-12">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-muted max-w-[70ch] mt-2">
        I care about robust pipelines, clear data contracts, and operational excellence. My focus: streaming analytics,
        feature platforms, and cost-efficient cloud data stacks.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map((s, i) => (
          <motion.div key={s.name} className="card p-4"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }} transition={{ delay: i * 0.03, duration: 0.4 }}>
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted text-sm">{s.years}+y</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${Math.min(100, s.years*20)}%`, backgroundImage: "linear-gradient(135deg, hsl(260 100% 66%), hsl(192 100% 50%))" }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
