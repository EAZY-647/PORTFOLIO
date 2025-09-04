"use client";
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useMatches, KBarResults } from "kbar";
import { useMemo } from "react";
const actionsBase = [
  { id: "work", name: "View Work", keywords: "projects", shortcut: ["w"], perform: () => document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}) },
  { id: "about", name: "About", keywords: "bio", perform: () => document.getElementById("about")?.scrollIntoView({behavior:"smooth"}) },
  { id: "contact", name: "Contact", keywords: "email", perform: () => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}) },
];
export function CommandPalette() {
  const actions = useMemo(() => actionsBase, []);
  return (<KBarProvider actions={actions}><PaletteUI /></KBarProvider>);
}
function RenderResults() {
  const { results } = useMatches();
  return <KBarResults items={results} onRender={({ item, active }) => {
      if (typeof item === 'string') return <div className="px-3 py-2 text-muted">{item}</div>;
      return <div className={`px-3 py-2 rounded-md ${active ? 'bg-white/10' : ''}`}>{item.name}</div>;
    }} />;
}
function PaletteUI() {
  return (
    <KBarPortal>
      <KBarPositioner className="z-[60] bg-black/50 backdrop-blur-sm">
        <KBarAnimator className="w-full max-w-xl mx-4 rounded-xl border border-white/10 bg-[hsl(240,14%,9%/.9)] text-white overflow-hidden">
          <KBarSearch className="w-full px-4 py-3 bg-transparent outline-none" placeholder="Type to search… (Cmd/Ctrl + K)"/>
          <div className="p-2"><RenderResults/></div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}
