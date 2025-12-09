// src/App.jsx
import { motion } from "framer-motion";
import PortfolioHero from "..//src/assets/PortfolioHero.jpg"

const contact = {
  name: "YASHASH P",
  title: "Full Stack / MERN Developer",
  phone: "+91-76768 13858",
  email: "pyashash@gmail.com",
  linkedin: "https://linkedin.com/in/yashash-p",
  github: "https://github.com/",
  resume: "",
};

const skills = {
  "MERN Stack": ["MongoDB", "Express.js", "React.js", "Node.js"],
  Frontend: ["React.js", "Redux", "Context API", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Languages: ["JavaScript (ES6+)", "Java", "C"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "VS Code"],
  Other: ["Debugging", "API Integration", "Performance Optimization"],
};

const experience = [
  {
    role: "Full Stack Web Development Intern",
    company: "Unified Mentor",
    period: "Aug 2025 – Present | Remote",
    points: [
      "Built SaaS modules using MERN stack with RESTful API integration.",
      "Improved UI and API performance through debugging and optimization.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "DEBEL, DRDO",
    period: "Sep 2024 – Dec 2024 | Bengaluru",
    points: [
      "Worked with Python scripts, Wazuh SIEM, and automated rule testing.",
      "Identified vulnerabilities across 15+ systems.",
    ],
  },
  {
    role: "Cybersecurity (AWS Cloud Security) Intern",
    company: "Employability.life & Federation University",
    period: "Jan 2025 – Mar 2025 | Remote",
    points: [
      "Simulated secure IAM configurations with AWS CLI.",
      "Developed IAM + Encryption demo lab on AWS Free Tier.",
    ],
  },
];

const education = {
  degree: "Bachelor of Engineering in Information Science",
  college: "PES College of Engineering, Mandya",
  period: "2022 – 2025",
};

const projects = [
  {
    title: "MERN Project Slot #1",
    desc: "Full-stack MERN dashboard application with auth, protected routes & clean structure.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
  },
  {
    title: "MERN Project Slot #2",
    desc: "Analytics portal with charts, REST API integration & responsive UI using Tailwind CSS.",
    stack: ["React.js", "Context API", "Tailwind CSS"],
  },
  {
    title: "MERN Project Slot #3",
    desc: "Production-ready SaaS style application with reusable UI components and API handling.",
    stack: ["React.js", "Node.js", "MongoDB"],
  },
];

export default function App() {
  const baseBg = "bg-[#F5F9FF] text-slate-900";
  const cardBg = "bg-white border-slate-200";
  const softText = "text-slate-600";

  return (
    <div className={`min-h-screen ${baseBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* HEADER */}
        <motion.header initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-indigo-500">
              MERN · React · Node.js
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">{contact.name}</h1>
            <p className={`mt-1 text-[15px] ${softText}`}>{contact.title}</p>
          </div>
          <div className="flex gap-2 text-xs sm:text-sm">
            <SocialLink href={contact.github} label="GitHub" />
            <SocialLink href={contact.linkedin} label="LinkedIn" />
            <SocialLink href={`mailto:${contact.email}`} label="Email" />
          </div>
        </motion.header>

        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
            <h2 className="text-3xl font-semibold leading-snug">
              I build{" "}
              <span className="text-indigo-600 font-bold">
                end-to-end MERN applications
              </span>{" "}
              with modern React architecture and scalable APIs.
            </h2>
            <p className={`${softText} max-w-xl`}>
              I specialize in full-stack development using React, Node.js, MongoDB,
              Redux, Context API & Tailwind CSS — with real-world project experience.
            </p>
            <a href={contact.resume} target="_blank"
              className="px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700 transition">
              Download CV ⬇
            </a>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            className="flex justify-center lg:justify-end">
            <div className="h-72 w-72 rounded-3xl border border-indigo-200 bg-white shadow-md flex items-center justify-center text-sm text-slate-700 overflow-hidden">
              <img src={PortfolioHero} alt="Portfolio Hero" className="h-full w-full object-cover rounded-3xl" />
            </div>
          </motion.div>

        </section>

        {/* SKILLS + EXPERIENCE + EDUCATION */}
        <section className="grid gap-8 items-start lg:grid-cols-2">
          {/* Skills + Education */}
          <div className="flex flex-col h-full space-y-8">
            <Card title="Skills & Tech Stack">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category} className="mb-4">
                  <p className="font-medium mb-1">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {list.map((item) => (
                      <span key={item}
                        className="px-3 py-1 rounded-full text-xs border border-slate-300 bg-white text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Card>

            <Card title="Education" >
              <p className="font-medium">{education.degree}</p>
              <p className={softText}>{education.college}</p>
              <p className={`text-xs mt-1 ${softText}`}>{education.period}</p>
            </Card>
          </div>

          {/* EXPERIENCE */}
          <Card title="Internships & Experience" titleColor="text-indigo-600">
            <div className="relative border-l-2 border-indigo-300 ml-4 pl-6 space-y-7">
              {experience.map((exp) => (
                <div key={exp.role} className="relative">
                  <div className="absolute -left-[1.05rem] top-1 h-3 w-3 rounded-full bg-indigo-500"></div>
                  <p className="text-[15px] font-medium">
                    {exp.role} · <span className={softText}>{exp.company}</span>
                  </p>
                  <p className="text-[11px] mb-1 text-indigo-500">{exp.period}</p>
                  <ul className={`text-[13px] ${softText} list-disc list-inside`}>
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* PROJECTS - VERTICAL LIST */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-indigo-600">
            Projects (Coming Soon)
          </h3>

          {projects.map((proj) => (
            <Card key={proj.title}>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-lg">{proj.title}</p>
                <p className={`text-xs ${softText}`}>MERN Stack</p>
              </div>
              <p className={`${softText} text-sm mb-4`}>{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.stack.map((tech) => (
                  <span key={tech}
                    className="px-3 py-1 rounded-full text-xs border border-slate-300 bg-white text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} {contact.name}</span>
          <span>Built with React · Tailwind CSS · Framer Motion</span>
        </footer>
      </div>
    </div>
  );
}

function Card({ title, children, titleColor }) {
  return (
    <motion.div initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border bg-white border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition">
      {title && (
        <h3 className={`text-xl font-semibold mb-4 ${titleColor || "text-slate-800"}`}>
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
}

function SocialLink({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 text-xs sm:text-sm hover:border-indigo-500 hover:text-indigo-600 transition">
      {label}
    </a>
  );
}
