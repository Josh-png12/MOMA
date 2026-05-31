"use client";
import { motion, useReducedMotion } from "framer-motion";

const pasos = [
  {
    numero: "01",
    titulo: "Elige tu picada",
    descripcion:
      "Selecciona cuántas carnes quieres y cuáles te apetecen más del menú del día.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-7 w-7 md:h-8 md:w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9 2 2 4-4"
        />
      </svg>
    ),
  },
  {
    numero: "02",
    titulo: "Pide por WhatsApp",
    descripcion:
      "Sin formularios, sin apps. Solo escríbenos directo y te confirmamos en segundos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 md:h-8 md:w-8"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    numero: "03",
    titulo: "Disfruta",
    descripcion:
      "Recibe tu picada caliente, recién sacada de la parrilla. Sazón que se comparte.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-7 w-7 md:h-8 md:w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-carbon-mid px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
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
            Así de fácil
          </p>
          <h2
            className="font-display text-3xl font-black text-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 900 }}
          >
            ¿Cómo funciona?
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-ember md:mt-4 md:w-20" />
        </motion.div>

        {/* Steps: column on mobile, row on md+ */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {pasos.map((paso, idx) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.12,
                ease: "easeOut",
              }}
              className="relative flex flex-col items-center rounded-2xl border border-white/5 bg-carbon p-5 text-center md:rounded-3xl md:p-8"
            >
              {/* Faded number */}
              <span
                className="absolute -top-4 left-1/2 -translate-x-1/2 select-none font-display text-5xl font-900 leading-none text-ember/10 md:text-6xl"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 900 }}
                aria-hidden="true"
              >
                {paso.numero}
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-ember/10 text-ember md:mb-5 md:h-16 md:w-16 md:rounded-2xl">
                {paso.icon}
              </div>

              <h3
                className="mb-2 font-display text-xl font-bold text-cream md:mb-3 md:text-2xl"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
              >
                {paso.titulo}
              </h3>
              <p
                className="text-sm font-400 leading-relaxed text-cream/60 md:text-base"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 400 }}
              >
                {paso.descripcion}
              </p>

              {/* Horizontal connector between cards (desktop only) */}
              {idx < pasos.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-ember/20 md:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
