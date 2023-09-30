import AnnonceItem from "@/components/anonce-item";
import HeroCard from "@/components/heros-card";

export default function Home() {
  return (
    <section className=" mt-8">
      <HeroCard />
      {/* filter by catgories */}
      <div className="mt-2 grid grid-cols-3 gap-4 overflow-auto pb-7">
        {Array.from({ length: 20 }).map((item, i) => (
          <AnnonceItem key={i} />
        ))}
      </div>
    </section>
  );
}
