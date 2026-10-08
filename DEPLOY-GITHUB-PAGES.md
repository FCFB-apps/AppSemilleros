# Publicar en GitHub Pages

Repositorio: `https://github.com/FCFB-apps/AppSemilleros`.
Dirección esperada: `https://fcfb-apps.github.io/AppSemilleros/`.

1. Sube los commits de la aplicación con `git push origin main`.
2. Ejecuta `npm run deploy`. El script `predeploy` compila automáticamente la aplicación y `gh-pages` publica `dist` en la rama `gh-pages`. Necesitas permisos de escritura en el repositorio y autenticación de Git en este equipo.
3. En GitHub, abre **Settings → Pages**. En **Source**, selecciona **Deploy from a branch**; elige la rama **gh-pages** y la carpeta **/ (root)**, y guarda.
4. Espera a que GitHub complete la publicación y abre la dirección del sitio.

Para actualizarlo, guarda y sube los cambios del código y vuelve a ejecutar `npm run deploy`.

Vite usa `base: '/AppSemilleros/'`. Las páginas internas usan `HashRouter`, por ejemplo `/AppSemilleros/#/semilleros`, para que funcionen también al recargar o abrir un enlace directo.

El desarrollo local conserva `npm run dev` con acceso desde la red Wi-Fi. Abre la dirección que muestre Vite, incluyendo `/AppSemilleros/`.
