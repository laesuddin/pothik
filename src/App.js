import React from 'react'
import Home from './Home'
import Admin from './components/admin/Admin'
import Blogpost from './components/blogpost/Blogpost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Registration from './components/signup&login/Registration'
import Login from './components/signup&login/Login'
import PackageAdd from './components/admin/PackageAdd'
import { Header } from './components'
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogpost/>}/>
        <Route path ='/registration' element={<Registration/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path="/addPackage" element={<PackageAdd/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App