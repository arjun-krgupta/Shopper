
import { allT_Shirt } from "../../Constant/allData";

function Tshirt_Men() {
  return (
    <>
      <div className="flex justify-center gap-2 flex-wrap overflow-x-scroll webkit w-full my-4 px-2 sm:px-28 md:px-40 lg:px-48">
        {allT_Shirt.map((val, i) => (
          <div
            className="flex relative flex-col py-2 hover:rounded hover:shadow-xl hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] items-center gap-1 my-2 px-3 w-[170px] sm:w-44 md:w-56 rounded-md shadow-md"
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
