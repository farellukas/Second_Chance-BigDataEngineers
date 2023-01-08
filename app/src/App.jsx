import "./App.css";
import Articles from './pages/Articles';
import Createiframe from "./pages/Createiframe";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
    return (
    <Router>
        
        <Routes>
            <Route path='/Articles' element={<Articles/>}/>
            <Route path='/Createiframe' element={<Createiframe/>}/>
        </Routes>
    </Router>
    )
    
}

export default App;
