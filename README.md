# ✨ Phosqo - Cosmética Neón UV

## Especificación Técnica y Alcance

**Documento:** ESPEC-2026-004  
**Versión:** 0.1  
**Fecha:** noviembre de 2026  
**Preparado por:** Ingeniería Frontend  
**Estado:** Especificación aprobada · Pendiente de implementación

---

## 1. Resumen ejecutivo

**Phosqo** es una landing page editorial para una marca de cosmética neón reactiva a luz UV. El proyecto replica fielmente el diseño de referencia mediante una arquitectura vanilla JavaScript data-driven, con componentes reutilizables, design tokens y accesibilidad básica, sin frameworks de UI.

## 2. Alcance

### Incluido (v0.1)

- Header con logo, navegación por anclas, buscador expandible y botón de registro.
- Hero con rotación automática de imagen cada 20 segundos y CTAs con destino.
- Sección About con superficie clara, estadísticas y botón.
- Sección Descubre con 4 tarjetas de producto renderizadas desde datos.
- Cinta animada (Marquee) reutilizable, presente en 2 ubicaciones.
- Sección Donde la Belleza con 4 tarjetas de características e imagen central.
- Sección Testimonios con 3 tarjetas renderizadas desde datos.
- CTA final con superficie clara y botón de acción.
- Footer multicolumna con formulario de newsletter y copyright.

### Excluido (fuera de alcance v0.1)

- Carrito de compras funcional (planificado para v0.2).
- Backend, autenticación real y pasarela de pagos.

## 3. Mapa de secciones

1. Header (logo, nav, buscador, carrito, registro)
2. Hero (badge, título, imagen principal con iconos, descripción, 2 CTAs)
3. About (superficie clara, título, descripción, estadísticas, botón, imagen)
4. Descubre (título, descripción, 4 ProductCards)
5. Marquee superior (cinta animada)
6. Donde la Belleza (título, subtítulo, 4 FeatureCards, imagen central)
7. Testimonios (eyebrow, título, 3 TestimonialCards)
8. CTA final (óvalo claro, título, descripción, botón)
9. Marquee inferior (cinta animada)
10. Footer (4 columnas, newsletter, redes, copyright)

## 4. Requisitos funcionales

| ID    | Requisito                                                                               | Prioridad | Estado v0.1  |
| ----- | --------------------------------------------------------------------------------------- | --------- | ------------ |
| RF-01 | El header debe mostrar logo, nav con anclas funcionales, buscador expandible y registro | Alta      | ⏳ Pendiente |
| RF-02 | El hero debe rotar su imagen principal automáticamente cada 20 segundos                 | Media     | ⏳ Pendiente |
| RF-03 | Los CTAs del hero deben navegar a `#about` y `#colecciones`                             | Alta      | ⏳ Pendiente |
| RF-04 | About debe mostrar título, descripción, 3 estadísticas, botón e imagen desde datos      | Media     | ⏳ Pendiente |
| RF-05 | Descubre debe renderizar 4 ProductCards desde datos (imagen, nombre, precio, botón)     | Alta      | ⏳ Pendiente |
| RF-06 | Marquee debe ser reutilizable y renderizarse en 2 ubicaciones desde un array de items   | Media     | ⏳ Pendiente |
| RF-07 | Donde la Belleza debe mostrar 4 FeatureCards (icono, título, texto) e imagen central    | Media     | ⏳ Pendiente |
| RF-08 | Testimonios debe renderizar 3 TestimonialCards (rating, cita, autor, rol) desde datos   | Media     | ⏳ Pendiente |
| RF-09 | El CTA final debe mostrar título, descripción y botón de acción                         | Baja      | ⏳ Pendiente |
| RF-10 | El footer debe ser multicolumna con newsletter, redes sociales y copyright              | Alta      | ⏳ Pendiente |

## 5. Requisitos no funcionales

| ID     | Requisito                                                                            |
| ------ | ------------------------------------------------------------------------------------ |
| RNF-01 | React 18+ con TypeScript en modo estricto (`strict: true`)                           |
| RNF-02 | Fidelidad visual al diseño de referencia proporcionado                               |
| RNF-03 | Arquitectura por componentes: `components/` + `data/` + `types/`                     |
| RNF-04 | CSS semántico con nomenclatura BEM y design tokens; sin estilos en línea ni Tailwind |
| RNF-05 | HTML semántico, contraste legible y navegación por teclado                           |
| RNF-06 | Diseño responsive (móvil, tablet y desktop)                                          |
| RNF-07 | Vite como herramienta de build                                                       |

## 6. Stack Tecnológico

> ![React](https://img.shields.io/badge/React-19+-61DAFB?style=flat&logo=react)
> ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript)
> ![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat&logo=vite)
> ![PNPM](https://img.shields.io/badge/PNPM-Package%20Manager-F69220?style=flat&logo=pnpm)
> ![CSS3](https://img.shields.io/badge/CSS3-BEM%20%2B%20Tokens-1572B6?style=flat&logo=css3)

## Licencia

MIT

## 👨‍💻 Autor

Julián Lobón - Desarrollador Frontend
"No solo aprendí a codificar. Aprendí a pensar como arquitecto."
