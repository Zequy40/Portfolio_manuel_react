import photography from './../estilos/photo.module.css';


function CanYouWhite() {
  return (
    <>
           
    <div className="flex items-center justify-center py-20 gap-6 bg-black">
    <h2 className={`${photography.font2} text-white text-6xl text-center `}>You can find me on</h2>
    <img className="w-[4%]" alt='' src='/images/insta.webp' />
    </div>


</>
  )
}

export default CanYouWhite