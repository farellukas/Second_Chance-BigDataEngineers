import "./App.css";
//import "./styles.css";
import Converter from "./components/inputField"
import Dropdown from "./components/Dropdown"

export default function App(){
    const options = [
        {value: "opt1", label: "Option 1"},
        {value: "opt2", label: "Option 2"}
    ];
    return(
        <div className = "App">
            <Dropdown placeHolder="Select..." options={options}/>
            <br></br>
            <Converter></Converter>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Dropdown placeHolder="Select..." options={options}/>
            <br></br>
            <Converter></Converter>
        </div>
    );
}