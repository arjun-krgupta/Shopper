import React from 'react';
import tshirt_Men from '../../Component/Product/All-men-data/T-shirt';
import hoodie_icon from '../../Component/Assets/men/Hoodie.jpeg'
import jeans_icon from '../../Component/Assets/men/jeans.jpeg'
import lower_icon from '../../Component/Assets/men/lower.jpeg'
import pant_icon from '../../Component/Assets/men/pant.jpeg'
import shirt_icon from '../../Component/Assets/men/shirt.jpg'
import tshirt_icon from '../../Component/Assets/men/T-shirt.jpeg'
import { useNavigate } from 'react-router-dom';

function Tshirt_Men(props) {
  const redirect=useNavigate()
    return (
        <>
          {/* men clothes icon */}
          <div className='flex justify-center items-center gap-4 w-full mt-2'>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/hoodie')}}>
            <img src={hoodie_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-sm text-center font-semibold">Hoodie</p>
            </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/shirt')}}>
            <img src={shirt_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-sm text-center font-semibold">Shirt</p>
            </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7 " onClick={()=>{redirect('/pant')}}>
            <img src={pant_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-sm text-center font-semibold">Pant</p>
            </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/lower')}}>
            <img src={lower_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-sm text-center font-semibold">Lower</p>
            </div>
           <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/jeans')}}>
           <img src={jeans_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
           <p className="text-sm text-center font-semibold">Jeans</p>
           </div>
            <div className="w-11 hover:text-blue-700 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/tshirt_men')}}>
            <img src={tshirt_icon} alt="" className="max-w-full h-auto object-cover rounded-[50px]" />
            <p className="text-sm text-center font-semibold">T-shirt</p>
            </div>
        </div>
        <hr className='w-full pt-[1px] mt-2 mx-auto'/>
        
        <div className="flex justify-center gap-3 flex-wrap overflow-x-scroll webkit w-full mt-4 mb-1 px-5">
            {tshirt_Men.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-36 sm:w-40 md:w-60" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto' />
               <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400">{val.brand}</div>
                <div className="text-base font-semibold cursor-pointer text-center">{val.name}</div>
               </div>
                <div className="flex gap-3">
                    <div className="text-sm font-semibold">{val.new_price}</div>
                    <div className="text-sm line-through text-gray-600">{val.old_price}</div>
                    <div className="text-sm text-green-500">{val.offer}</div>
                </div>
                <div className='text-sm text-gray-500'>Size : {val.size}</div>
              </div>
            )}
          </div>
        </>
    );
}

export default Tshirt_Men;