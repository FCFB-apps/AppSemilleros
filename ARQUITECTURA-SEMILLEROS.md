# Propuesta de arquitectura: Semilleros FCFB–UMSA

Fecha de revisión: 27 de septiembre de 2026. Alcance: análisis y propuesta previa a implementar React.

## 1. Decisión recomendada

Construir un portal público con una portada organizada en secciones, un directorio y una ficha reutilizable para cada semillero. La portada orienta; el directorio permite encontrar; la ficha permite conocer y contactar.

Separar contenido, presentación y configuración. Un semillero se registra una sola vez y sus datos alimentan tanto su tarjeta como su ficha. Las secciones pueden ordenarse y ocultarse mediante configuración, conservando plantillas específicas para cada tipo de contenido.

## 2. Análisis del Word

Fuente: `programas-semilleros-investigacion.docx`, único Word del directorio. Contiene diez referencias externas, no un inventario de semilleros FCFB ni su identidad gráfica oficial.

Método: lectura del contenido XML, estilos, tabla y saltos de página guardados por Word. Los metadatos indican cuatro páginas y existen tres marcadores de cambio de página. La distribución siguiente corresponde a esos marcadores; no se verificó mediante renderizado en Word y puede variar al abrir el archivo con otro motor o fuentes.

| Página | Contenido                                                                                     | Diseño registrado y evaluación                                                                                                                       |
| ------ | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | Título, subtítulo, introducción y tabla con referencias 1–5.                                  | Jerarquía clara al inicio. Cuatro columnas con URLs extensas y texto pequeño hacen que la tabla sea poco apropiada para móvil.                       |
| 2      | Referencias 6–10 de la tabla; inicio de descripciones detalladas: RedCOLSI y comienzo de UPB. | Cambia de tabla comparativa a fichas textuales. La ficha de UPB se divide entre páginas. Conviene trasladar esta separación a listado y detalle web. |
| 3      | Continuación de UPB y descripciones 3–8.                                                      | Repite título, institución, enlace y descripción. Es una estructura de datos reutilizable; en web conviene evitar una página de lectura tan extensa. |
| 4      | Descripciones 9–10: Unireformada y ÚNICA.                                                     | Mantiene el patrón de ficha. El documento termina sin una síntesis que elija qué patrones adoptar para FCFB.                                         |

Estilo registrado: papel Carta vertical, márgenes de 2,54 cm; título Calibri de 24 pt, negrita, azul `#003366`; subtítulo Calibri de 14 pt, cursiva, `#4682B4`. Tabla con cabecera azul y texto blanco, filas alternas con `#F0F4F8`; descripciones de tabla de 8,5 pt. Encabezados de sección de 14 pt y de ficha de 13 pt. Pie gris alineado a la derecha con número de página. El archivo no incluye imágenes.

La jerarquía y consistencia son aprovechables. La repetición entre tabla y detalle, URLs completas y fragmentación de fichas son problemas a resolver en la web. Los azules pertenecen al documento de referencia; no acreditan los colores oficiales de FCFB.

## 3. Las diez páginas de referencia

Se revisaron contenido y estructura web accesibles. No se obtuvieron capturas renderizadas: las observaciones de estilo se refieren al enfoque editorial y organización, no a una auditoría visual de CSS, colores, tipografía o comportamiento móvil. Las decisiones de adaptación son propuestas propias.

