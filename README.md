# Mikas Food 🐾

Sitio web oficial de **Mikas Food** - Sazonador natural de hígado para perros y gatos.

## 🚀 Tecnologías

- **Astro** - Framework web moderno y rápido
- **TypeScript** - Tipado estático
- Diseño minimalista y responsivo

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 🎨 Características

- ✨ Diseño moderno y minimalista
- 📱 Completamente responsivo
- 🎯 Sin sombras ni bordes (diseño limpio)
- ⚡ Optimizado para rendimiento
- 🐶 Enfocado en mascotas (perros y gatos)
- 📝 Blog con Content Collections y Markdown
- 🏷️ Sistema de tags y posts relacionados

## 📄 Estructura

```
/
├── public/
│   └── images/         # Imágenes del sitio
├── src/
│   ├── content/
│   │   ├── blog/       # Artículos del blog en Markdown
│   │   └── config.ts   # Configuración de Content Collections
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── blog/
│       │   ├── [slug].astro  # Página de artículo individual
│       │   └── index.astro   # Listado de artículos
│       └── index.astro       # Página principal
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🌟 Secciones

### Landing Page
- **Hero** - Presentación del producto
- **Beneficios** - Ventajas nutricionales
- **Modo de uso** - Instrucciones simples
- **Testimonios** - Historias de clientes
- **Contacto** - Información de contacto

### Blog
- **Listado de artículos** - Vista de todos los posts
- **Artículos individuales** - Contenido completo en Markdown
- **Posts relacionados** - Sugerencias por tags
- **Navegación integrada** - Acceso desde cualquier página

## 📝 Artículos del Blog

El sitio incluye 5 artículos informativos sobre nutrición de mascotas:

1. **Beneficios de la Alimentación Natural** - Ventajas de una dieta natural para perros y gatos
2. **10 Señales de Mala Nutrición** - Cómo identificar deficiencias nutricionales
3. **El Hígado: Superalimento Natural** - Beneficios del hígado para mascotas
4. **5 Pasos para Mejorar la Alimentación** - Guía práctica y accionable
5. **Tendencias en Nutrición 2025** - El futuro de la alimentación para mascotas

### Agregar Nuevos Artículos

Para crear un nuevo artículo:

1. Crea un archivo `.md` en `src/content/blog/`
2. Agrega el frontmatter con la metadata:

```markdown
---
title: "Título del Artículo"
description: "Descripción breve"
pubDate: 2024-11-15
author: "Equipo Mikas Food"
tags: ["nutrición", "salud"]
---

Tu contenido aquí en Markdown...
```

3. El artículo aparecerá automáticamente en `/blog`

## 📧 Contacto

- Email: info@mikas.food
- WhatsApp: +52 55 1234 5678
- Ubicación: Ciudad de México, México

---

Hecho con ❤️ para las mascotas
