import React, { useState } from 'react';
import './App.css';
import ReturnCep from './returnCep';

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
    console.log(data)

    fetch(`http://localhost:3001/?cep=${data.cep}`)
    .then(response => response.json())
    .then(data => {
      const array = convertToArray(data)
      console.log(array)
      setEvents(array)
    })
    .catch(error => console.error)
  }

  return (
    <body>
    <div>
      <h1>CEP NOW</h1>
      <form onSubmit={submitHandler} className="formCep">
        <div>
          <input type="text" name="cep" className="cep"/>
        </div>
        <button type="submit" name="getCep" className="getCep">Buscar</button>
      </form>
      <ReturnCep events={events}/>
    </div>
    </body>
  )
}

export default App;