| Referente y fuente                                                                                                                              | Organización observada                                                                                                                          | Qué adoptar para FCFB                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [RedCOLSI](https://web.redcolsi.org/)                                                                                                           | Portal de red: directorio, convocatorias, noticias, videos, publicaciones y contactos. Estilo editorial orientado a actividad de la comunidad.  | Bloques de novedades y oportunidades. Mostrar pocos destacados en inicio y enlazar al archivo completo.                                              |
| [UPB](https://www.upb.edu.co/es/investigacion/nuestro-sistema/semilleros)                                                                       | Explicación inicial, cifras fechadas, directorio por sedes y áreas, contactos. Organización institucional y jerárquica.                         | Introducción breve y agrupación por área. En FCFB usar categorías locales verificadas; evitar copiar su estructura multicampus.                      |
| [Javeriana](https://www.javeriana.edu.co/investigacion-creacion/semilleros)                                                                     | Presentación, enlace a normativa y catálogo amplio con descripciones, líneas, unidades y responsables. Enfoque de consulta académica detallada. | Ficha estructurada con líneas de investigación y tutor; normativa accesible. Dividir el catálogo en resultados y fichas para facilitar búsqueda.     |
| [La Sabana](https://www.unisabana.edu.co/investigacion/semilleros-de-investigacion)                                                             | Agrupaciones por campos académicos; la estructura accesible incluye tarjetas y controles de modal; registros con grupo, tutor y correo.         | Tarjetas por semillero con contacto visible. Preferir una URL propia por ficha para compartirla directamente.                                        |
| [Rosario](https://urosario.edu.co/escuela-de-estudios-sociales-politicos-e-internacionales/investigacion/semilleros)                            | Introducción e imagen, seguidas de apartados por semillero con tutor y descripción. Estilo descriptivo centrado en temas.                       | Explicar qué investiga cada grupo con lenguaje comprensible, además de su nombre.                                                                    |
| [Alianza RED](https://alianzared.org/vinculacion-de-universidades-con-la-red-latinoamericana-de-semilleros-de-investigacion/)                   | Página de vinculación con objetivos, beneficios, instituciones aliadas y llamada a participar.                                                  | Explicar beneficios y cómo participar. Mostrar alianzas únicamente cuando FCFB confirme su existencia.                                               |
| [Universidad Continental](https://estudiantes.ucontinental.edu.pe/noticias/convocatoria-2021-se-parte-de-semilleros-de-investigacion-de-la-uc/) | Publicación de convocatoria identificada como 2021, con objetivos del programa. Enfoque de noticia y oportunidad.                               | Dar a las convocatorias fecha, vigencia y detalle propio. Esta referencia es histórica, no una convocatoria vigente.                                 |
| [UNAD](https://investigacion.unad.edu.co/)                                                                                                      | La URL produjo error en dos intentos. El Word la describe como sistema de gestión de investigación.                                             | Su diseño queda pendiente de revisión. El documento sugiere distinguir difusión pública y gestión interna, sin afirmar funciones actuales del sitio. |
| [Unireformada](https://www.unireformada.edu.co/semilleros-de-investigacion/)                                                                    | Tablas con programa, semillero, líneas, grupo, docente e integrantes. Estilo de inventario estructurado.                                        | Adoptar campos consistentes. Presentarlos mediante tarjetas en la consulta pública y reservar tablas amplias para gestión si se desarrolla después.  |
| [ÚNICA](https://unica.edu.co/investigaciones/semilleros-de-investigacion/)                                                                      | Explicación del concepto, conformación, roles y clases de semilleros. Enfoque pedagógico para quien empieza.                                    | Sección «Cómo participar» y preguntas frecuentes. Los roles y requisitos locales deben confirmarse, no copiarse.                                     |

La combinación propuesta es: orientación de ÚNICA, organización de UPB, información de tutor de La Sabana y fichas detalladas de Javeriana. El contenido de FCFB debe ser propio.

## 4. Bloques de la portada, en orden

| Bloque                   | Pregunta que responde                  | Contenido y presentación                                                                                                                     | Prioridad                  |
| ------------------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Encabezado               | ¿Dónde estoy?                          | Identidad FCFB–UMSA y menú breve: Inicio, Semilleros, Convocatorias, Recursos. Contacto en pie.                                              | Base                       |
| Presentación principal   | ¿Qué puedo hacer aquí?                 | Título, explicación de dos líneas, fotografía real si está disponible. Acción principal «Explorar semilleros», secundaria «Cómo participar». | Base                       |
| Acerca del programa      | ¿Qué es un semillero?                  | Un párrafo y tres beneficios, con texto institucional validado.                                                                              | Base                       |
| Semilleros destacados    | ¿Qué grupo coincide con mis intereses? | Hasta seis tarjetas y enlace al directorio. Área, nombre, resumen y acceso a ficha.                                                          | Base                       |
| Cómo participar          | ¿Cuál es el siguiente paso?            | Secuencia propuesta: explorar, revisar condiciones, contactar o postular. Ajustarla al procedimiento real.                                   | Base                       |
| Convocatorias            | ¿Hay oportunidades disponibles?        | Hasta tres oportunidades vigentes: tipo, fecha de cierre, semillero y enlace a requisitos.                                                   | Si hay contenido           |
| Actividades y resultados | ¿Qué hacen los semilleros?             | Proyectos, talleres o publicaciones seleccionadas con fecha y semillero asociado.                                                            | Segunda etapa              |
| Recursos y preguntas     | ¿Dónde encuentro orientación?          | Reglamentos, formatos y preguntas frecuentes; acordeones para respuestas secundarias.                                                        | Base con material validado |
| Contacto y pie           | ¿A quién consulto?                     | Unidad responsable y contacto institucional confirmado.                                                                                      | Base                       |

No mostrar cifras inventadas, tarjetas ficticias ni botones de postulación sin destino. Si faltan registros, presentar un estado vacío claro; ocultar secciones opcionales sin contenido. En una maqueta, cualquier ejemplo debe identificarse como demostración.

Esquema de portada:

```text
┌─────────────────────────────────────────────────────┐
│ FCFB · UMSA     Inicio  Semilleros  Convocatorias     │
├─────────────────────────────────────────────────────┤
│ Semilleros de investigación      Imagen institucional│
│ Breve propósito                                     │
│ [Explorar semilleros] [Cómo participar]               │
├─────────────────────────────────────────────────────┤
│ Qué son y qué puedes aprender                        │
├─────────────────────────────────────────────────────┤
│ Explora los semilleros                               │
│ [Ficha resumida] [Ficha resumida] [Ficha resumida]     │
│                                [Ver directorio]     │
├─────────────────────────────────────────────────────┤
│ Cómo participar: pasos y condiciones                 │
├─────────────────────────────────────────────────────┤
│ Convocatorias disponibles, cuando existan            │
├─────────────────────────────────────────────────────┤
│ Recursos · Preguntas frecuentes · Contacto           │
└─────────────────────────────────────────────────────┘
```

## 5. Directorio y ficha

Directorio `/semilleros`: búsqueda por nombre o tema y filtros por área y admisión, cuando esos datos estén disponibles. Separar estado del grupo (activo, inactivo) de recepción de nuevos integrantes. Un grupo activo no implica convocatoria abierta. Incluir número de resultados, limpiar filtros y mensaje cuando no existan coincidencias.

Ficha `/semilleros/:slug`: nombre, resumen, área o carrera, unidad de adscripción, objetivos, líneas de investigación, tutor, modalidad o reuniones si corresponde, condiciones para participar, contacto y convocatorias relacionadas. Proyectos y resultados son secciones opcionales. Usar la misma plantilla para todos los grupos.

Rutas previstas:

```text
/
/semilleros
/semilleros/:slug
/convocatorias
/convocatorias/:slug
/recursos
```

«Acerca», «Cómo participar» y contacto pueden empezar como anclas de la portada. Actividades y resultados obtendrán páginas propias cuando el volumen de contenido lo justifique.

## 6. Arquitectura React propuesta

React con TypeScript; para el prototipo local, Vite y CSS con variables. Son elecciones de alcance inicial, sin fijar versiones aquí. El entorno de publicación de UMSA y sus necesidades de indexación deben orientar la configuración final de despliegue y, si corresponde, prerenderizado.

```text
src/
  app/
    App.tsx
    routes.tsx
  components/
    layout/           # Header, Footer, Container
    ui/               # Button, Badge, SectionHeading, EmptyState
  pages/
    HomePage.tsx
    SemillerosPage.tsx
    SemilleroPage.tsx
    ConvocatoriasPage.tsx
    ConvocatoriaPage.tsx
    RecursosPage.tsx
  sections/
    HeroSection.tsx
    AboutSection.tsx
    FeaturedSemillerosSection.tsx
    ParticipationSection.tsx
    CallsSection.tsx
    ResourcesSection.tsx
  features/
    semilleros/       # Tipos, tarjeta y filtros
    convocatorias/    # Tipos, tarjeta y reglas de vigencia
    recursos/         # Tipos y enlaces de descarga
  content/
    site.ts           # Identidad, navegación y contacto
    home.ts           # Orden y visibilidad de secciones
    semilleros.ts     # Registros únicos
    convocatorias.ts
    recursos.ts
  styles/
    tokens.css        # Colores, tamaños, espacios y radios
    globals.css
```

Una sección es un componente React con una responsabilidad concreta. Los textos y registros viven fuera del JSX. Las páginas componen secciones y consultan los mismos registros; los componentes pequeños resuelven elementos repetidos.

Ejemplo conceptual de configuración, no implementación instalada:

```ts
type HomeSectionType = 'hero' | 'about' | 'semilleros' | 'participation' | 'calls' | 'resources';

type HomeSection = {
  id: string;
  type: HomeSectionType;
  enabled: boolean;
};

export const homeSections: HomeSection[] = [
  { id: 'inicio', type: 'hero', enabled: true },
  { id: 'programa', type: 'about', enabled: true },
  { id: 'semilleros', type: 'semilleros', enabled: true },
  { id: 'participar', type: 'participation', enabled: true },
  { id: 'convocatorias', type: 'calls', enabled: false },
  { id: 'recursos', type: 'resources', enabled: true },
];
```

El orden del arreglo controla el orden visual. Cada tipo se vincula con un componente conocido; no hace falta construir un editor de páginas ni almacenar HTML arbitrario. La configuración de navegación debe respetar qué secciones están habilitadas.

## 7. Información que se administrará

| Entidad                        | Campos principales                                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Semillero                      | id, slug, nombre, resumen, descripción, áreaIds, carreraIds, unidad, objetivos, líneas, tutor, contacto, estado del grupo, modalidad de admisión, imagen opcional, fecha de actualización, estado editorial. |
| Convocatoria                   | id, slug, título, semilleroIds si aplica, tipo, resumen, requisitos, apertura, cierre con zona horaria, enlace de postulación, documentos, cancelación y estado editorial.                                   |
| Recurso                        | id, título, categoría, descripción, URL, formato, versión o fecha, semilleroId opcional.                                                                                                                     |
| Actividad o resultado, después | id, título, tipo, fecha, resumen, semilleroIds, imagen o enlace.                                                                                                                                             |
| Configuración institucional    | Nombre, identidad gráfica, textos generales, contacto, menú y orden de secciones.                                                                                                                            |

Relaciones: un semillero puede tener varias convocatorias; una convocatoria general puede vincular varios semilleros. Cada tarjeta y ficha se genera desde el mismo registro. Las categorías también deben definirse en un catálogo común.

Al inicio, mantener estos datos en archivos TypeScript: es suficiente si una persona técnica realiza los cambios. Si personal de la facultad necesita editar directamente, incorporar un CMS con campos equivalentes y un flujo de borrador/publicado. React por sí solo no ofrece un panel de administración.

La vigencia de una convocatoria se obtiene de sus fechas y posible cancelación; no mantener etiquetas contradictorias manualmente. Diferenciar borrador/publicado del estado académico del semillero. Los contactos publicados deben ser los institucionalmente autorizados.

## 8. Dirección visual propuesta

Estética académica contemporánea: títulos claros, fondo claro, espacios generosos, fotografías reales y tarjetas consistentes. Una sola familia sans serif legible, cuerpo de aproximadamente 16–18 px, ancho de lectura controlado y jerarquía de tres niveles como punto de partida.

Usar colores oficiales cuando estén disponibles. El azul oscuro del Word puede servir en un boceto provisional, identificado como propuesta. Evitar atribuir a FCFB una paleta o logotipo deducidos de los referentes.

En escritorio, tres tarjetas por fila cuando el ancho lo permita; en móvil, una columna y filtros apilados. Fechas y estados deben ser texto además de color. Mantener foco visible, navegación por teclado, etiquetas de formulario y contraste suficiente. Usar acordeones para preguntas frecuentes y contenido secundario; las condiciones esenciales de participación deben verse directamente.

## 9. Primera entrega de implementación sugerida

Implementar portada, directorio y plantilla de ficha; añadir convocatorias y recursos cuando haya información validada. Cargar los registros reales sin editar componentes. Verificar navegación, búsqueda, filtros, vista móvil, estados vacíos y enlaces antes de publicar.

Datos pendientes para poblar la base: listado real de semilleros, áreas/carreras, tutores y contactos autorizados, reglas de ingreso, identidad visual y unidad que mantendrá la información. No es necesario definir todos para empezar la estructura, pero sí confirmar cada dato antes de presentarlo como oficial.

Este documento entrega la decisión de arquitectura y el análisis disponible. No se ha creado ni instalado todavía una aplicación React, conforme al alcance solicitado de decidir primero la organización.
