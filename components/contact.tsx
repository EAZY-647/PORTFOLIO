"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { useState } from "react";

const Schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10), company: z.string().optional() });
type FormData = z.infer<typeof Schema>;

export function ContactForm() {
  const [ok, setOk] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(Schema) });
  const onSubmit = async (values: FormData) => {
    if (values.company) return;
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });
    if (res.ok) { setOk(true); confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } }); reset(); }
  };
  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 mt-4 grid sm:grid-cols-2 gap-3" aria-describedby="contact-note">
        <label className="flex flex-col gap-1"><span className="text-sm">Name</span>
          <input className="rounded-xl bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" {...register('name')} aria-invalid={!!errors.name} />
          {errors.name && <span className="text-red-400 text-sm">Please enter your name.</span>}</label>
        <label className="flex flex-col gap-1"><span className="text-sm">Email</span>
          <input className="rounded-xl bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && <span className="text-red-400 text-sm">Please use a valid email.</span>}</label>
        <label className="sm:col-span-2 flex flex-col gap-1"><span className="text-sm">Message</span>
          <textarea rows={5} className="rounded-xl bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" {...register('message')} aria-invalid={!!errors.message} />
          {errors.message && <span className="text-red-400 text-sm">Tell me a bit more.</span>}</label>
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('company')} />
        <div className="sm:col-span-2"><button className="btn btn-primary" disabled={isSubmitting} aria-live="polite">{isSubmitting ? 'Sending…' : 'Send message'}</button>
          {ok && <span className="ml-3 text-green-400">Thanks! I’ll get back to you shortly.</span>}</div>
      </form>
      <p id="contact-note" className="text-sm text-muted mt-2">Or email directly: <a href="mailto:ayushkusahuk@gmail.com" className="underline">ayushkusahuk@gmail.com</a></p>
    </section>
  );
}
