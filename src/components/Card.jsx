import '../styles/card.css';

/**Componenete con sus propiedades ya predefinidas (nombre, imagen, edad) 
 * recordemos que para insertar js dentro del codigo HTML de nuestro componente 
 * es necesario el uso de las @tutorial -->{} llaves
*/

function Card() {

  const img = 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png';
  const alt = 'este es el alt';
  const nombre = 'Santiago';
  const edad = 21;

  return (
    <div className="card">
      <h1>{nombre}</h1>
      <img src={img} alt={alt} />
      <h3>foto de perfil </h3>
      <h3>{edad}</h3>
      <button>Take a cart</button>
    </div>
  );
}

export default Card;
