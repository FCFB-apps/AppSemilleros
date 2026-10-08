import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowUpRight, Check, Mail } from 'lucide-react';
import { semilleros } from '../content/semilleros';
import { convocatorias } from '../content/convocatorias';
import { ScienceArt } from '../components/ScienceArt';
import NotFoundPage from './NotFoundPage';
export default function SemilleroPage() {
  const { slug } = useParams();
  const semillero = semilleros.find((s) => s.slug === slug);
  if (!semillero) return <NotFoundPage />;
  const calls = convocatorias.filter((c) => c.published && c.semilleroIds.includes(semillero.id));
  return (
    <div className="container page-space">
      <Link className="back-link" to="/semilleros">
        <ArrowLeft size={17} /> Volver al directorio
      </Link>
      <div className="detail-hero">
        <div>
          <p className="eyebrow">{semillero.area}</p>
          <h1>{semillero.name}</h1>
          <p className="detail-summary">{semillero.summary}</p>
          {semillero.demo && (
            <span className="badge">Ficha de demostración · Grupo no confirmado</span>
          )}
        </div>
        <div className={`detail-art card-${semillero.visual}`}>
          <ScienceArt variant={semillero.visual} />
        </div>
      </div>
      <div className="detail-grid">
        <div className="detail-body">
          <section>
            <p className="eyebrow">CONOCE EL SEMILLERO</p>
            <h2>Un espacio para explorar</h2>
            <p>{semillero.description}</p>
          </section>
          <section>
            <h2>Líneas de investigación</h2>
            <div className="tags">
              {semillero.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </section>
          <section>
            <h2>Qué buscamos aprender</h2>
            <ul className="objectives">
              {semillero.objectives.map((objective) => (
                <li key={objective}>
                  <Check size={18} aria-hidden="true" />
                  {objective}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Cómo participar</h2>
            <p>
              {semillero.admissionDetails ??
                'El proceso de ingreso se publicará cuando se confirme la información del semillero. Esta ficha no recibe postulaciones.'}
            </p>
            {calls.map((call) => (
              <Link className="text-link" key={call.id} to={`/convocatorias/${call.slug}`}>
                {call.title}
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </section>
        </div>
        <aside className="detail-sidebar">
          <p className="eyebrow">INFORMACIÓN DEL GRUPO</p>
          <dl>
            <dt>Área</dt>
            <dd>{semillero.area}</dd>
            <dt>Docente tutor</dt>
            <dd>{semillero.tutor ?? 'Por confirmar'}</dd>
            <dt>Estado del semillero</dt>
            <dd>{semillero.status}</dd>
            <dt>Modalidad de ingreso</dt>
            <dd>{semillero.admission}</dd>
          </dl>
          <div className="sidebar-contact">
            <Mail size={23} />
            <h3>Conecta con el equipo</h3>
            {semillero.contactEmail ? (
              <a href={`mailto:${semillero.contactEmail}`}>{semillero.contactEmail}</a>
            ) : (
              <p>El contacto institucional aún no está disponible.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
