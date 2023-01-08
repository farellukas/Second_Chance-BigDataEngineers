import "./App.css";
import Articles from "./pages/Articles";
import Createiframe from "./pages/Createiframe";
import Navbar from "./Navbar";
import Translator from "./pages/Translator";
import Home from "./pages/Home";
import About from "./pages/About";
import Converter from "./pages/Converter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Createiframe" element={<Createiframe />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
