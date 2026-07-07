# Three.js Playground

A Three.js learning playground built with [Next.js](https://nextjs.org) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber). Each route is a self-contained scene exploring a different Three.js concept — from physics and model loading to custom GLSL shaders.

## Scenes

| Route | Description |
| --- | --- |
| `/chapter-2/galaxy` | Procedural particle galaxy generator |
| `/chapter-3/bouncing-balls` | Physics simulation with Rapier (rigid bodies, collisions) |
| `/chapter-3/models` | Loading glTF models with environment lighting |
| `/chapter-3/raycaster` | Raycasting and pointer interaction with meshes |
| `/shaders/flag` | Vertex-shader flag waving animation with texture |
| `/shaders/patterns` | Procedural fragment-shader patterns |
| `/shaders/galaxy` | Shader-based animated galaxy |
| `/shaders/raging-sea` | Animated ocean surface with custom vertex/fragment shaders |

## Tech Stack

- **[Next.js 16](https://nextjs.org)** — App Router, Turbopack, React Compiler enabled
- **[React 19](https://react.dev)** with **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** — declarative Three.js
- **[Three.js](https://threejs.org)** — WebGL rendering
- **[@react-three/drei](https://github.com/pmndrs/drei)** — helpers (controls, loaders, environments)
- **[@react-three/rapier](https://github.com/pmndrs/react-three-rapier)** — physics engine
- **[Leva](https://github.com/pmndrs/leva)** — GUI controls for live scene tweaking
- **GLSL shaders** — `.vert` / `.frag` / `.glsl` files imported as raw strings via `raw-loader` (configured in `next.config.ts` Turbopack rules)

## Getting Started

Requires Node.js 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and navigate to any scene route listed above.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format with Prettier, fix ESLint and Stylelint issues |

## Project Structure

```
src/app/
├── (page)/                 # Home page
├── (modules)/              # Scene routes
│   ├── chapter-2/          # Galaxy generator
│   ├── chapter-3/          # Physics, models, raycasting
│   └── shaders/            # Custom GLSL shader scenes
│       └── <scene>/(page)/
│           └── _private/parts/render/   # Canvas + scene setup
│               └── parts/               # Meshes, lights, shaders
└── layout.tsx

public/models/              # glTF assets (fox, room)
```

Each scene follows the same convention: `page.tsx` renders a `render` component from `_private/parts/`, which sets up the R3F `<Canvas>` and composes scene parts (meshes, lights, shaders) as isolated, typed subcomponents.

## Code Quality

- **ESLint** — `eslint-config-next`, `eslint-plugin-react`, `eslint-plugin-perfectionist` (sorted imports/objects)
- **Prettier** — formatting
- **Stylelint** — `stylelint-config-standard` with recess property ordering
- **TypeScript** — typed props per scene part
