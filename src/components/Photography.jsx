
import photo from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './../components/FooterMobile';
import { Footer } from './../components/Footer';
import img1 from './../../public/images/img-00361.png';
import img2 from './../../public/images/img-01331.png';
import img3 from './../../public/images/img-02361.png';
import img4 from './../../public/images/img-06241.png';
import img5 from './../../public/images/img-06361.png';
import img6 from './../../public/images/img-07521.png';


export const Photography = () => {
 
  return (
    <>
    <Header/>
        <div className="max-md:hidden">
           
            <div className={photo.container}>
                <div className={photo.gallery}>
                    <div className={photo.normal}>
                        <img src={img2} className={photo.small}
                            alt="image" />

                        <img src={img3} className={photo.small}
                            alt="manuel" />
                    </div>
                    <img src={img4} className={photo.large}
                        alt="bl" />
                </div>
                <div className={photo.gallery}>
                    <img src={img6} className={photo.large}
                        alt="zeki" />
                    <div className={photo.normal}>
                        <img src={img1} className={photo.small}
                            alt="image" />

                        <img src={img5} className={photo.small}
                            alt="image" />
                    </div>
                </div>
            </div>
            
           
            </div>
            <div className="w-full  md:hidden">
            <div className={photo.containerMobile}>
                <div className={photo.galleryMobile}>
                    <div className={photo.normalMobile}>
                        <img src={img2} className={photo.smallMobile}
                            alt="image" />

                        <img src={img3} className={photo.smallMobile}
                            alt="manuel" />
                    </div>
                    <img src={img4} className={photo.smallMobile}
                        alt="bl" />
                </div>
                <div className={photo.galleryMobile}>
                    <img src={img6} className={photo.smallMobile}
                        alt="zeki" />
                    <div className={photo.normalMobile}>
                        <img src={img1} className={photo.smallMobile}
                            alt="image" />

                        <img src={img5} className={photo.smallMobile}
                            alt="image" />
                    </div>
                </div>
            </div>
            

          
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
