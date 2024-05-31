import { useEffect, useState } from 'react';

import header from './../estilos/header.module.css';

import {Link} from 'react-router-dom';
import axios from 'axios';

export default function InicioAppMobile() {

    const [product, setProduct] = useState([])
      const folder = '/logo/'
      useEffect(() => {
          axios.get('https://manuelcavilla.com/apiLogo.php').then(response => {
              setProduct(response.data)
          })
              .catch(error => {
                  console.error('Error al descargar los productos:', error);
              })
  
      }, []);
  return (
    <>
        <div className="w-full">
        <div className={header.containerMobile}>
          <div className={header.imageContainerBlack}>
          {product.map(logo=>(
            <div key={logo.id}>
              <div className={header.contactBackMobile}>
                <img alt='logo manu' className={header.imgLogo} src={folder + logo.imageMobileW}></img>
              </div>
            
              <div className={header.containerImgMobile}>
               
                  <div className="relative w-full"> <img src={folder + logo.backMobile} alt="" className="max-h-24 w-full"/>
                  <Link to="/commercial"><button className={`absolute left-1/2 top-0 translate-x-[-50%] translate-y-2/3 text-white text-3xl`}>{logo.descriptionBackMobile}</button></Link></div>
                
                  <div className="relative w-full"> <img src={folder + logo.backMobile2} alt="" className="max-h-24 w-full"/>
                  <Link to="/about"><button className={`absolute left-1/2 top-0 translate-x-[-50%] translate-y-2/3 text-white text-3xl`}>{logo.descriptionBackMobile2}</button></Link></div>
                
                  <div className="relative w-full"> <img src={folder + logo.backMobile3} alt="" className="max-h-24 w-full"/>
                  <Link to="/filmmaking"><button className={`absolute left-1/2 top-0 translate-x-[-50%] translate-y-2/3 text-white text-3xl`}>{logo.descriptionBackMobile3}</button></Link></div>
                
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}
