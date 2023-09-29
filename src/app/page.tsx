import AnnonceItem from "@/components/anonce-item";

export default function Home() {
  return (
    <div className="mt-2 grid grid-cols-3 gap-3">
      {Array.from({ length: 8 }).map((item, i) => (
        <AnnonceItem key={i} />
      ))}
    </div>
  );
}
