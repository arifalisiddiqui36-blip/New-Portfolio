import { motion } from "motion/react";
import {
  Cloud, Network, Code2, Layers, Terminal, Server,
  Github, ExternalLink, Award, Trophy, GraduationCap,
  Send, Mail, Linkedin, MapPin,
} from "lucide-react";
import { useState } from "react";
import projectNetwork from "@/assets/project-network.jpg";
import projectAws from "@/assets/project-aws.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-gradient">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

/* ---------------- About ---------------- */
const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Cloud Deployments" },
  { value: "15+", label: "Networking Labs" },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="About" title="The story behind the code" />
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp} className="glass rounded-3xl p-8 leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              I'm an MCA student with a deep curiosity for how things connect — from packets
              moving across networks to services scaling across the cloud.
            </p>
            <p className="mt-4">
              My focus lives at the intersection of <span className="text-foreground">cloud computing</span>,
              <span className="text-foreground"> enterprise networking</span>, <span className="text-foreground">Linux</span>,
              and <span className="text-foreground">modern web development</span>. I build projects that
              span the full stack — from VLAN segmentation diagrams to React apps deployed on AWS EC2.
            </p>
            <p className="mt-4">
              My goal: become a cloud-native engineer who can design resilient systems and ship
              beautiful interfaces with equal confidence.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <div className="font-display text-4xl font-bold text-accent-gradient">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
