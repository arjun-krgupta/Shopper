
import { useNavigate, Link } from "react-router-dom";
import laptop_slider from "../Assets/Slider/laptop slider.jpg";
import Hp from "../Assets/Icon/hp.jpg";
import Asus from "../Assets/Icon/asus.jpg";
import Dell from "../Assets/Icon/dell.jpg";
import Lenovo from "../Assets/Icon/lenovo.jpg";
import Apple from "../Assets/Icon/apple.jpg";
import Acer from "../Assets/Icon/acer.jpg";
import {hp,dell,asus,acer,apple,lenovo} from '../Constant/allData'
import PropTypes from 'prop-types'; // ✅ Import at top

// Brand data for brand icons
const brandData = [
  { name: "hp", img: Hp },
  { name: "asus", img: Asus },
  { name: "dell", img: Dell },
  { name: "lenovo", img: Lenovo },
  { name: "apple", img: Apple },
  { name: "acer", img: Acer },
];

// Brand product data
const brands = [
  { name: "Hp", path: "/hp", data: hp },
  { name: "Dell", path: "/dell", data: dell },
  { name: "Lenovo", path: "/lenovo", data: lenovo },
  { name: "Asus", path: "/asus", data: asus },
  { name: "Acer", path: "/acer", data: acer },
  { name: "Apple", path: "/apple", data: apple },
];

// Reusable slider component
const ProductSlider = ({ title, path, products, }) => (
  <>
    <div className="flex justify-between items-center px-3">
      <h4
        className="font-bold text-sm md:text-xl my-1"
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
          className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 rounded-md shadow-md"
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
            className="w-[50px] sm:w-16 md:w-18 lg:w-24 cursor-pointer sm:hover:scale-[1.05] sm:hover:transition"
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
