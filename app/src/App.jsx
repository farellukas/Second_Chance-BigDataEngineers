import "./App.css";
import Articles from './pages/Articles';
import Createiframe from "./pages/Createiframe";
import Navbar from "./Navbar"
import Translator from "./pages/Translator"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
    return (
    <Router>
        <Navbar />
        <div className="container">
        <Routes>
            {/* //<Route path='/Articles' element={<Articles/>}/> */}
            <Route path='/Createiframe' element={<Createiframe/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Translator" element={<Translator />} />
        </Routes>
        </div>
    </Router>
    )
}


export default App
