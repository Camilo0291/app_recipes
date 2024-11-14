import './Analytics.css'
import { FaChartLine, FaUsers, FaEye } from 'react-icons/fa';


const Analytics = () => {
  return (
    <div className='analytics-page'>
   
      <h2 className="title-profile">Mis Estadisticas</h2>

      {/* Cards */}
      <div className="cards-container">
        <div className="card-analitycs">
          <FaChartLine className="card-icon" />
          <h3>Rendimiento</h3>
          <p>Analiza el rendimiento de tus campañas y descubre las tendencias principales.</p>
        </div>
        
        <div className="card-analitycs">
          <FaUsers className="card-icon" />
          <h3>Usuarios Activos</h3>
          <p>Conoce cuántos usuarios están activos en la plataforma actualmente.</p>
        </div>

        <div className="card-analitycs">
          <FaEye className="card-icon" />
          <h3>Visitas Recientes</h3>
          <p>Revisa la cantidad de visitas recientes y la interacción del usuario.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
