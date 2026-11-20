import { formatCOP } from "@/shared/lib/format";
import Button from "@/shared/ui/Button";
import type { Product } from "../model/types";
import style from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  const TINT_CLASS = {
    violet: style["card--violet"],
    blue: style["card--blue"],
    magenta: style["card--magenta"],
    green: style["card--green"],
  } as const;

  return (
    <article className={`${style.card} ${TINT_CLASS[product.tint]}`}>
      {product.badge && (
        <div className={style.card__badges}>
          <span className={style.card__badge}>{product.badge}</span>
        </div>
      )}
      <img
        src={product.image}
        alt={`imagen de ${product.name}`}
        className={style.card__image}
        decoding="async"
        loading="lazy"
      />
      <div className={style.card__text}>
        <div className={style.card__titles}>
          <h3 className={style.card__title}>{product.name}</h3>
          <p className={style.card__price}>{formatCOP(product.price)}</p>
        </div>
        <p className={style.card__description}>{product.description}</p>
        <Button label="agregar al carrito" variant="outline" />
      </div>
    </article>
  );
}
