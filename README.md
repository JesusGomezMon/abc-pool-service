# ABC Swimming Pool Service — Landing Page

Migración de landing page estática HTML a Next.js (App Router) con soporte multiidioma (es/en).

## Stack

- **Framework**: Next.js 16 (App Router)
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Nunito Sans, Sora (Google Fonts)
- **i18n**: Diccionario propio tipado (no librerías externas)

## Estructura

```
app/
├── page.tsx                 # Redirección a idioma por defecto
├── layout.tsx              # Layout raíz
├── globals.css             # Estilos globales (variables CSS, tipografía)
└── [lang]/
    ├── layout.tsx          # Layout dinámico por idioma
    ├── page.tsx            # Landing page (Client Component)
    └── styles.module.css   # Estilos de la página
lib/
└── i18n.ts                 # Diccionario tipado (es/en)
```

## Idiomas Soportados

- **Español** (`/es`) — por defecto
- **Inglés** (`/en`)

## Desarrollo

```bash
# Instalar dependencias (si es la primera vez)
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Acceso:
# http://localhost:3000       → redirige a /es
# http://localhost:3000/es    → Español
# http://localhost:3000/en    → Inglés
```

## Build para producción

```bash
# Compilar
pnpm build

# Ejecutar servidor de producción
pnpm start
```

## Características

✅ Rutas dinámicas por idioma (`[lang]`)  
✅ Diccionario TypeScript tipado — detecta claves faltantes  
✅ Estilos CSS preservados pixel-exacto del original  
✅ Scroll reveal animations (Intersection Observer)  
✅ Landing page completa con 15+ secciones  
✅ Responsive design (mobile-first)  
✅ Cambio de idioma fluido (botón en navbar)  
✅ Compilación estática con pre-rendering (SSG)

## Archivos Clave

| Archivo | Propósito |
|---------|-----------|
| `lib/i18n.ts` | Diccionario de traducciones tipado |
| `app/[lang]/styles.module.css` | Todos los estilos de la landing |
| `app/[lang]/page.tsx` | Componente principal de la landing |
| `app/globals.css` | Variables CSS, fonts, reset base |

## Notas de Desarrollo

- **Sin librerías de i18n externas**: Las traducciones se cargan via importación TypeScript tipada
- **"use client"** solo en `page.tsx` para manejo de idioma e Intersection Observer
- **CSS Modules**: Aislamiento de estilos, sin conflictos de nombres
- **Static Generation**: Pre-rendering de `/es` y `/en` en build time

## HTML Original

El archivo HTML bundled original se encontraba en:  
`C:\Users\Jesus Gomez\Downloads\ABC Pool Service - Carta de Venta.html`

Todas las secciones, textos, estilos e interactividad han sido migrados a este proyecto Next.js.
