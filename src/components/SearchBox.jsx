import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const [aramaMetni, setAramaMetni] = useState('');
    const navigate = useNavigate();

    const handleAramaSubmit = (event) => {
        event.preventDefault();

        navigate(`/arama?query=${aramaMetni}`);
    };

    return (
        <form className="d-flex" onSubmit={handleAramaSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Ara"
                aria-label="Search"
                value={aramaMetni}
                onChange={(e) => setAramaMetni(e.target.value)}
            />
            <button className="btn btn-light" type="submit">Ara</button>
        </form>
    );
}

export default SearchBox;
