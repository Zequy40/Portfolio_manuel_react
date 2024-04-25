import about from './../estilos/about.module.css';
import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
 import img1 from './../../public/images/portada_manuel.webp';

export const About = () => {

  return (
    <>
      <Header />
      <div className="max-md:hidden">
        <div className={about.container}>
        <div>
          <h1 className={about.title}>Photographer and artist living and working in London, UK.</h1>
        </div>
        <div className={about.containerImg}>
          <img src={img1} alt="" />
          <div className={about.containerH2}>
          <h2>Manuel Cavilla,London 2023 / BTS Picture</h2>
          </div>
        </div>
        <div className={about.containerP}>
          <div>
            <p className={`${about.p1} ${about.p1P} ${about.containerBlocP}`}>¡Hola!</p>
            <p className={`${about.p1} ${about.p1L}`}>My name is Manuel.
              Born in Jerez de la Frontera, Spain. I grabbed my first camera at the age of 14 years old; but little did I know where this craft would take me.</p>
              <p className={`${about.p1} ${about.p1M} ${about.p1L}`}>I started my creative career in graphic design which influences my composition techniques. I’ve worked in different projects such as music videos, video advertisements, portrait, weddings, etc.
              Please, get to know me more by
              having a look at my work.</p>
          </div>
          <div>
            <div>
              <div>
              <p className={about.p1}>After experiencing all the different stages of photography and filmmaking; from BTS and second camera to working in pre-production to post-production,
                  This craft teaches something new everyday and thats why I love it.</p>
                <div>
                <div className={about.containerBlocIcon}>
                <div className={about.iconBloc}>
                  <h1 className={about.iconBlocH1}>You can find me </h1>
                </div>
                <div className={about.icon}>
    <p className={about.iconBlocH1}>on</p>
    <div className={about.iconInd}>
                  
                  <Link to="https://instagram.com/manuelcavilla?igshid=MjEwN2IyYWYwYw=="><img className={about.img} alt='' src='/images/insta.png' /></Link>
                  <Link to="mailto:info@manuelcavilla.com"><img className={about.img} alt='' src='/images/email.png' /></Link>
                  </div>
                </div>
                </div>

                </div>
              </div>
            </div>

          </div>

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
