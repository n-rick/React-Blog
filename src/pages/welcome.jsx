import React from 'react'
import TriAndSearchBar from '../components/accueil/triAndSearchBar'
import Jumbotron from '../components/accueil/jumbotron'


export default function Welcom() {
    return (
        <div>
            <TriAndSearchBar />
            <h1 className="ml-2 font-weight-bold">Articles</h1>
            <Jumbotron/>
        </div>
    )
}
