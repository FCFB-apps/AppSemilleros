import { homeSections } from '../content/home';
import {
  HeroSection,
  AboutSection,
  FeaturedSection,
  ParticipationSection,
  CallsSection,
  ResourcesSection,
} from '../sections/HomeSections';
const sections = {
  hero: HeroSection,
  about: AboutSection,
  semilleros: FeaturedSection,
  participation: ParticipationSection,
  calls: CallsSection,
  resources: ResourcesSection,
};
export default function HomePage() {
  return (
    <>
      {homeSections
        .filter((s) => s.enabled)
        .map((section) => {
          const Component = sections[section.type];
          return (
            <section id={section.id} key={section.id}>
              <Component />
            </section>
          );
        })}
    </>
  );
}
