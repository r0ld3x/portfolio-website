import doctalk from "@/public/doctalk.jpg";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "DocTalk",
    description: "A Modern Fullstack SaaS-Platform. Talk to Pdf's.",
    tags: [
      "Nextjs",
      "React",
      "TypeScript",
      "tRPC",
      "Tailwind",
      "Postgres",
      "Prisma",
      "LangChain",
    ],
    imageUrl: doctalk,
    href: "https://github.com/r0ld3x/doctalk",
  },

  {
    title: "ChatFlix",
    description: "A chat group website for doing chats and group talks.",
    tags: ["Python", "Django", "Nextjs", "React", "TypeScript", "Tailwind"],
    imageUrl:
      "https://github.com/user-attachments/assets/fa2ba1c4-06b6-4730-a54d-fd0f14af4ad8",
    href: "https://github.com/r0ld3x/chatflix",
  },
  {
    title: "Mailtm",
    description: "A application of mail.tm for android and ios devices. ",
    tags: ["EXPO", "React Native", "TypeScript", "mail.tm"],
    imageUrl:
      "https://socialify.git.ci/r0ld3x/mailtm/image?description=1&descriptionEditable=A application of mail.tm for android and ios devices.&font=Jost&forks=1&issues=1&language=1&name=1&owner=1&pattern=Overlapping%20Hexagons&pulls=1&stargazers=1&theme=Auto",
    href: "https://github.com/r0ld3x/mailtm",
  },
  {
    title: "Userver",
    description: "A telegram userbot for managing telegram account easily.",
    tags: [
      "Python",
      "telethon",
      "mongodb",
      "redis",
      "Object Oriented Programming",
    ],
    imageUrl:
      "https://socialify.git.ci/r0ld3x/userver/image?description=1&descriptionEditable=A telegram userbot for managing telegram account easily.&font=Jost&forks=1&issues=1&language=1&name=1&owner=1&pattern=Overlapping%20Hexagons&pulls=1&stargazers=1&theme=Auto",
    href: "https://github.com/r0ld3x/userver",
  },
  {
    title: "Terabox downloader bot",
    description: "A telegram bot which will download media files from terabox.",
    tags: ["Python", "telethon", "terabox api", "Object Oriented Programming"],
    imageUrl:
      "https://socialify.git.ci/r0ld3x/terabox-downloader-bot/image?description=1&descriptionEditable=A%20high%20level%20telegram%20bot%20written%20in%20Python%20for%20downloading%20files%20from%20Terabox%20using%20the%20Terabox%20API%20&font=Jost&forks=1&issues=1&language=1&name=1&owner=1&pattern=Overlapping%20Hexagons&pulls=1&stargazers=1&theme=Auto",
    href: "https://github.com/r0ld3x/terabox-downloader-bot",
  },
] as const;

export const skillsData = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "React Native",
  "PHP",
  "Telegram API",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redis",
  "Express",
  "MySQL",
  "Selenium",
] as const;
