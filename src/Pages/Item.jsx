import { Link, useNavigate } from "react-router-dom";
import { mobile, laptop, men, women } from "../Constant/allData";

// Category path mapping
const allCategory = [
  { name: "Realme", path: "/realme" },
  { name: "Vivo", path: "/vivo" },
  { name: "Poco", path: "/poco" },
  { name: "Iphone", path: "/iphone" },
  { name: "Samsung", path: "/samsung" },
  { name: "Oppo", path: "/oppo" },
  { name: "HP", path: "/hp" },
  { name: "ASUS", path: "/asus" },
  { name: "ACER", path: "/acer" },
  { name: "LENOVO", path: "/lenovo" },
  { name: "DELL", path: "/dell" },
  { name: "MAC Book", path: "/apple" },
  { name: "Hoodie", path: "/hoodie" },
  { name: "Shirt", path: "/shirt" },
  { name: "Coat Pant", path: "/coat" },
  { name: "Track Pant", path: "/lower" },
  { name: "Top shirt", path: "/tshirt_men" },
  { name: "Jeans", path: "/jeans" },
  { name: "Lehenga", path: "/lehenga" },
  { name: "Gown", path: "/gown" },
  { name: "One-Piece", path: "/one-piece" },
  { name: "Salwar Suit", path: "/suit-salwar" },
  { name: "T-shirt", path: "/tshirt_women" },
  { name: "Suit", path: "/suit" },
];

function Item() {
  const redirect = useNavigate();

  const renderCategory = (categoryItems, categoryName) => (
    <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 mb-8">
      <div className="border rounded-md shadow-sm p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-3 border-b pb-2">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold">
            {categoryName}
          </h1>
          <Link
            to={`/${categoryName}`}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            View all
          </Link>
        </div>

        {/* Scrollable Item List */}
        <div className="flex gap-4 overflow-x-auto webkit py-2">
          {categoryItems.map((val, ind) => {
            const match = allCategory.find(
              (category) =>
                category.name.toLowerCase() === val.alt.toLowerCase()
            );

            return (
              <div
                key={ind}
                className="flex flex-col items-center gap-2 min-w-[140px] sm:min-w-[160px] md:min-w-[170px] cursor-pointer hover:scale-[1.05] transition-transform duration-200 p-2 bg-white rounded-md shadow-md"
                onClick={() => match && redirect(match.path)}
              >
                <div className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center">
                  <img
                    src={val.image}
                    alt={val.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xs sm:text-sm font-medium text-center">{val.alt}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {renderCategory(mobile, "Mobiles")}
      {renderCategory(laptop, "Laptops")}
      {renderCategory(men, "Men")}
      {renderCategory(women, "Women")}
    </div>
  );
}

export default Item;
