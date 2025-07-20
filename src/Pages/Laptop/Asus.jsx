
import laptop_slider from "../../Assets/Slider/laptop slider.jpg";
// import hp from "../../Assets/Icon/hp.jpg";
// import asus from "../../Assets/Icon/asus.jpg";
// import dell from "../../Assets/Icon/dell.jpg";
// import lenovo from "../../Assets/Icon/lenovo.jpg";
// import apple from "../../Assets/Icon/apple.jpg";
// import acer from "../../Assets/Icon/acer.jpg";

import { allAsus } from "../../Constant/allLaptop";

// const brandData = [
//   { name: "hp", img: hp },
//   { name: "asus", img: asus },
//   { name: "dell", img: dell },
//   { name: "lenovo", img: lenovo },
//   { name: "apple", img: apple },
//   { name: "acer", img: acer },
// ];

function Asus() {
  return (
    <>
      {/* laptop Brands */}
      {/* <div className="flex justify-center items-center gap-2 w-full mt-3">
        {brandData.map((brand, index) => (
          <div
            key={index}
            className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition"
            onClick={() => redirect(`/${brand.name}`)}
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div> */}

      {/* Banner */}
      <div className="w-100 h-auto mt-3">
        <img src={laptop_slider} alt="" className="max-w-100 h-auto" />
      </div>

      {/* Asus laptops content */}
      <div className="mt-3">
        {allAsus.map((val, ind) => (
          <div
            className="flex justify-center gap-3 px-2 sm:px-0 sm:gap-3 md:gap-8 lg:gap-10 bg-white pt-2 pb-3 mb-3 w-full cursor-pointer border-bottom"
            key={ind}
          >
            <div className="w-[37%] lp-image sm:w-[30%] md:w-[25%] lg:w-[15%]">
              <img src={val.image} alt="" className="max-w-full h-auto" />
            </div>
            <div className="flex flex-col gap-1 w-[60%] sm:w-[50%] lg:w-[40%]">
              <h5 className="hover:text-blue-600 heading font-bold text-[15px] md:text-lg">
                {val.name}
              </h5>
              <div className="flex gap-1 items-center text-sm text-gray-500">
                <button className="bg-green-600 text-white w-[40px] h-6 rounded text-sm">
                  {val.rating}
                </button>
                <div className="text-gray-500 text-xs sm:text-sm">
                  {val.review}
                </div>
              </div>
              <div className="flex items-center gap-[5px] sm:hidden">
                <h6 className="text-sm md:text-xl font-bold">
                  {val.new_price}
                </h6>
                <div className="text-gray-600 line-through text-xs md:text-base">
                  {val.old_price}
                </div>
                <div className="text-green-600 text-xs md:text-base">
                  {val.offer}
                </div>
              </div>
              <ul className="list-disc ms-3 text-xs sm:text-sm">
                <li>{val.description.d1}</li>
                <li>{val.description.d2}</li>
                <li>{val.description.d3}</li>
                <li>{val.description.d4}</li>
                <li>{val.description.d5}</li>
              </ul>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-center sm:gap-[2px]">
              <h6 className="text-lg md:text-xl font-bold">{val.new_price}</h6>
              <div className="text-gray-600 line-through text-sm md:text-base">
                {val.old_price}
              </div>
              <div className="text-green-700 text-xs md:text-sm">
                {val.offer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Asus;
