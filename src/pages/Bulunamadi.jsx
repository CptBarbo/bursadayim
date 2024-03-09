import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Bulunamadi() {
  const location = useLocation();

  // Sadece belirli yolları kontrol etmek için bir dizi oluşturun
  const belirliYollar = ['/', '/AVM', '/Dogal', '/Tarih'];

  // Eğer mevcut yol belirliYollar dizisinde değilse 404 sayfasını göster
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
