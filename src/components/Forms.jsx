import photography from './../estilos/photo.module.css';
import emailjs from "@emailjs/browser"
import { useRef } from 'react';

export const Forms = () => {
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z9tprsu', 'template_qdof0yb', refForm.current, 'FaMieKsAbg1NPbt9j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <>
            <div className='bg-stone-950 mt-28 relative py-14' >
                    <h2 className={`${photography.font2} text-white text-4xl text-center pb-12`}>Contact Form</h2>
                    <div className={photography.loginBox}>

                        <form className='px-[30%] pt-32 pb-20' onSubmit={sendEmail} ref={refForm}>
                        <div className={photography.userBox}>
                                
                                <h2>Contact us for your project</h2>
                            </div>
                            <div className={photography.userBox}>
                                <input type="text" name="name" required />
                                <label>Your name or company’s name*</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="email" name="email" required />
                                <label>Email</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="phone" name="phone" required />
                                <label>Phone*</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="text" name="message" required />
                                <label>Tell us more about your project</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="phone" name="" disabled />
                                <label>Date of event (or roughly if not confirmed)*</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="text" name="date" required />
                                <label>MM / DD / YYYY</label>
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