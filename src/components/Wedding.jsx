
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
                <h1>Packages</h1>
                   </div>
               <div className="relative mt-[35rem]">
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
