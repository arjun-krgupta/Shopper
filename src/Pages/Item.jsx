import { Link, useNavigate } from "react-router-dom";
import { mobile, laptop, men, women } from "../Constant/allData";

const allCategory=[
  {name:"Realme",path:'/realme'},
  {name:"Vivo",path:'/vivo'},
  {name:"Poco",path:'/poco'},
  {name:"Iphone",path:'/iphone'},
  {name:"Samsung",path:'/samsung'},
  {name:"Oppo",path:'/oppo'},
  {name:"HP",path:'/hp'},
  {name:"ASUS",path:'/asus'},
  {name:"ACER",path:'/acer'},
  {name:"LENOVO",path:'/lenovo'},
  {name:"DELL",path:'/dell'},
  {name:"MAC Book",path:'/apple'},
  {name:"Hoodie",path:'/hoodie'},
  {name:"Shirt",path:'/shirt'},
  {name:"Coat Pant",path:'/coat'},
  {name:"Track Pant",path:'/lower'},
  {name:"Top shirt",path:'/tshirt_men'},
  {name:"Jeans",path:'/jeans'},
  {name:"Lehenga",path:'/lehenga'},
  {name:"Gown",path:'/gown'},
  {name:"One-Piece",path:'/one-piece'},
  {name:"Salwar Suit",path:'/suit-salwar'},
  {name:"T-shirt",path:'/tshirt_women'},
   {name:"Suit",path:'/suit'},
]

function Item() {
  const redirect=useNavigate()
  // Reusable category section
const renderCategory = (categoryItems, categoryName) => (
  <div className="md:px-10 lg:px-16 xl:px-28 ">
    <div className="border px-3 py-2 mb-2" key={categoryName}>
      <div className="flex justify-between px-2 mb-2 border-b-[1px]">
        <h1 className="text-lg font-semibold">{categoryName}</h1>
        <Link
          to={`/${categoryName}`}
          className="text-sm hover:text-green-600 hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-2">
        {categoryItems.map((val, ind) => {
          const match = allCategory.find(
            (category) => category.name.toLowerCase() === val.alt.toLowerCase()
          );

          return (
            <div
              key={ind}
              className="flex flex-col hover:rounded hover:shadow-xl hover:bg-transparent hover:transition-[0.2s] hover:scale-[1.03] p-2 items-center gap-2 w-[150px] sm:w-[160px]"
              onClick={() => match && redirect(match.path)}
            >
              <img
                src={val.image}
                alt={val.name}
                className="max-w-full h-auto object-contain"
              />
              <h1 className="text-sm font-bold">{val.alt}</h1>
            </div>
          );
        })}
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
