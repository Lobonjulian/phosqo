import style from "./Marquee.module.css";

export function Marquee({ items }: { items: readonly string[] }) {
  const textDuplicated = [...items, ...items];

  return (
    <div className={style.marquee} aria-hidden="true">
      <ul className={style.marquee__track}>
        {textDuplicated.map((item, i) => (
          <li key={i} className={style.marquee__item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
