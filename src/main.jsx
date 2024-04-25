import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  {Logo} from './components/Logo';
import  {Contact} from './components/Contact';
import  {MenuPhotography} from './components/MenuPhotography';
import  {Photography} from './components/Photography';
import  {About} from './components/About';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/menu-photography' element={<MenuPhotography />}/>
                    <Route path='/photography' element={<Photography />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/logo' element={<Logo />}/>
                    <Route path='*' element={(
                        <>
                            <h1>404</h1>
                            <p>Esta pagina no existe</p>
                        </>
                    )}/>
                </Routes>
            </BrowserRouter>
    
  </React.StrictMode>,
)
