import { useEffect, useState } from 'react';
import contact from './../estilos/contact.module.css';
import { Link, useHref } from 'react-router-dom';
import axios from 'axios';
export const HeaderWhite = () => {
    const [menu, setMenu] = useState(false)
    const handleClick = () => {
        setMenu(!menu)
      }
      const handleClickOff = () => {
        setMenu(false)
      }
      const location = useHref()
      let page
      if(location === "/logo"){
        page = "Logo Design"
      }
      else if(location === "/photography"){
        page = "Photography"
      }
      else if(location === "/menu-photography"){
        page = "Photography"
      }
      else if(location === "/contact"){
        page = "Contact"
      }
      else if(location === "/about"){
        page = "About me"
      }
      else if(location === "/commercial"){
        page = "Commercial"
      }
      else if(location === "/wedding"){
        page = "Wedding"
      }
      else{
        page = ''
      }
  
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
    <div className={contact.container} >

    <div className={contact.header}>
    {product.map(logo => (
      <div className="logo" key={logo.id}>
        <Link to="/">
          <img  className={contact.logo} alt='' src={folder + logo.image}></img>
        </Link>
      </div> 
      ))}
      
      <h1 className={contact.titleW}>{page}</h1>
      <button className={contact.btn} onClick={handleClick}>
        <img className={contact.icon} alt='' src='/images/icon.webp'></img>
      </button>
    </div>
    
        <div className={`${contact.menuW} ${menu ? contact.isActive : ''}`}>
          <button className={contact.close} onClick={handleClickOff}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={contact.svg} viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
          </button>
        <div className={contact.nav}>
          <Link to="/menu-photography" className={
             page==="Photography" || page==="Photography Menu" ? 'text-red-700' : ''
          }>Photography</Link>
          <Link to="/about" className={
             page==="About me" ? 'text-red-700' : ''
            }
          >About me</Link>
          <Link to="/filmmaking" className={
            page==="Filmmaking" ? 'text-red-700' : ''
          }>Filmmaking</Link>
          </div>
        </div>
 
  </div>
</>
  )
}
