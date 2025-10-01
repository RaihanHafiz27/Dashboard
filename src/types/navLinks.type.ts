export interface NavLinks {
  id: number;
  title: string;
  subs?: { title: string; to: string }[];
  to?: string;
  icon: React.ReactNode;
}
