"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CARNES } from "@/lib/constants";

export default function Carnes() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.07 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="carnes" className="bg-carbon px-4 py-16 md:px-6 md:py-24">
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
            Nuestras carnes
          </p>
          <h2
            className="font-display text-3xl font-black text-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 900 }}
          >
            7 cortes. Un solo fuego.
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-ember md:mt-4 md:w-20" />
        </motion.div>

        {/* Grid: 2 cols mobile → 3 tablet → 4 desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {CARNES.map((carne) => (
            <motion.div
              key={carne.id}
              variants={item}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              className="group relative cursor-default overflow-hidden rounded-xl border border-white/5 bg-carbon-mid transition-colors duration-200 sm:rounded-2xl"
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden sm:h-40 md:h-48">
                <Image
                  src={carne.imagen}
                  alt={carne.nombre}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-mid via-transparent to-transparent" />
              </div>

              {/* Text */}
              <div className="p-3 sm:p-4">
                <h3
                  className="font-display text-sm font-bold leading-tight text-cream sm:text-base md:text-lg"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
                >
                  {carne.nombre}
                </h3>
                <p
                  className="mt-1 hidden text-xs font-400 leading-snug text-cream/55 sm:block md:text-sm"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 400 }}
                >
                  {carne.descripcion}
                </p>
              </div>

              {/* Ember border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-ember opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
