import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Personalprofile from './components/Personalprofile'
import Form from './components/Form'
import RegisterForm from './components/RegisterForm'

function App() {

  return (
    <>
      <Personalprofile username="john" />
      <RegisterForm />
    </>
  )
}

export default App
