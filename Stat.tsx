export default function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card flex flex-col gap-1">
      <div className="text-sm text-white/70">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
