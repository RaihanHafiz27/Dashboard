type Status = "active" | "inactive";

export interface NavLinks {
  id: number;
  title: string;
  subs?: { title: string; to: string }[];
  to?: string;
  icon: React.ReactNode;
  status: Status;
}
