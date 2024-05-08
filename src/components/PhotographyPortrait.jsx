
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


export const PhotographyPortrait = () => {

  const [product, setProduct] = useState([])
  // const folder = '/_admin/assets/images/fotos/'
  const folder = '/images/'
  useEffect(() => {
    axios.get('https://manuelcavilla.com/apiPhotos3.php').then(response => {
      setProduct(response.data)
    })
      .catch(error => {
        console.error('Error al descargar los productos:', error);
      })

  }, []);

  return (
    <>
      <Header />
      

        <div className={photo.container} >


          <div className={photo.responsivePhoto} >
            {product.map(foto => (
              <div className={photo.gridItem} key={foto.id}>
                <img src={folder + foto.src} className={photo.photoItem}
                  alt="image" />
              </div>
            ))}
          </div>

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
