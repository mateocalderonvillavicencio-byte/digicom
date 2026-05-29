# Digimon App - Ionic Angular

Aplicación móvil desarrollada con Ionic Framework y Angular que consume la API pública de Digimon.

## 📋 Características

- Listado de Digimon con imágenes y niveles
- Búsqueda en tiempo real
- Vista de detalle individual
- Pull-to-refresh (ion-refresher)
- Loading states con ion-spinner
- Navegación entre pantallas
- Diseño moderno y profesional

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/mateocalderonvillavicencio-byte/digicom.git
cd digicom

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start
```

## 📱 Estructura del Proyecto

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.routes.ts
│   ├── app.module.ts
│   ├── services/
│   │   └── data.service.ts
│   ├── interfaces/
│   │   └── digimon.interface.ts
│   ├── home/
│   │   ├── home.page.ts
│   │   ├── home.page.html
│   │   └── home.page.scss
│   └── detail/
│       ├── detail.page.ts
│       ├── detail.page.html
│       └── detail.page.scss
├── theme/
│   └── global.scss
├── assets/
├── index.html
└── main.ts
```

## 🔧 Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run start` | Ejecuta la app en modo desarrollo |
| `npm run build` | Genera build de producción |
| `npm run test` | Ejecuta los tests unitarios |

## 🎨 Diseño

- Tarjetas estilizadas con sombras suaves
- Bordes redondeados
- Espaciado profesional
- Colores agradables usando el tema por defecto de Ionic

## 📦 API Utilizada

`https://digi-api.com/api/v1/digimon?pageSize=50`

## 🛠️ Tecnologías

- Angular 19 (standalone components)
- Ionic Angular 8
- TypeScript 5.5
- SCSS