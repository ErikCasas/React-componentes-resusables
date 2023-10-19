import '../styles/card.css';

/**
 * Componente funcional en donde recivimos las props y las desestructuramos
 * para asi solo obtener aquello que requerimos y no estar escribiendo siempre
 * @example props.propiedad-que-requerimos
 */
const Card = ({ nombre, edad, imgURL, ImgAlt }) => {
  return (
    <div className="card">
      <h1>{nombre}</h1>
      <img src={imgURL} alt={ImgAlt} />
      <h3>foto de perfil </h3>
      <h3>{edad}</h3>
      <button>Take a cart</button>
    </div>
  );
};

export default Card;
