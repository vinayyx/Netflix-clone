import React, { useEffect } from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login'
import Singup from './Pages/Singup'
import Home from './Pages/Home'
import Player from './Pages/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import toast, { Toaster } from 'react-hot-toast'

function App() {

  const navigate = useNavigate()

  useEffect(() => {

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        
        navigate("/home")
      } else {
        console.log("logout")
        navigate("/")
      }
    })

  }, [])

  return (
    <div>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />



      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Singup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/player/:id' element={<Player />} />


      </Routes>



    </div>
  )
}

export default App
