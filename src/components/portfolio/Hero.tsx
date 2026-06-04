import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import profile from "@/assets/profile.png";

const ROLES = ["Cloud Engineer", "Network Engineer", "Full Stack Developer"];

function useTypewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = ROLES[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      const next = del ? word.substring(0, text.length - 1) : word.substring(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((p) => (p + 1) % ROLES.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const typed = useTypewriter();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to opportunities
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Arif Siddiqui</span>
          </h1>

          <p className="mt-3 font-mono text-sm text-muted-foreground">
            MCA Student · Building tomorrow's infrastructure
          </p>

          <div className="mt-6 flex h-12 items-center justify-center lg:justify-start">
            <span className="font-display text-2xl text-muted-foreground sm:text-3xl">
              I'm a&nbsp;
            </span>
            <span className="font-display text-2xl font-semibold text-accent-gradient sm:text-3xl">
              {typed}
            </span>
            <span className="ml-1 inline-block h-7 w-[3px] bg-primary animate-blink" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground lg:mx-0">
            Passionate about cloud architecture, enterprise networking, and crafting
            full-stack experiences. Turning complex systems into elegant, scalable solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="/resume.pdf"
              download="Arif-Siddiqui-Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3 text-sm font-medium text-white shadow-lg glow-blue transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {[
              { icon: Github, href: "https://github.com/arifalisiddiqui36-blip", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/arif-siddiqui-aaa2b335b/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:arif@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover grid h-11 w-11 place-items-center rounded-full"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 rounded-full gradient-accent opacity-40 blur-2xl" />
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-white/10 sm:h-80 sm:w-80 animate-float">
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
            <img
              src={profile}
              alt="Arif Siddiqui"
              width={896}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
