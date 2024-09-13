# Proyecto React con TypeScript

Este proyecto es una aplicación construida con **React** y **TypeScript**. A continuación, encontrarás una breve explicación sobre algunos conceptos clave, así como detalles sobre la estructura del proyecto y los pasos para comenzar a trabajar con él.

## Conceptos Clave

### ¿Qué es un Componente?

En React, un **componente** es una pieza de código reutilizable que representa una parte de la interfaz de usuario (UI). Los componentes pueden ser clases o funciones y se encargan de renderizar el UI, gestionar el estado interno y manejar eventos. Los componentes permiten construir interfaces de usuario de forma modular y mantenible.

### ¿Qué es un Hook?

Un **hook** es una función especial en React que permite a los componentes funcionales usar características de React que antes solo estaban disponibles en componentes de clase, como el estado y el ciclo de vida. Los hooks permiten gestionar el estado y los efectos secundarios en componentes funcionales de manera más limpia y concisa.

### Hooks Más Usados

#### `useState`

`useState` es un hook que permite añadir estado local a un componente funcional. Retorna un par: el estado actual y una función que permite actualizar ese estado.

**Ejemplo**:
```tsx
const [count, setCount] = useState(0);
```

#### `useEffect`

`useEffect` es un hook que permite realizar efectos secundarios en componentes funcionales, como la suscripción a eventos o la carga de datos. Se ejecuta después de cada renderizado del componente y puede depender de variables específicas.

**Ejemplo**:
```tsx
useEffect(() => {
  // Efecto secundario
  document.title = `Has clickeado ${count} veces`;
}, [count]); // Dependencia
```

#### `useCallback`

`useCallback` es un hook que devuelve una versión memoizada de la función que solo cambia si alguna de las dependencias ha cambiado. Es útil para evitar que se recree una función en cada renderizado.

**Ejemplo**:
```tsx
const memoizedCallback = useCallback(() => {
  // Lógica de la función
}, [dependency]);
```

## Estructura del Proyecto

```
.
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   ├── post-it.png
│   │   └── react.svg
│   ├── components
│   │   ├── ColorDot.tsx
│   │   ├── Header.tsx
│   │   ├── NewTaskForm.tsx
│   │   ├── SelectCustom.tsx
│   │   └── TaskItem.tsx
│   ├── contexts
│   ├── hooks
│   ├── pages
│   │   └── MyDayPage.tsx
│   ├── services
│   │   └── TaskService.tsx
│   ├── types
│   │   ├── ComponentTypes.ts
│   │   └── TaskItemType.ts
│   ├── utils
│   ├── App.css
│   ├── App.tsx
│   ├── global.d.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Requisitos Previos
- Node.js
- pnpm 

## Cómo Empezar

Para empezar a trabajar con el proyecto, sigue estos pasos:

1. Instalar PNPM
```
npm install -g pnpm
```
2. Instalar Node.js
[NodeJs](https://nodejs.org/en)

3. Clona el repositorio:
```
git clone [https://github.com/MarlonVelezB/todolist-app.git](https://github.com/MarlonVelezB/todolist-app.git)
cd todo-api
```
4. Instala las dependencias:
```
pnpm install
```
5. Ejecutar y iniciar app
```
pnpm run dev
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto

📱 [WhatsApp](https://wa.me/593979574883?text=Hola,%20vi%20tu%20repositorio%20en%20GitHub) - +593 97 957 4883  
✉️ [marlon.velez.brito@gmail.com](mailto:marlon.velez.brito@gmail.com)

