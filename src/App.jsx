import users from "./javascript/ejemplo";
import Card from "./components/CardCopy";
import Tittle from "./components/Tittle";
import And from "./components/And";
import Conditional from "./components/Conditional";
import Img from "./components/Img";

function App() {
  return (
    <>
      <Tittle />

      {/* <And algo={"algun texto o nada"} /> */}
      {/* <Conditional visita={"llegando"} />   */}
      {/* <Img agrega tu las propiedades a recibir />  */}

      {/* importo el array de users de un archivo js */}
      {users.map((persona, index) => (
        <Card
        // importante no olvidar el key
          key={persona.id}
          edad={persona.edad}
          nombre={persona.nombre}
          imgURL={persona.imgUrl}
          imgAlt={persona.imgAlt}
        />
      ))}
    </>
  );
}

export default App;
