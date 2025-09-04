import { NextResponse } from "next/server";
const USER = "EAZY647";
export const revalidate = 3600;
export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`, {
      headers: { "Accept": "application/vnd.github+json" }, next: { revalidate: 3600 }
    });
    if (!res.ok) return NextResponse.json([], { status: 200 });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
