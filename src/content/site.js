import logoFcfb from '../images/Logo_facu.png';
import logoUmsa from '../images/Logo_Umsa.png';

export const site = {
  name: 'Semilleros',
  faculty: 'Facultad de Ciencias Farmacéuticas y Bioquímicas',
  university: 'Universidad Mayor de San Andrés',
  location: 'La Paz, Bolivia',
  contactEmail: null,
  demo: true,
  logos: [
    {
      id: 'umsa',
      label: 'Universidad Mayor de San Andrés',
      shortLabel: 'UMSA',
      src: logoUmsa,
    },
    {
      id: 'fcfb',
      label: 'Facultad de Ciencias Farmacéuticas y Bioquímicas',
      shortLabel: 'Facultad',
      src: logoFcfb,
    },
  ],
};
export const navigation = [
  { to: '/', label: 'Inicio' },
  { to: '/semilleros', label: 'Semilleros' },
  { to: '/convocatorias', label: 'Convocatorias' },
  { to: '/recursos', label: 'Recursos' },
];
