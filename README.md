# Semilleros - FCFB UMSA

Prototipo en React con **JavaScript y JSX**, usando Vite. Incluye portada por bloques, directorio con b?squeda y filtros, fichas de semilleros, convocatorias y preguntas frecuentes. Los tres semilleros son ejemplos identificados; la identidad visual es provisional.

## Ejecutar

Las dependencias ya est?n instaladas en este equipo. Inicia el prototipo con:

```sh
npm run dev
```

Abre la direcci?n local que indique Vite, normalmente http://127.0.0.1:5173. En una instalaci?n nueva, ejecuta primero `npm install`. Requiere Node.js 22.12 o posterior compatible con Vite 7.

## Editar el prototipo

| Archivo                        | Contenido                                          |
| ------------------------------ | -------------------------------------------------- |
| `src/content/site.js`          | Identidad, men?, aviso de demostraci?n y contacto. |
| `src/content/home.js`          | Orden, visibilidad y textos de las secciones.      |
| `src/content/semilleros.js`    | Datos compartidos entre tarjetas y fichas.         |
| `src/content/convocatorias.js` | Convocatorias y sus fechas.                        |
| `src/content/recursos.js`      | Preguntas frecuentes y documentos.                 |
| `src/styles/tokens.css`        | Colores y tipograf?a.                              |
| `src/styles/globals.css`       | Dise?o adaptable a escritorio y m?vil.             |

Las p?ginas est?n en `src/pages/`, los bloques de inicio en `src/sections/` y los componentes reutilizables en `src/components/`. Para reordenar la portada, mueve las entradas de `homeSections`; para ocultar un bloque, cambia `enabled` a `false`. Mant?n habilitado el bloque principal. Los enlaces a ?C?mo participar? llevan a Recursos si esa secci?n est? deshabilitada.

Los ejemplos se reemplazan por registros reales con `id` y `slug` ?nicos. Usa `demo: false` solo para registros validados. Tambi?n habr? que actualizar los textos generales que describen la demostraci?n antes de una publicaci?n institucional.

Convocatorias y documentos est?n vac?os intencionalmente. No se inventaron contactos, tutores ni inscripciones. El prototipo no tiene backend ni panel de administraci?n. Las ilustraciones son SVG decorativos propios; no utiliza fuentes ni im?genes de terceros.

Esta etapa incluye ?nicamente el prototipo y el comando de desarrollo; se retiraron la configuraci?n de TypeScript, los scripts de compilaci?n y las pruebas automatizadas. La propuesta original se conserva en `ARQUITECTURA-SEMILLEROS.md`; la implementaci?n actual usa JS/JSX por decisi?n del usuario.
