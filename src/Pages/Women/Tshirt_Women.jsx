import React from 'react';
import lehenga_icon from '../../Assets/Icon/Lehenga.jpeg'
import gown_icon from '../../Assets/Icon/gown.jpeg'
import onePiece_icon from '../../Assets/Icon/one-piece.jpeg'
import suitSalwar_icon from '../../Assets/Icon/suit-salwar.jpeg'
import suit_icon from '../../Assets/Icon/suit.jpeg'
import tShirt_icon from '../../Assets/Icon/t-shirt.jpeg'
import { useNavigate } from 'react-router-dom';
import { allT_Shirt } from '../../Constant/allWomen';
 

function Tshirt_Women(props) {
  const redirect=useNavigate()
    return (
        <>
          {/* Women Clothes icon */}
          <div className='flex justify-center items-center gap-2 sm:gap-4 w-full mt-2'>
            <div className="w-11 hover:text-pink-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/lehenga')}}>
            <img src={lehenga_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">Lehenga</p>
            </div>
            <div className="w-11 hover:text-pink-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/gown')}}>
            <img src={gown_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">Gown</p>
            </div>
            <div className="w-11 hover:text-pink-700 sm:w-16 md:w-20 cursor-pointer " onClick={()=>{redirect('/one-piece')}}>
            <img src={onePiece_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">one-pis</p>
            </div>
            <div className="w-11 hover:text-pink-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/suit-salwar')}}>
            <img src={suitSalwar_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">Salwar</p>
            </div>
           <div className="w-11 hover:text-pink-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/suit')}}>
           <img src={suit_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
           <p className="text-xs sm:text-sm text-center font-semibold">Suit</p>
           </div>
            <div className="w-11 hover:text-pink-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/tshirt_women')}}>
            <img src={tShirt_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-xs sm:text-sm text-center font-semibold">T-shirt</p>
            </div>
        </div>
       <hr className='w-full pt-[1px] mt-2 mx-auto'/>
        <div className="flex justify-center gap-3 flex-wrap overflow-x-scroll webkit w-full mt-4 mb-2 px-4 sm:px-14 md:px-16">
        {allT_Shirt.map((val, i) => (
          <div
            className="flex relative flex-col items-center gap-1 my-2 w-32 sm:w-44 md:w-52"
            key={i}
          >
             <div className="text-xs sm:text-sm text-white absolute right-0 top-0 bg-pink-500 p-2 rounded-full ">
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

export default Tshirt_Women;