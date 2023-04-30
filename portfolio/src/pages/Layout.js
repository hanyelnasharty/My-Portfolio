import React from "react"
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="nav-container">
                <nav>
                <ul>
                    <li>
                        <img id="profile" src="profile.jpg" alt=""/>
                    </li>
                    <li>
                        <Link className="link current" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link current" to="/bio">Biography</Link>
                    </li>
                    <li>
                        <Link className="link current" to='/skills'>Skills</Link>
                    </li>
                    <li>
                        <Link className="link current" to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="link current" to="/interests">Interests</Link>
                    </li>
                </ul>
            </nav>
            </div>
            
            <Outlet />
        </>
    )
}

export default Layout