const skillGroups = [
  { icon: Cloud, title: "Cloud", items: ["AWS", "EC2", "S3", "IAM", "VPC"] },
  { icon: Network, title: "Networking", items: ["VLAN", "OSPF", "ACL", "DHCP"] },
  { icon: Code2, title: "Programming", items: ["Java", "Python", "JavaScript"] },
  { icon: Layers, title: "Development", items: ["React", "Next.js", "Tailwind CSS"] },
  { icon: Terminal, title: "DevOps", items: ["Linux", "Git", "Docker"] },
  { icon: Server, title: "Tools", items: ["Cisco Packet Tracer", "VS Code", "Postman"] },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Skills" title="Tools of the trade" subtitle="A blend of cloud, networking, and modern development tooling." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5">
                  <g.icon className="h-5 w-5 text-accent-gradient" />
                </span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-violet/40 hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
const projects = [
  {
    title: "Smart Hospital Network Design",
    desc: "Designed a segmented, secure hospital LAN with VLANs, OSPF routing, ACL-based access control, and centralized DHCP — built in Cisco Packet Tracer.",
    tags: ["VLAN", "OSPF", "ACL", "DHCP"],
    image: projectNetwork,
    codeUrl: "https://github.com/arifalisiddiqui36-blip",
    liveUrl: "#",
  },
  {
    title: "Hospital Website Hosted on AWS EC2",
    desc: "Deployed a responsive hospital website on an Ubuntu EC2 instance with Apache, configured security groups, and managed the deployment via Linux CLI.",
    tags: ["Apache", "Linux", "AWS EC2"],
    image: projectAws,
    codeUrl: "https://github.com/arifalisiddiqui36-blip",
    liveUrl: "#",
  },
  {
    title: "Personal Portfolio Website",
    desc: "A premium, dark-aesthetic portfolio built with React and Tailwind CSS, featuring glassmorphism, particle effects, and smooth Framer Motion animations.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: projectPortfolio,
    codeUrl: "https://github.com/arifalisiddiqui36-blip/New-Portfolio",
    liveUrl: "https://obsidian-dev-zone-7b74689a-main.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Projects" title="Featured work" subtitle="Selected projects spanning networking, cloud, and the web." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover group flex flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium transition-colors hover:bg-white/5"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-accent px-4 py-2 text-xs font-medium text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GitHub ---------------- */
export function GitHubSection() {
  const langs = [
    { name: "JavaScript", pct: 38, color: "#f7df1e" },
    { name: "Python", pct: 24, color: "#3776ab" },
    { name: "Java", pct: 20, color: "#f89820" },
    { name: "HTML/CSS", pct: 12, color: "#e34c26" },
    { name: "Shell", pct: 6, color: "#89e051" },
  ];

  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="GitHub" title="Code in the open" />
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div {...fadeUp} className="glass glass-hover rounded-3xl p-8 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Contributions</h3>
              <span className="font-mono text-xs text-muted-foreground">Last 12 months</span>
            </div>
            <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px]">
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                const intensity = Math.random();
                const op = intensity < 0.4 ? 0.08 : intensity < 0.7 ? 0.3 : intensity < 0.9 ? 0.6 : 1;
                return (
                  <span
                    key={i}
                    className="aspect-square rounded-[2px]"
                    style={{
                      background:
                        op < 0.1
                          ? "rgba(255,255,255,0.05)"
                          : `rgba(139, 92, 246, ${op})`,
                    }}
                  />
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                {[0.08, 0.3, 0.6, 1].map((o) => (
                  <span
                    key={o}
                    className="h-3 w-3 rounded-[2px]"
                    style={{ background: `rgba(139, 92, 246, ${o})` }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6">
            <div className="glass glass-hover rounded-3xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Repositories</div>
              <div className="mt-2 font-display text-4xl font-bold text-accent-gradient">24</div>
            </div>
            <div className="glass glass-hover rounded-3xl p-6">
              <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Top Languages</div>
              <div className="space-y-3">
                {langs.map((l) => (
                  <div key={l.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{l.name}</span>
                      <span className="text-muted-foreground">{l.pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${l.pct}%`, background: l.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://github.com/arifalisiddiqui36-blip"
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
            >
              <Github className="h-4 w-4" /> View GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certifications & Achievements ---------------- */
const certs = [
  { icon: Cloud, title: "AWS Certifications", desc: "AWS Cloud Practitioner foundations & hands-on EC2/S3/IAM/VPC labs.", color: "from-orange-500 to-amber-500" },
  { icon: Network, title: "Cisco Networking", desc: "CCNA-aligned coursework: routing, switching, VLANs, OSPF, ACLs.", color: "from-cyan-500 to-blue-500" },
  { icon: Terminal, title: "Linux", desc: "Comfortable in Linux system administration, shell scripting, and services.", color: "from-emerald-500 to-teal-500" },
];

const achievements = [
  { icon: GraduationCap, title: "MCA Student", desc: "Pursuing Master of Computer Applications." },
  { icon: Cloud, title: "Cloud Projects", desc: "Deployed real-world apps on AWS infrastructure." },
  { icon: Network, title: "Networking Projects", desc: "Designed enterprise-grade LAN topologies." },
  { icon: Trophy, title: "Technical Skills", desc: "Full-stack capable across cloud, network, and web." },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Credentials" title="Certifications & achievements" />
        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover rounded-3xl p-7"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${c.color}`}>
                <c.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-accent-gradient">
                <Award className="h-3.5 w-3.5" /> Verified track
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-5"
            >
              <a.icon className="h-5 w-5 text-accent-gradient" />
              <div className="mt-3 font-display text-base font-semibold">{a.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{a.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker="Contact" title="Let's build something" subtitle="Have a role, a project, or just want to say hello? My inbox is always open." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div {...fadeUp} className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "arif.siddiqui@example.com", href: "mailto:arif.siddiqui@example.com" },
              { icon: Github, label: "GitHub", value: "github.com/arifalisiddiqui36-blip", href: "https://github.com/arifalisiddiqui36-blip" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/arif-siddiqui-aaa2b335b", href: "https://www.linkedin.com/in/arif-siddiqui-aaa2b335b/" },
              { icon: MapPin, label: "Location", value: "India · Open to remote", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5">
                  <c.icon className="h-5 w-5 text-accent-gradient" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="text-sm">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            {...fadeUp}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass rounded-3xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs text-muted-foreground">Name</span>
                <input
                  required
                  maxLength={100}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-violet/60"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  maxLength={255}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-violet/60"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs text-muted-foreground">Subject</span>
              <input
                required
                maxLength={150}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-violet/60"
                placeholder="What's this about?"
              />
            </label>
            <label className="mt-4 block">
              <span className="text-xs text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                maxLength={1000}
                className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-violet/60"
                placeholder="Tell me a little about your project..."
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-accent px-6 py-3 text-sm font-medium text-white glow-blue transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" />
              {sent ? "Message sent — thank you!" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arif Siddiqui. Crafted with care.
        </div>
        <div className="flex items-center gap-3">
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
              className="glass glass-hover grid h-10 w-10 place-items-center rounded-full"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
