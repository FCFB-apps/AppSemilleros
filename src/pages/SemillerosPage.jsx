import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { semilleros, areas } from '../content/semilleros';
import SemilleroCard from '../features/semilleros/SemilleroCard';
import { EmptyState } from '../components/ui';
const normalize = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
export default function SemillerosPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const area = params.get('area') ?? '';
  const admission = params.get('admision') ?? '';
  function update(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }
  const results = semilleros.filter(
    (s) =>
      (!area || s.area === area) &&
      (!admission || s.admission === admission) &&
      normalize([s.name, s.summary, ...s.lines].join(' ')).includes(normalize(query.trim())),
  );
  const hasFilters = query || area || admission;
  return (
    <div className="container page-space">
      <div className="page-heading">
        <p className="eyebrow">EXPLORA · CONECTA · INVESTIGA</p>
        <h1>
          Encuentra tu semillero<span>.</span>
        </h1>
        <p>Cada pregunta abre una posibilidad. Explora los temas que te interesan.</p>
      </div>
      <div className="filter-panel">
        <div className="search-field">
          <label htmlFor="search">Buscar por nombre o tema</label>
          <div>
            <Search size={20} aria-hidden="true" />
            <input
              id="search"
              type="search"
              placeholder="Prueba con genética, formulación…"
              value={query}
              onChange={(e) => update('q', e.target.value)}
            />
          </div>
        </div>
        <div className="select-field">
          <label htmlFor="area">Área de investigación</label>
          <select id="area" value={area} onChange={(e) => update('area', e.target.value)}>
            <option value="">Todas las áreas</option>
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
        <div className="select-field">
          <label htmlFor="admission">Ingreso</label>
          <select
            id="admission"
            value={admission}
            onChange={(e) => update('admision', e.target.value)}
          >
            <option value="">Todos los tipos</option>
            <option>Por confirmar</option>
            <option>Con convocatoria</option>
            <option>Contacto directo</option>
          </select>
        </div>
      </div>
      <div className="results-meta">
        <p role="status">
          <SlidersHorizontal size={16} aria-hidden="true" />
          {results.length}{' '}
          {results.length === 1 ? 'semillero encontrado' : 'semilleros encontrados'}{' '}
          <span>· Registros de demostración</span>
        </p>
        {hasFilters && (
          <button className="clear-button" onClick={() => setParams({})}>
            Limpiar filtros <X size={15} />
          </button>
        )}
      </div>
      {results.length ? (
        <div className="cards-grid">
          {results.map((s) => (
            <SemilleroCard key={s.id} semillero={s} />
          ))}
        </div>
      ) : (
        <EmptyState title="No encontramos coincidencias">
          <p>Prueba otro tema o elimina los filtros para explorar todos los ejemplos.</p>
          <button className="button button-primary" onClick={() => setParams({})}>
            Mostrar todos los semilleros
          </button>
        </EmptyState>
      )}
    </div>
  );
}
