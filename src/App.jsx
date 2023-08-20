
import './App.css'

import header from './estilos/header.module.css';
import logo from './../public/manuel.svg';
import {Link} from 'react-router-dom';

function App() {

  return (
    <>
       <div className="max-md:hidden">
        <div className={header.container}>
          <div className={header.image}>
            <img  alt='logo manu' src={logo}>
            </img></div>
          <div className={header.line}></div>

          <div className={header.groupBtn}>
            <Link to="/logo"><button className={header.btn1}>Logo Design

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button></Link>


            <Link to="/contact"><button className={header.btn2}>Contact</button></Link>


            <Link to="/photography"><button className={header.btn3}>Photography
              <span className={header.effect}></span></button></Link>
          </div>

        </div>
      </div>

      <div className="w-full  md:hidden">
        <div className={header.containerMobile}>
          <div className={header.contactMailMobile}>
            <div className={header.contactBackMobile}>
            <img alt='logo manu' className={header.imgLogo} src={logo}></img>
            </div>
              <div className={header.containerImgMobile}>
                <div className={header.emailMobile}>
                <Link to="/logo"><button className={header.btnMobile}>Logo Design</button></Link>
                </div>

                <div className={header.emailMobile}>
                  
                <Link to="/contact"><button className={header.btnMobile}>Contact</button></Link>
                </div>

                <div className={header.emailMobile}>
                  
                <Link to="/photography"><button className={header.btnMobile}>Photography</button></Link>
                </div>
              </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
