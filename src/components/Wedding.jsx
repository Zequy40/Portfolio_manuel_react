
import photography from './../estilos/photo.module.css';
import { HeaderWhite } from './HeaderWhite';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import { FormsBlack } from './FormsBlack';
import Find from './CanYou';
import photo from '/public/images/weddingPort.webp';


export const Wedding = () => {


    return (
        <>
            <HeaderWhite />

            <div className="max-w-[1272px]  m-auto py-5 relative -top-36 -z-10">
               <img src={photo} alt="" className='absolute top-0 w-full'/>
                <h1>Packages</h1>
                <div className="grid">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="p-4">
                            
                </div>
               </div>
                <div className='flex flex-col px-36 pt-20'>
                    <div className='flex flex-col justify-center items-center p-9'>
                        <h2 className={`text-8xl  ${photography.font2}`}>Lets</h2>
                        <h2 className={`text-8xl pb-20 ${photography.font2}`}>Talk!</h2>
                    </div>
                    <p className={`uppercase text-center text-4xl font-bold ${photography.font}`}>FILL OUT OUR FORM TO GET STARTED</p>
                    <p className={`text-4xl px-12 ${photography.font} ${photography.clase}`}>Help us get to know more about you and your business, please give as much information as possible and we can get back to you with a bespoke quote</p>
                </div>
                <FormsBlack />
                <Find />
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
