import about from './../estilos/about.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import img1 from './../../public/images/portada_manuel.webp';
import { Forms } from './Forms';

export const About = () => {

  return (
    <>
      <Header />
        <div className={about.container}>
          
            <h1 className={about.title}>Photographer and artist living and working in London, UK.</h1>
          
          <div className={about.containerImg}>
            <img src={img1} className={about.imgPhoto} alt="manuel photo" />
            <div className={about.containerH2}>
              <h2 className='text-xl'>Manuel Cavilla,London 2023 / BTS Picture</h2>
            </div>
          </div>
          <div className={about.containerP}>
            <div className='md:flex md:flex-row md:gap-4 md:px-0 px-4'>
              <div className='basis-1/2 '>
                <p className={`text-wrap ${about.p1}`} >
                  <span className='block'>¡Hola!</span>
                  <span className='block'>My name is Manuel.</span>

                  Born in Jerez de la Frontera, Spain. I grabbed my first camera at the age of 14 years old; but little did I know where this craft would take me.</p>
              </div>

              <div className='basis-1/2 '>
                <p className={`text-pretty ${about.p1}`}>After experiencing all the different stages of photography and filmmaking; from BTS and second camera to working in pre-production to post-production,
                  This craft teaches something new everyday and thats why I love it.</p>
              </div>
            </div>
            <div className='flex md:flex-row flex-col px-4 md:px-0'>
            <div className='basis-1/2 '>
              <p className={`${about.p1} ${about.p1M} ${about.p1L}`}>I started my creative career in graphic design which influences my composition techniques. I’ve worked in different projects such as music videos, video advertisements, portrait, weddings, etc.
                Please, get to know me more by
                having a look at my work.</p>

            </div>
            
            <div className='flex basis-1/2 p-8 w-full items-center justify-center'> 
            <div className="flex flex-col justify-between items-center w-full">
            <h1 className={about.iconBlocH1}>You can find me
              </h1>
            <div className={about.iconInd}>
            <div>
            <span className={about.iconBlocH1}>on</span> 
            </div>
              <div className='flex gap-4 items-end'>
              <Link to="https://instagram.com/manuelcavilla?igshid=MjEwN2IyYWYwYw=="><img className={about.img} alt='' src='/images/insta.png' /></Link>
              <Link to="mailto:info@manuelcavilla.com"><img className={about.img} alt='' src='/images/email.png' /></Link>
              </div>
            </div>
            </div>
            </div>
           </div>
          </div>
        </div>
        <Forms />
      

      <div className="max-md:hidden">
        <Footer />
      </div>
      <div className="w-full  md:hidden">
        <FooterMobile />
      </div>
    </>
  )
}
