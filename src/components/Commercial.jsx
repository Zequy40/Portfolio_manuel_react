
import photography from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

import street from './../../public/images/p1.webp';
import wedding from './../../public/images/p2.webp';
import photo from './../../public/images/p3.webp';


export const Commercial = () => {


    return (
        <>
            <Header />

            <div className="max-w-[1212px]  m-auto py-5">
                    <div className="w-full py-5 my-10 flex flex-col items-center justify-center text-3xl">
                        <div className="transition-all relative w-full max-h-[459px]">
                        
                            <Link to="/photography"><img src={photo} alt="" className="relative grayscale hover:grayscale-0"/><button className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-2/4 text-white text-4xl ${photography.font}`}>Food Photography
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all'></span></button></Link>
                        </div>
                        
                        <div className="relative w-full max-h-[459px]">
                        
                            <Link to="#"><img src={wedding} alt="" className="relative grayscale hover:grayscale-0"/><button className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-2/4 text-white text-4xl ${photography.font}`}>Portrait
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all'></span></button></Link>
                        </div>
                        <div className="relative w-full max-h-[459px]">
                        
                            <Link to="#"><img src={street} alt="" className="relative grayscale hover:grayscale-0"/><button className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-2/4 text-white text-4xl ${photography.font}`} >Event
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all'></span></button></Link>
                        </div>
                    </div>
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
