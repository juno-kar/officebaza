export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
}

export const categories = [
  "All",
  "Stationery",
  "Paper Products",
  "Household Goods",
  "School Supplies",
  "Creativity",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Ruled Notebook A5",
    description: "120 pages of smooth, acid-free paper. Perfect for journaling, note-taking, or sketching ideas.",
    price: 8.99,
    category: "Stationery",
    image: "📓",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Colored Pencil Set (24 pcs)",
    description: "Vibrant, break-resistant cores in a tin case. Ideal for coloring, illustrations, and school projects.",
    price: 14.99,
    category: "Creativity",
    image: "🖍️",
    badge: "Popular",
  },
  {
    id: "3",
    name: "Multi-Purpose Copy Paper (500 sheets)",
    description: "Bright white, 80gsm A4 paper suitable for printing, copying, and everyday office use.",
    price: 6.49,
    category: "Paper Products",
    image: "📄",
  },
  {
    id: "4",
    name: "Heavy-Duty Stapler",
    description: "Staples up to 40 sheets at once. Ergonomic grip, built-in staple remover. Desktop essential.",
    price: 12.99,
    category: "Stationery",
    image: "📎",
  },
  {
    id: "5",
    name: "Sticky Notes Variety Pack",
    description: "6 pads in assorted colors and sizes. Repositionable adhesive that won't damage surfaces.",
    price: 5.49,
    category: "Stationery",
    image: "📝",
    badge: "Sale",
  },
  {
    id: "6",
    name: "Kids Craft Kit",
    description: "All-in-one creative set with scissors, glue sticks, colored paper, stickers, and googly eyes.",
    price: 18.99,
    category: "Creativity",
    image: "🎨",
  },
  {
    id: "7",
    name: "Desk Organizer Set",
    description: "Bamboo multi-compartment organizer. Keeps pens, clips, and supplies tidy on any desk.",
    price: 22.99,
    category: "Household Goods",
    image: "🗂️",
    badge: "New",
  },
  {
    id: "8",
    name: "School Essentials Backpack Kit",
    description: "Includes 2 notebooks, pen set, ruler, eraser, and pencil case. Everything for the first day.",
    price: 29.99,
    category: "School Supplies",
    image: "🎒",
  },
  {
    id: "9",
    name: "Washi Tape Collection (10 rolls)",
    description: "Decorative masking tape in unique patterns. Great for crafts, planners, and gift wrapping.",
    price: 11.99,
    category: "Creativity",
    image: "🎀",
  },
  {
    id: "10",
    name: "A3 Sketch Pad (50 sheets)",
    description: "Heavyweight 160gsm cartridge paper. Ideal for drawing, watercolors, and mixed media.",
    price: 9.99,
    category: "Paper Products",
    image: "📐",
  },
  {
    id: "11",
    name: "Ergonomic Gel Pen Set (6 pcs)",
    description: "Smooth-flowing gel ink in black, blue, and red. Soft rubber grip reduces hand fatigue.",
    price: 7.99,
    category: "Stationery",
    image: "🖊️",
    badge: "Bestseller",
  },
  {
    id: "12",
    name: "Household Label Maker",
    description: "Compact thermal label printer for organizing kitchen, pantry, files, and storage boxes.",
    price: 34.99,
    category: "Household Goods",
    image: "🏷️",
  },
  {
    id: "13",
    name: "Geometry Set for Students",
    description: "Compass, protractor, set squares, and ruler in a durable storage case. Exam-ready.",
    price: 6.99,
    category: "School Supplies",
    image: "📏",
  },
  {
    id: "14",
    name: "Kraft Wrapping Paper Roll",
    description: "10m of natural brown kraft paper. Versatile for gift wrapping, book covers, and crafts.",
    price: 4.99,
    category: "Paper Products",
    image: "🎁",
  },
  {
    id: "15",
    name: "Storage Box Set (3 pcs)",
    description: "Stackable cardboard boxes with lids. Minimalist design for tidy shelves and closets.",
    price: 16.99,
    category: "Household Goods",
    image: "📦",
    badge: "Sale",
  },
  {
    id: "16",
    name: "Watercolor Paint Set (18 colors)",
    description: "Artist-grade pigments in a portable palette with brush. Vibrant, blendable colors.",
    price: 19.99,
    category: "Creativity",
    image: "🎨",
  },
];
