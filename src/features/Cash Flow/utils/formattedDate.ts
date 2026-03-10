export const formattedDate = (date: string) => {
  const d = new Date(date);

  const datePart = d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

  const timePart = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${datePart}, ${timePart}`;
};
