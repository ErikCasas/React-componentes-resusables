import "../styles/container.css";
/**
 * El renderizado condicional en resumidas palabras hace referencia
 * al echo de evaluar ciertos casos y dependiendo de ellos, se mostrara una
 * cosa u otra, recordando que los condicionales pueden expandirse a mas de solo solo dos
 * posibles casos @example
 *
 * if(condicion){
 * return en caso de ser cierto
 *  }
 * else if(siguiente condicion a evaluar ){
 * return en caso de ser cierto
 * }else{
 * caso de que ninguno sea cierto
 * }
 */

const Conditional = ({ visita }) => {
  if (visita === "llegando") {
    return <h1>Bienvenid@s!!!</h1>;
  } else {
    return <h1> Adios!!!!</h1>;
  }
};

export default Conditional;
