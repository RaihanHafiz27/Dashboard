interface monthlyReport {
  month: string;
  total: number;
}

export interface ProductType {
  productId: string;
  productName: string;
  color: string;
  sales: monthlyReport[];
}
