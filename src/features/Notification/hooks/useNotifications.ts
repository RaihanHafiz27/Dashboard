import { mailbox } from "@/lib/mailBox";
import { useMemo } from "react";
import { toRelativeTime } from "../utils/toRelativeTime";

export const useNotification = () => {
  const { processedNotifications, unreadCount, countDisplay } = useMemo(() => {
    // Count unread items from original data.
    const unread = mailbox.filter((notif) => !notif.isRead).length;

    // Process the 4 latest data for the dropdown
    const processed = mailbox
      .slice()
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )
      .slice(0, 4)
      .map((notif) => ({
        ...notif,
        displayTime: toRelativeTime(notif.timestamp),
      }));

    return {
      unreadCount: unread,
      processedNotifications: processed,
      countDisplay: unread > 99 ? "99+" : `${unread}`,
    };
  }, [mailbox]);

  return {
    processedNotifications,
    unreadCount,
    countDisplay,
  };
};
