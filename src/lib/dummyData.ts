import { Order, OrderStatus } from "@/types/order.type";

const dummyImages = [
  "/images/1.webp",
  "/images/6.webp",
  "/images/2.webp",
  "/images/8.webp",
  "/images/5.webp",
  "/images/4.webp",
  "/images/7.webp",
  "/images/3.webp",
];

const addresses = [
  "221B Baker Street, London, United Kingdom",
  "Via Roma 14, Milan, Italy",
  "Rue de Rivoli 99, Paris, France",
  "Alexanderplatz 5, Berlin, Germany",
  "Calle de Alcalá 45, Madrid, Spain",
  "Damrak 32, Amsterdam, Netherlands",
  "Karl Johans gate 22, Oslo, Norway",
  "Váci utca 12, Budapest, Hungary",
  "Sveavägen 48, Stockholm, Sweden",
  "Wiener Straße 10, Vienna, Austria",
];

const generateDummyData = () => {
  const dummyOrders: Order[] = [];
  const statuses: OrderStatus[] = [
    "Pending",
    "Completed",
    "Cancelled",
    "Processing",
  ];
  const quantities = [1, 5, 2, 8, 3, 10, 4, 7, 6, 9];
  const amounts = [50, 120, 750, 30, 45, 25, 210];

  for (let i = 1; i <= 21; i++) {
    dummyOrders.push({
      id: `ORD-${1000 + i}`,
      customerAddress: addresses[i % addresses.length],
      productName: `Produk ${String.fromCharCode(65 + (i % 7))}`,
      imageUrl: dummyImages[i % dummyImages.length],
      date: `2025/10/${String((i % 30) + 1).padStart(2, "0")}`,
      quantity: quantities[i % quantities.length],
      amount: amounts[i % amounts.length] * quantities[i % quantities.length],
      status: statuses[i % statuses.length],
    });
  }
  return dummyOrders;
};

export const allDummyOrders = generateDummyData();
