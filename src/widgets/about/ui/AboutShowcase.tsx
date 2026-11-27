import { aboutStats } from "@/entities/about/data/aboutStat";
import { Button } from "@/shared/ui/Button";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import style from "./AboutShowcase.module.css";

export function AboutShowcase() {
  const STAT_COLOR = {
    green: style["stat--green"],
    blue: style["stat--blue"],
    pink: style["stat--pink"],
  } as const;

  return (
    <section id="about" className={style.about}>
      <div className={style.aboutContainer}>
        <div className={style.about__content}>
          <SectionHeader
            title="Acerca de Phosqo"
            subtitle="Phosqo crea cosméticos y accesorios fluorescentes con fórmulas puras y seguras para brillar de día y deslumbrar de noche bajo cualquier espectro de luz UV y oscuridad total."
          />
          <ul className={style.about__stats}>
            {aboutStats.map((stat) => (
              <li key={stat.label} className={style.about__stat}>
                <strong className={`${style.about__statValue}  ${STAT_COLOR[stat.color]}`}>
                  {stat.value}
                </strong>
                <p>{stat.label}</p>
              </li>
            ))}
          </ul>
          <Button label="Conoce más" variant="outline" href="#conocer" />
        </div>
        <img
          className={style.about__image}
          src="/Línea_de_cosméticos_PHOSQO.png"
          alt="Linea de cosméticos phosqo"
          loading="lazy"
        />
      </div>
    </section>
  );
}
