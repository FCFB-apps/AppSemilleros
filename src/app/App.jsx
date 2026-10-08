import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import SemillerosPage from '../pages/SemillerosPage';
import SemilleroPage from '../pages/SemilleroPage';
import ConvocatoriasPage, { ConvocatoriaPage } from '../pages/ConvocatoriasPage';
import RecursosPage from '../pages/RecursosPage';
import NotFoundPage from '../pages/NotFoundPage';
import { semilleros } from '../content/semilleros';
import { convocatorias } from '../content/convocatorias';
function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles = {
      '/': 'Semilleros de investigación',
      '/semilleros': 'Directorio de semilleros',
      '/convocatorias': 'Convocatorias',
      '/recursos': 'Recursos y preguntas frecuentes',
    };
    const record =
      semilleros.find((s) => pathname === `/semilleros/${s.slug}`)?.name ??
      convocatorias.find((c) => c.published && pathname === `/convocatorias/${c.slug}`)?.title;
    document.title = `${
      titles[pathname] ?? record ?? 'Página no encontrada'
    } · Facultad de Ciencias Farmacéuticas y Bioquímicas UMSA`;
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
      else {
        window.scrollTo(0, 0);
        document.getElementById('main')?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="semilleros" element={<SemillerosPage />} />
          <Route path="semilleros/:slug" element={<SemilleroPage />} />
          <Route path="convocatorias" element={<ConvocatoriasPage />} />
          <Route path="convocatorias/:slug" element={<ConvocatoriaPage />} />
          <Route path="recursos" element={<RecursosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
