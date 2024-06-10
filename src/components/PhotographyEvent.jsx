
import photo from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Forms } from './Forms';
import { Link } from 'react-router-dom';
// import img1 from './../../public/images/img-00361.png';
// import img2 from './../../public/images/img-01331.png';
// import img3 from './../../public/images/img-02361.png';
// import img4 from './../../public/images/img-06241.png';
// import img5 from './../../public/images/img-06361.png';
// import img6 from './../../public/images/img-07521.png';


export const PhotographyEvent = () => {

  const [product, setProduct] = useState([])
   const folder = '/_admin/assets/images/fotos/'
  //const folder = '/images/'
  useEffect(() => {
    axios.get('https://manuelcavilla.com/apiPhotos4.php').then(response => {
      setProduct(response.data)
    })
      .catch(error => {
        console.error('Error al descargar los productos:', error);
      })

  }, []);

  return (
    <>
      <Header />
      
      <div className="w-10 h-36"></div>
        <div className={photo.container} >


          <div className={photo.responsivePhoto} >
            {product.map(foto => (
              <div className={photo.gridItem} key={foto.id}>
                <img src={folder + foto.src} className={photo.photoItem}
                  alt="image" />
              </div>
            ))}
            <div className="flex items-center justify-end max-w-[1272px] mx-auto">
                <Link to="/commercial" className='cursor-pointer group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" className='w-12 pt-5 group-hover:text-red-700' fill="currentColor"  viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                </div>
          </div>

        </div>
     <Forms />

      <div className={photo.responsiveFooter}>
        <Footer />
      </div>
      <div className={photo.responsiveFooterMobile}>
        <FooterMobile />
      </div>
    </>
  )
}
