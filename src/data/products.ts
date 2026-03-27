import notebookImg from "@/assets/products/notebook-a5.jpg";
import coloredPencilsImg from "@/assets/products/colored-pencils.jpg";
import copyPaperImg from "@/assets/products/copy-paper.jpg";
import staplerImg from "@/assets/products/stapler.jpg";
import stickyNotesImg from "@/assets/products/sticky-notes.jpg";
import craftKitImg from "@/assets/products/craft-kit.jpg";
import deskOrganizerImg from "@/assets/products/desk-organizer.jpg";
import schoolKitImg from "@/assets/products/school-kit.jpg";
import washiTapeImg from "@/assets/products/washi-tape.jpg";
import sketchPadImg from "@/assets/products/sketch-pad.jpg";
import gelPensImg from "@/assets/products/gel-pens.jpg";
import labelMakerImg from "@/assets/products/label-maker.jpg";
import geometrySetImg from "@/assets/products/geometry-set.jpg";
import kraftPaperImg from "@/assets/products/kraft-paper.jpg";
import storageBoxesImg from "@/assets/products/storage-boxes.jpg";
import watercolorsImg from "@/assets/products/watercolors.jpg";

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
  "Усі",
  "Канцелярія",
  "Паперова продукція",
  "Товари для дому",
  "Шкільне приладдя",
  "Творчість",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Зошит А5 у лінійку преміум",
    description: "120 сторінок гладкого безкислотного паперу. Ідеальний для щоденника, нотаток або ескізів.",
    price: 249,
    category: "Канцелярія",
    image: notebookImg,
    badge: "Хіт продажів",
  },
  {
    id: "2",
    name: "Набір кольорових олівців (24 шт.)",
    description: "Яскраві, стійкі до поломки стрижні у металевому пеналі. Ідеальні для розмальовок та шкільних проєктів.",
    price: 419,
    category: "Творчість",
    image: coloredPencilsImg,
    badge: "Популярне",
  },
  {
    id: "3",
    name: "Папір для друку А4 (500 аркушів)",
    description: "Білий папір 80 г/м², підходить для друку, копіювання та щоденного офісного використання.",
    price: 179,
    category: "Паперова продукція",
    image: copyPaperImg,
  },
  {
    id: "4",
    name: "Степлер посилений",
    description: "Зшиває до 40 аркушів. Ергономічна ручка, вбудований антистеплер. Необхідна річ на столі.",
    price: 359,
    category: "Канцелярія",
    image: staplerImg,
  },
  {
    id: "5",
    name: "Набір стікерів різнокольорових",
    description: "6 блоків різних кольорів та розмірів. Переклеюваний клей, не пошкоджує поверхні.",
    price: 149,
    category: "Канцелярія",
    image: stickyNotesImg,
    badge: "Акція",
  },
  {
    id: "6",
    name: "Дитячий набір для творчості",
    description: "Все в одному: ножиці, клей-олівець, кольоровий папір, наклейки та декоративні очі.",
    price: 529,
    category: "Творчість",
    image: craftKitImg,
  },
  {
    id: "7",
    name: "Органайзер настільний",
    description: "Бамбуковий органайзер з кількома відділеннями. Тримає ручки, скріпки та канцелярію в порядку.",
    price: 639,
    category: "Товари для дому",
    image: deskOrganizerImg,
    badge: "Новинка",
  },
  {
    id: "8",
    name: "Шкільний набір із рюкзаком",
    description: "Включає 2 зошити, набір ручок, лінійку, гумку та пенал. Все для першого дня.",
    price: 839,
    category: "Шкільне приладдя",
    image: schoolKitImg,
  },
  {
    id: "9",
    name: "Колекція декоративного скотчу (10 рулонів)",
    description: "Паперовий скотч з унікальними візерунками. Чудово для рукоділля, планерів та пакування подарунків.",
    price: 329,
    category: "Творчість",
    image: washiTapeImg,
  },
  {
    id: "10",
    name: "Альбом для ескізів А3 (50 аркушів)",
    description: "Щільний папір 160 г/м². Ідеальний для малювання, акварелі та змішаних технік.",
    price: 279,
    category: "Паперова продукція",
    image: sketchPadImg,
  },
  {
    id: "11",
    name: "Набір гелевих ручок (6 шт.)",
    description: "М'яке гелеве чорнило у чорному, синьому та червоному кольорах. Гумова ручка зменшує втому руки.",
    price: 219,
    category: "Канцелярія",
    image: gelPensImg,
    badge: "Хіт продажів",
  },
  {
    id: "12",
    name: "Принтер етикеток побутовий",
    description: "Компактний термопринтер для організації кухні, комори, файлів та коробок зберігання.",
    price: 979,
    category: "Товари для дому",
    image: labelMakerImg,
  },
  {
    id: "13",
    name: "Геометричний набір для учнів",
    description: "Циркуль, транспортир, косинці та лінійка у міцному футлярі. Готовий до іспитів.",
    price: 189,
    category: "Шкільне приладдя",
    image: geometrySetImg,
  },
  {
    id: "14",
    name: "Крафт-папір у рулоні",
    description: "10 м натурального коричневого крафт-паперу. Універсальний для пакування подарунків, обкладинок та рукоділля.",
    price: 139,
    category: "Паперова продукція",
    image: kraftPaperImg,
  },
  {
    id: "15",
    name: "Набір коробок для зберігання (3 шт.)",
    description: "Картонні коробки з кришками, що складаються одна в одну. Мінімалістичний дизайн для полиць і шаф.",
    price: 469,
    category: "Товари для дому",
    image: storageBoxesImg,
    badge: "Акція",
  },
  {
    id: "16",
    name: "Набір акварельних фарб (18 кольорів)",
    description: "Пігменти художнього рівня у портативній палітрі з пензлем. Яскраві кольори, що змішуються.",
    price: 559,
    category: "Творчість",
    image: watercolorsImg,
  },
];
