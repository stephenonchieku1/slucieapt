import React from 'react'
import {Route, Routes,route} from "react-router-dom"
import home from '../pages/home'


function Routing() {
  return (
    <div>route
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Routing