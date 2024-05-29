import photography from './../estilos/photo.module.css';


function CanYou() {
  return (
    <>
           
    <div className="flex items-center justify-center py-20 gap-6 bg-black">
    <h2 className={`${photography.font2} text-white md:text-6xl text-2xl text-center `}>You can find me on</h2>
    <img className="md:w-[2%] md:h-[2%] w-[8%] h-[8%]" alt='' src='/images/insta.png' />
    </div>


</>
  )
}

export default CanYou