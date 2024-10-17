import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import images from "@/public/images.png";
import elr4ah9 from "@/public/elr4ah9.png";
import marketpalce from "@/public/marketpalce.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "mechanical engineering",
    location: "pharos university ,alexandria",
    description:
      "I graduated after 5 years of studying mechanical engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "ALX Software Engineering Programme",
    description:
      "After spending 9 months in ALX Software Engineering Programme, i become a Full-Stack Developer",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Front-end Developer",
    location: "ALX Software Engineering Programme",
    description:
      "I'm now a Front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Simple Shell",
    description:
      "A custom shell implementation as part of the ALX Software Engineering Programme. This project demonstrates low-level programming in C and Unix systems.",
    tags: ["C", "Unix", "Systems Programming"],
    imageUrl : images,
  },
  {
    title: "AirBnB Clone",
    description:
      "A full-stack AirBnB clone using Flask. I developed both the frontend and backend, implementing features like user authentication, property listings, and booking management.",
    tags: ["Python", "Flask", "HTML", "CSS", "SQLAlchemy"],
    imageUrl: elr4ah9,
  },
  {
    title: "Ali-Marketplace",
    description:
      "A Flask-based web application simulating an online marketplace. Features include user authentication, item listing and management, and basic e-commerce functionality.",
    tags: ["Python", "Flask", "SQLAlchemy", "HTML", "CSS", "JavaScript"],
    imageUrl: marketpalce,
  },
] as const;

export const skillsData = [
  "C Programming",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Git",
  "Bash",
  "Unix",
  "Networking",
  "Flask",
  "React",
  "Next.js",
  "Django",
  "Node.js",
  "Express",
  "Docker",
  "Linux",
  "MongoDB",
  "PostgreSQL",
] as const;
