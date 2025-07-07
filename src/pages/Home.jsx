import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Bienvenido a la Clínica XYZ</h1>
            <p>Gestiona tus citas de forma fácil.</p>
            <Link to="/citas" className="btn">
                Ir a Citas
            </Link>
        </div>
    );
}
