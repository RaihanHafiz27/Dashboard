type MailTitle = "Orders" | "Payments" | "Refunds" | "Messages";

interface MailBox {
  id: number;
  name: string;
  title: MailTitle;
  message: string;
  timestamp: string;
  isRead: boolean;
  mark: boolean;
}

const now = new Date();

const minutesAgo = (min: number) =>
  new Date(now.getTime() - min * 60 * 1000).toISOString();

const hoursAgo = (hr: number) =>
  new Date(now.getTime() - hr * 60 * 60 * 1000).toISOString();

const daysAgo = (day: number) =>
  new Date(now.getTime() - day * 24 * 60 * 60 * 1000).toISOString();

const messagesByTitle: Record<MailTitle, string[]> = {
  Orders: [
    "Customer placed a new order.",
    "Customer requested delivery status update.",
    "Order address was modified by customer.",
    "Customer cancelled the order before shipment.",
    "New bulk order was submitted.",
    "Order is pending admin confirmation.",
  ],
  Payments: [
    "Payment has been successfully completed.",
    "Customer uploaded manual payment proof.",
    "Payment verification is required.",
    "Payment failed due to gateway timeout.",
    "Partial payment was detected.",
    "Customer selected a new payment method.",
  ],
  Refunds: [
    "Refund request has been submitted.",
    "Customer escalated refund complaint.",
    "Refund reason updated by customer.",
    "Customer requested refund for damaged item.",
    "Refund status awaiting approval.",
    "Chargeback notification received.",
  ],
  Messages: [
    "Customer sent a new chat message.",
    "Customer asked about product availability.",
    "Customer requested invoice clarification.",
    "Customer reported an issue with the product.",
    "Customer requested discount information.",
    "Customer followed up on previous inquiry.",
  ],
};

const names = [
  "Alexa",
  "Jimmy",
  "L",
  "Kanna",
  "Daniel",
  "Sofia",
  "Rin",
  "Haruto",
  "Mika",
  "Leo",
];

const titles: MailTitle[] = ["Orders", "Payments", "Refunds", "Messages"];

export const mailbox: MailBox[] = [
  // ---- 1–4 Simulasi Relative Time ----
  {
    id: 1,
    name: "Alexa",
    title: "Refunds",
    message: "Customer has submitted a refund request for Order #ORD-1038.",
    timestamp: now.toISOString(),
    isRead: false,
    mark: true,
  },
  {
    id: 2,
    name: "Jimmy",
    title: "Payments",
    message: "Customer made a payment for Order #ORD-1025.",
    timestamp: minutesAgo(5),
    isRead: false,
    mark: false,
  },
  {
    id: 3,
    name: "L",
    title: "Messages",
    message: "Customer sends a new message regarding product details.",
    timestamp: hoursAgo(5),
    isRead: false,
    mark: true,
  },
  {
    id: 4,
    name: "Kanna",
    title: "Orders",
    message: "Customer inquired about delivery status for Order #ORD-1025.",
    timestamp: daysAgo(5),
    isRead: true,
    mark: false,
  },

  // ---- Generate sampai 50 ----
  ...Array.from({ length: 46 }, (_, i) => {
    const id = i + 5;
    const title = titles[id % titles.length];
    const name = names[id % names.length];
    const messageList = messagesByTitle[title];
    const message = messageList[id % messageList.length];

    return {
      id,
      name,
      title,
      message: `${message} (Order #ORD-${1000 + id}).`,
      timestamp: daysAgo(6 + (id % 10)),
      isRead: id % 3 === 0,
      mark: id % 7 === 0,
    };
  }),
];
