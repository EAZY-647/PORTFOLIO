"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(()=>setMounted(true),[]);
  if(!mounted) return null;
  const isDark = theme !== "light";
  return (
    <button className="btn" aria-label="Toggle theme" onClick={()=> setTheme(isDark ? "light" : "dark")}>
      {isDark ? <Sun size={16}/> : <Moon size={16}/>}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
