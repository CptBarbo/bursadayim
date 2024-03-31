import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink, useLocation } from 'react-router-dom';



function Slider() {

  const location = useLocation();

  if (location.pathname === '/') {

    return (

      <Carousel data-bs-theme="dark">

        <Carousel.Item>
          <NavLink className="nav-link" to="/AVM">
            <img
              className="d-block w-100"
              src="https://i.hizliresim.com/qmevodt.jpg"
              alt="First slide" />
          </NavLink>
        </Carousel.Item>

        <Carousel.Item>
          <NavLink className="nav-link" to="/Tarih">
            <img
              className="d-block w-100"
              src="https://i.hizliresim.com/529tthk.jpg"
              alt="Second slide" />
          </NavLink>
        </Carousel.Item>

        <Carousel.Item>
          <NavLink className="nav-link" to="/Dogal">
            <img
              className="d-block w-100"
              src="https://i.hizliresim.com/529tthk.jpg"
              alt="Third slide" />
          </NavLink>
        </Carousel.Item>

      </Carousel>

      /*<Carousel.Caption>
            Görselin üstü yerine altına orta kısma açıklama yazabiliriz.
          </Carousel.Caption>*/

    );
  } else {
    return null;
  }
}

export default Slider;
