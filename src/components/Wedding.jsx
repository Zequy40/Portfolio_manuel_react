import { HeaderWhite } from './HeaderWhite';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import photography from './../estilos/photo.module.css';
import { FormsBlack } from './FormsBlack';
import { Link } from 'react-router-dom';
import Find from './CanYouWhite';




export const Wedding = () => {



    return (
        <>
            <HeaderWhite />
            <div className="max-md:hidden">
                

                <div className="max-w-[1272px]  m-auto py-5 relative">
                    <div className="absolute w-full -top-36 -z-10">
                        <img src="/images/weddingPort.webp" alt="" className='' />

                    </div>
                </div>
            </div>
            <div className='relative md:mt-[45rem]'>
                <h1 className="text-black text-4xl text-center py-10">Packages</h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-x-[100px] max-w-[1272px] mx-auto align-center">
                    <div className={`${photography.font} border border-solid border-black text-center px-6 py-3`}><p className='text-4xl py-3'>Basic Package</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2'>HALF DAY</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>1 PHOTOGRAPHERS</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>UP TO 5 HOURS OF COVERAGE</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>USUALLY FROM THE CEREMONY TO FIRST DANCE</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>250+ IMAGES</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>ALL FILES DELIVERED ONLINE THROUGH A PERSONALISED PHOTO GALLERY THAT YOU CAN SHARE WITH UNLIMITED DOWNLOADS</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>UNLIMITED CONSULTATION OVER ZOOM</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>STARTING AT £750</p>
                    </div>
                    <div className={`${photography.font} bg-black text-white text-center px-6 py-3`}><p className='text-4xl py-3'>Medium Package</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2'>FULL DAY</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>1 PHOTOGRAPHERS</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>8 HOURS OF COVERAGE</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>USUALLY FROM THE LAST OF THE MORNING GETTING READY UNTIL AFTER THE FIRST DANCE/ PARTY</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>450+ IMAGES</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>ALL FILES DELIVERED ONLINE THROUGH A PERSONALISED PHOTO GALLERY THAT YOU CAN SHARE WITH UNLIMITED DOWNLOADS</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>UNLIMITED CONSULTATION OVER ZOOM</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start'>STARTING AT £1000</p></div>
                    <div className={`${photography.font} border border-solid border-black text-center px-6 py-3`}><p className='text-4xl py-3'>Premium Package</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2' >FULL DAY</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >2 PHOTOGRAPHERS</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >8 HOURS ALL-DAY</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >USUALLY FROM THE LAST OF THE MORNING GETTING READY UNTIL AFTER THE FIRST DANCE/ PARTY</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >600+ HIGH-RESOLUTION EDITED PHOTOS</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >A SNEAK PEEK PHOTO GALLERY WITHIN 7 DAYS OF YOUR WEDDING</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >A3 SIZE PRINT OF FAVOURITE PHOTO</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >ALL FILES DELIVERED ONLINE THROUGH A PERSONALISED PHOTO CAN SHARE WITH UNLIMITED DOWNLOADS TO FAMILY AND FRIENDS.</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >UNLIMITED CONSULTATION OVER ZOOM</p>
                        <p className='md:text-2xl md:py-6 text-lg py-2 text-start' >STARTING AT £750</p></div>
                </div>
                <div className='md:p-24 p-12 flex justify-center items-center w-full transition-all duration-700'>
                    <Link to="/photography-wedding"><button className={` text-white bg-black md:text-3xl text-xl p-4 hover:text-black hover:bg-white hover:border hover:border-solid hover:border-black ${photography.font}`}>View Gallery</button></Link>
                </div>
            
            <div className="flex items-center justify-end max-w-[1272px] mx-auto">
                <Link to="/menu-photography" className='cursor-pointer group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" className='w-12 pt-5 group-hover:text-red-700' fill="currentColor"  viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                </div>
                </div>
            <div className="relative ">
                <FormsBlack />



            </div>


            <div className='bg-stone-950 md:mt-28 mt-14 relative py-14' >
                <h2 className={`${photography.font} text-white text-4xl text-center pb-12 font-extrabold`}>FAQ</h2>
                <div className={`${photography.font} text-white max-w-[1000px] m-auto`}>
                    <article className='pb-8 md:text-4xl text-2xl px-3 md:px-0'>
                        <h2 className='font-extrabold'>CAN WE GET THE RAW FILES?</h2>
                        <p>We don&apos;t release the RAW files as this does not show a full representation of our final work</p>
                    </article>
                    <article className='pb-8 md:text-4xl text-2xl px-3 md:px-0'>
                        <h2 className='font-extrabold'>HOW SOON WILL WE GET OUR PHOTOS?</h2>
                        <p>Your full gallery will be with you
                            within 2 - 6 weeks depending on the season.</p>
                    </article>
                    <article className='pb-8 md:text-4xl text-2xl px-3 md:px-0'>
                        <h2 className='font-extrabold'>HOW CAN I BOOK YOU?</h2>
                        <p>We require a 50% booking deposit to secure your date, this will come off
                            the final payment.</p>
                    </article>

                </div><Find />
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
