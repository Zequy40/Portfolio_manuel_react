
import photo from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
//import axios from 'axios';
//import { useEffect, useState } from 'react';
import PhotographyMobile from './PhotographyMobile';
import { Forms } from './Forms';
// import img1 from './../../public/images/img-00361.png';
// import img2 from './../../public/images/img-01331.png';
// import img3 from './../../public/images/img-02361.png';
// import img4 from './../../public/images/img-06241.png';
// import img5 from './../../public/images/img-06361.png';
// import img6 from './../../public/images/img-07521.png';


export const Filmmaking = () => {

    // const [product, setProduct] = useState([])
    // const folder = '/_admin/assets/images/fotos/'
    // useEffect(() => {
    //   axios.get('https://manuelcavilla.com/api-image.php').then(response => {
    //     setProduct(response.data)
    //   })
    //     .catch(error => {
    //       console.error('Error al descargar los productos:', error);
    //     })

    // }, []);

    return (
        <>
            <Header />
            <div className="max-md:hidden">

                <div className="max-w-[1212px]  m-auto py-5 mb-10">

                    <div className="transition-all relative w-full max-h-[28.6875rem] py-16">

                        <h2 className={`text-center text-4xl pt-7 pb-10 ${photo.font2}`}>Showreel</h2>
                        <div className="max-h-[36.25rem] h-96 w-full bg-black rounded-3xl"></div>
                    </div>

                    <div className="relative w-full max-h-[28.6875rem] pb-16 pt-40 mb-24">

                        <h2 className={`text-center text-4xl pb-16 ${photo.font2}`}>Works</h2>
                        <div className="max-h-[36.25rem] h-96 w-full bg-black rounded-3xl"></div>
                    </div>
                </div>
<Forms />
            </div>
            <div className="md:hidden">
                <PhotographyMobile />
            </div>

            <div className="max-md:hidden">
                <Footer />
            </div>
            <div className="w-full  md:hidden">
                <FooterMobile />
            </div>
        </>
    )
}
