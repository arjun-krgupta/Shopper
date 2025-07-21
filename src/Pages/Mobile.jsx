
import { Link, useNavigate } from "react-router-dom";
import {
  realme,
  iphone,
  oppo,
  poco,
  samsung,
  vivo,
} from "../Constant/allMobile";
import sl1 from "../Assets/Slider/1.jpg";
import sl2 from "../Assets/Slider/2.jpg";
import sl3 from "../Assets/Slider/3.jpg";
import sl4 from "../Assets/Slider/4.jpg";
import sl5 from "../Assets/Slider/5.jpg";
import sl6 from "../Assets/Slider/6.jpg";
import sl7 from "../Assets/Slider/7.jpg";
import m1 from "../Assets/Icon/realme.png";
import m2 from "../Assets/Icon/iphone.png";
import m3 from "../Assets/Icon/oppo.png";
import m4 from "../Assets/Icon/poco.png";
import m5 from "../Assets/Icon/samsung.jpg";
import m6 from "../Assets/Icon/vivo.png";

const mobileData = [
  { name: "realme", img: m1 },
  { name: "iphone", img: m2 },
  { name: "oppo", img: m3 },
  { name: "poco", img: m4 },
  { name: "samsung", img: m5 },
  { name: "vivo", img: m6 },
];

function Mobile() {
  const redirect = useNavigate();
  return (
    <>
      {/* Mobile icon */}
      <div className="flex justify-center items-center gap-2 w-full mt-2">
        {mobileData.map((brand, index) => (
          <div
            key={index}
            className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7"
            onClick={() => {
              redirect(`/${brand.name}`);
            }}
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="max-w-full h-auto rounded-full"
            />
          </div>
        ))}
      </div>
      
      <h1 className="text-4xl font-bold my-3 text-center md:text-6xl">
        Shop by Brand
      </h1>
      {/* Slider */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-1"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sl1} className="img-fluid  max-w-100 h-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sl2} className="img-fluid  max-w-100 h-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sl3} className="img-fluid  max-w-100 h-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sl4} className="img-fluid  max-w-100 h-auto " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sl5} className="img-fluid  max-w-100 h-auto " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sl6} className="img-fluid  max-w-100 h-auto " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sl7} className="img-fluid  max-w-100 h-auto " alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="md:px-10 lg:px-16 xl:px-28 mt-3 mb-5">
        <div className="flex items-center justify-between px-3">
          <h4
            className="font-bold text-sm md:text-xl my-1  cursor-pointer hover:underline"
            onClick={() => {
              redirect("/realme");
            }}
          >
            Realme Smartphones
          </h4>
          <Link
            to="/Realme"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        <hr className="w-full" />
        {/* Realme */}
        <div className="flex lg:justify-center gap-3 overflow-x-scroll webkit w-full my-3 px-3 py-2">
          {realme.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-36 sm:w-40 px-2 hover:rounded hover:shadow-xl hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 "
              key={i}
            >
              <img src={val.image} alt="" className="max-w-full h-auto" />
              <div className="text-[13px] font-bold text-center">
                {val.name}
              </div>
              <div className="flex gap-3">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vivo */}
        <div className="flex justify-between items-center px-3">
          <h4
            className="font-bold text-sm md:text-xl my-[6px] cursor-pointer hover:underline"
            onClick={() => {
              redirect("/vivo");
            }}
          >
            Vivo Smartphones
          </h4>
          <Link
            to="/vivo"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3 py-2">
          {vivo.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-36 sm:w-40 px-2 hover:rounded hover:shadow-xl hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2  "
              key={i}
            >
              <img src={val.image} alt="" className="max-w-full h-auto" />
              <div className="text-[13px] font-bold text-center">
                {val.name}
              </div>
              <div className="flex gap-3">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Samsung */}
        <div className="flex justify-between items-center px-4 sm:px-7 md:px-8 lg:px-9 xl:px-40">
          <h4
            className="font-bold text-sm md:text-xl my-[6px] cursor-pointer hover:underline"
            onClick={() => {
              redirect("/samsung");
            }}
          >
            Samsung Smartphones
          </h4>
          <Link
            to="/samsung"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3 py-2">
          {samsung.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-36 sm:w-40 px-2 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2  "
              key={i}
            >
              <img src={val.image} alt="" className="max-w-full h-auto" />
              <div className="text-[13px] font-bold text-center">
                {val.name}
              </div>
              <div className="flex gap-3">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Poco */}
        <div className="flex justify-between items-center px-4 sm:px-7 md:px-8 lg:px-9 xl:px-40">
          <h4
            className="font-bold text-sm md:text-xl my-[6px] cursor-pointer hover:underline"
            onClick={() => {
              redirect("/poco");
            }}
          >
            Poco Smartphones
          </h4>
          <Link
            to="/poco"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3 py-2">
          {poco.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-36 sm:w-40 px-2 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 "
              key={i}
            >
              <img src={val.image} alt="" className="max-w-full h-auto" />
              <div className="text-[13px] font-bold text-center">
                {val.name}
              </div>
              <div className="flex gap-3">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Oppo */}
        <div className="flex justify-between items-center px-4 sm:px-7 md:px-8 lg:px-9 xl:px-40">
          <h4
            className="font-bold text-sm md:text-xl my-[6px] cursor-pointer hover:underline"
            onClick={() => {
              redirect("/oppo");
            }}
          >
            Oppo Smartphones
          </h4>
          <Link
            to="/oppo"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3 py-2">
          {oppo.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-36 sm:w-40 px-2 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 "
              key={i}
            >
              <img src={val.image} alt="" className="max-w-full h-auto" />
              <div className="text-[13px] font-bold text-center">
                {val.name}
              </div>
              <div className="flex gap-3">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Iphone */}
        <div className="flex justify-between items-center px-4 sm:px-7 md:px-8 lg:px-9 xl:px-40">
          <h4
            className="font-bold text-sm md:text-xl my-[6px] cursor-pointer hover:underline"
            onClick={() => {
              redirect("/iphone");
            }}
          >
            Apple Smartphones
          </h4>
          <Link
            to="/iphone"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-4 overflow-x-scroll webkit w-full my-3 px-3 py-2">
          {iphone.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-36 sm:w-40 px-2 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 "
              key={i}
            >
              <img src={val.image} alt="" className="max-w-full h-auto " />
              <div className="text-[13px] font-bold text-center">
                {val.name}
              </div>
              <div className="flex gap-3">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mobile;
