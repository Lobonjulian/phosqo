import type { Product } from "../model/types";

export const products: readonly Product[] = [
  {
    id: "moon",
    name: "Moon Glow",
    price: 22000,
    image: "/images/moon_glow.avif",
    tint: "violet",
    badge: "nuevo",
    description: "Iluminador en polvo fosforescente.",
  },
  {
    id: "electric",
    name: "Electric Blue",
    price: 19500,
    image: "/images/electric_blue.avif",
    tint: "blue",
    badge: "nuevo",
    description: "Delineador líquido reactivo con luz negra.",
  },
  {
    id: "lava",
    name: "Lava Flow",
    price: 24000,
    image: "/images/lava_flow.avif",
    tint: "magenta",
    badge: "nuevo",
    description: "Labial UV con color neón radiante",
  },
  {
    id: "toxic",
    name: "Toxic Green",
    price: 18500,
    image: "/images/toxic_green.avif",
    tint: "green",
    description: "Gel bioluminiscente con glitter fluorescente ultra vibrante.",
  },
];
