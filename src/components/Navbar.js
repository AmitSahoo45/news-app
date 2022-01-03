import React from 'react'
import "./styling.css";
import redfort from './newsapplogo.png'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
         return (
            <div>
                <div>
                    <div className="heading-container">
                        <div className="header-image">
                            <img src={redfort} alt="" />
                        </div>
                        <header className="text-center">
                            <h1 className="fs-2"><span className="text-type-1">Nationel News </span> - Multiutility Calculator App</h1>
                            <p className="lh-base text-uppercase fs-6">Get the latest and trending news and daily updates on our web app for free</p>
                        </header>
                        <div className="header-image">
                            <img src="/images/urban-911.png" alt="" />
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    // }
}

export default Navbar
