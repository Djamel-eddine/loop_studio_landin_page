import Creations from "./components/Creations";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
