import type { Product } from "@/entities/product/model/types";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import style from "./ProductGallery.module.css";

export function ProductGallery({
  products,
  title,
}: {
  products: readonly Product[];
  title: string;
}) {
  return (
    <section id="colecciones" className={style.gallery}>
      <SectionHeader title={title} />
      <ul className={style.gallery__grid}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
