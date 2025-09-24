import type { Txn } from "./categorize";

export const sampleTxns: Txn[] = [
  { id: "1", date: "2025-08-01", description: "PAYROLL DEPOSIT", amount: 2500.00, account: "Checking" },
  { id: "2", date: "2025-08-02", description: "RENT - APARTMENT", amount: -1200.00, account: "Checking" },
  { id: "3", date: "2025-08-03", description: "WHOLE FOODS MARKET", amount: -86.34, account: "Credit" },
  { id: "4", date: "2025-08-04", description: "UBER TRIP", amount: -18.22, account: "Credit" },
  { id: "5", date: "2025-08-04", description: "STARBUCKS 123", amount: -5.75, account: "Credit" },
  { id: "6", date: "2025-08-05", description: "AMAZON MARKETPLACE", amount: -62.17, account: "Credit" },
  { id: "7", date: "2025-08-05", description: "CHEVRON GAS", amount: -41.50, account: "Credit" },
  { id: "8", date: "2025-08-06", description: "H-E-B GROCERY", amount: -54.11, account: "Credit" },
  { id: "9", date: "2025-08-07", description: "COMCAST INTERNET", amount: -65.00, account: "Checking" },
  { id: "10", date: "2025-08-10", description: "CHIPOTLE ONLINE", amount: -12.45, account: "Credit" },
  { id: "11", date: "2025-08-13", description: "TARGET STORES", amount: -44.29, account: "Credit" },
  { id: "12", date: "2025-08-15", description: "PAYROLL DEPOSIT", amount: 2500.00, account: "Checking" },
  { id: "13", date: "2025-08-16", description: "WATER UTILITY", amount: -30.00, account: "Checking" },
  { id: "14", date: "2025-08-18", description: "UBEREATS ORDER", amount: -23.88, account: "Credit" },
  { id: "15", date: "2025-08-20", description: "TRADER JOE'S", amount: -72.40, account: "Credit" },
  { id: "16", date: "2025-08-23", description: "WALMART", amount: -55.90, account: "Credit" },
  { id: "17", date: "2025-08-25", description: "LYFT RIDE", amount: -15.75, account: "Credit" },
  { id: "18", date: "2025-08-27", description: "ELECTRIC UTILITY", amount: -88.00, account: "Checking" }
];
