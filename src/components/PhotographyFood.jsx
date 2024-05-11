
import photo from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import img1 from './../../public/images/img-00361.png';
// import img2 from './../../public/images/img-01331.png';
// import img3 from './../../public/images/img-02361.png';
// import img4 from './../../public/images/img-06241.png';
// import img5 from './../../public/images/img-06361.png';
// import img6 from './../../public/images/img-07521.png';


export const PhotographyFood = () => {

  const [product, setProduct] = useState([])
  const [lightboxImg, setLightboxImg] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // const folder = '/_admin/assets/images/fotos/'
  const folder = '/images/'
  useEffect(() => {
    axios.get('https://manuelcavilla.com/apiPhotos2.php').then(response => {
      setProduct(response.data)
    })
      .catch(error => {
        console.error('Error al descargar los productos:', error);
      })

  }, []);

  const openLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
    setIsLightboxOpen(true);
  };

  // Función para cerrar el lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <Header />
      

        <div className={photo.container} >


          <div className={photo.responsivePhoto} >
            {product.map(foto => (
             
              <div className={photo.gridItem} key={foto.id}>
                <img src={folder + foto.src} className={photo.photoItem}
                  alt="image" onClick={() => openLightbox(folder + foto.src)}/>
              </div>
            ))}
          </div>
          {isLightboxOpen && (
            <div className={`${photo.lightbox} ${photo.active}`}>
            <img src={lightboxImg} alt="image" />
            <button id="close" className={photo.closeButton} onClick={closeLightbox}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="exit" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </span>
            </button>
          </div>
        )}

        </div>
     

      <div className={photo.responsiveFooter}>
        <Footer />
      </div>
      <div className={photo.responsiveFooterMobile}>
        <FooterMobile />
      </div>
    </>
  )
}
