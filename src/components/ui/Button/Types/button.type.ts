export interface Links {
  id: number;
  title: string;
  to: string;
  active: boolean;
  icon?: React.ReactNode;
}

export type LabelControlProps = {
  title: string;
  type: "ellipsis" | "filter";

  // Props khusus untuk mode filter
  filterOptions?: string[];
  selectedFilter?: string;
  onFilterChange?: (value: string) => void;
};
