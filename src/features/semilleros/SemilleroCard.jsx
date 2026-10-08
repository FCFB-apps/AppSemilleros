import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { ScienceArt } from '../../components/ScienceArt';
export default function SemilleroCard({ semillero }) {
  return (
    <article className={`semillero-card card-${semillero.visual}`}>
      <div className="card-art">
        <ScienceArt variant={semillero.visual} />
        {semillero.demo && <span className="demo-tag">Ejemplo</span>}
      </div>
      <div className="card-content">
        <p className="card-area">{semillero.area}</p>
        <h3>
          <Link to={`/semilleros/${semillero.slug}`}>{semillero.name}</Link>
        </h3>
        <p>{semillero.summary}</p>
        <div className="card-bottom">
          <span>{semillero.lines[0]}</span>
          <Link to={`/semilleros/${semillero.slug}`} aria-label={`Conocer ${semillero.name}`}>
            <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
