# Cenius
Sistema central para administrar tu e-commerce de manera inteligente

## Características

- Administración de productos: Agregar, editar y eliminar productos, incluyendo detalles como nombre, descripción, precio, imágenes, etc.
- Gestión de categorías: Crear y organizar categorías para una mejor organización de los productos.
- Control de inventario: Realizar un seguimiento del stock de productos y recibir alertas de escasez de inventario.
- Procesamiento de pedidos: Ver, actualizar y administrar los pedidos realizados por los clientes.
- Administración de usuarios: Gestionar usuarios con diferentes roles y permisos de acceso.
- Estadísticas y análisis: Generar informes y estadísticas sobre las ventas, visitas, y otras métricas relevantes.

## Requisitos del Sistema

- NODE >= 18.0
- npm

## Configuracion recomendada del IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y deshabilita Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Soporte de tipos para importaciones `.vue` en TS

TypeScript no puede manejar información de tipos para las importaciones `.vue` de forma predeterminada, por lo que reemplazamos la CLI `tsc` con `vue-tsc` para la comprobación de tipos. En los editores, necesitamos el [Plugin de TypeScript Vue (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) para que el servicio de lenguaje TypeScript reconozca los tipos `.vue`.

Si el complemento independiente de TypeScript no es lo suficientemente rápido para ti, Volar también ha implementado un [Modo Take Over](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) que es más eficiente. Puedes habilitarlo siguiendo estos pasos:

1. Desactiva la extensión integrada de TypeScript
    1) Ejecuta `Extensions: Show Built-in Extensions` en la paleta de comandos de VSCode
    2) Encuentra `TypeScript and JavaScript Language Features`, haz clic derecho y selecciona `Disable (Workspace)`
2. Vuelve a cargar la ventana de VSCode ejecutando `Developer: Reload Window` en la paleta de comandos.


## Configuracion inicial del proyecto

### 1. Clona el repositorio
```sh
git clone https://github.com/manuel-salvador/cenius.git
```

### 2. Instala las dependencias

```sh
npm install
```

### 3. Compilar y hot-reloaded para Desarrollo

```sh
npm run dev
```

### 4. Comprobar Tipos, Compilar y Minificar para Producción

```sh
npm run build
```

### 5. Ejecutar Pruebas Unitarias con [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### 6. Lint con [ESLint](https://eslint.org/)

```sh
npm run lint
```
