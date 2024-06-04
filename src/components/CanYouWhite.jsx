import photography from './../estilos/photo.module.css';
import { Link } from 'react-router-dom';

function CanYouWhite() {
  return (
    <>
           
    <div className="flex items-center justify-center py-20 gap-6 bg-black">
    <h2 className={`${photography.font2} text-white md:text-6xl text-2xl text-center `}>You can find me on</h2>
    <Link to="https://instagram.com/manuelcavilla?igshid=MjEwN2IyYWYwYw==" className="md:w-[4%] w-[8%]"><img  alt='' src='/images/insta.webp' /></Link>
    </div>


</>
  )
}

export default CanYouWhite