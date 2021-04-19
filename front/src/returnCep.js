import React from 'react'
import './styles/main.css'

function returnCep({ events }) {
    if (!events || events.length === 0) return null
    return (
        <div className="container">

            <h1>CEP:</h1>
            <ul>
                {events.map(item =>
                    <li className="list" key={item.cep}>
                        <span>CEP: {item.cep}</span>
                        <span>ESTADO: {item.state}</span>
                        <span>CIDADE: {item.city}</span>
                        <span>BAIRRO:{item.neighborhood}</span>
                        <span>RUA: {item.street}</span>
                    </li>)}
            </ul>

        </div>
    )
}

export default returnCep