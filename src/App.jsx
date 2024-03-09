import { useState } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import HaberlerApp from './components/HaberlerApp'
import Havadurumu from './components/Havadurumu'
import PageRoutes from './PageRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      <Navbar />
      <Havadurumu />
      <Slider />
      <HaberlerApp />
      <PageRoutes />

    </div>


  )
}


export default App
