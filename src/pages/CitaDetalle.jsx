import { useParams, Link } from 'react-router-dom';

export default function CitaDetalle() {
    const { id } = useParams();
    return (
        <div>
            <h1>Detalles de la Cita</h1>
            <p>ID de la cita: <strong>{id}</strong></p>
            <Link to="/citas" className="btn">
                ← Volver a Citas
            </Link>
        </div>
    );
}
