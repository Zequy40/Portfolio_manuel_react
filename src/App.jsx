import { useEffect, useState, useRef } from "react";
import "./App.css";

import header from "./estilos/header.module.css";
import { Link } from "react-router-dom";
import InicioAppMobile from "./components/InicioAppMobile";

function App() {
  const leftHalfRef = useRef(null);
  const rightHalfRef = useRef(null);

  const folder = "/logo/";

  const localLogos = [
    {
      id: 1,
      image: "mab.svg",
      image2: "nu.svg",
    },
  ];

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(localLogos);
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      const leftHalf = leftHalfRef.current;
      const rightHalf = rightHalfRef.current;

      if (leftHalf && rightHalf) {
        leftHalf.classList.add("translate-x-[0%]", "duration-[1500ms]");
        rightHalf.classList.add("translate-x-[0%]", "duration-[1500ms]");
      }
    }
  }, [product]);

  return (
    <>
      <div className="max-md:hidden py-40">
        <div className={header.container}>
          <div className={header.imageContainer}>
            {product.map((logo) => (
              <div className={header.image} key={logo.id}>
                <div className={header.leftHalf} ref={leftHalfRef}>
                  <img
                    className="py-4"
                    alt="logo manu"
                    src={folder + logo.image}
                  />
                </div>

                <div className={header.rightHalf} ref={rightHalfRef}>
                  <img
                    className="pb-4"
                    alt="logo manu"
                    src={folder + logo.image2}
                  />
                </div>
              </div>
            ))}
</div>
            <div className={header.line}></div>

            <div className={header.groupBtn}>
              <Link to="/menu-photography">
                <button className={header.btn3}>
                  Photography
                  <span className={header.effect}></span>
                </button>
              </Link>

              <Link to="/about">
                <button className={header.btn1}>
                  About me
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </Link>

              <Link to="/filmmaking">
                <button className={header.btn2}>Filmmaking</button>
              </Link>
            </div>
          </div>
        </div>
     

      <div className="md:hidden">
        <InicioAppMobile />
      </div>
    </>
  );
}

export default App;


