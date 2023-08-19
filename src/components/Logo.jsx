
import logo from './../../public/manuel.svg';
import { Header } from './Header';
import { FooterMobile } from './../components/FooterMobile';
import { Footer } from './../components/Footer';

export const Logo = () => {

  return (
    <>
      <Header />
      <div className="max-md:hidden">


        <div className="max-w-[1280px] m-auto">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <ul role="list" className="divide-y divide-gray-100">


              <li className="flex justify-between w-full gap-x-6 py-5" >

                <div className="flex gap-x-4 items-center">

                  <img className="h-250 w-250 flex-none" src={logo} alt="" />
                  <div className=" flex-auto gap-2 items-center">
                    <p className="mt-1 text-lg italic font-bold leading-4 pb-5  text-black">Bussiness name: <span className=" capitalize leading-10">name</span></p>

                    <p className="mt-1 text-lg leading-3 text-black">description</p>

                  </div>
                </div>

              </li>


            </ul>

          </div>

        </div>

      </div>
      <div className="w-full  md:hidden">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

          <ul role="list" className="divide-y divide-gray-100">


            <li className="flex justify-between  gap-x-1 py-5" >

              <div className="flex flex-col gap-x-4 items-start">

                <img className="h-[150px] w-[150px] flex-none" src={logo} alt="" />
                <div className="min-w-0 flex-auto items-center">
                  <p className="mt-1 text-lg italic font-bold leading-5 pb-5  text-black">Bussiness name: <span className="capitalize">name</span></p>

                  <p className="mt-1 text-lg leading-5 text-black">description</p>

                </div>
              </div>

            </li>


          </ul>

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
