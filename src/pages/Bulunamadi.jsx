import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Bulunamadi() {
  const location = useLocation();


  const belirliYollar = ['/', '/AVM', '/Dogal', '/Tarih'];


  if (!belirliYollar.includes(location.pathname)) {
    return (
      <div className='container'>
        <h1>404 - Sayfa Bulunamadı</h1>
        <Link to='/' className='btn btn-info'>Ana Sayfaya</Link>
      </div>
    )
  } else {
    return null;
  }
}

export default Bulunamadi
