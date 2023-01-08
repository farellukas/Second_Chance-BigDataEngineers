import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { useEffect } from "react";
import InputField from "../components/InputField";
import './Converter.css'

const options = [
  {
    name: "Units",
    code: "units"
  },
  {
    name: "Currency",
    code: "curr",
  },
];

const units = [
  'Amp', 'Bit', 'Byte', 'Celsius', 'Day', 'Degree', 'Fahrenheit', 'Feet', 'Gallon', 'Gram', 'Hour', 'Inch', 'Joule', 'Kelvin', 'Liter', 'Meter', 'Micron', 'Mile', 'Minute', 'Mole', 'Month', 'Newton', 'Ohm', 'Ounce', 'Pascal', 'Pint', 'Pound', 'Radian', 'Second', 'Tonne', 'Volt', 'Watt', 'Week', 'Yard'
]

const currencies = [
  "AED", "AFN", "ALL", "ARS", "AUD", "BDT", "BGN", "BHD", "BOB", "BRL", "CAD", "CHF", "CLP", "CNY", "COP", "CRC", "CZK", "DKK", "DZD", "EGP", "EUR", "FJD", "GBP", "GEL", "GHS", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "IQD", "ISK", "JOD", "JPY", "KES", "KRW", "KWD", "KZT", "LBP", "LKR", "MAD", "MDL", "MMK", "MNT", "MOP", "MXN", "MYR", "NGN", "NOK", "NZD", "PEN", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "TZS", "UAH", "USD", "VEF", "VND", "ZAR"
]

function Converter() {
  const [measurement, setMeasurement] = useState(options[0].code);
  const [unitsList, setUnitsList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [inputUnit, setInputUnit] = useState("")
  const [input, setInput] = useState("")

  const [outputUnit, setOutputUnit] = useState("")
  const [output, setOutput] = useState("")

  useEffect(() => {
    if (measurement === "curr") {
      setUnitsList(currencies)
    } else {
      setUnitsList(units);
    }
    setIsLoading(false);
  }, [measurement]);

  useEffect(() => {
    if (inputUnit && outputUnit && input) {
      fetch("https://neutrinoapi.net/convert", {
        method: "POST",
        headers: {
          "User-ID": "farellukas",
          "API-Key": "xf4PPfL1o6TpCRRaoUChoBgHBK5lzcBwknk0BYQJpE0PJguY",
        },
        body: {
          "from-value": input,
          "from-type": inputUnit,
          "to-type": outputUnit
        },
        credentials: "include"
      }).then(res => res.json())
        .then(data => setOutput(data.result))
        .then(() => console.log(output))
    }}, [input]);

  const handleSelectOption = (e) => {
    setMeasurement(e.target.dataset.code);
  };

  return (
    <div className="converter-wrapper">
      {/* Options */}
      {options.map((option) => {
        return (
          <button
            onClick={handleSelectOption}
            key={option.code}
            data-code={option.code}
            className="measurement-btn"
          >
            {option.name}
          </button>
        );
      })}

      {!isLoading &&
        <div className="converter-container">
          {/* Input */}
          <div className="field-group">
          <Dropdown options={unitsList} selectedValue={inputUnit} setSelectedValue={setInputUnit} />
          <InputField input={input} setInput={setInput} />
          </div>

          {/* Output */}
          <div className="field-group">
          <Dropdown options={unitsList} selectedValue={outputUnit} setSelectedValue={setOutputUnit} />
          <InputField input={output} setInput={setOutput} />
          </div>
        </div>
      }
    </div>
  );
}

export default Converter;
