import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  {Logo} from './components/Logo';
import  {Contact} from './components/Contact';
import  {MenuPhotography} from './components/MenuPhotography';
import  {Photography} from './components/Photography';
import  {Commercial} from './components/Commercial';
import  {About} from './components/About';
import  {Wedding} from './components/Wedding';
import  {PhotographyWedding} from './components/PhotographyWedding';
import  {PhotographyStreet} from './components/StreetPhotography';
import  {PhotographyEvent} from './components/PhotographyEvent';
import  {PhotographyFood} from './components/PhotographyFood';
import  {PhotographyPortrait} from './components/PhotographyPortrait';
import  {Filmmaking} from './components/Filmmaking';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/menu-photography' element={<MenuPhotography />}/>
                    <Route path='/photography' element={<Photography />}/>
                    <Route path='/commercial' element={<Commercial />}/>
                    <Route path='/wedding' element={<Wedding />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/logo' element={<Logo />}/>
                    <Route path='/photography-wedding' element={<PhotographyWedding />}/>
                    <Route path='/photography-event' element={<PhotographyEvent />}/>
                    <Route path='/photography-food' element={<PhotographyFood />}/>
                    <Route path='/photography-portrait' element={<PhotographyPortrait />}/>
                    <Route path='/photography-street' element={<PhotographyStreet />}/>
                    <Route path='/filmmaking' element={<Filmmaking />}/>
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
