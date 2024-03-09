import React from 'react';

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-4  bg-success">
            <div className="col-md-4 d-flex align-items-center">

                <span className="mb-3 mb-md-0 text-muted ms-auto">&copy; 2024 Barbaros Altay</span>
            </div>

            <ul className="nav col-md-4 ms-auto  list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#">Twitter</a></li>
                <li className="ms-3"><a className="text-muted" href="#">Instagram</a></li>
                <li className="ms-3"><a className="text-muted" href="#">Facebook</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
