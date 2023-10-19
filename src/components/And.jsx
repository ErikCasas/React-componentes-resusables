/**
 * El operador And sirve para menejar los casos en los que es opcional
 * mostrar algo o no mostrar nada en pantalla evitando usar un if del siguiente modo:
 *
 * if(algo){
 * return <h1>si hay algo para mostrar</h1>
 * }else{
 * null
 * }
 *
 * de este modo solo mostrará algo en pantalla si es que hay algo para mostrar,
 * como recomendación se recomienda leer acerca sobre los valores falsy y truthy
 * y tener en claro la logica con la que funciona el operador AND (&&)
 */

const And = ({ algo }) => {
  return (
    <>
      {algo && (
        <div>
          <h1>si hay algo para mostrar</h1>
          <p>{algo}</p>
        </div>
      )}
    </>
  );
};

export default And;
