import React from 'react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

export default function ItemMenu({name, url}) {
    return (
        <li className="nav-item">
            <Link to={url}  className="nav-link">{name}</Link>
        </li>
    )
}
