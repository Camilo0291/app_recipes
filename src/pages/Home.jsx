import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { FaBullseye, FaEye, FaBook, FaRocket  } from 'react-icons/fa';
import "./Home.css";
function Home() {
  return (
    <div className="container">
      <Menu />
      {/* <h1 className="home-title">Home</h1> */}
      <div className="banner">
        <img src="public/banner.jpg" alt="" />
      </div>

      {/* Card de presentación */}
      <div className="card">
        <img src="public/fotoPerfil.jpeg" alt="foto de Andrea Santa" />
        <div className="card-content">
          <h2>Soy Andrea Santa López</h2>
          <p>
            Docente en el área de diseño, manejo de grupos y actividades
            pedagógicas, con experiencia laboral de más de 15 años,
            desarrollando funciones como análisis de necesidades;
            materialización de ideas; elaboración de archivos gráficos;
            direccionamiento de personas; conocimientos en pre prensa y
            litografía; aprobación de colores; planchas; coordinación para
            elaboración de troqueles; diseño de piezas publicitarias, logística
            para publicidad; documentación de procesos; atención al cliente;
            elaboración de informes; manejo presupuestal y coordinación de
            producción.
          </p>
        </div>
      </div>

      {/* Secciones de Misión, Visión e Historia */}
      <section className="sections">
        <div className="section">
        <FaBook className="icon" />
          <h2>Historia</h2>
          <p>
            <span>El origen de Gatopardo</span>, surge de la pasión por las
            técnicas manuales y el deseo de darle una nueva vida a materiales
            que, con el tiempo, se iban acumulando. Cada objeto, en lugar de ser
            descartado, encontraba un propósito en un proceso creativo que
            transformaba lo cotidiano en algo único. El nombre "Gatopardo" tiene
            un significado especial: está inspirado en Bimba, un gato mestizo
            que me acompañó durante 20 años. Su personalidad introspectiva,
            melancólica y profundamente observadora fue una constante en mi
            vida, siempre a mi lado cuando trabajaba en casa. Bimba no solo fue
            mi compañera fiel, sino también la chispa que me llevó a
            materializar este espacio creativo. A través de Gatopardo Taller, su
            espíritu sigue presente en cada proyecto, convirtiendo lo viejo en
            algo lleno de vida y significado.
          </p>
        </div>
        <div className="section">
        <FaRocket className="icon" />
          <h2>Proposito</h2>
          <p>
            En Gatopardo Taller, el propósito es utilizar el carvado como una
            forma de expresión creativa y sostenible, transformando ideas y
            materiales en objetos llenos de significado. Aquí, cada creación es
            una pieza única, diseñada para darle valor a lo hecho a mano y
            fomentar la reutilización de materiales, alineándonos con una visión
            de diseño consciente y respetuoso con el medio ambiente.
          </p>
        </div>
        <div className="section">
        <FaBullseye className="icon" /> {/* Icono de Misión */}
          <h2>Misión</h2>
          <p>
            Transformar materiales olvidados en creaciones únicas y sostenibles,
            aplicando técnicas manuales y artísticas que promuevan la
            reutilización consciente. A través de cada pieza, buscamos honrar la
            belleza de lo imperfecto y fomentar una conexión entre las personas
            y los objetos que nos rodean, contribuyendo a un estilo de vida más
            sustentable y creativo.
          </p>
        </div>
        <div className="section">
        <FaEye className="icon" />
          <h2>Visión</h2>
          <p>
            Ser un referente en el ámbito del diseño artesanal sostenible, donde
            cada producto cuente una historia de renovación y creatividad.
            Queremos inspirar a las personas a valorar el potencial de lo
            reutilizado, demostrando que lo que un día fue considerado desecho
            puede convertirse en un objeto de valor estético y emocional,
            contribuyendo a un mundo más responsable con el medio ambiente.
          </p>
        </div>
      </section>
    

     
      <Footer />
    </div>
  );
}
export default Home;
