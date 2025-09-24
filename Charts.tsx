"use client";
import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import type { Txn } from "@/lib/categorize";

function monthlySeries(rows: Txn[]) {
  // Aggregate net amount per month (YYYY-MM)
  const agg: Record<string, number> = {};
  for (const r of rows) {
    const key = r.date.slice(0,7);
    agg[key] = (agg[key] ?? 0) + r.amount;
  }
  return Object.entries(agg).sort(([a],[b]) => a.localeCompare(b)).map(([month, value]) => ({ month, value }));
}

export default function Charts({ rows }: { rows: Txn[] }) {
  const categoryAgg = useMemo(() => {
    const map: Record<string, number> = {};
    rows.forEach(r => {
      const k = r.category || "Other";
      const amt = r.amount < 0 ? -r.amount : 0; // spend only
      map[k] = (map[k] ?? 0) + amt;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);
  }, [rows]);

  const monthly = useMemo(() => monthlySeries(rows), [rows]);

  return (
    <div className="grid-cards">
      <div className="card h-[360px]">
        <div className="h2 mb-3">Spend by Category</div>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie data={categoryAgg} dataKey="value" nameKey="name" outerRadius={100} label>
              {categoryAgg.map((entry, index) => <Cell key={`cell-${index}`} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="card h-[360px]">
        <div className="h2 mb-3">Net by Month</div>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
