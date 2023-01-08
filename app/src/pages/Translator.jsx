import React, { useState, useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Translator.css"

function Translator() {
  const [isLoading, setIsLoading] = useState(false)
  const [languages, setLanguages] = useState([])
  const [input, setInput] = useState("")
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")
  const [result, setResult] = useState("")

  useEffect(() => {
    fetch("https://libretranslate.com/languages")
      .then(res => res.json())
      .then(data => setLanguages(data))
      .then(() => setIsLoading(true))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input) {
      fetch("https://libretranslate.de/detect", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          api_key: ""
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          setInput(data[0].language)
        })
        .catch(err => console.log(err))
    }
    else {
      fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: input,
          target: output,
          format: "text",
          api_key: ""
        }),
        headers: { 
          "Content-Type": "application/json" 
        }
      }).then(res => res.json())
        .then(data => setResult(data.translatedText))
        .catch(err => console.log(err))
    }
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleOutputChange = (e) => {
    setOutput(e.target.value)
  }

  return (
    <section className="translator-wrapper">
      {
        !isLoading ? <h1>Loading...</h1> : 
        <>
          {/* Input */}
          <form className="allinputs" onSubmit={handleSubmit}>
            <div className="input">
            <select onChange={handleInputChange} className="select" value={input}>
              <option value="">Auto Detect</option>
              {languages.map((language, i) => (
                <option value={language.code} key={i}>{language.name}</option>
              ))}
            </select>
            <input type="text" value={text} className="submit" onChange={handleTextChange} />
            </div>
            <input type="submit" className="translate" value="Translate" />
          </form>
          <div className='connect'>
            <div className='arrow'>
                <ArrowForwardIcon/>
            </div>
            {/* Output */}
            <div className='alloutputs'>
              <select onChange={handleOutputChange} className="selectOutput" value={output}>
                <option value="" disabled>Select a language</option>
                {languages.map((language, i) => (
                  <option value={language.code} key={i}>{language.name}</option>
                ))}
              </select>
              
              
              {/* <input type="text" value={result} /> */}
              <p className='output'>{result}</p>
            </div>
          </div>
        </>
      }
    </section>
  )
}

export default Translator