export const toRelativeTime = (timestamp: string) => {
  const notifTime = new Date(timestamp).getTime();

  const now = Date.now();
  const diffInMs = now - notifTime;

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 180) return "Recently";

  if (diffInMinutes < 60 && diffInMinutes > 3)
    return `${diffInMinutes} Min Ago`;

  if (diffInHours < 24) return `${diffInHours} Hrs Ago`;

  return `${diffInDays} Dys Ago`;
};
