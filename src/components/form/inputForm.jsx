import React from 'react'

export default function InputForm({label, name, type, value, onChange}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                name={name} 
                id={name}
                value={value}
                onChange = {onChange}
                className="form-control"
            />
    </div>

    )
}

