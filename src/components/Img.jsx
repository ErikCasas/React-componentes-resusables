import '../App.css';

/**
 * ejemplo de un componente, el cual recibe propiedades @param props
 * sin embargo aquí no desestructuramos el objeto y accedemos a las 
 * propiedades requeridas de la forma comun en la que accedemos a las propiedades de 
 * un objeto, es decir, la notacion del punto '.'@example 
 * 
 * const colores = { 
 * color1: "amarillo",
 * color2: "azul",
 * color3: "rojo"
 * } 
 * 
 * const miColorFav = colores.color2
 * 
 * console.log(miColorFav) ===> "Azul"
 */


function Img(props) {
  return (
    <>
      <div className='card'>
        <h1>{props.imgAlt}</h1>
        <img src={props.imgURL} alt={props.imgAlt} />
        <p>{props.imgAlt}</p>
        <button>Take a cart</button>
      </div>
    </>
  );
}

export default Img;
