import React, { useState } from 'react';
import './App.css';
import ReturnCep from './components/returnCep';

function App() {

  const convertToArray = (obj) => {
    const arr = [obj]

    return arr
  }
  const [events, setEvents] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    fetch(`http://localhost:3001/?cep=${data.cep}`)
      .then(response => response.json())
      .then(data => {
        const array = convertToArray(data)
        setEvents(array)
      })
      .catch(error => console.error)
  }

  return (
    <body>
      <div className="container">
        <h1>CEP NOW</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input type="text" name="cep" className="cepInput" placeholder="Insira o CEP"/>
          </div>
          <div className="buscar">
          <button type="submit" name="getCep" className="buttonCep">Buscar</button>
          </div>
        </form>
        <ReturnCep events={events} />
      </div>
    </body>
  )
}

export default App;
