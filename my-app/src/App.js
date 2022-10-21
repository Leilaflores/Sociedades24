import "./App.css";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import ContenedorBody from "./components/ContenedorBody";
import DatosContacto from "./components/DatosContacto";

function App() {
  return (
    <header>
      <div className="App">
        <div>
          <NavBar />
        </div>
      </div>
      <ContenedorBody/>
      <div class="card-footer bg-light pt-3">
        <DatosContacto/>
        <Footer/>
      </div>
     
    </header>
  );
}

export default App;
