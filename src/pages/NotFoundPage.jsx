import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { EmptyState } from '../components/ui';
export default function NotFoundPage() {
  return (
    <div className="container page-space">
      <EmptyState title="Esta página aún no tiene raíces">
        <p>
          No encontramos la dirección que buscas. Puedes volver al inicio o explorar el directorio.
        </p>
        <Link className="button button-primary" to="/">
          <ArrowLeft size={17} /> Volver al inicio
        </Link>
      </EmptyState>
    </div>
  );
}
