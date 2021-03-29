import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../.env'


export function GetHandleChange () {

        const [state, setstate] = useState({
            x:''
        })
        
        const handleChange = (event) => {
            console.log(event, event.target.value)
            const value = event.target.value;
            const name = event.target.name;
            setstate({ ...state, [name]: value })
        }
    
    }

export function GetHandleSubmit () {

        const [state, setstate] = useState({
            y: ''
        })
        
        const handleSubmit = (event) => {
            event.preventDefault()
            console.log('Envoyer depuis contact')
            const url = baseUrl + 'contact'
            axios.post(url, state)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        }
}