// src/pages/portfolio/Portfolio.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PortfolioHero from "../../assets/PortfolioHero.jpg";

import { education, experience, skills, contact } from "../../data/userinfo";
import { projects } from "../../data/projects";

/* Icons */
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";


/* Skill → Icon mapping */
const skillIcons = {
  "React.js": SiReact,
  Redux: SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  "JavaScript (ES6+)": SiJavascript,
  Java: FaJava, // ✅ FIX
};


export default function Portfolio() {
  const navigate = useNavigate();

  /* THEME */
  const baseBg = "bg-[#F5F9FF] text-slate-900";
  const cardBg = "bg-white border border-slate-200";
  const softText = "text-slate-600";

  return (
    <div className={`min-h-screen ${baseBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-14">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-indigo-500">
              MERN · React · Node.js
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              {contact.name}
            </h1>
            <p className={`mt-1 text-sm ${softText}`}>
              {contact.title}
            </p>
          </div>

          <div className="flex gap-2">
            <SocialLink href={contact.github} Icon={FaGithub} label="GitHub" />
            <SocialLink href={contact.linkedin} Icon={FaLinkedin} label="LinkedIn" />
            <SocialLink href={`mailto:${contact.email}`} Icon={FaEnvelope} label="Email" />
          </div>
        </motion.header>

        {/* ================= HERO ================= */}
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold leading-snug">
              I build{" "}
              <span className="text-indigo-600 font-bold">
                end-to-end MERN applications
              </span>{" "}
              with clean architecture and scalable APIs.
            </h2>

            <p className={`${softText} max-w-xl`}>
              Full Stack Developer experienced in React, Node.js, MongoDB,
              Redux, Context API and Tailwind CSS — with real-world internship
              experience in full-stack and cybersecurity domains.
            </p>

            <a
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2.5 rounded-full
                         bg-indigo-600 text-white text-sm font-medium
                         shadow hover:bg-indigo-700 transition"
            >
              Download CV ⬇
            </a>
          </motion.div>

          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="h-72 w-72 rounded-3xl border border-indigo-200 bg-white shadow-md overflow-hidden">
              <img
                src={PortfolioHero}
                alt="Portfolio"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* ================= SKILLS + EXPERIENCE ================= */}
        <section className="grid gap-8 items-start lg:grid-cols-2">

          {/* LEFT — SKILLS + EDUCATION */}
          <div className="space-y-8">
            <Card title="Skills & Tech Stack">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category} className="mb-5">
                  <p className="font-medium mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {list.map((skill) => {
                      const Icon = skillIcons[skill];
                      return (
                        <span
                          key={skill}
                          className="flex items-center gap-2 px-3 py-1.5
                                     rounded-full text-xs border border-slate-300
                                     bg-white text-slate-700"
                        >
                          {Icon && <Icon className="text-indigo-600 text-sm" />}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </Card>

            
          </div>

          {/* RIGHT — EXPERIENCE */}
          <Card title="Internships & Experience" titleColor="text-indigo-600">
            <div className="relative border-l-2 border-indigo-300 ml-4 pl-6 space-y-7">
              {experience.map((exp) => (
                <div key={exp.role} className="relative">
                  <div className="absolute -left-[1.05rem] top-1 h-3 w-3 rounded-full bg-indigo-500" />
                  <p className="text-sm font-medium">
                    {exp.role} ·{" "}
                    <span className={softText}>{exp.company}</span>
                  </p>
                  <p className="text-[11px] text-indigo-500 mb-1">
                    {exp.period}
                  </p>
                  <ul className={`text-sm ${softText} list-disc list-inside`}>
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-indigo-600">
            Projects
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate(`/projects/${proj.id}`)}
                className="cursor-pointer rounded-2xl border border-slate-200
                           bg-white p-5 hover:border-indigo-400
                           hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold mb-1">
                  {proj.title}
                </h4>

                <p className={`text-sm ${softText} mb-3`}>
                  {proj.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {(proj.tech?.frontend || proj.stack)
                    .slice(0, 3)
                    .map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-1 rounded-full
                                   border border-slate-300 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                </div>

                <div
                  className="flex gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => navigate(`/projects/${proj.id}`)}
                    className="text-xs px-3 py-1.5 rounded-full
                               border border-indigo-500 text-indigo-600
                               hover:bg-indigo-50 transition"
                  >
                    More Details
                  </button>

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs px-3 py-1.5
                                 rounded-full border border-slate-300
                                 text-slate-600 hover:border-indigo-400 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="pt-6 border-t border-slate-200 text-xs
                           text-slate-500 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} {contact.name}</span>
          <span>React · Tailwind · Framer Motion</span>
        </footer>
      </div>
    </div>
  );
}

/* ================= REUSABLE ================= */

function Card({ title, children, titleColor }) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl bg-white border border-slate-200
                 p-6 sm:p-7 shadow-sm hover:shadow-md transition"
    >
      {title && (
        <h3 className={`text-xl font-semibold mb-4 ${titleColor || "text-slate-800"}`}>
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
}

function SocialLink({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-3 py-1.5 rounded-full
                 border border-slate-300 bg-white text-slate-700
                 text-xs hover:border-indigo-500 hover:text-indigo-600 transition"
    >
      <Icon className="text-indigo-600" />
      {label}
    </a>
  );
}
