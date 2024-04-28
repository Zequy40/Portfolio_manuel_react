import photographybis from './../estilos/photo2.module.css';


export const FormsBlack = () => {
    return (
        <>
            <div className='mt-28 relative py-14' >
                <h2 className={`${photographybis.font2} text-black text-4xl text-center py-12`}>Contact Form</h2>
                <div className={`${photographybis.loginBox} bg-slate-950`}>

                    <form className='px-[30%] pt-32 pb-20'>
                        <div className={photographybis.userBox}>

                            <h2>Contact us for your special occasion</h2>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="" required />
                            <label>Your name*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="" required />
                            <label>Your partners name*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="email" name="" required />
                            <label>Email</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="phone" name="" required />
                            <label>Phone*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="" required />
                            <label>Location of event*</label>
                        </div>

                        <div className={photographybis.userBox}>
                            <input type="phone" name="" required />
                            <label>Date of event (or roughly if not confirmed)*</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="" required />
                            <label>MM / DD / YYYY</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="" required />
                            <label>Which package suits you best</label>
                        </div>
                        <div className={photographybis.userBox}>
                            <input type="text" name="" required />
                            <label>How did you hear about us*</label>
                        </div>

                        <div className={photographybis.userBox}>
                            <input type="text" name="" required />
                            <label>Tell us more about your plans!*</label>
                        </div>
                        <center>
                            <a href="#">
                                SUBMIT
                                <span></span>
                            </a></center>
                    </form>
                </div>


            </div>
        </>
    );
};
