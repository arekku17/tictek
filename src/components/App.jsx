import Acerca from "./Acerca";
import Contacto from "./Contacto";
import Home from "./Home";
import Invitados from "./Invitados";
import Patrocinadores from "./Patrocinadores";
import Ubicación from "./Ubicación";

function App() {
  return (
    <main>
      <Home/>
      <Acerca/>
      <Invitados/>
      <Ubicación />
      <Patrocinadores />
      <Contacto/>
    </main>
  );
}

export default App;
