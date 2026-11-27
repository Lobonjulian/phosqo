import { Button } from "@/shared/ui/Button";
import { useEffect, useRef, useState } from "react";
import style from "./Header.module.css";
import { HeaderMobile } from "./HeaderMobile";
import { NAV_ITEMS } from "../data/navigation";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <a href="/">
            <img src="/phosqo.svg" alt="Phosqo" width={65} height={65} />
          </a>
        </div>

        <HeaderMobile />

        <nav aria-label="Navegación Principal">
          <ul className={style.header__nav}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={style.header__action}>
          <Button
            label="🔍"
            aria-expanded={searchOpen}
            aria-controls="buscador"
            aria-label={searchOpen ? "Cerrar buscador" : "Abrir buscador"}
            onClick={() => setSearchOpen((o) => !o)}
            variant="icon"
          />
          {searchOpen && (
            <input
              id="buscador"
              ref={inputRef}
              type="search"
              className={style.header__input}
              placeholder="Buscar brillo UV..."
            />
          )}
          <Button label="Registrarse" />
        </div>
      </div>
    </header>
  );
}
