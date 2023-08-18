
import header from './../estilos/header.module.css';

import logo from './../../public/manuel.svg';

export const Inicio = () => {
    return (
        <>
            
            <div className="max-md:hidden">
        <div className={header.container}>
          <div className={header.image}>
            <img  alt='logo manu' src={logo}>
            </img></div>
          <div className={header.line}></div>

          <div className={header.groupBtn}>
            <a href="/logo"><button className={header.btn1}>Logo Design

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button></a>


            <a href="/contact"><button className={header.btn2}>Contact</button></a>


            <a href="/photography"><button className={header.btn3}>Photography
              <span className={header.effect}></span></button></a>
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
                <a href="/logo"><button className={header.btnMobile}>Logo Design</button></a>
                </div>

                <div className={header.emailMobile}>
                  
                <a href="/contact"><button className={header.btnMobile}>Contact</button></a>
                </div>

                <div className={header.emailMobile}>
                  
                <a href="/photography"><button className={header.btnMobile}>Photography</button></a>
                </div>
              </div>

            
          </div>
        </div>
      </div>
        </>
    )
}