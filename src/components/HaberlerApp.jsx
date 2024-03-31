import React from 'react';
import './Haberler.css';
import { useLocation } from 'react-router-dom';

function HaberlerApp() {

  const location = useLocation();

  if (location.pathname === '/') {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="./src/Images/Başlıksız-1.jpg" alt="Logo" style={{ height: '300px', width: '600px' }} />
            <h2>Önemli Haber</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum neque alias nihil aliquam a repudiandae quas, similique inventore porro, odit suscipit repellendus, quisquam rem amet minus! Accusamus, odit labore.</p>
            <a href="/haber1" className="habere-git">
              Habere Git
            </a>
          </div>
          <div className="col-md-3">
            <img src="src/Images/Başlıksız-2.jpg" alt="Logo" style={{ height: '300px', width: '300px' }} />
            <h2>Haber 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis itaque quod praesentium at, ex odio odit voluptatem sint dolores cupiditate. Totam iure atque molestias ipsum in possimus quisquam delectus?</p>
            <a href="/haber2" className="habere-git">
              Habere Git
            </a>
          </div>
          <div className="col-md-3">
            <img src="src/Images/Başlıksız-2.jpg" alt="Logo" style={{ height: '300px', width: '300px' }} />
            <h2>Haber 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere eaque sequi iusto inventore quas iure rem dolore, vero, ullam sunt tempora in nemo iste, voluptates quae! Tempora, impedit. Iste?</p>
            <a href="/haber3" className="habere-git">
              Habere Git
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default HaberlerApp;
