import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './../components/Inicio';
import { Logo } from './../components/Logo';
import { Contact } from './../components/Contact';
import { Photography } from './../components/Photography';

export const RouterPrincipal = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/photography' element={<Photography />}></Route>
                    <Route path='/logo' element={<Logo />}></Route>
                    <Route path='*' element={(
                        <>
                            <h1>404</h1>
                            <p>Esta pagina no existe</p>
                        </>
                    )}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
