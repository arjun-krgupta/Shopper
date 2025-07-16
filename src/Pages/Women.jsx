import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {lahenga, gown, one_piece, suit, suit_salwar, tshirt} from '../Constant/allWomen';
import lehenga_icon from '../Assets/Icon/Lehenga.jpeg'
import gown_icon from '../Assets/Icon/gown.jpeg'
import onePiece_icon from '../Assets/Icon/one-piece.jpeg'
import suitSalwar_icon from '../Assets/Icon/suit-salwar.jpeg'
import suit_icon from '../Assets/Icon/suit.jpeg'
import tShirt_icon from '../Assets/Icon/t-shirt.jpeg'

function Women(props) {
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

        <h1 className='text-4xl font-bold my-3 text-center md:text-5xl'>Shop by Categories</h1>
        
        <hr className='w-full mt-1' />
        <div className="flex justify-between items-center px-40">
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/lehenga')}} >Lehenga</h4>
            <Link to='/lehenga' className=''>View all</Link>
            </div>
                {/* Lehenga*/}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {lahenga.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded object-contain' />
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/gown')}} >Gown</h4>
            <Link to='/gown' className=''>View all</Link>
            </div>
                {/* Gown */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {gown.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded object-contain' />
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/one-piece')}} >One Piece</h4>
            <Link to='/one-piece' className=''>View all</Link>
            </div>
                {/* One Piece */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {one_piece.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded object-contain' />
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/suit-salwar')}} >Salwar Suit</h4>
            <Link to='/suit-salwar' className=''>View all</Link>
            </div>
                {/* Salwar Suit */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {suit_salwar.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded object-contain' />
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/suit')}} >Suit</h4>
            <Link to='/suit' className=''>View all</Link>
            </div>
                {/* Suit */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {suit.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded object-contain' />
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
            <h4 className='font-bold text-xl my-[6px] cursor-pointer hover:underline' onClick={()=>{redirect('/tshirt_women')}} >T-Shirt</h4>
            <Link to='/tshirt_women' className=''>View all</Link>
            </div>
                {/* T-Shirt */}
            <hr className='w-full' />
            <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-[10px]">
            {tshirt.map((val,i)=>
              <div className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48" key={i}>
                <img src={val.image} alt="" className='max-w-full h-auto rounded object-contain' />
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

export default Women;