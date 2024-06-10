
import photography from './../estilos/photo.module.css';
import { Link } from 'react-router-dom';

import street from './../../public/images/street_back.webp';
import wedding from './../../public/images/wedding_back.webp';
import photo from './../../public/images/photo_back.webp';


export const MenuPhotographyMobile = () => {


    return (
        <>
            

            <div className="max-w-[1212px]  m-auto py-5 md:hidden" >
            <div className="w-10 h-24"></div>
                    <div className="w-full py-5 my-10 flex flex-col items-center justify-center text-3xl">
                        <div className="transition-all relative w-full max-h-[215px]">
                        <img src={photo} alt="" className="relative "/>
                            <Link to="/commercial"><button className={`absolute group left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] text-white text-3xl ${photography.font}`}>Commercial
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>

                        <div className="relative w-full max-h-[215px]">
                        <img src={wedding} alt="" className="relative "/>
                            <Link to="/wedding"><button className={`absolute group left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] text-white text-3xl bg-neutral-800/[0.2] ${photography.font}`}>Wedding
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                        
                        <div className="relative w-full max-h-[215px]">
                        <img src={street} alt="" className="relative "/>
                            <Link to="/photography-street"><button className={`absolute group left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] text-white text-3xl ${photography.font}`}>
                            <div className="block">Street</div> <div className="block">photography</div>
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-white origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                    </div>
                </div>
           
        </>
    )
}
