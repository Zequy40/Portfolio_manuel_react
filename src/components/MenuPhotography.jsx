
import photography from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { MenuPhotographyMobile } from './MenuPhotographyMobile'
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

import street from './../../public/images/street_back.webp';
import wedding from './../../public/images/wedding_back.webp';
import photo from './../../public/images/photo_back.webp';


export const MenuPhotography = () => {


    return (
        <>
            <Header />
            <div className="max-md:hidden">
            <div className="w-10 h-36"></div>
            <div className="max-w-[1212px]  m-auto pb-5">
                    <div className="w-full pb-5 mb-10 flex flex-col items-center justify-center text-3xl">
                        <div className="transition-all relative w-full max-h-[215px]">
                        <img src={photo} alt="" className="relative"/>
                            <Link to="/commercial"><button className={`absolute group left-1/2 top-[35%] translate-x-[-50%] translate-y-2/4 text-white text-3xl ${photography.font}`}>Commercial
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                        <div className="relative w-full max-h-[215px]">
                        <img src={wedding} alt="" className="relative"/>
                            <Link to="/wedding"><button className={`absolute group left-1/2 top-[35%] translate-y-2/4 translate-x-[-50%] text-white text-3xl bg-neutral-800/[0.2] ${photography.font}`}>Wedding
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                        
                        <div className="relative w-full max-h-[215px]">
                        <img src={street} alt="" className="relative"/>
                            <Link to="/photography-street"><button className={`absolute group left-1/2 top-1/4 translate-y-2/4 translate-x-[-50%] text-white text-3xl ${photography.font}`}>Street <br></br>photography
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                    </div>
                </div>
                </div>
                <MenuPhotographyMobile />
           



            <div className="max-md:hidden">
                <Footer />
            </div>
            <div className="w-full  md:hidden">
                
                <FooterMobile />
            </div>
        </>
    )
}
