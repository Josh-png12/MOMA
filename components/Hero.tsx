"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { WA_DEFAULT } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "30%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero.jpg"
          alt="Picada completa MOMA a la parrilla"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Stronger overlay for legibility on small screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/50 to-carbon" />
        <div className="absolute inset-0 bg-carbon/30 md:bg-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 md:py-0"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-3 text-xs font-600 uppercase tracking-[0.25em] text-ember sm:text-sm md:mb-4 md:tracking-[0.3em]"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
        >
          Dark Kitchen · Riohacha, La Guajira
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-5 font-display text-4xl font-black leading-tight text-cream sm:text-5xl md:mb-6 md:text-6xl lg:text-8xl"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 900 }}
        >
          El sabor que{" "}
          <span
            className="text-ember"
            style={{ textShadow: "0 0 40px rgba(255,77,0,0.5)" }}
          >
            enciende
          </span>{" "}
          Riohacha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8 text-base font-300 leading-relaxed text-cream/80 sm:text-lg md:mb-10 md:text-xl lg:text-2xl"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 300 }}
        >
          Picadas de carnes a la parrilla. Sin salón, sin espera.
          <br className="hidden sm:block" /> Solo sabor artesanal que llega hasta tu puerta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.65,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-4 text-base font-800 uppercase tracking-widest text-white shadow-2xl transition-all duration-200 hover:bg-orange-500 hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:text-lg"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 800,
              letterSpacing: "0.13em",
              boxShadow: "0 0 40px rgba(255,77,0,0.3)",
              touchAction: "manipulation",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Pedir Ahora
          </a>

          <a
            href="#picadas"
            className="flex w-full items-center justify-center rounded-full border border-cream/30 px-6 py-4 text-base font-600 uppercase tracking-widest text-cream/80 backdrop-blur-sm transition-all duration-200 hover:border-ember hover:text-ember sm:w-auto sm:px-8 sm:text-lg"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 600,
              letterSpacing: "0.13em",
              touchAction: "manipulation",
            }}
          >
            Ver Precios
          </a>
        </motion.div>

        {/* Scroll indicator — hidden on mobile to avoid overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden="true"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-cream/30 pt-1"
          >
            <div className="h-2 w-0.5 rounded-full bg-cream/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
