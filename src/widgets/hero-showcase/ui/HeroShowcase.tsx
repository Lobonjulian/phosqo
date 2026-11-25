import { heroSlides } from "@/entities/hero/data/heroSlide";
import { useRotation } from "@/features/rotate-hero/model/useRotation";
import { Button } from "@/shared/ui/Button";
import styles from "./HeroShowcase.module.css";

export function HeroShowcase() {
  const current = useRotation({ total: heroSlides.length, ms: 20_000 });
  const currentSlide = heroSlides[current];

  return (
    <section className={styles.hero}>
      <span className={styles.hero__badge}>Nueva versión Glow UV</span>
      <h1 className={styles.hero__title}>PHOSQO</h1>
      <img
        key={current}
        className={styles.hero__image}
        src={currentSlide.image}
        alt={currentSlide.alt}
        decoding="async"
      />
      <p className={styles.hero__description}>
        Brillo en la oscuridad con los cosméticos que te hacen destacar donde quiera que vayas.
        Formulaciones de ultra pigmentación reactiva diseñadas para creadores nocturno
      </p>
      <div className={styles.hero__cta}>
        <Button href="#about" label="Descubre más" />
        <Button href="#colecciones" label="ver colecciones" variant="outline" />
      </div>
    </section>
  );
}
