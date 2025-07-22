import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import hoodie_icon from "../Assets/Icon/hoodie.jpeg";
import jeans_icon from "../Assets/Icon/jeans.jpeg";
import lower_icon from "../Assets/Icon/lower.jpeg";
import pant_icon from "../Assets/Icon/pant.jpeg";
import shirt_icon from "../Assets/Icon/shirt.jpg";
import tshirt_icon from "../Assets/Icon/t_Shirt.jpeg";
import coat_icon from "../Assets/Icon/Coat-pant.jpeg";
import { coat,hoodie,jeans,shirt,pant,t_shirt ,lower} from "../Constant/allData";

const clothData = [
  { name: "hoodie", img: hoodie_icon, alt: "Hoodie" },
  { name: "jeans", img: jeans_icon, alt: "Jeans" },
  { name: "lower", img: lower_icon, alt: "Lower" },
  { name: "pant", img: pant_icon, alt: "Pant" },
  { name: "shirt", img: shirt_icon, alt: "Shirt" },
  { name: "tshirt_men", img: tshirt_icon, alt: "Tshirt" },
  { name: "coat", img: coat_icon, alt: "Coat Pant" },
];

function Men() {
  const redirect = useNavigate();
  return (
    <>
      {/* Clothes icons */}
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

      <h1 className="text-4xl font-bold my-3 text-center md:text-5xl">
        Shop by Categories
      </h1>
      <hr className="w-full" />

      <div className="md:px-10 lg:px-16 xl:px-32 mt-3 mb-5">
        <div className="flex justify-between items-center px-3 ">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          >
            Hoodie
          </h4>
          <Link
            to="/hoodie"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Hoodie */}
        <hr className="w-full mt-1" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3 py-2">
          {hoodie.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded"
              />
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">
                  {val.name}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-3 ">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          >
            Jeans
          </h4>
          <Link
            to="/jeans"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Jeans */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3 py-2">
          {jeans.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded"
              />
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">
                  {val.name}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-3 ">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          >
            Shirt
          </h4>
          <Link
            to="/shirt"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Shirt */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3 py-2">
          {shirt.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded"
              />
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">
                  {val.name}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-3 ">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          >
            Track Pants
          </h4>
          <Link
            to="/lower"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Lower */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3 py-2">
          {lower.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded"
              />
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">
                  {val.name}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-3 ">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          >
            Formal/Casual Pants
          </h4>
          <Link
            to="/pant"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Pant */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3 py-2">
          {pant.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded"
              />
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">
                  {val.name}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>

           <div className="flex justify-between items-center px-3 ">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          >
            Coat Pants
          </h4>
          <Link
            to="/coat"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Pant */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3 py-2">
          {coat.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded"
              />
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">
                  {val.name}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-sm font-bold">{val.new_price}</div>
                <div className="text-sm line-through text-gray-600">
                  {val.old_price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-3 ">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          >
            T-Shirt
          </h4>
          <Link
            to="/tshirt_men"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* T-shirt */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3 py-2">
          {t_shirt.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded"
              />
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">
                  {val.name}
                </div>
              </div>
              <div className="flex gap-5">
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

export default Men;
