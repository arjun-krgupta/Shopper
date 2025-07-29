import { Link, useNavigate } from "react-router-dom";
import hoodie_icon from "../Assets/Icon/hoodie.png";
import jeans_icon from "../Assets/Icon/jeans.png";
import lower_icon from "../Assets/Icon/lower.png";
import pant_icon from "../Assets/Icon/pant.png";
import shirt_icon from "../Assets/Icon/shirt.png";
import tshirt_icon from "../Assets/Icon/t_shirt.png";
import coat_icon from "../Assets/Icon/coat.png";
import { coat, hoodie, jeans, shirt, pant, t_shirt, lower } from "../Constant/allData";

const clothData = [
  { name: "hoodie", img: hoodie_icon, alt: "Hoodie" },
  { name: "jeans", img: jeans_icon, alt: "Jeans" },
  { name: "lower", img: lower_icon, alt: "Lower" },
  { name: "pant", img: pant_icon, alt: "Pant" },
  { name: "shirt", img: shirt_icon, alt: "Shirt" },
  { name: "tshirt_men", img: tshirt_icon, alt: "T-Shirt" },
  { name: "coat", img: coat_icon, alt: "Coat" },
];

const sections = [
  { title: "Hoodie", path: "/hoodie", data: hoodie },
  { title: "Jeans", path: "/jeans", data: jeans },
  { title: "Shirt", path: "/shirt", data: shirt },
  { title: "Track Pants", path: "/lower", data: lower },
  { title: "Formal/Casual Pants", path: "/pant", data: pant },
  { title: "Coat Pants", path: "/coat", data: coat },
  { title: "T-Shirt", path: "/tshirt_men", data: t_shirt },
];

function Men() {
  const redirect = useNavigate();

  const renderSection = ({ title, path, data }) => (
    <div key={title} className="mb-2">
      <div className="flex justify-between items-center px-3">
        <h4 className="text-lg md:text-xl font-semibold">
          {title}
        </h4>
        <Link to={path} className="text-sm md:text-base hover:underline hover:text-blue-500">
          View all
        </Link>
      </div>
      <hr className="my-2" />
      <div className="flex overflow-x-auto gap-2 sm:gap-3 py-2 webkit">
        {data.map((val, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] hover:scale-[1.05] transition-transform duration-200 p-2 bg-white rounded-md shadow-md cursor-pointer"
          >
            <img src={val.image} alt={val.name} className="w-full h-40 object-contain rounded" />
            <div className="mt-2 text-center">
              <p className="text-gray-400 text-sm">{val.brand}</p>
              <p className="font-semibold">{val.name}</p>
              <div className="flex gap-3 justify-center mt-1">
                <span className="font-bold text-sm">{val.new_price}</span>
                <span className="line-through text-gray-500 text-sm">{val.old_price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-7 sm:px-10 md:px-16 lg:px-24 xl:px-36 py-2 bg-gray-50">
      {/* Top Clothes Category Icons */}
      <div className="flex overflow-x-auto webkit items-center justify-center gap-2 mb-3">
        {clothData.map((cloth, index) => (
          <div
            key={index}
            onClick={() => redirect(`/${cloth.name}`)}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform w-[50px] sm:w-16 md:w-18 lg:w-20"
          >
            <img
              src={cloth.img}
              alt={cloth.alt}
              className="w-full aspect-square object-contain rounded-full shadow-sm border"
            />
            <p className="text-xs sm:text-sm mt-1 font-semibold text-center">{cloth.alt}</p>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">Shop by Categories</h1>
      <hr className="mb-2" />

      {/* Render Each Section */}
      {sections.map(renderSection)}
    </div>
  );
}

export default Men;
