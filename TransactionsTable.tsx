import type { Txn } from "@/lib/categorize";

export default function TransactionsTable({ rows }: { rows: Txn[] }) {
  return (
    <div className="card overflow-x-auto">
      <div className="h2 mb-3">Transactions</div>
      <table className="table">
        <thead>
          <tr>
            <th className="text-left">Date</th>
            <th className="text-left">Description</th>
            <th className="text-right">Amount</th>
            <th className="text-left">Category</th>
            <th className="text-left">Account</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.description}</td>
              <td className={`text-right ${r.amount < 0 ? "text-red-400" : "text-green-400"}`}>{r.amount.toFixed(2)}</td>
              <td>{r.category}</td>
              <td>{r.account || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
