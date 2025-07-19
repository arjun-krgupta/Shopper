
import sl1 from "../../Assets/Slider/1.jpg";
import sl2 from "../../Assets/Slider/2.jpg";
import m1 from "../../Assets/Icon/realme.png";
import m2 from "../../Assets/Icon/iphone.png";
import m3 from "../../Assets/Icon/oppo.png";
import m4 from "../../Assets/Icon/poco.png";
import m5 from "../../Assets/Icon/samsung.jpg";
import m6 from "../../Assets/Icon/vivo.png";
import { useNavigate } from "react-router-dom";
import { allOppo } from "../../Constant/allMobile";

const mobileData = [
  { name: "realme", img: m1 },
  { name: "iphone", img: m2 },
  { name: "oppo", img: m3 },
  { name: "poco", img: m4 },
  { name: "samsung", img: m5 },
  { name: "vivo", img: m6 },
];

function Oppo() {
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

      <div className="w-full h-auto">
        <h1 className="font-bold text-4xl mt-3 mb-1 text-center">
          Oppo Phones
        </h1>
        <img src={sl1} alt="" className="max-w-100 h-auto" />
        <img src={sl2} alt="" className="max-w-100 h-auto" />
      </div>
      <div>
        {allOppo.map((val, ind) => (
          <div
            className="flex justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-16 bg-white p-3 pb-3 border-bottom mb-2 w-full cursor-pointer"
            key={ind}
          >
            <div className="w-36 image sm:w-[19%] md:w-[17%] lg:w-[11%] ">
              <img src={val.image} alt="" className="max-w-full h-auto" />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="hover:text-blue-600 font-bold text-[15px] sm:text-xl">
                {val.name}
              </h5>
              <div className="flex gap-1 ps-1 items-center text-xs sm:text-sm">
                <button className="bg-green-600 text-white h-6 w-[40px] rounded">
                  {val.rating}
                </button>
                <div className="text-gray-500">{val.review}</div>
              </div>
              <div className="flex flex-row items-center gap-2 ps-2 sm:hidden">
                <h6 className="text-sm sm:text-base font-bold">
                  {val.new_price}
                </h6>
                <div className="text-gray-600 line-through text-xs sm:text-sm">
                  {val.old_price}
                </div>
                <div className="text-green-700 text-sm">{val.offer}</div>
              </div>
              <ul className="list-disc ps-3 text-xs sm:text-sm">
                <li>{val.description.d1}</li>
                <li>{val.description.d2}</li>
                <li>{val.description.d3}</li>
                <li>{val.description.d4}</li>
                <li>{val.description.d5}</li>
              </ul>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-center sm:gap-[2px]">
              <h6 className="text-xl font-bold">{val.new_price}</h6>
              <div className="text-gray-600 line-through text-base">
                {val.old_price}
              </div>
              <div className="text-green-700 text-sm">{val.offer}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Oppo;
