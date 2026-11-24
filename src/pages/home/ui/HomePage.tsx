import { products } from "@/entities/product/data/products";
import { Marquee } from "@/shared/ui/Marquee";
import { HeroShowcase } from "@/widgets/hero-showcase/ui/HeroShowcase";
import { ProductGallery } from "@/widgets/product-gallery/ui/ProductGallery";

const textMarquee = ["100% VEGANO", "REACTIVO UV", "ENVÍO GRATIS", "HECHO EN COLOMBIA"];

export function HomePage() {
  return (
    <>
      <HeroShowcase />
      <Marquee items={textMarquee} />
      <ProductGallery products={products} title="Descubre La Colección Brillante" />
      <Marquee items={textMarquee} />
    </>
  );
}
