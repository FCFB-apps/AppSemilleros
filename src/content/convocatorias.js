export const convocatorias = [
  {
    id: 'convocatoria-desarrollo-farmaceutico-2026',
    slug: 'ingreso-desarrollo-farmaceutico-2026',
    title: 'Convocatoria de ingreso al Semillero de Desarrollo Farmacéutico',
    semilleroIds: ['demo-1'],
    summary:
      'Únete al equipo para explorar formulación, control de calidad y desarrollo de productos farmacéuticos durante la gestión 2026.',
    opensAt: '2026-10-01T08:00:00-04:00',
    closesAt: '2026-11-01T23:59:59-04:00',
    requirements: [
      'Ser estudiante regular de la Facultad de Ciencias Farmacéuticas y Bioquímicas.',
      'Tener interés en investigación y trabajo colaborativo.',
      'Completar el formulario de postulación dentro del plazo establecido.',
    ],
    applicationUrl: 'https://forms.gle/tu-enlace-de-inscripcion',
    published: true,
    demo: true,
    cancelled: false,
  },
  {
    id: 'convocatoria-biologia-molecular-2026',
    slug: 'induccion-biologia-molecular-2026',
    title: 'Curso de inducción al Semillero de Biología Molecular',
    semilleroIds: ['demo-2'],
    summary:
      'Sesiones introductorias para estudiantes que quieran acercarse a lectura científica, bioquímica experimental y preguntas de investigación molecular.',
    opensAt: '2026-10-20T08:00:00-04:00',
    closesAt: '2026-11-10T23:59:59-04:00',
    requirements: [
      'Ser estudiante de la Facultad de Ciencias Farmacéuticas y Bioquímicas.',
      'Contar con disponibilidad para sesiones de inducción.',
      'Enviar una breve motivación de participación.',
    ],
    applicationUrl: null,
    published: true,
    demo: true,
    cancelled: false,
  },
  {
    id: 'convocatoria-productos-naturales-2026',
    slug: 'registro-productos-naturales-2026',
    title: 'Registro de interés en Productos Naturales',
    semilleroIds: ['demo-3'],
    summary:
      'Convocatoria demostrativa para registrar estudiantes interesados en biodiversidad, fitoquímica y análisis químico.',
    opensAt: '2026-09-01T08:00:00-04:00',
    closesAt: '2026-09-30T23:59:59-04:00',
    requirements: [
      'Completar el registro de interés.',
      'Participar en la reunión informativa.',
      'Confirmar disponibilidad para actividades del semillero.',
    ],
    applicationUrl: null,
    published: true,
    demo: true,
    cancelled: false,
  },
];

export function callStatus(call, now = new Date()) {
  if (call.cancelled) return 'Cancelada';

  const opens = new Date(call.opensAt).getTime();
  const closes = new Date(call.closesAt).getTime();

  if (!Number.isFinite(opens) || !Number.isFinite(closes) || closes < opens) {
    return 'Fechas por confirmar';
  }

  if (now.getTime() < opens) return 'Próximamente';
  if (now.getTime() > closes) return 'Cerrada';
  return 'Abierta';
}

export function formatDate(date) {
  const parsed = new Date(date);

  return Number.isNaN(parsed.getTime())
    ? 'Por confirmar'
    : new Intl.DateTimeFormat('es-BO', {
        dateStyle: 'long',
        timeZone: 'America/La_Paz',
      }).format(parsed);
}
