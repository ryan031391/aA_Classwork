import React from 'react'
import { Link } from "react-router-dom";


export default function pokemonIndexItem(props) {
    const {id, imageUrl, name} = props.poke
    return (
        <li className="pokemon-index-item">
            <Link to={`/pokemon/${id}`}>
                <span>{id}</span>
                <img src={imageUrl}/>
                <span>{name}</span>
            </Link>
        </li>
    )
}
