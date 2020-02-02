import React from 'react'
import './countryCard.scss'

function countryCard(props){
    return(
        <div className="country-card">
            <img src={props.imgSrc} alt="country-flag"></img>
            <h4>{props.name}</h4>
            <p>{props.population}</p>
            <button className ="button button--primary" onClick={props.callback}>{props.buttonText}</button>
        </div>
    )
}

export default countryCard