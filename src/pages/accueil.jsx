import React from 'react'
import Jumbotron from '../components/accueil/jumbotron'
import TriAndSearchBar from '../components/accueil/triAndSearchBar'

export default function accueil() {
    return (
        <div className="container">
            <TriAndSearchBar/>
            <Jumbotron/>
        </div>


    )
}
