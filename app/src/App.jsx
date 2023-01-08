import "./App.css";
import Articles from './pages/Articles';
import Createiframe from "./pages/Createiframe";
import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
    return (
    <Router>
        <Navbar />
        <div className="container">
        <Routes>
            <Route path='/Articles' element={<Articles/>}/>
            <Route path='/Createiframe' element={<Createiframe/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
    </Router>
    )
}


export default App
