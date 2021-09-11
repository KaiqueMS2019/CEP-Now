import React from 'react'

    function formCep() {

    return (
        
        <div className="container">
          <h1>CEP NOW</h1>
          <form >
            <div className="form-group"> 
              <input type="text" name="cep" className="form-control"/>
            </div>
            <button type="submit" name="getCep" className="btn btn-primary">Buscar</button>
          </form>
        </div>
    
      )
  }
  export default formCep