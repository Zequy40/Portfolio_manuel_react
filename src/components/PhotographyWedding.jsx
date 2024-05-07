
import photo from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhotographyMobile from './PhotographyMobile';
// import img1 from './../../public/images/img-00361.png';
// import img2 from './../../public/images/img-01331.png';
// import img3 from './../../public/images/img-02361.png';
// import img4 from './../../public/images/img-06241.png';
// import img5 from './../../public/images/img-06361.png';
// import img6 from './../../public/images/img-07521.png';


export const PhotographyWedding = () => {

    const [product, setProduct] = useState([])
    // const folder = '/_admin/assets/images/fotos/'
    const folder = '/images/'
    useEffect(() => {
      axios.get('https://manuelcavilla.com/apiPhotos.php').then(response => {
        setProduct(response.data)
      })
        .catch(error => {
          console.error('Error al descargar los productos:', error);
        })
  
    }, []);

  return (
    <>
    <Header/>
        <div className="max-md:hidden">
           
            <div className={photo.container} >
           
                
                <div className={photo.responsivePhoto} >
            {product.map(foto => (       
                        <img src={folder + foto.src} key={foto.id} className={photo.large}
                            alt="image" />
                    ))}
                </div>
          
            </div>
           
            
           
            </div>
            <div className="md:hidden">
                <PhotographyMobile/>
            </div>
         
        <div className="max-md:hidden">
                        <Footer/>
                </div>
                <div className="w-full  md:hidden">
               <FooterMobile/>
            </div>
        </>
  )
}
