import photographybis from './../estilos/photo2.module.css';
import emailjs from "@emailjs/browser"
import { useRef } from 'react';

export const FormsBlack = () => {
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z9tprsu', 'template_9y2uz6j', refForm.current, 'FaMieKsAbg1NPbt9j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <>
            <div className='mt-28 relative md:py-14 py-2' >
                <h2 className={`${photographybis.font2} text-black text-4xl text-center py-12`}>Contact Form</h2>
                <div className={`${photographybis.loginBox} bg-slate-950`}>

                    <form className='md:px-[30%] px-[15%] pt-32 md:pb-20 pb-0' onSubmit={sendEmail} ref={refForm}>
                        <div className={photographybis.userBox}>

                            <h2>Contact us for your special occasion</h2>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="name" required />
                            <label>Your name*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="partners" required />
                            <label>Your partners name*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="email" name="email" required />
                            <label>Email</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="phone" name="phone" required />
                            <label>Phone*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="location" required />
                            <label>Location of event*</label>
                        </div>

                        <div className={photographybis.userBox}>
                            <input type="phone" name="" disabled />
                            <label>Date of event (or roughly if not confirmed)*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="date" required />
                            <label>MM / DD / YYYY</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="textSuits" required />
                            <label>Which package suits you best</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="textHear" required />
                            <label>How did you hear about us*</label>
                        </div>

                        <div className={photographybis.userBox}>
                            <input type="text" name="message" required />
                            <label>Tell us more about your plans!*</label>
                        </div>
                        <center>
                            <button>
                                SUBMIT
                                <span></span>
                            </button></center>
                    </form>
                </div>


            </div>
        </>
    );
};
