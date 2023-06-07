import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
      <div>
        <header className="header" style={{"backgroundColor":`${props.mode==='Light'?"rgb(84, 18, 122)":'black'}`}}>
            <h1 className="brandname">{props.title}</h1>
            <nav className="nav">
                <ul className="navbar">
                    <li className="nav-items">
                        <a href="/">Home</a>
                    </li>
                    {/* <li className="nav-items">
                        <Link to="/about">About</Link>
                    </li> */}
                    <li className="nav-items"><button onClick={props.toggleMode}> Enable {props.mode==='Light'?'Dark':"Light"} Mode</button></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
