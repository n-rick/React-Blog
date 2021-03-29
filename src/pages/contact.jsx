import axios from 'axios'
import React, {useState} from 'react'
import { baseUrl } from '../.env'
import InputForm from '../components/form/inputForm'
import { GetHandleChange, GetHandleSubmit } from '../services/handle'

export default function Contact() {

    const [state, setstate] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        message: '',
    })

    // const handleChange = (event) => {
    //     console.log(event, event.target.value)
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     setstate({ ...state, [name]: value })
    // }
    GetHandleChange();
    console.log('Envoyer depuis contact')

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log('Envoyer depuis contact')
    //     const url = baseUrl + 'contact'
    //     axios.post(url, state)
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error))
    // }
    GetHandleSubmit();

    return (
        <main>
            <form onSubmit={GetHandleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <InputForm value={state.lastName} onChange={GetHandleChange} label="Nom" name="lastName" type="text" size="45" pattern="[a-zA-Z]{4,15}" />
                    </div>
                    <div className="form-group col-md-6">
                        <InputForm value={state.firstName} onChange={GetHandleChange}  label="Prenom" name="firstName" type="text" size="30" pattern="[a-zA-Z]{4,15}" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <InputForm value={state.email} onChange={GetHandleChange}  label="Email" name="email" type="email" minlength="6" />
                    </div>
                    <div className="form-group col-md-6">
                        <InputForm value={state.phone} onChange={GetHandleChange} label="Téléphone" name="phone" type="text" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea value={state.message} onChange={GetHandleChange} className="form-control" name="message" id="message" maxLength="140" rows="3"/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Envoyer</button>
            </form>
        </main>
    )
}
