import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOMA | Picadas a la Parrilla – Riohacha, La Guajira",
  description:
    "Dark kitchen de picadas a la parrilla en Riohacha. Chorizo, chinchurria, morcilla, ubre, cuajo y lomo. Pide ya por WhatsApp.",
  openGraph: {
    title: "MOMA | Picadas a la Parrilla",
    description: "Las mejores picadas a la parrilla en Riohacha. Pide por WhatsApp.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
