import React, { useEffect, useState } from 'react'
import ItemMenu from './itemMenu'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

export default function Header() {
    const [caseMenu, setCaseMenu] = useState([
        ['Accueil', '/'],
        ['A propos', '/about'],
        ['Contact', '/contact'],
        ['Créer un compte', '/inscription']
    ])

    useEffect(() => {
        const isAuth = window.localStorage.getItem('auth')
        if(isAuth && JSON.parse(isAuth) === true) {
            setCaseMenu([...caseMenu, ['Se déconnecter', '/logout']])
        } else {
            setCaseMenu([...caseMenu, ['Se connecter', '/login']])
        }
    }, [])

    return (
        
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >Mon Blog</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        {caseMenu.map((item, index) => {
                            return <ItemMenu key= {index} name= {item[0]} url= {item[1]}/>
                        })}
                    </ul>
                </div>
            </nav>
        </header>

    )
}
