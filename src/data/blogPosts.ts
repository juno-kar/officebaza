export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Which Paper is Best for What Purpose?",
    excerpt: "From copy paper to cardstock — a comprehensive guide to choosing the right paper weight, texture, and finish for every task.",
    category: "Guides",
    date: "Mar 20, 2026",
    readTime: "5 min read",
    image: "📄",
  },
  {
    id: "2",
    title: "How to Load a Stapler (And Other Office Hacks)",
    excerpt: "Simple step-by-step instructions for loading different stapler types, plus 7 more office tips you didn't know you needed.",
    category: "Life Hacks",
    date: "Mar 15, 2026",
    readTime: "3 min read",
    image: "📎",
  },
  {
    id: "3",
    title: "5 Ways to Keep Your Workspace Clutter-Free",
    excerpt: "Practical organization strategies using affordable supplies. Transform your desk from chaos to calm in one afternoon.",
    category: "Tips & Tricks",
    date: "Mar 10, 2026",
    readTime: "4 min read",
    image: "🗂️",
  },
  {
    id: "4",
    title: "Back-to-School Supply Checklist 2026",
    excerpt: "The complete list of supplies your child needs this school year, organized by grade level with budget-friendly options.",
    category: "Guides",
    date: "Mar 5, 2026",
    readTime: "6 min read",
    image: "🎒",
  },
  {
    id: "5",
    title: "Unlock Your Creativity: DIY Projects with Everyday Supplies",
    excerpt: "Turn basic stationery into stunning crafts. Easy projects for kids and adults — no special skills required.",
    category: "Tips & Tricks",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    image: "🎨",
  },
  {
    id: "6",
    title: "The Art of Bullet Journaling: A Beginner's Guide",
    excerpt: "Everything you need to start bullet journaling — from choosing the right notebook to creating your first spreads.",
    category: "Guides",
    date: "Feb 20, 2026",
    readTime: "8 min read",
    image: "📓",
  },
];
