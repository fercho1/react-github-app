import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    GithubApp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/user"
                            >
                                User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/repositories"
                            >
                                Repositories
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}