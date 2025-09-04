"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { CommandPalette } from "./palette";
export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  useEffect(() => {
    const onScroll = () => { const y = window.scrollY; setHidden(y > lastY && y > 80); setLastY(y); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);
  return (
    <div className={`sticky top-0 z-50 border-b border-[hsl(240,10%,30%/.3)] backdrop-blur-md transition-transform duration-300 ${hidden ? "-translate-y-full" : ""}`}
      style={{ background: "linear-gradient(180deg, rgba(10,10,15,.85), rgba(10,10,15,.55))" }} aria-label="Primary">
      <div className="container h-16 flex items-center justify-between">
        <Link href="#" className="font-extrabold tracking-tight">Ayush.live</Link>
        <nav className="flex items-center gap-2">
          <a className="btn" href="#projects">Projects</a>
          <a className="btn" href="#about">About</a>
          <a className="btn btn-primary" href="#contact">Contact</a>
          <ThemeToggle />
          <CommandPalette />
        </nav>
      </div>
    </div>
  );
}
