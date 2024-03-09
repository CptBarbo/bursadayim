import React from 'react'
import AVM from './pages/AVM.jsx'
import Tarih from './pages/Tarih.jsx'
import Dogal from './pages/Dogal.jsx'
import { Routes, Route } from 'react-router-dom';
import Bulunamadi from './pages/Bulunamadi.jsx';

function PageRoutes() {
  return (

    
    <Routes>
      <Route path='/AVM' element={<AVM />} />
      <Route path='/Tarih' element={<Tarih />} />
      <Route path='/Dogal' element={<Dogal />} />
      <Route path='*' element={<Bulunamadi />} />
    </Routes>
    



  )
}

export default PageRoutes
