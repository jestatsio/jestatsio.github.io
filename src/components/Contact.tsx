"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const EMAIL = "info@jestats.io";

export function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = buildMailto({ name, company, message });

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800/80 via-ink-900/80 to-ink-950/80 p-8 backdrop-blur sm:p-12"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-purple/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-indigo/20 blur-3xl" />

          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-brand-violet">
              Get in touch
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl md:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">useful.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
              Tell us a little about what you&apos;re working on. We&apos;ll get back to you within one business day.
            </p>

            <form
              className="mt-10 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Your name"
                  value={name}
                  onChange={setName}
                  placeholder="Jane Smith"
                />
                <Field
                  label="Company"
                  value={company}
                  onChange={setCompany}
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label className="font-mono text-[0.65rem] uppercase tracking-widest text-mist-400">
                  What do you need help with?
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="We have a pile of customer data and want to explore it with AI…"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400/70 focus:border-brand-violet/50 focus:outline-none focus:ring-2 focus:ring-brand-violet/30"
                />
              </div>

              <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2 text-sm text-mist-300 transition-colors hover:text-mist-50"
                >
                  <Mail className="h-4 w-4 text-brand-violet" />
                  <span>{EMAIL}</span>
                </a>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-indigo/25 transition-transform hover:scale-[1.03]"
                >
                  Send via email
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              <p className="mt-2 text-xs text-mist-400">
                Hitting send will open your email client with the message pre-filled — nothing is sent to a server.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="font-mono text-[0.65rem] uppercase tracking-widest text-mist-400">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400/70 focus:border-brand-violet/50 focus:outline-none focus:ring-2 focus:ring-brand-violet/30"
      />
    </div>
  );
}

function buildMailto({
  name,
  company,
  message,
}: {
  name: string;
  company: string;
  message: string;
}) {
  const subject = `Consulting inquiry${company ? ` — ${company}` : ""}`;
  const bodyLines = [
    name ? `Name: ${name}` : "",
    company ? `Company: ${company}` : "",
    "",
    message || "",
  ].filter(Boolean);
  const body = bodyLines.join("\n");
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  return `mailto:${EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
}
