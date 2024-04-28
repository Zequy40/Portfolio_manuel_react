import photography from './../estilos/photo.module.css';


export const Forms = () => {
    return (
        <>
            <div className='bg-stone-950 mt-28 relative py-14' >
                    <h2 className={`${photography.font2} text-white text-4xl text-center pb-12`}>Contact Form</h2>
                    <div className={photography.loginBox}>

                        <form className='px-[30%] pt-32 pb-20'>
                        <div className={photography.userBox}>
                                
                                <h2>Contact us for your project</h2>
                            </div>
                            <div className={photography.userBox}>
                                <input type="text" name="" required />
                                <label>Your name or company’s name*</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="email" name="" required />
                                <label>Email</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="phone" name="" required />
                                <label>Phone*</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="text" name="" required />
                                <label>Tell us more about your project</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="phone" name="" required />
                                <label>Date of event (or roughly if not confirmed)*</label>
                            </div>
                            <div className={photography.userBox}>
                                <input type="text" name="" required />
                                <label>MM / DD / YYYY</label>
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