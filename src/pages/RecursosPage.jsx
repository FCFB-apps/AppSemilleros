import { ArrowUpRight, FileText, Plus } from 'lucide-react';
import { faqs, resources } from '../content/recursos';
export default function RecursosPage() {
  return (
    <div className="container page-space">
      <div className="page-heading">
        <p className="eyebrow">HERRAMIENTAS PARA EMPEZAR</p>
        <h1>
          Tu punto de partida<span>.</span>
        </h1>
        <p>Orientación para acercarte a la investigación y resolver tus primeras dudas.</p>
      </div>
      <div className="resources-page-grid">
        <section className="faq-section">
          <h2>Preguntas frecuentes</h2>
          {faqs.map((faq) => (
            <details className="faq" key={faq.question}>
              <summary>
                {faq.question}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
        <aside className="documents-panel">
          <FileText size={29} strokeWidth={1.4} />
          <h2>Documentos y guías</h2>
          {resources.length ? (
            resources.map((r) => (
              <a className="document-link" key={r.id} href={r.url} target="_blank" rel="noreferrer">
                <span>
                  <small>{r.category}</small>
                  <strong>{r.title}</strong>
                  <span>{r.description}</span>
                </span>
                <ArrowUpRight size={18} />
              </a>
            ))
          ) : (
            <>
              <p>
                Los reglamentos, formatos y guías institucionales se incorporarán aquí cuando estén
                disponibles.
              </p>
              <span className="badge">Próximamente</span>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
