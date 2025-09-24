export type Txn = {
  id: string;
  date: string; // YYYY-MM-DD
  description: string;
  amount: number; // negative for spend, positive for income
  account?: string;
  category?: string;
};

const rules: { category: string; keywords: string[] }[] = [
  { category: "Groceries", keywords: ["whole foods", "trader joe", "heb", "grocery", "kroger", "safeway"] },
  { category: "Dining", keywords: ["ubereats", "doordash", "grubhub", "restaurant", "cafe", "coffee", "starbucks", "chipotle", "mcdonald"] },
  { category: "Transport", keywords: ["uber", "lyft", "shell", "chevron", "exxon", "gas", "metro", "parking"] },
  { category: "Shopping", keywords: ["amazon", "target", "walmart", "costco", "nike", "adidas"] },
  { category: "Rent", keywords: ["rent", "landlord", "apartment"] },
  { category: "Utilities", keywords: ["electric", "internet", "wifi", "water", "utility", "comcast", "att", "verizon"] },
  { category: "Income", keywords: ["payroll", "salary", "deposit"] },
  { category: "Other", keywords: [] }
];

export function categorize(txn: Txn): string {
  const d = (txn.description || "").toLowerCase();
  if (txn.amount > 0) return "Income";
  for (const rule of rules) {
    if (rule.keywords.some(k => d.includes(k))) return rule.category;
  }
  return "Other";
}

export function withCategories(txns: Txn[]): Txn[] {
  return txns.map(t => ({ ...t, category: t.category || categorize(t) }));
}

export function summarizeByCategory(txns: Txn[]) {
  const agg: Record<string, number> = {};
  for (const t of txns) {
    const cat = t.category || "Other";
    agg[cat] = (agg[cat] ?? 0) + t.amount;
  }
  return agg;
}
