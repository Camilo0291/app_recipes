import Card from "../components/Card";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "./Workshops.css";

function Workshops() {
  const workshops = [
    {
      id: 1,
      image: "public/carvadoSellos.jpg",
      title: "Carvado de Sellos",
      description:
        "Consiste en el tallado de una imagen sobre una superficie blanda, ofrece una experiencia única que combina creatividad y sostenibilidad. Esta técnica artesanal permite a los participantes explorar su imaginación mientras aprenden a crear sellos personalizados, transfiriendo sus ideas a diversos materiales mediante un proceso manual que celebra lo hecho a mano.",
    },
    {
      id: 2,
      image: "public/EstampTela.jpeg",
      title: "Estampación en Tela",
      description:
        "En este taller aprenderás la técnica de estampación en tela utilizando sellos artesanales. Descubre cómo crear patrones únicos y personalizando tus prendas o accesorios, experimentando con diferentes formas, texturas y colores. Ideal para quienes buscan una experiencia creativa y divertida.",
    },
    // {
    //   id: 3,
    //   image: 'public/slider3.jpg',
    //   title: 'Taller 3',
    //   description: 'Descripción del taller 3',
    // },
    // {
    //   id: 4,
    //   image: 'public/slider4.jpg',
    //   title: 'Taller 4',
    //   description: 'Descripción del taller 4',
    // },
  ];
  return (
    <div className="container">
      <Menu />
      {/* <h1 className="workshops-title">Talleres</h1> */}
      {/* <img className="img-wokshops" src="public/logito-gato-pardo-14.png" alt="" /> */}

      <div class="slider-box">
        <ul>
          <li>
            <img src="public/slider1.jpg" alt="" />
            {/* <div class="texto">
              <h2>Imagen 1</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci quaerat ducimus odit voluptate.{" "}
              </p>
            </div> */}
          </li>
          <li>
            <img src="public/slider2.jpg" alt="" />
            {/* <div class="texto">
              <h2>Imagen 2</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci quaerat ducimus odit voluptate.{" "}
              </p>
            </div> */}
          </li>
          <li>
            <img src="public/slider3.jpg" alt="" />
            {/* <div class="texto">
              <h2>Imagen 3</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci quaerat ducimus odit voluptate.{" "}
              </p>
            </div> */}
          </li>
          <li>
            <img src="public/slider4.jpg" alt="" />
            {/* <div class="texto">
              <h2>Imagen 4</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci quaerat ducimus odit voluptate.{" "}
              </p>
            </div> */}
          </li>
        </ul>
      </div>

      <div className="container-cards">
        {workshops.map((workshop, id) => (
          <Card
            key={id}
            image={workshop.image}
            title={workshop.title}
            description={workshop.description}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Workshops;
