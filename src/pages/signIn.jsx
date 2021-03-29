import React, {useState} from 'react'
import InputForm from '../components/form/inputForm'

export default function SignIn() {

    const [state, setstate] = useState({
        lastName: '',
        firstName: '',
        mail: '',
        pwd: '',
        pwdConfirm: '',
    })

    const handleChange = (event) => {
        console.log(event, event.target.value)
        const value = event.target.value;
        const name = event.target.name;
        setstate({ ...state, [name]: value })
        if(name === 'pwdConfirm' && value !== state.pwd)
        console.log('erreur de saisi')
        else

        console.log('bon mot de passe');
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Envoyer depuis Inscription')
    }


    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <InputForm value={state.lastName} onChange={handleChange} label="Nom" name="lastName" type="text" />
                    </div>
                    <div className="form-group col-md-6">
                        <InputForm value={state.firstName} onChange={handleChange} label="Prenom" name="firstName" type="text" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <InputForm value={state.email} onChange={handleChange} label="Email" name="email" type="email" />
                    </div>
                    <div className="form-group col-md-4">
                        <InputForm value={state.pwd} onChange={handleChange} label="mot de passe" name="pwd" type="password"
                        pattern="[0-9a-zA-Z]{4,8}" title="Veuillez saisir un mot de passe de 4 à 8 caractère."/>
                    </div>
                    <div className="form-group col-md-4">
                        <InputForm value={state.pwdConfirm} onChange={handleChange} label="confirmer votre mdp" name="pwdConfirm" type="password"
                            pattern="[0-9a-zA-Z]{4,8}" title="Veuillez saisir un mot de passe de 4 à 8 caractère"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-primary">Envoyer</button>
            </form>
        </main>


    )
}
