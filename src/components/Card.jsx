import "./Card.css";

const Card = ({title, description, image}) => {
  return (
    <div className="container-card">
      <figure className="figure-card">
        <img className="img-card" src={image} alt={title} />
      </figure>
      <p className="paragraph-card">
        <span className="span-card-title">{title}</span>
        <span className="span-card-description">{description}</span>
      </p>
      {/* <div>
        <input type="button" value="Ver más" />
      </div> */}
    </div>
  );
};

export default Card;
