"use client";

import { Crosshair, Eye, Radar } from "lucide-react";
import { BuiltProject, type BuiltProjectData } from "@/components/BuiltProject";

const projects: BuiltProjectData[] = [
  {
    name: "Aeroza",
    tagline: "A live weather data platform",
    description:
      "A weather platform we built and run. You can pull radar data for any region on demand, get short-range forecasts at 10, 30, and 60 minutes out, and — most importantly — see exactly how accurate our forecasts have actually been. We publish our track record in real time, so anyone can check how often we got it right and by how much. It's the kind of transparency we wish more AI products had.",
    url: "https://www.aeroza.app/",
    icon: Radar,
    accent: "indigo",
    stack: [
      "Real-time radar data",
      "ML forecasting",
      "Interactive maps",
      "Live streaming API",
      "Public accuracy scoring",
    ],
    proves:
      "We build AI that earns trust by being transparent about its mistakes — the same standard we hold ourselves to on every client project.",
  },
  {
    name: "Bullet Lens",
    tagline: "Forensic ballistics, in the browser",
    description:
      "A browser-based tool used in forensic ballistics — letting investigators examine and compare the microscopic markings on fired bullets in 3D. The system stitches multiple scans into a complete bullet model, links into the national forensic database (NIST), and gives investigators a way to score how closely two bullets match. By default, everything stays on the user's computer for privacy — the cloud comparison is optional.",
    url: "https://bullet-lens.vercel.app/",
    icon: Crosshair,
    accent: "violet",
    stack: [
      "3D in the browser",
      "Geometric reconstruction",
      "Forensic data standards",
      "National database integration",
      "AI scoring",
    ],
    proves:
      "We can take on unusual, specialized problems and ship a complete, working product — from the interface and 3D rendering to the AI and the integration with national standards.",
  },
  {
    name: "Reolens",
    tagline: "A polished security-camera app for Mac, iPad, and iPhone",
    description:
      "A native app for Reolink security cameras across the Apple ecosystem. Watch several cameras at once, pan and zoom remotely, search through past footage with AI, get smart motion alerts, and edit recording schedules. The camera list syncs across all your devices automatically — but passwords stay safely on each device, never sent up to the cloud.",
    url: "https://reolens.io/",
    icon: Eye,
    accent: "blue",
    stack: [
      "Native Apple apps",
      "Mac, iPad, and iPhone",
      "Live multi-camera video",
      "AI footage search",
      "iCloud sync",
      "Privacy-first design",
    ],
    proves:
      "We ship polished consumer products — apps people actually want to use, across multiple platforms, with serious attention to privacy and live-video performance.",
  },
];

export function BuiltList() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
      {projects.map((project, i) => (
        <BuiltProject key={project.name} project={project} index={i} />
      ))}
    </div>
  );
}
