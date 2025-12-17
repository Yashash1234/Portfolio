import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* Images */
import DashboardImg from "../../assets/projects/socialexpress/UI-community.png";
import SchemaDiagram from "../../assets/projects/socialexpress/Schema-Diagram.png";

/* Icons */
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaUserShield,
  FaShieldAlt,
  FaDatabase,
  FaArrowLeft,
} from "react-icons/fa";

import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Project() {
  const navigate = useNavigate();

  const baseBg = "bg-[#F5F9FF] text-slate-900";
  const cardBg = "bg-white border border-slate-200";
  const softText = "text-slate-600";

  return (
    <div className={`min-h-screen ${baseBg}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-10 space-y-12">


        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-50
             bg-white border-b border-slate-200"
        >
          {/* Back button – extreme left */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2
               flex items-center gap-2 px-4 py-2 
                bg-white text-slate-700
                hover:text-indigo-600
               transition text-sm"
          >
            <FaArrowLeft />
            Back
          </button>

          {/* Centered content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4
                  flex items-center justify-between gap-6">

            {/* Title */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-indigo-500">
                MERN STACK · CASE STUDY
              </p>
              <h1 className="mt-1 text-4xl font-bold tracking-tight">
                SocialExpress
              </h1>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Yashash1234/SocialExpress"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                   bg-indigo-600 text-white text-sm
                   hover:bg-indigo-700 transition"
              >
                <FaGithub />
                GitHub
              </a>
              
              <a
                href="https://socialexpress.vercel.app/signin"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                   bg-indigo-600 text-white text-sm font-medium
                   hover:bg-indigo-700 transition"
              >
               <FaExternalLinkAlt />
               Go Live
              </a>
              
            </div>

          </div>
        </motion.header>




        {/* ================= OVERVIEW ================= */}
        <Section title="Project Overview">

          <p className={softText}>
            The platform supports communities, image-based posts, likes,
            comments, follows, saved posts, moderation workflows, and admin
            controls. It is designed to be production-ready with JWT
            authentication, role-based access control, and structured MongoDB
            data modeling.
          </p>
        </Section>

        <Section title="What This Project Demonstrates">
          <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
            <li>End-to-end MERN stack application with real production structure</li>
            <li>Clean REST API design with role-based access control</li>
            <li>Scalable MongoDB schema design for social-media features</li>
            <li>JWT authentication using access & refresh tokens</li>
            <li>Image handling with Cloudinary integration</li>
            <li>Admin & Moderator workflows similar to real platforms</li>
          </ul>
        </Section>
        <Section title="Core Functionalities Implemented">
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">

            <div>
              <p className="font-medium text-slate-800 mb-1">User Features</p>
              <ul className="list-disc list-inside space-y-1">
                <li>User registration & login (JWT)</li>
                <li>Create text + image posts</li>
                <li>Like / Unlike posts</li>
                <li>Comment system</li>
                <li>Save / Unsave posts</li>
                <li>Follow / Unfollow users</li>
                <li>Community-based feed</li>
                <li>Public profile pages</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-slate-800 mb-1">Platform Features</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Post reporting system</li>
                <li>Community-based moderation</li>
                <li>Seeded database for instant testing</li>
                <li>Role-based API access</li>
                <li>Email notifications (Nodemailer)</li>
              </ul>
            </div>

          </div>
        </Section>
        <Section title="Authentication & Security">
          <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
            <li>JWT-based authentication with access & refresh tokens</li>
            <li>Password hashing using bcrypt</li>
            <li>Protected routes for users, moderators, and admins</li>
            <li>Role-based authorization at API level</li>
            <li>Secure cookie / token handling</li>
          </ul>
        </Section>
        <Section title="Moderation & Admin System">
          <div className="space-y-3 text-sm text-slate-600">
            <p>
              SocialExpress includes a multi-level moderation system inspired by
              real-world platforms.
            </p>

            <ul className="list-disc list-inside space-y-1">
              <li>Admins can create & manage communities</li>
              <li>Admins assign moderators to communities</li>
              <li>Moderators review reported posts</li>
              <li>Moderators remove inappropriate content</li>
              <li>Admins have platform-level visibility</li>
              <li>Moderators have limited scoped access</li>
            </ul>
          </div>
        </Section>
        <Section title="Backend Architecture Highlights">
          <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
            <li>Modular MVC-style backend structure</li>
            <li>Separate models, controllers, routes, and utilities</li>
            <li>Reusable middleware for auth & role validation</li>
            <li>MongoDB relational modeling using Mongoose</li>
            <li>Centralized error handling</li>
            <li>Seed scripts for users, posts, communities, likes, follows</li>
          </ul>
        </Section>
        <Section title="Backend Architecture Highlights">
          <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
            <li>Modular MVC-style backend structure</li>
            <li>Separate models, controllers, routes, and utilities</li>
            <li>Reusable middleware for auth & role validation</li>
            <li>MongoDB relational modeling using Mongoose</li>
            <li>Centralized error handling</li>
            <li>Seed scripts for users, posts, communities, likes, follows</li>
          </ul>
        </Section>


        {/* ================= DASHBOARD PREVIEW ================= */}
        <Section title="Dashboard Preview">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <a href={DashboardImg} target="_blank" rel="noreferrer">
              <img
                src={DashboardImg}
                alt="SocialExpress Dashboard"
                className="w-full object-cover hover:scale-[1.02] transition"
              />
            </a>
          </div>
          <p className={`mt-3 text-sm ${softText}`}>
            Admin and moderator dashboard used for community management,
            reviewing reported posts, and moderating platform content.
          </p>
        </Section>

        {/* ================= FEATURES ================= */}
        <Section title="Features">
          <div className="grid gap-4 sm:grid-cols-2">

            <Feature
              icon={<FaUsers />}
              title="User Features"
              text="Authentication, create posts, like/unlike, comments, save posts,
                    follow users, community feeds, view profiles, report posts."
            />

            <Feature
              icon={<FaUserShield />}
              title="Moderator Features"
              text="Assigned to communities, review reported posts, remove
                    inappropriate content, moderate community posts."
            />

            <Feature
              icon={<FaShieldAlt />}
              title="Admin Features"
              text="Manage communities, assign moderators, and view platform-level
                    data and controls."
            />

            <Feature
              icon={<FaDatabase />}
              title="System Capabilities"
              text="MongoDB relational modeling, Cloudinary image uploads,
                    seeded database, clean REST API architecture."
            />

          </div>
        </Section>

        {/* ================= TECH STACK ================= */}
        <Section title="Technology Stack">
          <div className="grid gap-6 sm:grid-cols-2">

            <TechGroup title="Frontend">
              <Tech icon={<SiReact />} label="React.js" />
              <Tech icon={<SiRedux />} label="Redux Toolkit" />
              <Tech icon={<SiTailwindcss />} label="Tailwind CSS" />
            </TechGroup>

            <TechGroup title="Backend">
              <Tech icon={<SiNodedotjs />} label="Node.js" />
              <Tech icon={<SiExpress />} label="Express.js" />
              <Tech icon={<SiMongodb />} label="MongoDB & Mongoose" />
            </TechGroup>

          </div>
        </Section>

        {/* ================= DEMO ================= */}
        <Section title="Demo Credentials">
          <div className="grid sm:grid-cols-2 gap-4 text-sm">

            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <p className="font-medium mb-2">Admin</p>
              <p><span className="text-slate-500">Username:</span> admin</p>
              <p><span className="text-slate-500">Password:</span> Admin@123</p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <p className="font-medium mb-2">Demo User</p>
              <p><span className="text-slate-500">Username:</span> demo@socialexpress.com</p>
              <p><span className="text-slate-500">Password:</span> Demo@123</p>
            </div>

          </div>
        </Section>


        {/* ================= FOOTER ================= */}
        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm">

          <span className="text-slate-400">
            MERN · REST APIs · Scalable Architecture
          </span>
        </div>

      </div>
    </div>
  );
}

/* ================= REUSABLE ================= */

function Section({ title, children }) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-3"
    >
      <h2 className="text-2xl font-semibold text-indigo-600">
        {title}
      </h2>
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        {children}
      </div>
    </motion.section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-3 p-4 border border-slate-200 rounded-xl bg-white">
      <div className="text-indigo-600 text-xl">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function TechGroup({ title, children }) {
  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-white">
      <p className="font-medium mb-3">{title}</p>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function Tech({ icon, label }) {
  return (
    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full
                     border border-slate-300 bg-white text-sm text-slate-700">
      <span className="text-indigo-600">{icon}</span>
      {label}
    </span>
  );
}
