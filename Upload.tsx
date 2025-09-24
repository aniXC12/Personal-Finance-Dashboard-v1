"use client";
import { useRef, useState } from "react";
import type { Txn } from "@/lib/categorize";

export default function Upload({ onData }: { onData: (rows: Txn[]) => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const text = await file.text();
    const res = await fetch("/api/parse", { method: "POST", body: text, headers: { "Content-Type": "text/csv" } });
    const data = await res.json();
    setLoading(false);
    if (res.ok) onData(data);
    else alert(data.error || "Failed to parse CSV");
  }

  return (
    <div className="flex items-center gap-3">
      <button className="button" onClick={() => inputRef.current?.click()} disabled={loading}>
        {loading ? "Parsing..." : "Upload CSV"}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept=".csv,text/csv"
        className="hidden"
        onChange={handleFile}
      />
      <span className="text-xs text-white/60">CSV format: date, description, amount[, account]</span>
    </div>
  );
}
