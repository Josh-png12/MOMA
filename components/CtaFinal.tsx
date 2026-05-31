"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WA_DEFAULT } from "@/lib/constants";

export default function CtaFinal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/picada-completa.jpg"
          alt="Picada completa MOMA"
          fill
          className="object-cover object-center"
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-carbon/85 md:bg-carbon/80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,77,0,0.07) 0%, rgba(13,13,13,0.94) 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.65 }}
        >
          <p
            className="mb-3 text-xs font-600 uppercase tracking-[0.28em] text-ember md:mb-4 md:text-sm"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
          >
            Sin salón. Sin reservas.
          </p>

          <h2
            className="mb-5 font-display text-4xl font-black leading-tight text-cream md:mb-6 md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 900 }}
          >
            La brasa no{" "}
            <span
              className="text-ember"
              style={{ textShadow: "0 0 30px rgba(255,77,0,0.4)" }}
            >
              espera.
            </span>
          </h2>

          <p
            className="mb-8 text-base font-300 leading-relaxed text-cream/70 md:mb-10 md:text-xl lg:text-2xl"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 300 }}
          >
            Escríbenos ahora y en minutos tienes tu picada lista.
            <span className="hidden sm:inline">
              {" "}
              Sazón que se comparte, sabor que se recuerda.
            </span>
          </p>

          <motion.a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-ember px-6 py-4 text-base font-800 uppercase tracking-widest text-white shadow-2xl transition-colors duration-200 hover:bg-orange-500 sm:inline-flex sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 800,
              letterSpacing: "0.13em",
              boxShadow: "0 0 60px rgba(255,77,0,0.3)",
              touchAction: "manipulation",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Pedir Ahora por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
