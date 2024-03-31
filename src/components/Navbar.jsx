import React, { useState } from 'react';
import './Navbar.css';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);



    return (
        <div>
            <nav className="navbar navbar-dark bg-success">
                <div className="container">
                    <a className="navbar-brand">
                        <NavLink className="nav-link" to="/">
                            <img src="https://i.hizliresim.com/m5dqajm.png" alt="image" width="130" height="50" />
                        </NavLink>
                    </a>
                    <ul>
                        <a>Bursadayım!</a>
                        <p>'Bursa'ya Dair Aradığınız Herşey'</p>
                    </ul>

                    <SearchBox />

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <a>Faydalı Linkler</a>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="https://tr.wikipedia.org/wiki/Bursa">Bursa Hakkında</Dropdown.Item>
                            <Dropdown.Item href="https://www.burulas.com.tr/rayli-sistemler/bursaray/">Bursa Ray Hatları</Dropdown.Item>
                            <Dropdown.Item href="https://www.burulas.com.tr/otobus/">Bursa Otobüs Hatları</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
