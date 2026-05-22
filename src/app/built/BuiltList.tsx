"use client";

import { Crosshair, Eye, Radar } from "lucide-react";
import { BuiltProject, type BuiltProjectData } from "@/components/BuiltProject";

const projects: BuiltProjectData[] = [
  {
    name: "Aeroza",
    tagline: "Queryable weather intelligence",
    description:
      "A real-time weather API and viewer: NEXRAD radar tiles materialized in seconds, geospatial polygon queries (max / mean / min) without a GIS stack, and calibrated nowcasting at 10, 30, and 60-minute horizons. Every forecast is scored against reality in public — MAE, bias, and RMSE published openly so anyone can see exactly how the models perform.",
    url: "https://www.aeroza.app/",
    icon: Radar,
    accent: "indigo",
    stack: [
      "FastAPI",
      "NEXRAD MRMS",
      "pySTEPS / NowcastNet",
      "MapLibre tiles",
      "Server-Sent Events",
    ],
    proves:
      "We can build ML systems that earn trust by scoring themselves in public — the exact rigor we bring to client AI work.",
  },
  {
    name: "Bullet Lens",
    tagline: "Forensic ballistics, in the browser",
    description:
      "An interactive 3D viewer for fired-bullet surface scans used in forensic ballistics. Stitches multi-land scans into a full bullet, extracts height profiles for algorithmic comparison, and integrates with NIST ballistic databases. Files stay local in the browser by default; optional server-side ML provides scored comparisons against reference data.",
    url: "https://bullet-lens.vercel.app/",
    icon: Crosshair,
    accent: "violet",
    stack: [
      "WebGL 3D",
      "Point-cloud processing",
      "x3p forensic format",
      "NIST integration",
      "Server-side ML",
    ],
    proves:
      "We can take on weird, hard, domain-specific problems and ship a working system end-to-end — UI, geometry, ML, and standards integration.",
  },
  {
    name: "Reolens",
    tagline: "Coming soon — writeup in progress",
    description:
      "A live product we built and own. Full description, screenshots, and tech stack landing here shortly.",
    url: "https://reolens.io/",
    icon: Eye,
    accent: "blue",
    stack: [],
    proves:
      "Description forthcoming — Eric and Jennye are writing the public-facing copy.",
    status: "in-progress",
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
