import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  FlaskConical,
  Users,
  CalendarDays,
} from 'lucide-react';
import { Link } from 'react-router';
import { ScienceArt } from '../components/ScienceArt';
import { SectionHeading, TextLink } from '../components/ui';
import { home, participationSteps, sectionPath } from '../content/home';
import { semilleros } from '../content/semilleros';
import { convocatorias, callStatus, formatDate } from '../content/convocatorias';
import SemilleroCard from '../features/semilleros/SemilleroCard';
export function HeroSection() {
  return (
    <div className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="small-line" />
          {home.eyebrow}
        </p>
        <h1>
          {home.title}
          <br />
          <em>{home.titleAccent}</em>
          <br />
          {home.titleEnd}
        </h1>
        <p className="hero-description">{home.description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/semilleros">
            Explorar semilleros <ArrowUpRight size={18} />
          </Link>
          <Link className="button button-plain" to={sectionPath('participation')}>
            Cómo participar <ArrowRight size={17} />
          </Link>
        </div>
        <div className="hero-footnote">
          <span className="tiny-sprout">
            <FlaskConical size={18} />
          </span>
          <span>Formación científica. Aprendizaje compartido.</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-label">
          <span className="status-dot" /> IDEAS EN CONEXIÓN<span>01 / FACULTAD</span>
        </div>
        <ScienceArt hero />
        <div className="art-caption">
          <span>
            Explorar.
            <br />
            Conectar. <em>Descubrir.</em>
          </span>
          <span className="art-caption-icon">
            <ArrowUpRight size={30} strokeWidth={1} />
          </span>
        </div>
        <span className="art-coordinate">CIENCIA QUE EMPIEZA CONTIGO</span>
      </div>
    </div>
  );
}
export function AboutSection() {
  return (
    <div className="about-section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">APRENDER HACIENDO PREGUNTAS</p>
          <h2>
            Tu curiosidad tiene
            <br />
            un lugar aquí.
          </h2>
          <p>
            Un semillero reúne a estudiantes y docentes para explorar ideas, construir conocimiento
            y aprender a investigar en equipo.
          </p>
        </div>
        <div className="benefits">
          {[
            {
              Icon: Compass,
              title: 'Explora lo que te mueve',
              text: 'Acércate a temas y preguntas que despierten tu interés.',
            },
            {
              Icon: Users,
              title: 'Crece en comunidad',
              text: 'Comparte perspectivas y aprende junto a otras personas.',
            },
            {
              Icon: FlaskConical,
              title: 'Aprende a investigar',
              text: 'Desarrolla habilidades científicas, paso a paso.',
            },
          ].map(({ Icon, title, text }) => (
            <div className="benefit" key={title}>
              <span className="benefit-icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export function FeaturedSection() {
  return (
    <div className="container section-space">
      <SectionHeading
        eyebrow="ENCUENTRA TU PRÓXIMA PREGUNTA"
        title="Un mundo por investigar"
        text="Conoce cómo se organizarán las áreas y los grupos de investigación."
      >
        <TextLink to="/semilleros">Ver todos los semilleros</TextLink>
      </SectionHeading>
      <div className="cards-grid">
        {semilleros
          .filter((s) => s.featured)
          .slice(0, 6)
          .map((s) => (
            <SemilleroCard key={s.id} semillero={s} />
          ))}
      </div>
      <p className="content-note">
        Estos grupos ilustran el directorio. Sus nombres y líneas se reemplazarán por información
        oficial.
      </p>
    </div>
  );
}
export function ParticipationSection() {
  return (
    <div className="container participation-wrap">
      <div className="participation">
        <div className="participation-intro">
          <p className="eyebrow">EL PRIMER PASO ES TU CURIOSIDAD</p>
          <h2>
            Tu camino en la
            <br />
            investigación
            <br />
            <em>empieza aquí.</em>
          </h2>
          <Link className="button button-light" to="/semilleros">
            Encuentra un semillero <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="steps">
          {participationSteps.map((step, i) => (
            <div className="step" key={step.title}>
              <span className="step-number">0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export function CallsSection() {
  const calls = convocatorias.filter((c) => c.published && callStatus(c) === 'Abierta').slice(0, 3);
  return (
    <div className="container section-space">
      <SectionHeading eyebrow="EL SIGUIENTE PASO" title="Oportunidades para participar">
        <TextLink to="/convocatorias">Ver convocatorias</TextLink>
      </SectionHeading>
      {calls.length ? (
        <div className="cards-grid">
          {calls.map((call) => (
            <article className="info-card" key={call.id}>
              <span className="badge">Abierta</span>
              {call.demo && <span className="badge badge-soft">Ejemplo</span>}
              <h3>{call.title}</h3>
              <p>{call.summary}</p>
              <p>Cierre: {formatDate(call.closesAt)}</p>
              <TextLink to={`/convocatorias/${call.slug}`}>Consultar convocatoria</TextLink>
            </article>
          ))}
        </div>
      ) : (
        <div className="calls-empty">
          <span className="icon-box">
            <CalendarDays size={27} strokeWidth={1.5} />
          </span>
          <div>
            <h3>Las próximas oportunidades estarán aquí</h3>
            <p>
              Aún no hay convocatorias publicadas. Mientras tanto, conoce cómo participar en un
              semillero.
            </p>
          </div>
          <TextLink to={sectionPath('participation')}>Cómo participar</TextLink>
        </div>
      )}
    </div>
  );
}
export function ResourcesSection() {
  return (
    <div className="resources-strip">
      <div className="container resources-inner">
        <span className="resource-icon">
          <BookOpen size={32} strokeWidth={1.3} />
        </span>
        <div>
          <p className="eyebrow">PARA ACOMPAÑAR TU CAMINO</p>
          <h2>Investigar también empieza por informarse.</h2>
          <p>Encuentra orientación y respuestas a tus primeras preguntas.</p>
        </div>
        <Link className="button button-outline" to="/recursos">
          Explorar recursos <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
