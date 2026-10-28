export const profile = {
  name: 'Hatem Taleb',
  email: 'hatemtaleb803@gmail.com',
  github: 'https://github.com/hatem12345th',
  linkedin: 'https://www.linkedin.com/in/taleb-hatem-b50a192ba/',
};

export const projects = [
  {
    name: 'OwnControl',
    category: 'Business software',
    status: 'Application project',
    description: 'POS and inventory management software, with a focus on products, categories, stock, suppliers, and purchase workflows.',
    focus: ['Point of sale', 'Inventory', 'Purchases'],
    source: null,
  },
  {
    name: 'AntStore',
    category: 'Retail application',
    status: 'Application project',
    description: 'A retail management application with a React and TypeScript interface built with Vite, backed by Bun, Hono, and SQLite. Includes POS workflows, products and categories, stock movements, suppliers, purchase orders, and user permissions.',
    focus: ['React · TypeScript', 'Vite', 'Bun · Hono', 'SQLite'],
    source: null,
  },
  {
    name: 'Diagnostic Center',
    category: 'Healthcare software',
    status: 'Ongoing',
    description: 'An ongoing diagnostic center management project focused on patient management, reception workflows, radiology and laboratory integrations, inventory, and roles and permissions.',
    focus: ['Patient workflows', 'Integrations', 'Access control'],
    source: null,
  },
  {
    name: 'SanteConsult',
    category: 'Healthcare software',
    status: 'In development',
    description: 'A medical consultation application in development, focused on consultation workflows, patient records, examination notes, and healthcare interfaces.',
    focus: ['Consultations', 'Patient records', 'Clinical interfaces'],
    source: null,
  },
] as const;

// Supported by the public profile, public privateschool manifest, local AntStore
// source, and user-confirmed Bun/Deno runtime experience. AntStore uses Bun;
// Deno is not attributed to it. Learning interests remain separate.
export const stackGroups = [
  { name: 'Frontend', tools: [
    { name: 'React', icon: 'react/react-original' },
    { name: 'TypeScript', icon: 'typescript/typescript-original' },
    { name: 'JavaScript', icon: 'javascript/javascript-original' },
    { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original' },
    { name: 'Vite', icon: 'vitejs/vitejs-original' },
  ] },
  { name: 'Backend', tools: [
    { name: 'Go', icon: 'go/go-original' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
    { name: 'Bun', icon: 'bun/bun-original' },
    { name: 'Deno', icon: 'denojs/denojs-original' },
    { name: 'Express', icon: 'express/express-original' },
    { name: 'Hono', icon: 'hono/hono-original' },
    { name: 'Elysia', icon: 'elysia/elysia-original' },
  ] },
  { name: 'Data', tools: [
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
    { name: 'Microsoft SQL Server', icon: 'microsoftsqlserver/microsoftsqlserver-original' },
    { name: 'SQL (handwritten queries)', icon: 'sql/sql' },
    { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
    { name: 'SQLite', icon: 'sqlite/sqlite-original' },
    { name: 'Prisma', icon: 'prisma/prisma-original' },
    { name: 'Drizzle ORM', icon: 'drizzle/drizzle' },
  ] },
  { name: 'Desktop & Android', tools: [
    { name: 'Wails 3', icon: 'wails/wails' },
    { name: 'Capacitor', icon: 'capacitor/capacitor-original' },
  ] },
];

export const learningPaths = [
  {
    name: 'AI for Developers',
    description: 'Learning to integrate AI into useful applications and everyday developer workflows.',
    topics: ['Model APIs and structured outputs', 'Embeddings and retrieval-augmented generation (RAG)', 'Evaluation, privacy, and secure AI integration'],
  },
  {
    name: 'Cloud Engineering',
    description: 'Learning how to deploy, operate, and secure applications beyond the local environment.',
    topics: ['Linux, networking, and container fundamentals', 'Cloud deployment and CI/CD pipelines', 'Infrastructure as code, observability, and access control'],
  },
];

export const securityAreas = [
  { name: 'Web application security', description: 'Practical penetration testing labs, CTF challenges, and understanding how web applications fail.' },
  { name: 'Reverse engineering & forensics', description: 'Learning how programs work internally, alongside malware analysis fundamentals and digital forensics.' },
  { name: 'Systems & infrastructure', description: 'Exploring cloud and infrastructure security, with an emphasis on understanding the systems behind an application.' },
];
