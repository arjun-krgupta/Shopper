
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  lahenga,
  gown,
  one_piece,
  suit,
  suit_salwar,
  tshirt,
} from "../Constant/allWomen";
import lehenga_icon from "../Assets/Icon/Lehenga.jpeg";
import gown_icon from "../Assets/Icon/gown.jpeg";
import onePiece_icon from "../Assets/Icon/one-piece.jpeg";
import suitSalwar_icon from "../Assets/Icon/suit-salwar.jpeg";
import suit_icon from "../Assets/Icon/suit.jpeg";
import tShirt_icon from "../Assets/Icon/t-shirt.jpeg";

const clothData = [
  { name: "lehenga", img: lehenga_icon, alt: "Lahenga" },
  { name: "gown", img: gown_icon, alt: "Gown" },
  { name: "suit", img: suit_icon, alt: "Suit" },
  { name: "one-piece", img: onePiece_icon, alt: "One-Pis" },
  { name: "suit-salwar", img: suitSalwar_icon, alt: "Salwar Suit" },
  { name: "tshirt_women", img: tShirt_icon, alt: "Tshirt" },
];

function Women() {
  const redirect = useNavigate();
  return (
    <>
      {/* Women Clothes icon */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 w-full mt-2">
        {clothData.map((cloth, index) => (
          <div
            key={index}
            className="w-11 hover:text-pink-700 sm:w-16 md:w-20 cursor-pointer"
            onClick={() => {
              redirect(`/${cloth.name}`);
            }}
          >
            <img
              src={cloth.img}
              alt={cloth.alt}
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
      <hr className="w-full mt-1" />

      <div className="md:px-10 lg:px-16 xl:px-32 mt-3 mb-5">
        <div className="flex justify-between items-center px-3">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
            onClick={() => {
              redirect("/lehenga");
            }}
          >
            Lehenga
          </h4>
          <Link
            to="/lehenga"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Lehenga*/}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3">
          {lahenga.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 "
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded object-contain"
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

        <div className="flex justify-between items-center px-3">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
            onClick={() => {
              redirect("/gown");
            }}
          >
            Gown
          </h4>
          <Link
            to="/gown"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Gown */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3">
          {gown.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded object-contain"
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

        <div className="flex justify-between items-center px-3">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
            onClick={() => {
              redirect("/one-piece");
            }}
          >
            One Piece
          </h4>
          <Link
            to="/one-piece"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* One Piece */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3">
          {one_piece.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded object-contain"
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

        <div className="flex justify-between items-center px-3">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
            onClick={() => {
              redirect("/suit-salwar");
            }}
          >
            Salwar Suit
          </h4>
          <Link
            to="/suit-salwar"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Salwar Suit */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3">
          {suit_salwar.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded object-contain"
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

        <div className="flex justify-between items-center px-3">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
            onClick={() => {
              redirect("/suit");
            }}
          >
            Suit
          </h4>
          <Link
            to="/suit"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* Suit */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3">
          {suit.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded object-contain"
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

        <div className="flex justify-between items-center px-3">
          <h4
            className="font-bold text-sm md:text-xl my-1 cursor-pointer hover:underline"
            onClick={() => {
              redirect("/tshirt_women");
            }}
          >
            T-Shirt
          </h4>
          <Link
            to="/tshirt_women"
            className="text-sm md:text-base hover:underline hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        {/* T-Shirt */}
        <hr className="w-full" />
        <div className="flex lg:justify-center gap-3 px-3 overflow-x-scroll webkit w-full my-3">
          {tshirt.map((val, i) => (
            <div
              className="flex flex-col items-center gap-2 w-40 sm:w-44 md:w-48  hover:rounded hover:shadow-xl  hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2"
              key={i}
            >
              <img
                src={val.image}
                alt=""
                className="max-w-full h-auto rounded object-contain"
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

export default Women;
