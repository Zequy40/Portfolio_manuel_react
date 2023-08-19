import contact from './../estilos/contact.module.css';
import { Header } from './Header';
import { FooterMobile } from './../components/FooterMobile';
import { Footer } from './../components/Footer';

export const Contact = () => {

  return (
    <>
      <Header />
      <div className="max-md:hidden">
        <div className={contact.container}>



          <div className={contact.contactMail}>
            <div className={contact.containerImg}>
              <div className={contact.img}>
                <img alt='' src='/images/email.png' />
              </div><div className={contact.img}>
                <img alt='' src='/images/insta.png' />
              </div><div className={contact.img}>
                <img alt='' src='/images/phone.png' />
              </div>
            </div>
            <div className={contact.containerEmail}>
              <div className={contact.email}>
                <div className={contact.emailContact}>manuelcdesigner@gmail.com</div>
              </div>

              <div className={contact.email}>
                <div className={contact.emailContact}>@manuelcavilla</div>
              </div>

              <div className={contact.email}>
                <div className={contact.emailContact}>+44 7300 203398</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="w-full  md:hidden">
        <div className={contact.containerMobile}>
          <div className={contact.contactMailMobile}>
            <div className={contact.contactBackMobile}>
              <div className={contact.containerImgMobile}>

                <h2>Manuel Cavilla</h2>
                <div className={contact.emailMobile}>
                  <div className={contact.imgMobile}>
                    <img alt='' src='/images/email.png' />
                    <p>Email</p>
                  </div>
                  <div className={contact.emailContactMobile}>manuelcdesigner@gmail.com</div>
                </div>

                <div className={contact.emailMobile}>
                  <div className={contact.imgMobile}>
                    <img alt='' src='/images/insta.png' />
                    <p>Instagram</p>
                  </div>
                  <div className={contact.emailContactMobile}>@manuelcavilla</div>
                </div>

                <div className={contact.emailMobile}>
                  <div className={contact.imgMobile}>
                    <img alt='' src='/images/phone.png' />
                    <p>Phone</p>
                  </div>
                  <div className={contact.emailContactMobile}>+44 7300 203398</div>
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
