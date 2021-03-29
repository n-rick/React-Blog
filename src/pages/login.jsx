import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../.env'
import InputForm from '../components/form/inputForm'

export default function Login(props) {

    const [loginData, setLoginData] = useState({
        mail: '',
        pwd: '',
    })
    
    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Envoyer depuis Login')
        const url = baseUrl + 'user?email='+loginData.email+'&pwd='+loginData.pwd;
        axios.get(url)
        .then((response) => {
            if(response.data.length > 0) {
                // OK
                console.log('ok')
                window.localStorage.setItem('auth', "true")
                props.history.push('/')

            }else {
                // FAIL
                console.log('Fail')
            }

        })
        .catch((error) => console.log(error))
    }

    return (

        <main>
            <form onSubmit={handleSubmit} className="container my-5">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <InputForm value={loginData.email} onChange={handleChange} label="email" name="email"  value={loginData.email} type="email" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-4">
                        <InputForm value={loginData.pwd} onChange={handleChange} label="mot de passe" name="pwd" value={loginData.pwd} type="password" onChange={handleChange}
                            pattern="[0-9a-zA-Z]{4,8}" title="Veuillez saisir un mot de passe de 4 à 8 caractère."/>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-warning">Se connecter</button>
            </form>
        </main>

    )
}
