// src/pages/Citas.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Citas() {
    const [citas, setCitas] = useState([
        { id: 1, paciente: 'Ana Pérez', hora: '09:00 AM' },
        { id: 2, paciente: 'Carlos López', hora: '10:30 AM' },
        { id: 3, paciente: 'María Gómez', hora: '02:00 PM' },
    ]);
    const [paciente, setPaciente] = useState('');
    const [hora, setHora] = useState('');
    // const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (!paciente.trim() || !hora.trim()) return;
        const nuevaCita = {
            id: Date.now(),
            paciente: paciente.trim(),
            hora: hora.trim()
        };
        setCitas(prev => [...prev, nuevaCita]);
        setPaciente('');
        setHora('');
        // opcional: navegar automáticamente al detalle de la nueva cita
        // navigate(`/cita/${nuevaCita.id}`);
    };

    return (
        <div>
            <h1>Listado de Citas</h1>

            {/* Formulario para añadir citas */}
            <form onSubmit={handleSubmit} className="form-citas">
                <input
                    type="text"
                    placeholder="Nombre del paciente"
                    value={paciente}
                    onChange={e => setPaciente(e.target.value)}
                />
                <input
                    type="time"
                    value={hora}
                    onChange={e => setHora(e.target.value)}
                />
                <button type="submit" className="btn">
                    Añadir Cita
                </button>
            </form>

            {/* Lista dinámica de citas */}
            <ul>
                {citas.map(cita => (
                    <li key={cita.id}>
                        <strong>{cita.paciente}</strong> a las {cita.hora}{' '}
                        <Link to={`/cita/${cita.id}`} className="link">
                            Ver detalle
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
