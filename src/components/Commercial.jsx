
import photography from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import { Forms } from './Forms';
import { Link } from 'react-router-dom';
import street from './../../public/images/p1.webp';
import wedding from './../../public/images/p2.webp';
import photo from './../../public/images/p3.webp';
import CanYou from './CanYou';


export const Commercial = () => {


    return (
        <>
            <Header />

            <div className="max-w-[1212px]  m-auto py-5">
                <div className="w-full py-5 my-10 flex flex-col items-center justify-center text-3xl">
                    <div className="transition-all relative w-full max-h-[459px]">

                        <Link to="/photography-food" className='group'><img src={photo} alt="" className="relative grayscale group-hover:grayscale-0" /><button className={`absolute left-1/2 md:top-1/2 top-0 translate-x-[-50%] translate-y-2/4 text-white text-4xl ${photography.font}`}>Food Photography
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all'></span></button></Link>
                    </div>

                    <div className="relative w-full max-h-[459px]">

                        <Link to="/photography-portrait" className='group'><img src={wedding} alt="" className="relative grayscale group-hover:grayscale-0" /><button className={`absolute left-1/2 md:top-1/2 top-[20%] translate-x-[-50%] translate-y-2/4 text-white text-4xl ${photography.font}`}>Portrait
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all'></span></button></Link>
                    </div>
                    <div className="relative w-full max-h-[459px]">

                        <Link to="/photography-event" className='group'><img src={street} alt="" className="relative grayscale group-hover:grayscale-0" /><button className={`absolute left-1/2 md:top-1/2 top-[20%] translate-x-[-50%] translate-y-2/4 text-white text-4xl ${photography.font}`} >Event
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all'></span></button></Link>
                    </div>
                </div>
                <div className='flex flex-col md:px-36 pt-20'>
                    <div className='flex flex-col justify-center items-center p-9'>
                        <h2 className={`md:text-8xl text-5xl ${photography.font2}`}>Lets</h2>
                        <h2 className={`md:text-8xl text-5xl pb-20 ${photography.font2}`}>Talk!</h2>
                    </div>
                    <p className={`uppercase text-center md:text-4xl text-2xl font-bold ${photography.font}`}>FILL OUT OUR FORM TO GET STARTED</p>
                    <p className={`md:text-4xl text-2xl px-12 ${photography.font} ${photography.clase}`}>Help us get to know more about you and your business, please give as much information as possible and we can get back to you with a bespoke quote</p>
                </div>
            </div>
                <Forms />
                <CanYou />




            <div className="max-md:hidden">
                <Footer />
            </div>
            <div className="w-full  md:hidden">
                <FooterMobile />
            </div>
        </>
    )
}
