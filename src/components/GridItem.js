import React from 'react'
import { NavLink } from 'react-router-dom'

export const GridItem = ({ login, avatar_url, name, html_url, public_repos, type, following }) => {
    return (

        <div className="row mt-5 ml-2">
            <div className="col-4">
                <img
                    src={avatar_url}
                    alt={login}
                    className="img-thumbnail rounded-circle animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> {login} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Name: </b> {name} </li>
                    <li className="list-group-item"> <b> Url: </b> {html_url} </li>
                    <li className="list-group-item"> <b> Type: </b> {type} </li>
                    <li className="list-group-item"> <b> Following: </b> {following} </li>
                </ul>
                <br></br>
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/repositories"
                >
                    Repositories:   {public_repos}
                </NavLink>




            </div>

        </div>



    )
}