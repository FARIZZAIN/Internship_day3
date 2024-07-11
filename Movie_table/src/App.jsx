import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Shows from './components/Shows'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/Shows' element={<Shows/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
