import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { convocatorias, callStatus, formatDate } from '../content/convocatorias';
import { EmptyState, TextLink } from '../components/ui';
import NotFoundPage from './NotFoundPage';
export default function ConvocatoriasPage() {
  const calls = convocatorias.filter((c) => c.published);
  return (
    <div className="container page-space">
      <div className="page-heading">
        <p className="eyebrow">DA EL SIGUIENTE PASO</p>
        <h1>
          Convocatorias<span>.</span>
        </h1>
        <p>Oportunidades para aprender, investigar y formar parte de la comunidad.</p>
      </div>
      {calls.length ? (
        <div className="cards-grid">
          {calls.map((call) => (
            <article className="info-card" key={call.id}>
              <span className="badge">{callStatus(call)}</span>
              {call.demo && <span className="badge badge-soft">Ejemplo</span>}
              <h2>{call.title}</h2>
              <p>{call.summary}</p>
              <p>Cierre: {formatDate(call.closesAt)}</p>
              <TextLink to={`/convocatorias/${call.slug}`}>Consultar convocatoria</TextLink>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState title="Aún no hay convocatorias publicadas">
          <p>
            Cuando existan oportunidades confirmadas, encontrarás aquí sus requisitos, fechas y
            canales de postulación.
          </p>
          <Link className="button button-primary" to="/semilleros">
            Explorar semilleros <ArrowUpRight size={17} />
          </Link>
        </EmptyState>
      )}
    </div>
  );
}
export function ConvocatoriaPage() {
  const { slug } = useParams();
  const call = convocatorias.find((c) => c.slug === slug && c.published);
  if (!call) return <NotFoundPage />;
  const status = callStatus(call);
  return (
    <div className="container page-space narrow">
      <Link className="back-link" to="/convocatorias">
        <ArrowLeft size={17} />
        Volver a convocatorias
      </Link>
      <div className="page-heading">
        <span className="badge">{status}</span>
        {call.demo && <span className="badge badge-soft">Convocatoria mock</span>}
        <h1>{call.title}</h1>
        <p>{call.summary}</p>
      </div>
      <div className="info-card">
        <p>Apertura: {formatDate(call.opensAt)}</p>
        <p>Cierre: {formatDate(call.closesAt)} · Hora de Bolivia</p>
        <h2>Requisitos</h2>
        <ul>
          {call.requirements.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {status === 'Abierta' && call.applicationUrl ? (
          <a
            className="button button-primary"
            href={call.applicationUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ir al sitio de postulación <ArrowUpRight size={17} />
          </a>
        ) : (
          <p>La postulación no está disponible en este momento.</p>
        )}
      </div>
    </div>
  );
}
