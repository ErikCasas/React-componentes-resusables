/**
 * La itereacion en React es una forma en la que podemos
 * renderizas distintos datos de forma dinamica, ya sea a partir
 * de un Array o de un Objeto, uno de los metodos para iterar un Array
 * es a traves del metodo map()
 * @link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * de este modo, solo debemos decirle que por cada elemento de aquel Array,
 * queremos que renderize, ya sea un componente o una etiqueta, recordando que para
 * insertar Js en medio del HTML se usan las llaves {}, ademas
 * de que al momento de hacer un renderizado dinamico, debemos agregar
 * el atributo 'key' para que react pueda distinguir cada elemento renderizado
 */
const Iteracion = () => {
  const estudiantes = [
    'Mario',
    'Elizabeth',
    'Jasmin',
    'Daniel',
    'Juan',
    'Maria',
  ];

  return (
    <>
      {estudiantes.map((nombre) => (
        <h1 key={nombre}> {nombre} </h1>
      ))}
    </>
  );
};

export default Iteracion;
