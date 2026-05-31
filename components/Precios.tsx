"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PICADAS, formatPrice, buildWhatsAppUrl } from "@/lib/constants";

export default function Precios() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="picadas" className="bg-carbon px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center md:mb-16"
        >
          <p
            className="mb-2 text-xs font-600 uppercase tracking-[0.28em] text-ember md:mb-3 md:text-sm"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
          >
            Nuestras combinaciones
          </p>
          <h2
            className="font-display text-3xl font-black text-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 900 }}
          >
            Arma tu picada
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-ember md:mt-4 md:w-20" />
        </motion.div>

        {/* Grid: 1 col mobile → 2 tablet → 3 desktop */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PICADAS.map((picada, idx) => {
            const isReina = picada.badge === "LA REINA";
            const isMasPedida = picada.badge === "MÁS PEDIDA";

            return (
              <motion.div
                key={picada.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: "easeOut",
                }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 md:rounded-3xl ${
                  shouldReduceMotion ? "" : "hover:scale-[1.015]"
                } ${
                  isReina
                    ? "border-gold bg-carbon-mid"
                    : isMasPedida
                    ? "border-ember bg-carbon-mid"
                    : "border-white/5 bg-carbon-mid hover:border-ember/40"
                }`}
                style={
                  isReina
                    ? { boxShadow: "0 0 40px rgba(212,160,23,0.12)" }
                    : isMasPedida
                    ? { boxShadow: "0 0 30px rgba(255,77,0,0.12)" }
                    : {}
                }
              >
                {/* Badge */}
                {picada.badge && (
                  <div
                    className={`absolute right-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-800 uppercase tracking-wider sm:right-4 sm:top-4 sm:px-3 sm:tracking-widest ${
                      isReina ? "bg-gold text-carbon" : "bg-ember text-white"
                    }`}
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 800,
                    }}
                  >
                    {isReina ? "👑 " : "🔥 "}
                    {picada.badge}
                  </div>
                )}

                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden md:h-52">
                  <Image
                    src={picada.imagen}
                    alt={picada.nombre}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-mid via-carbon-mid/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                  {/* Carne count label */}
                  <span
                    className="mb-1 block text-xs font-600 uppercase tracking-widest text-cream/40"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
                  >
                    {picada.carnes === 7
                      ? "7 carnes"
                      : `${picada.carnes} ${picada.carnes === 1 ? "carne" : "carnes"}`}
                  </span>

                  <h3
                    className="mb-2 font-display text-xl font-bold text-cream md:text-2xl"
                    style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
                  >
                    {picada.nombre}
                  </h3>

                  <p
                    className="mb-4 flex-1 text-sm font-400 leading-relaxed text-cream/60 md:text-sm"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 400 }}
                  >
                    {picada.descripcion}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <span
                      className={`font-ui text-3xl font-800 tabular-nums md:text-4xl ${
                        isReina ? "text-gold" : "text-ember"
                      }`}
                      style={{
                        fontFamily: "var(--font-barlow)",
                        fontWeight: 800,
                      }}
                    >
                      {formatPrice(picada.precio)}
                    </span>
                  </div>

                  {/* CTA */}
                  <a
                    href={buildWhatsAppUrl(picada.mensaje)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-700 uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] md:rounded-2xl md:py-3.5 md:text-base ${
                      isReina
                        ? "bg-gold text-carbon hover:bg-yellow-400"
                        : isMasPedida
                        ? "bg-ember text-white hover:bg-orange-500"
                        : "bg-ember/10 text-ember hover:bg-ember hover:text-white"
                    }`}
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      touchAction: "manipulation",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    Pedir Esta
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
