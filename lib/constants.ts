export const WHATSAPP_NUMBER = "573113841446";

export const CARNES = [
  {
    id: 1,
    nombre: "Chorizo de Cerdo",
    descripcion: "Jugoso chorizo artesanal directo a las brasas",
    imagen: "/images/chorizo-cerdo.jpg",
  },
  {
    id: 2,
    nombre: "Chorizo de Carne",
    descripcion: "Chorizo de res con especias de la casa",
    imagen: "/images/chorizo-carne.jpg",
  },
  {
    id: 3,
    nombre: "Chinchurria",
    descripcion: "Tripa de res asada a punto de perfección",
    imagen: "/images/chinchurria.jpg",
  },
  {
    id: 4,
    nombre: "Morcilla",
    descripcion: "Morcilla criolla con hierbas frescas",
    imagen: "/images/morcilla.jpg",
  },
  {
    id: 5,
    nombre: "Ubre",
    descripcion: "Ubre crujiente con toque ahumado",
    imagen: "/images/ubre.jpg",
  },
  {
    id: 6,
    nombre: "Cuajo",
    descripcion: "Cuajo tierno a las brasas, sabor intenso",
    imagen: "/images/cuajo.jpg",
  },
  {
    id: 7,
    nombre: "Lomo de Cerdo",
    descripcion: "Lomo de cerdo jugoso, suave y lleno de sabor",
    imagen: "/images/lomo-cerdo.jpg",
  },
];

export const PICADAS = [
  {
    id: 1,
    nombre: "Picada 1 Carne",
    precio: 10000,
    carnes: 1,
    descripcion: "Elige tu corte favorito",
    imagen: "/images/picada-1.jpg",
    badge: null,
    popular: false,
    mensaje: "Hola MOMA! Quiero pedir una Picada de 1 Carne ($10.000). ¿Cuáles carnes hay disponibles hoy?",
  },
  {
    id: 2,
    nombre: "Picada 2 Carnes",
    precio: 15000,
    carnes: 2,
    descripcion: "Combina dos cortes irresistibles",
    imagen: "/images/picada-2.jpg",
    badge: null,
    popular: false,
    mensaje: "Hola MOMA! Quiero pedir una Picada de 2 Carnes ($15.000). ¿Cuáles carnes hay disponibles hoy?",
  },
  {
    id: 3,
    nombre: "Picada 3 Carnes",
    precio: 23000,
    carnes: 3,
    descripcion: "La combinación perfecta del sabor guajiro",
    imagen: "/images/picada-3.jpg",
    badge: "MÁS PEDIDA",
    popular: true,
    mensaje: "Hola MOMA! Quiero pedir una Picada de 3 Carnes ($23.000) 🔥 ¿Cuáles carnes hay disponibles hoy?",
  },
  {
    id: 4,
    nombre: "Picada 4 Carnes",
    precio: 30000,
    carnes: 4,
    descripcion: "Para los verdaderos amantes de la parrilla",
    imagen: "/images/picada-4.jpg",
    badge: null,
    popular: false,
    mensaje: "Hola MOMA! Quiero pedir una Picada de 4 Carnes ($30.000). ¿Cuáles carnes hay disponibles hoy?",
  },
  {
    id: 5,
    nombre: "Picada Completa",
    precio: 45000,
    carnes: 7,
    descripcion: "Todas las carnes del día en un solo festín",
    imagen: "/images/picada-completa.jpg",
    badge: "LA REINA",
    popular: false,
    mensaje: "Hola MOMA! Quiero pedir la Picada Completa 👑 ($45.000) con todas las carnes del día. ¿La tienen disponible?",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = buildWhatsAppUrl(
  "Hola MOMA! Me gustaría hacer un pedido. ¿Cuáles carnes tienen disponibles hoy?"
);
