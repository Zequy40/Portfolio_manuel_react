import { useEffect, useState } from 'react';
import contact from './../estilos/contact.module.css';
import { Link, useHref } from 'react-router-dom';
import axios from 'axios';


export const Header = () => {
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
      else if(location === "/filmmaking"){
        page = "Filmmaking"
      }
      else if(location === "/commercial"){
        page = "Commercial"
      }
      else if(location === "/wedding"){
        page = "Wedding"
      }
      else if(location === "/photography-wedding"){
        page = "Photography Wedding"
      }
      else if(location === "/photography-food"){
        page = "Food Photography"
      }
      else if(location === "/photography-portrait"){
        page = "Portrait"
      }
      else if(location === "/photography-event"){
        page = "Event"
      }
      else if(location === "/photography-street"){
        page = "Street Photography"
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
     const [isScrolled, setIsScrolled] = useState(false); 
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      <div className={`${contact.container} ${contact.whiteColor} ${isScrolled ? 'bg-neutral-800/50 text-white' : 'text-black'}`}>

        <div className={contact.header}>
          {product.map(logo => (
            <div className="logo" key={logo.id}>
              <Link to="/">
                <img className={contact.logo} alt='' src={`${isScrolled ? `${folder + logo.imageMobileW}` : `${folder + logo.imageMobile}`}`}></img>
              </Link>
            </div>
          ))}

          <h1 className={`${contact.title} ${isScrolled ? `${contact.title} text-white` : 'text-black'}`}>{page}</h1>
          <button className={contact.btn} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className={contact.icon} fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
        </div>

        <div className={`${contact.menu} ${menu ? contact.isActive : ''}`}>
          <button className={contact.close} onClick={handleClickOff}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={contact.svg} viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          <div className={contact.nav}>
            <ul className=''>
              <li className={contact.menuItem}>
                <Link to="/menu-photography" className={
                  page === "Photography" || page === "Photography Menu" ? 'text-red-700' : ''
                }>Photography</Link>
                <ul className={contact.submenu}>
                  <li><Link to="/commercial" className={
                    page === "Commercial" ? 'text-red-700 pb-2 pt-4' : 'pb-2 pt-4'
                  }>Commercial</Link></li>
                  <li><Link to="/wedding" className={
                    page === "Wedding" ? 'text-red-700 pb-2' : 'pb-2'
                  }>Wedding</Link></li>
                  <li><Link to="/photography-street" className={
                    page === "Street Photography" ? 'text-red-700 pb-2' : 'pb-2'
                  }>Street Photography</Link></li>
                </ul>
              </li>
            </ul>

            <Link to="/about" className={
              page === "About me" ? 'text-red-700' : ''
            }
            >About me</Link>
            <Link to="/filmmaking" className={
              page === "Filmmaking" ? 'text-red-700' : ''
            }>Filmmaking</Link>
          </div>
        </div>

        <div className={contact.line}></div>
      </div>
    </>
  )
}
