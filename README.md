# pruebaT-cnicaNextJs

# Nombre del Proyecto

**Descripción**: Este proyecto es una aplicación de formulario multi-paso que permite a los usuarios ingresar información de productos, incluyendo detalles básicos y adicionales, utilizando un enfoque de gestión de estado con React Context. La aplicación valida la entrada del usuario y proporciona un manejo de errores eficaz.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura de Carpetas](#estructura-de-carpetas)

## Características

- **Framework Next.js**: Utiliza Next.js para la creación de aplicaciones React optimizadas y basadas en servidor.
- **Formulario multi-paso**: Permite a los usuarios completar formularios en pasos separados.
- **Validación de entradas**: Verifica que los datos ingresados cumplan con ciertos criterios antes de avanzar.
- **Manejo de errores**: Muestra mensajes de error claros y específicos para guiar al usuario.
- **Contexto de React**: Utiliza el contexto para compartir el estado del formulario entre componentes.
- **Carga dinámica de categorías**: Obtiene categorías desde una API externa para que los usuarios puedan seleccionarlas.

## Requisitos

Antes de instalar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 21.7.3)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Jonathanvg97/pruebaT-cnicaNextJs.git
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar el proyecto **:

   ```bash
   npm run dev
   ```

## Estructura

```
└── 📁src
    └── 📁app
        └── 📁components
            └── MultiStepForm.tsx
            └── Step1.tsx
            └── Step2.tsx
            └── Step3.tsx
        └── 📁context
            └── FormContext.tsx
            └── FormProvider.tsx
            └── useFormContext.ts
        └── 📁hooks
            └── useFetchCategories.ts
            └── useSubmitProduct.ts
        └── 📁interfaces
            └── ButtonStepInterface.ts
            └── CategotyInterface.ts
            └── FormInterfaces.ts
            └── modalInterface.ts
        └── 📁newProduct
            └── page.tsx
        └── 📁UI
            └── ButtonStep.tsx
            └── Modal.tsx
        └── 📁utils
        └── globals.css
        └── layout.tsx
        └── page.tsx
```
