import React from 'react';
import hoodie_icon from '../../Assets/Icon/hoodie.jpeg'
import jeans_icon from '../../Assets/Icon/jeans.jpeg'
import lower_icon from '../../Assets/Icon/lower.jpeg'
import pant_icon from '../../Assets/Icon/pant.jpeg'
import shirt_icon from '../../Assets/Icon/shirt.jpg'
import tshirt_icon from '../../Assets/Icon/t_Shirt.jpeg'
import { useNavigate } from 'react-router-dom';
import { allT_shirt } from '../../Constant/allMen';

function Tshirt_Men(props) {
  const redirect=useNavigate()
    return (
        <>
          {/* men clothes icon */}
          <div className='flex justify-center items-center gap-2 sm:gap-4 w-full mt-2'>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer " onClick={()=>{redirect('/hoodie')}}>
            <img src={hoodie_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">Hoodie</p>
            </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/shirt')}}>
            <img src={shirt_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">Shirt</p>
            </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/pant')}}>
            <img src={pant_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">Pant</p>
            </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/lower')}}>
            <img src={lower_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">Lower</p>
            </div>
           <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/jeans')}}>
           <img src={jeans_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
           <p className="text-xs sm:text-sm text-center font-semibold">Jeans</p>
           </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/tshirt_men')}}>
            <img src={tshirt_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">T-shirt</p>
            </div>
        </div>
        <hr className='w-full pt-[1px] mt-2 mx-auto'/>
        
         
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