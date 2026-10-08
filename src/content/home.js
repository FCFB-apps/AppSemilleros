export const homeSections = [
  { id: 'inicio', type: 'hero', enabled: true },
  { id: 'programa', type: 'about', enabled: true },
  { id: 'semilleros', type: 'semilleros', enabled: true },
  { id: 'participar', type: 'participation', enabled: true },
  { id: 'convocatorias', type: 'calls', enabled: true },
  { id: 'recursos', type: 'resources', enabled: true },
];
export function sectionPath(type, fallback = '/recursos') {
  const section = homeSections.find((item) => item.type === type && item.enabled);
  return section ? `/#${section.id}` : fallback;
}
export const home = {
  eyebrow: 'CURIOSIDAD QUE SE CONVIERTE EN CIENCIA',
  title: 'Las grandes ideas',
  titleAccent: 'empiezan con',
  titleEnd: 'una pregunta.',
  description:
    'Explora, conecta y da tus primeros pasos en la investigación. Un espacio para aprender junto a quienes comparten tu curiosidad por las ciencias farmacéuticas y bioquímicas.',
};
export const participationSteps = [
  {
    title: 'Encuentra tu área',
    text: 'Explora los temas de investigación y descubre qué semillero conecta con tus intereses.',
  },
  {
    title: 'Conoce al equipo',
    text: 'Revisa sus objetivos, líneas de trabajo y las condiciones para participar.',
  },
  {
    title: 'Da el primer paso',
    text: 'Consulta la convocatoria o el canal de contacto que publique cada semillero.',
  },
];
