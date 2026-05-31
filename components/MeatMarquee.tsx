const items = [
  "Chorizo de Cerdo",
  "Chorizo de Carne",
  "Chinchurria",
  "Morcilla",
  "Ubre",
  "Cuajo",
  "Lomo de Cerdo",
  "🔥",
];

const repeated = [...items, ...items];

export default function MeatMarquee() {
  return (
    <div className="overflow-hidden border-y border-ember/30 bg-carbon-mid py-3 md:py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-5 text-sm font-700 uppercase tracking-[0.18em] md:mx-8 md:text-base"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 700,
              color:
                item === "🔥"
                  ? "#FF4D00"
                  : i % 3 === 1
                  ? "#D4A017"
                  : "#F5F0E8",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
