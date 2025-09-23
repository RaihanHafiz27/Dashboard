export interface Count {
  id: number;
  title: string;
  sum: number;
  growth: number; // persentase pertumbuhan (+ naik, - turun)
  icon: React.ReactNode;
}
