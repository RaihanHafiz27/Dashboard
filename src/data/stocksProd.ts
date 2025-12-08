export interface Stock {
  id: number;
  name: string;
  category: string;
  price: number;
  piece: number;
  image: string;
}

export const stockProd: Stock[] = [
  {
    id: 1,
    name: "Longines Master Collection",
    category: "Accessories",
    price: 1241,
    piece: 23,
    image: "/images/1.webp",
  },
  {
    id: 2,
    name: "iPad Mini 2021 Starlight",
    category: "Gadgets",
    price: 481.79,
    piece: 47,
    image: "/images/2.webp",
  },
  {
    id: 3,
    name: "Women Handbag Black",
    category: "Bags",
    price: 53,
    piece: 11,
    image: "/images/3.webp",
  },
  {
    id: 4,
    name: "Red Lipstick",
    category: "Beauty",
    price: 12.99,
    piece: 91,
    image: "/images/4.webp",
  },
  {
    id: 5,
    name: "Short Frock",
    category: "Fashion",
    price: 21.63,
    piece: 22,
    image: "/images/5.webp",
  },
  {
    id: 6,
    name: "Gucci Bloom Eau de",
    category: "Skincare",
    price: 79,
    piece: 100,
    image: "/images/6.webp",
  },
  {
    id: 7,
    name: "Puma Future Rider Trainers",
    category: "Shoes",
    price: 89.99,
    piece: 77,
    image: "/images/7.webp",
  },
];
