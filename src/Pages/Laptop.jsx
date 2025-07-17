import React from "react";
import laptop_slider from "../Assets/Slider/laptop slider.jpg";
import hp from "../Assets/Icon/hp.jpg";
import asus from "../Assets/Icon/asus.jpg";
import dell from "../Assets/Icon/dell.jpg";
import lenovo from "../Assets/Icon/lenovo.jpg";
import apple from "../Assets/Icon/apple.jpg";
import acer from "../Assets/Icon/acer.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  acer_product,
  apple_product,
  asus_product,
  dell_product,
  hp_product,
  lenovo_product,
} from "../Constant/allLaptop";

function Laptop(props) {
  const redirect = useNavigate();
  return (
    <>
      {/* laptop Brands */}
      <div className="flex justify-center items-center gap-2 w-full mt-3">
        <div
          className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition"
          onClick={() => {
            redirect("/hp");
          }}
        >
          <img src={hp} alt="" className="max-w-full h-auto " />
        </div>
        <div
          className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition"
          onClick={() => {
            redirect("/asus");
          }}
        >
          <img src={asus} alt="" className="max-w-full h-auto" />
        </div>
        <div
          className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition "
          onClick={() => {
            redirect("/dell");
          }}
        >
          <img src={dell} alt="" className="max-w-full h-auto" />
        </div>
        <div
          className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition"
          onClick={() => {
            redirect("/lenovo");
          }}
        >
          <img src={lenovo} alt="" className="max-w-full h-auto" />
        </div>
        <div
          className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition"
          onClick={() => {
            redirect("/apple");
          }}
        >
          <img src={apple} alt="" className="max-w-full h-auto" />
        </div>
        <div
          className="w-14 sm:w-24 md:w-28 lg:w-32 cursor-pointer sm:me-2 lg:me-7 sm:hover:scale-[1.05] sm:hover:transition"
          onClick={() => {
            redirect("/acer");
          }}
        >
          <img src={acer} alt="" className="max-w-full h-auto" />
        </div>
      </div>
      {/* Banner */}
      <div className="w-100 h-auto mt-3">
        <img src={laptop_slider} alt="" className="max-w-100 h-auto" />
      </div>
      <div className="md:px-10 lg:px-16 xl:px-28 mt-3">
 {/* Hp */}
      <div className="flex justify-between items-center px-3">
        <h4
          className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          onClick={() => {
            redirect("/hp");
          }}
        >
          Hp Laptops
        </h4>
        <Link
          to="/hp"
          className="text-sm md:text-base hover:underline hover:text-blue-500"
        >
          View all
        </Link>
      </div>

      <hr className="w-full" />
      <div className="flex lg:justify-center gap-5 overflow-x-scroll webkit w-full py-3 px-3">
        {hp_product.map((val, i) => (
          <div
            className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
            key={i}
          >
            <img
              src={val.image}
              alt=""
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

      {/* Dell */}
      <div className="flex justify-between items-center px-3">
        <h4
          className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          onClick={() => {
            redirect("/dell");
          }}
        >
          Dell Laptops
        </h4>
        <Link
          to="/dell"
          className="text-sm md:text-base hover:underline hover:text-blue-500"
        >
          View all
        </Link>
      </div>

      <hr className="w-full" />
      <div className="flex lg:justify-center gap-5 overflow-x-scroll webkit w-full py-3 px-3">
        {dell_product.map((val, i) => (
          <div
            className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
            key={i}
          >
            <img
              src={val.image}
              alt=""
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
      {/* Lenovo */}
      <div className="flex justify-between items-center px-3">
        <h4
          className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          onClick={() => {
            redirect("/lenovo");
          }}
        >
          Lenovo Laptops
        </h4>
        <Link
          to="/lenovo"
          className="text-sm md:text-base hover:underline hover:text-blue-500"
        >
          View all
        </Link>
      </div>
      <hr className="w-full" />
      <div className="flex lg:justify-center gap-5 overflow-x-scroll webkit w-full py-3 px-3">
        {lenovo_product.map((val, i) => (
          <div
            className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
            key={i}
          >
            <img
              src={val.image}
              alt=""
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
      {/* Asus */}
      <div className="flex justify-between items-center px-3">
        <h4
          className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          onClick={() => {
            redirect("/asus");
          }}
        >
          Asus Laptops
        </h4>
        <Link
          to="/asus"
          className="text-sm md:text-base hover:underline hover:text-blue-500"
        >
          View all
        </Link>
      </div>
      <hr className="w-full" />
      <div className="flex lg:justify-center gap-5 overflow-x-scroll webkit w-full py-3 px-3">
        {asus_product.map((val, i) => (
          <div
            className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
            key={i}
          >
            <img
              src={val.image}
              alt=""
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
      {/* Acer */}
      <div className="flex justify-between items-center px-3">
        <h4
          className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          onClick={() => {
            redirect("/acer");
          }}
        >
          Acer Laptops
        </h4>
        <Link
          to="/acer"
          className="text-sm md:text-base hover:underline hover:text-blue-500"
        >
          View all
        </Link>
      </div>
      <hr className="w-full" />
      <div className="flex lg:justify-center gap-5 overflow-x-scroll webkit w-full py-3 px-3">
        {acer_product.map((val, i) => (
          <div
            className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
            key={i}
          >
            <img
              src={val.image}
              alt=""
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
      {/* Apple */}
      <div className="flex justify-between items-center px-3">
        <h4
          className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
          onClick={() => {
            redirect("/apple");
          }}
        >
          Apple Laptops
        </h4>
        <Link
          to="/apple"
          className="text-sm md:text-base hover:underline hover:text-blue-500"
        >
          View all
        </Link>
      </div>
      <hr className="w-full" />
      <div className="flex lg:justify-center gap-5 overflow-x-scroll webkit w-full py-3 px-3">
        {apple_product.map((val, i) => (
          <div
            className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48 px-3 hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
            key={i}
          >
            <img src={val.image} alt="" className="max-w-full h-auto" />
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
      </div>
     
    </>
  );
}

export default Laptop;
