# Personal Finance Dashboard

A polished, resume-ready **Next.js 14** project that ingests a CSV of transactions, auto-categorizes spend, and renders clean **Recharts** visualizations (Spend by Category, Net by Month). Includes a **sample dataset** and a **CSV upload** flow.

## Demo Features
- 📥 CSV upload (`date, description, amount[, account]`)
- 🧠 Auto-categorization via simple keyword rules
- 📊 Recharts: Pie (category spend) + Line (monthly net)
- 🎯 Savings goal tracker (monthly)
- 🧪 Sample data via `/api/transactions`

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Recharts (no custom colors set)
- Simple server routes (`/api/transactions`, `/api/parse`)

## Local Dev
```bash
# Node 18+
pnpm i   # or: npm i
pnpm dev # or: npm run dev
```

Open http://localhost:3000

## CSV Format
```
date,description,amount,account
2025-08-02,RENT - APARTMENT,-1200,Checking
2025-08-03,WHOLE FOODS MARKET,-86.34,Credit
2025-08-15,PAYROLL DEPOSIT,2500,Checking
```
Amounts: negative = expense, positive = income.

## Deploy (Vercel)
1. Push to GitHub.
2. Go to **Vercel → New Project** and import the repo.
3. Framework preset: **Next.js**. No env vars needed.
4. Deploy. Done.

## Deploy (Render, optional)
- Use **Static Site** not recommended for SSR; use **Web Service** with:
  - Build: `npm install && npm run build`
  - Start: `npm start`
  - Environment: Node 18+

## What to Showcase in README
- Screenshots of Dashboard (add to `/public` and reference here)
- Badges (build, deploy, license)
- Crisp tagline: *"CSV → Insights in 60s"*

## File Tree (key)
```
app/
  api/
    parse/route.ts         # CSV → JSON → categorized
    transactions/route.ts  # sample dataset
  globals.css
  layout.tsx
  page.tsx                 # main dashboard
components/
  Charts.tsx
  Stat.tsx
  TransactionsTable.tsx
lib/
  categorize.ts
  sampleData.ts
...
```

## Notes
- This is **mock-data friendly**. You can swap `/api/transactions` with a real source later (Plaid sandbox, etc.).
- Keep PRs small; add **auth + budgets** as a v2.
