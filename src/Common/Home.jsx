
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
      <div className="flex justify-center items-center gap-5 mt-3 lg:mt-4 px-4 sm:px-6" >
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer  " onClick={()=>{redirect('/Mobiles')}}>
            <div className="w-12 sm:w-15 md:w-16 lg:w-20 ">
            <img src={mobile} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-xs sm:text-sm'>Mobile</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer" onClick={()=>{redirect("/Laptops")}}>
            <div className="w-12 sm:w-15 md:w-16 lg:w-20 ">
            <img src={laptop} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-xs sm:text-sm'>Laptop</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer " onClick={()=>{redirect("/Men")}}>
            <div className="w-12 sm:w-15 md:w-16 lg:w-20 ">
            <img src={men} alt="" className="max-w-full h-auto" />
            </div>
          <p className='text-xs sm:text-sm'>Men</p>
        </div>
        <div className="flex flex-col items-center w-28 hover:text-blue-600 hover:scale-[1.01] hover:transition-[0.3s] cursor-pointer" onClick={()=>{redirect("/Women")}}>
            <div className="w-12 sm:w-15 md:w-16 lg:w-20 ">
            <img src={women} alt="" className="max-w-full h-auto"/>
            </div>
          <p className='text-xs sm:text-sm'>Women</p>
        </div>
      </div>
      <Slider/>
       <Item/>
    </>
  );
}

export default Home;
