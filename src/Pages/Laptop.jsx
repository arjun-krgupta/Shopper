
import { useNavigate, Link } from "react-router-dom";

import laptop_slider from "../Assets/Slider/laptop slider.jpg";
import hp from "../Assets/Icon/hp.jpg";
import asus from "../Assets/Icon/asus.jpg";
import dell from "../Assets/Icon/dell.jpg";
import lenovo from "../Assets/Icon/lenovo.jpg";
import apple from "../Assets/Icon/apple.jpg";
import acer from "../Assets/Icon/acer.jpg";

import {
  acer_product,
  apple_product,
  asus_product,
  dell_product,
  hp_product,
  lenovo_product,
} from "../Constant/allLaptop";

// Brand data for brand icons
const brandData = [
  { name: "hp", img: hp },
  { name: "asus", img: asus },
  { name: "dell", img: dell },
  { name: "lenovo", img: lenovo },
  { name: "apple", img: apple },
  { name: "acer", img: acer },
];

// Brand product data
const brands = [
  { name: "Hp", path: "/hp", data: hp_product },
  { name: "Dell", path: "/dell", data: dell_product },
  { name: "Lenovo", path: "/lenovo", data: lenovo_product },
  { name: "Asus", path: "/asus", data: asus_product },
  { name: "Acer", path: "/acer", data: acer_product },
  { name: "Apple", path: "/apple", data: apple_product },
];

import PropTypes from 'prop-types'; // ✅ Import at top

// Reusable slider component
const ProductSlider = ({ title, path, products, onRedirect }) => (
  <>
    <div className="flex justify-between items-center px-3">
      <h4
        className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
        onClick={() => onRedirect(path)}
      >
        {title} Laptops
      </h4>
      <Link
        to={path}
        className="text-sm md:text-base hover:underline hover:text-blue-500"
      >
        View all
      </Link>
    </div>

    <hr className="w-full" />

    <div className="flex lg:justify-center gap-5 overflow-x-scroll webkit w-full py-3 px-3">
      {products.map((val, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
        >
          <img
            src={val.image}
            alt={val.alt || "laptop"}
            className="max-w-full h-auto object-contain"
          />
          <div className="text-sm font-bold text-center">{val.alt}</div>
          <div className="flex gap-4">
            <div className="text-sm font-bold">{val.new_price}</div>
            <div className="text-sm line-through text-gray-600">
              {val.old_price}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

// ✅ Define prop types for ProductSlider component
ProductSlider.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRedirect: PropTypes.func.isRequired,
};


// Main Laptop component
function Laptop() {
  const redirect = useNavigate();

  return (
    <>
      {/* Laptop Brand Icons */}
      <div className="flex justify-center items-center gap-2 w-full mt-3">
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
      </div>

      {/* Banner */}
      <div className="w-full h-auto mt-3">
        <img src={laptop_slider} alt="laptop slider" className="w-full h-auto" />
      </div>

      {/* Laptop Sections */}
      <div className="md:px-10 lg:px-16 xl:px-28 mt-3">
        {brands.map((brand, index) => (
          <ProductSlider
            key={index}
            title={brand.name}
            path={brand.path}
            products={brand.data}
            onRedirect={redirect}
          />
        ))}
      </div>
    </>
  );
}

export default Laptop;
