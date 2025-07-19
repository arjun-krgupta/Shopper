
import { Link } from "react-router-dom";
import {mobile,laptop,men,women} from '../Constant/allData'

function Item() {

  // Reusable category section
  const renderCategory = (categoryItems, categoryName) => (
 <div className="md:px-10 lg:px-16 xl:px-28 ">
     <div className="border px-3 py-2 mb-2" key={categoryName}>
      <div className="flex justify-between px-2 mb-2 border-b-[1px]">
        <h1 className="text-lg font-semibold">{categoryName}</h1>
        <Link to={`/${categoryName}`} className="text-sm hover:text-green-600 hover:underline">
          View all
        </Link>
      </div>
      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
        {categoryItems.map((val, ind) => (
          <div
            key={ind}
            className="flex flex-col hover:rounded hover:shadow-xl hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 items-center gap-1 w-[155px] sm:w-[170px]"
          >
            <div className="max-w-full w-auto h-[190px] p-1 cursor-pointer">
              <img
                src={val.image}
                alt={val.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-sm font-bold">{val.alt}</h1>
            {/* <h1 className="text-sm text-center font-bold">{val.name}</h1> */}
           <div className="flex justify-between gap-5">
            <h1 className="text-sm font-medium">{val.new_price}</h1>
              <h1 className="text-sm text-gray-400 line-through">{val.old_price}</h1>
           </div>
          </div>
        ))}
      </div>
    </div>
 </div>
  );

  return (
    <div className="bg-white py-5 px-3 sm:px-10 md:px-16 lg:px-32">
      {renderCategory(mobile, "Mobiles")}
      {renderCategory(laptop, "Laptops")}
      {renderCategory(men, "Men")}
      {renderCategory(women, "Women")}
    </div>
  );
}

export default Item;
