import { Button } from "@/shared/ui/Button";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../data/navigation";
import style from "./Header.module.css";

export function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={style.headerMobile}>
      <Button
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        label="☰"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={style.headerMobile__drawer} ref={drawerRef} id="mobile-drawer">
          <nav aria-label="Navegación móvil">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button label="Registrarse" onClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
