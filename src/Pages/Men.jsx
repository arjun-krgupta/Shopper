import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import hoodie_icon from '../Assets/Icon/hoodie.jpeg'
import jeans_icon from '../Assets/Icon/jeans.jpeg'
import lower_icon from '../Assets/Icon/lower.jpeg'
import pant_icon from '../Assets/Icon/pant.jpeg'
import shirt_icon from '../Assets/Icon/shirt.jpg'
import tshirt_icon from '../Assets/Icon/t_Shirt.jpeg'
import { hoodie, jeans, lower, pant, shirt, t_shirt } from '../Constant/allMen';


function Men() {
  const redirect=useNavigate()
    return (
        <>
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

        <h1 className='text-4xl font-bold my-3 text-center md:text-5xl'>Shop by Categories</h1>
        
        <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-40">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/hoodie')}} >Hoodie</h4>
            <Link to='/hoodie' className=''>View all</Link>
            </div>
                {/* Hoodie */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {hoodie.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-5">
                    <div className="text-sm font-bold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-40">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/jeans')}} >Jeans</h4>
            <Link to='/jeans' className=''>View all</Link>
            </div>
                {/* Jeans */}
            <hr className='w-full' />
             <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {jeans.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-5">
                    <div className="text-sm font-bold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-40">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/shirt')}} >Shirt</h4>
            <Link to='/shirt' className=''>View all</Link>
            </div>
                {/* Shirt */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {shirt.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-5">
                    <div className="text-sm font-bold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-40">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/lower')}} >Track Pants</h4>
            <Link to='/lower' className=''>View all</Link>
            </div>
                {/* Lower */}
            <hr className='w-full' />
             <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {lower.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-5">
                    <div className="text-sm font-bold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-40">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/pant')}} >Formal/Casual Pants</h4>
            <Link to='/pant' className=''>View all</Link>
            </div>
                {/* Pant */}
            <hr className='w-full' />
              <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {pant.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-5">
                    <div className="text-sm font-bold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>

          <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-40">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/tshirt_men')}} >T-Shirt</h4>
            <Link to='/tshirt_men' className=''>View all</Link>
            </div>
                {/* T-shirt */}
            <hr className='w-full' />
             <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {t_shirt.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-5">
                    <div className="text-sm font-bold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                </div>
              </div>
            )}
          </div>
        </>
    );
}

export default Men;