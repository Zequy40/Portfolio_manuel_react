
import { HeaderWhite } from './HeaderWhite';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import { FormsBlack } from './FormsBlack';
import Find from './CanYouWhite';
import photo from '/public/images/weddingPort.webp';


export const Wedding = () => {


    return (
        <>
            <HeaderWhite />

            <div className="max-w-[1272px]  m-auto py-5 relative">
            <div className="absolute w-full -top-36 -z-10">
               <img src={photo} alt="" className=''/>
                
                   </div>
                   <div className='relative mt-[45rem]'>
                    <h1 className="text-black text-4xl text-center py-10">Packages</h1>
                    <div className="grid grid-cols-3 gap-x-[200px] max-w-[1272px] mx-auto align-center">
  <div className='border border-solid border-black text-center px-6'>Contenido de la columna 1</div>
  <div className='bg-black text-white text-center px-6'>Contenido de la columna 2</div>
  <div className='border border-solid border-black text-center px-6'>Contenido de la columna 3</div>
</div>
                   </div>
               <div className="relative ">
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
