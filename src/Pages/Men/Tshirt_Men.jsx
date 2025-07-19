
import hoodie_icon from "../../Assets/Icon/hoodie.jpeg";
import jeans_icon from "../../Assets/Icon/jeans.jpeg";
import lower_icon from "../../Assets/Icon/lower.jpeg";
import pant_icon from "../../Assets/Icon/pant.jpeg";
import shirt_icon from "../../Assets/Icon/shirt.jpg";
import tshirt_icon from "../../Assets/Icon/t_Shirt.jpeg";
import { useNavigate } from "react-router-dom";
import { allT_shirt } from "../../Constant/allMen";

const clothData = [
  { name: "hoodie", img: hoodie_icon, alt: "Hoodie" },
  { name: "jeans", img: jeans_icon, alt: "Jeans" },
  { name: "lower", img: lower_icon, alt: "Lower" },
  { name: "pant", img: pant_icon, alt: "Pant" },
  { name: "shirt", img: shirt_icon, alt: "Shirt" },
  { name: "tshirt_men", img: tshirt_icon, alt: "Tshirt" },
];

function Tshirt_Men() {
  const redirect = useNavigate();
  return (
    <>
      {/* Men Clothes icons */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 w-full mt-2">
        {clothData.map((cloth, index) => (
          <div
            key={index}
            className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer "
            onClick={() => redirect(`/${cloth.name}`)}
          >
            <img
              src={cloth.img}
              alt=""
              className="max-w-full h-auto object-cover rounded-[50px]"
            />
            <p className="text-xs sm:text-sm text-center font-semibold">
              {cloth.alt}
            </p>
          </div>
        ))}
      </div>

      <hr className="w-full pt-[1px] mt-2 mx-auto" />

      <div className="flex justify-center gap-3 flex-wrap overflow-x-scroll webkit w-full mt-4 mb-2 px-4 sm:px-14 md:px-16">
        {allT_shirt.map((val, i) => (
          <div
            className="flex relative flex-col items-center gap-1 my-2 w-32 sm:w-44 md:w-52"
            key={i}
          >
            <div className="text-xs sm:text-sm text-white absolute right-0 top-0 bg-blue-500 p-2 rounded-full ">
              {val.offer}
            </div>
            <img src={val.image} alt="" className="max-w-full h-auto rounded" />
            <div className="text-xs text-gray-400">{val.brand}</div>
            <div className="text-sm font-semibold cursor-pointer text-center">
              {val.name}
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-sm font-semibold">{val.new_price}</div>
              <div className="text-[11px] sm:text-sm line-through text-gray-600">
                {val.old_price}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Size : {val.size}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tshirt_Men;
