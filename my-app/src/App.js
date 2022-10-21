import "./App.css";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <header>
      <div className="App">
        <div>
          <NavBar />
        </div>
      </div>
      <Carousel/>
      <Footer/>
    </header>
  );
}

export default App;
