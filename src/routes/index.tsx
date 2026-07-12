import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import workAethelred from "@/assets/work-aethelred.jpg";
import workLumina from "@/assets/work-lumina.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { title: "Visual Identity", num: "01" },
  { title: "Digital Architecture", num: "02" },
  { title: "Creative Strategy", num: "03" },
  { title: "SEO & Growth", num: "04" },
];

const method = [
  {
    num: "01",
    title: "Immersion",
    body: "We deeply analyze your brand ethos and audience behaviors before a single pixel is placed.",
  },
  {
    num: "02",
    title: "Iteration",
    body: "Rapid prototyping and design sprints ensure the core experience is intuitive and flawless.",
  },
  {
    num: "03",
    title: "Execution",
    body: "Technical excellence meets creative vision in the final deployment of your digital asset.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8 mix-blend-difference md:px-12">
        <a href="#" className="text-xl font-medium tracking-tight text-background">
          Vantage.
        </a>
        <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-background md:gap-8">
          <a href="#work" className="hidden transition-opacity hover:opacity-60 sm:inline">
            Work
          </a>
          <a href="#method" className="hidden transition-opacity hover:opacity-60 sm:inline">
            Studio
          </a>
          <a
            href="#contact"
            className="rounded-full bg-background px-5 py-2 text-foreground ring-1 ring-border transition-colors hover:opacity-80"
          >
            Connect
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-6 pb-24 pt-48 md:px-12">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="mb-12 max-w-[14ch] text-balance font-serif text-5xl italic leading-none tracking-tight animate-rise md:text-8xl">
            We build the digital architecture of{" "}
            <span className="not-italic font-normal">tomorrow&apos;s brands.</span>
          </h1>
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <p className="max-w-[48ch] text-pretty text-lg text-muted-foreground md:text-xl">
              A multidisciplinary creative studio specializing in high-fidelity websites for
              brands that value craft, performance, and longevity.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 rounded-full bg-primary py-3 pl-3 pr-5 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-transform hover:scale-[1.02]"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/10">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              Start a project
            </a>
          </div>
        </div>
      </header>

      {/* Work Showcase */}
      <section id="work" className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 md:grid-cols-12">
          <article className="flex flex-col gap-6 md:col-span-7">
            <div className="overflow-hidden rounded-xl ring-1 ring-border">
              <img
                src={workAethelred}
                alt="Aethelred Furniture website shown on a monitor in a warm minimalist interior"
                width={1200}
                height={1504}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">Aethelred Furniture</h3>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                E-Commerce / 2024
              </span>
            </div>
          </article>

          <article className="flex flex-col gap-6 md:col-span-5 md:pt-32">
            <div className="overflow-hidden rounded-xl ring-1 ring-border">
              <img
                src={workLumina}
                alt="Lumina Gallery brand visual with glass refraction and elegant typography"
                width={1008}
                height={1312}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">Lumina Gallery</h3>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Portfolio / 2023
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-surface px-6 py-32 md:px-12">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h2 className="mb-8 text-balance font-serif text-4xl italic leading-tight md:text-5xl">
                Our Expertise
              </h2>
              <p className="max-w-[48ch] text-pretty text-muted-foreground">
                We combine artistic intuition with technical precision to deliver results that
                endure beyond trends.
              </p>
            </div>
            <div className="divide-y divide-border">
              {services.map((s) => (
                <div
                  key={s.num}
                  className="group flex items-center justify-between py-8 transition-colors"
                >
                  <span className="font-serif text-2xl italic transition-colors group-hover:text-accent">
                    {s.title}
                  </span>
                  <span className="text-sm uppercase text-muted-foreground">{s.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="overflow-hidden px-6 py-32 md:px-12">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-24">
            <h2 className="mb-4 font-serif text-5xl italic md:text-6xl">The Method</h2>
            <div className="h-px w-full bg-border" />
          </div>
          <div className="grid gap-16 md:grid-cols-3">
            {method.map((m) => (
              <div key={m.num} className="flex flex-col gap-6">
                <span className="font-serif text-4xl italic text-accent/50">{m.num}</span>
                <h3 className="text-xl font-medium">{m.title}</h3>
                <p className="max-w-[40ch] text-pretty text-muted-foreground">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary px-6 py-32 text-center text-primary-foreground md:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 font-serif text-3xl italic leading-tight md:text-4xl">
            &ldquo;The team at Vantage didn&apos;t just build us a website; they captured the
            invisible spirit of our brand and gave it a digital home.&rdquo;
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-widest">Elena Rossi</span>
            <span className="text-xs uppercase text-primary-foreground/50">
              Founder, Aethelred Furniture
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-border px-6 py-48 text-center md:px-12">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-12 cursor-default font-serif text-6xl italic leading-none transition-colors hover:text-accent md:text-9xl">
            Let&apos;s create.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:hello@vantage.studio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-12 py-5 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-opacity hover:opacity-80"
            >
              Start a Project
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#work"
              className="rounded-full border border-input px-12 py-5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-12 text-sm font-medium text-muted-foreground md:flex-row">
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-foreground">
                Studio
              </span>
              <p>Bengaluru</p>
              {/* To change the email address, edit both this mailto link and the visible text below. */}
              <a href="mailto:hello@vantage.studio" className="hover:text-foreground">
                hello@vantage.studio
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-foreground">
                Social
              </span>
              {/* When you create an Instagram, replace href="#" with your profile URL, e.g. href="https://instagram.com/yourhandle" */}
              <a href="#" className="hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <p>© 2026 Vantage Creative Studio.</p>
            <p className="opacity-50">All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
