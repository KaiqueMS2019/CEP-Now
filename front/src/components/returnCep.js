import React from 'react'
import '../styles/main.css'

function returnCep({ events }) {
    if (!events || events.length === 0) return null
    return (
        <div className="respCep">

            <h1>CEP:</h1>
            <ul className="list-group">
                {events.map(item =>
                    <li className="list-group-item" key={item.cep}>
                        <strong>CEP: {item.cep}</strong>
                        <strong>ESTADO: {item.state}</strong>
                        <strong>CIDADE: {item.city}</strong>
                        <strong>BAIRRO: {item.neighborhood}</strong>
                        <strong>RUA: {item.street}</strong>
                    </li>)}
            </ul>

        </div>
    )
}

export default returnCep