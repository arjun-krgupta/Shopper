import React from "react";
import {useNavigate } from "react-router-dom";
import mobile from "../Assets/Icon/phones.png";
import laptop from "../Assets/Icon/laptop.png";
import men from "../Assets/Icon/men.png";
import women from "../Assets/Icon/women.png";
import Item from "../Pages/Item";
import Slider from "../Pages/Slider";

function Home() {
 const redirect=useNavigate()
  return (
    <>
      {/* front-view */}
      <div className="flex justify-center items-center gap-2 mt-3 lg:mt-4" >
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer  sm:me-3 md:me-7 lg:me-32" onClick={()=>{redirect('/Mobiles')}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={mobile} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-sm md:text-base'>Mobile</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer sm:me-3 md:me-7 lg:me-24" onClick={()=>{redirect("/Laptops")}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={laptop} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-sm md:text-base'>Laptop</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer sm:me-3 md:me-7 lg:me-24" onClick={()=>{redirect("/Men")}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={men} alt="" className="max-w-full h-auto" />
            </div>
          <p className='text-sm md:text-base'>Men</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer sm:" onClick={()=>{redirect("/Women")}}>
            <div className="w-12 sm:w-20 md:w-24 lg:w-[105px]">
            <img src={women} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-sm md:text-base'>Women</p>
        </div>
      </div>
      <Slider/>
       <Item/>
    </>
  );
}

export default Home;
