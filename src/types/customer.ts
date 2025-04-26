export interface PurchaseHistory {
  transactionId: string;
  date: string; // Consider using Date type if interacting with Firebase Timestamps
  total: number;
}

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  purchaseHistory: PurchaseHistory[];
}
