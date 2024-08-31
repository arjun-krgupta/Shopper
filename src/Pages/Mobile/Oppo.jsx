import React from 'react';
import Oppo_product from '../../Component/Product/All-mobile-data/Oppo'
import sl1 from '../../Component/Assets/Slider/1.jpg'
import sl2 from '../../Component/Assets/Slider/2.jpg'
import m1 from '../../Component/Assets/Mobile/icon/realme.png'
import m2 from '../../Component/Assets/Mobile/icon/iphone.png'
import m3 from '../../Component/Assets/Mobile/icon/oppo.png'
import m4 from '../../Component/Assets/Mobile/icon/poco.png'
import m5 from '../../Component/Assets/Mobile/icon/samsung.jpg'
import m6 from '../../Component/Assets/Mobile/icon/vivo.png'
import { useNavigate } from 'react-router-dom';

function Oppo(props) {
    const redirect =useNavigate()
    return (
        <>
           <div className='flex justify-center items-center gap-2 w-full mt-2'>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/realme')}}>
            <img src={m1} alt="" className="max-w-full h-auto rounded-full" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/iphone')}}>
            <img src={m2} alt="" className="max-w-full h-auto rounded-full" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7 " onClick={()=>{redirect('/oppo')}}>
            <img src={m3} alt="" className="max-w-full h-auto rounded-full" />
            </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/poco')}}>
            <img src={m4} alt="" className="max-w-full h-auto rounded-full" />
            </div>
           <div className="w-11 sm:w-16 md:w-20 cursor-pointer sm:me-2 lg:me-7" onClick={()=>{redirect('/samsung')}}>
           <img src={m5} alt="" className="max-w-full h-auto rounded-full" />
           </div>
            <div className="w-11 sm:w-16 md:w-20 cursor-pointer" onClick={()=>{redirect('/vivo')}}>
            <img src={m6} alt="" className="max-w-full h-auto rounded-full" />
            </div>
        </div>
         <div className='w-100 h-auto'>
            <h1 className='font-bold text-4xl mt-3 mb-1 text-center'>Oppo Phones</h1>
              <img src={sl1} alt="" className='max-w-100 h-auto'/>
              <img src={sl2} alt="" className='max-w-100 h-auto'/>
         </div>
        <div className='mt-2'>
            {
                Oppo_product.map((val,ind)=>
             <div className="flex justify-evenly bg-white p-3 pb-3 border-bottom mb-2 w-full cursor-pointer" key={ind}>
            <div className="w-[12%] mt-2">
                <img src={val.image} alt="" className='max-w-full h-auto'/>
            </div>
            <div className="flex flex-col gap-1">
                <h5 className='hover:text-blue-600 font-bold text-lg'>{val.name}</h5>
                <div className="flex gap-1">
                    <button className='bg-green-600 text-white py-[1px] px-[2px] rounded'>{val.rating}</button>
                    <div>{val.review}</div>
                </div>
                <ul>
                    <li>{val.description.d1}</li>
                    <li>{val.description.d2}</li>
                    <li>{val.description.d3}</li>
                    <li>{val.description.d4}</li>
                    <li>{val.description.d5}</li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-[2px]">
                <h6 className='text-xl font-bold'>{val.new_price}</h6>
                <div className="text-gray-600 line-through text-base">{val.old_price}</div>
                <div className='text-green-700 text-sm'>{val.offer}</div>
            </div> 
            </div>
                )
            }
            </div>
        </>
    );
}

export default Oppo;