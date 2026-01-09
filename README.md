# Práctica: Desarrollo de Interfaz Web
## Mi Librería (InkHeart)

**Tecnologías:** HTML5, CSS3, Flexbox, Grid Layout y JavaScript  
**Aplicación del diseño realizado en Figma**

---

## 1. Introducción

El objetivo de esta práctica es implementar la interfaz de usuario del sitio web **"Mi Librería (InkHeart)"**, partiendo de un prototipo diseñado previamente en Figma.

La implementación se ha realizado utilizando:
- HTML5 semántico
- CSS moderno (Flexbox y Grid Layout)
- JavaScript

Se ha mantenido una alta fidelidad visual respecto al diseño original.

Durante el desarrollo se han utilizado herramientas de apoyo basadas en IA para acelerar la conversión del diseño a código, realizando posteriormente ajustes manuales para adaptar el resultado a tecnologías web estándar.

---

## 2. Estructura y Semántica

El proyecto utiliza correctamente etiquetas semánticas de HTML5:

- `<header>` y `<footer>` para las zonas comunes
- `<nav>` para la navegación principal
- `<main>` para el contenido central
- `<section>` para agrupar bloques de contenido
- `<aside>` para el menú lateral de categorías en la tienda

La estructura y los estilos se encuentran separados en archivos distintos (HTML y CSS).

---

## 3. Proceso de Desarrollo

### 3.1. Diseño en Figma
Se partió de un mockup completo que sirvió como referencia visual durante todo el desarrollo.

### 3.2. Generación inicial de código
Se utilizó el plugin de Figma **Builder.io** para generar una primera versión del código del mockup, basada inicialmente en React.

### 3.3. Adaptación a HTML, CSS y JavaScript
El proyecto fue adaptado a tecnologías web estándar mediante el uso de **Antigravity**, que analizó la estructura visual, medidas y estilos del diseño generado.

A partir de esta base, se obtuvo una versión funcional implementada únicamente con:
- HTML
- CSS
- JavaScript

### 3.4. Ajustes finales y fidelidad visual
- Se añadieron funcionalidades como un **carrusel de libros destacados**
- Se realizaron ajustes iterativos para mejorar la similitud con el diseño original
- Se aplicaron los colores exactos definidos en Figma
- Se realizaron pequeños cambios visuales basados en capturas e indicaciones concretas

---

## 4. Interfaz Común

### Cabecera (`<header>`)
- Incluye el logotipo y el nombre del sitio
- Los elementos están alineados horizontal y verticalmente mediante CSS

### Navegación (`<nav>`)
- Contiene una lista de enlaces (`<ul>`) con acceso a las distintas páginas del sitio
- La navegación es común en todas las páginas

### Buscador
- El buscador se sitúa en una sección independiente debajo de la cabecera
- Está compuesto por un campo de texto para la búsqueda de libros

### Pie de Página (`<footer>`)
Estructura dividida en tres columnas:
1. Enlaces legales
2. Identidad del sitio
3. Redes sociales

---

## 5. Zonas de Contenido

### Página Principal (`index.html`)
- **Sección Hero**: presentación de la marca y su propuesta de valor
- **Sección de novedades**: libros destacados mostrados mediante un carrusel
- **Sección de localización**: información de tiendas físicas con mapa integrado

### Página de Productos (`comprar.html`)
- **Menú lateral** (`<aside>`): categorías de productos
- **Zona principal**: rejilla de productos generada dinámicamente mediante JavaScript

Cada tarjeta de producto muestra:
- Nombre del libro
- Imagen
- Información básica y precio

---

## 6. Tecnologías Utilizadas

- **HTML5**
- **CSS3**
  - CSS Flexbox
  - CSS Grid Layout
- **JavaScript** (Vanilla)
- **Figma** (diseño)
- **Builder.io** (plugin de Figma)
- **Antigravity** (conversión y refinamiento)

---

## 7. Fidelidad al Diseño

El resultado final mantiene una **alta fidelidad visual** respecto al prototipo original de Figma, respetando:
- La estructura
- Los colores
- El estilo general del diseño

---

## 8. Estructura de Archivos

```
libreria_web/
├── index.html              # Página principal
├── comprar.html           # Página de catálogo/tienda
├── style.css              # Estilos principales
├── main.js                # Lógica JavaScript
├── books.js               # Base de datos de libros
├── logo-image.png         # Logo de InkHeart
├── bookCovers/            # Carpeta de portadas de libros
│   ├── 9788410163706.webp
│   ├── 9788410163713.webp
│   └── ... (40 imágenes total)
└── README.md              # Este archivo
```

---

## 9. Características Principales

### Paleta de Colores
```css
--primary-navy: #2c4a5e;
--secondary-tan: #b88860;
--secondary-cream: #f5e6d0;
--accent-yellow: #ffc107;
--sidebar-bg: #ffec99;
```

### Tipografía
- **Logo**: Climate Crisis y Birthstone Bounce
- **Cuerpo del texto**: Inter
- **Títulos decorativos**: Playfair Display

---

**Desarrollado para InkHeart - Tu librería de fantasía y romance** ✨📚