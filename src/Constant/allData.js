// Mobile
import r1 from "../Assets/Mobile/Realme/realme 11x5g black.jpg";
import a1 from "../Assets/Mobile/Iphone/apple iphone 15.jpg";
import v1 from "../Assets/Mobile/Vivo/vivo T3x 5G.jpg";
import sm1 from "../Assets/Mobile/Samsung/samsung galaxy A35 5G.jpg";
import p1 from "../Assets/Mobile/Poco/Poco m6 pro.jpg";
import o1 from "../Assets/Mobile/Oppo/oppo A38.jpg";
// laptop
import hp1 from "../Assets/Laptop/Hp/HP AMD Ryzen 3 Quad Core 5300U.jpeg";
import i1 from '../Assets/Laptop/Apple/i1.jpeg'
import acer1 from '../Assets/Laptop/Acer/ac1.jpeg'
import lv1 from '../Assets/Laptop/Lenovo/Lenovo V15 AMD Ryzen 3 Quad Core 7320U.jpeg'
import d1 from '../Assets/Laptop/Dell/DELL Inspiron 3520 Intel Core i3.jpeg'
import as1 from '../Assets/Laptop/Asus/ASUS Chromebook Intel Celeron Dual Core N4500.jpeg'
// men Collection
import j2 from '../Assets/men/Jeans/2.jpeg'
import srt1 from '../Assets/men/Shirt/1.jpeg'
import tsm1 from '../Assets/men/T_shirt/1.jpeg'
import coat from "../Assets/men/Coat_pant/1.jpeg";
import h1 from '../Assets/men/Hoodie/h1.jpeg'
import shervani from "../Assets/men/Sherwani/1.jpeg";
// Women Collection
import l1 from '../Assets/women/Lehenga/1.jpeg'
import op5 from '../Assets/women/One_piece/5.jpeg'
import ss1 from '../Assets/women/Salwar_suit/1.jpeg'
import g1 from '../Assets/women/Gown/1.jpeg'
import s1 from '../Assets/women/Suit/1.jpeg'
import ts1 from '../Assets/women/t_shirt/1.jpeg'

let mobile = [
  {
    id: 1,
    image: r1,
    name: "Realme 11x 5G (Midnight Black 128GB)",
    rating: "4.3★",
    review: "1,659 Reviews",
    description: {
      d1: "8 GB RAM | 128 GB ROM | Expandable Upto 2 TB.",
      d2: "17.07 cm (6.72 inch) Full HD+ Display.",
      d3: "64MP + 2MP | 8MP Front Camera.",
      d4: "5000 mAh Battery.",
      d5: "Dimensity 6100+ Processor.",
    },
    new_price: "₹15,999",
    old_price: "₹18,999",
    offer: "22% off",
    alt:"Realme",
  },
  {
    id: 1,
    image: v1,
    name: "Vivo T3x 5G (Crimson Bliss, 128 GB)",
    rating: "4.5★",
    review: "1,659 Reviews",
    description: {
      d1: "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB.",
      d2: "17.07 cm (6.72 inch) Full HD+ Display.",
      d3: "50MP + 2MP | 8MP Front Camera.",
      d4: "6000 mAh Battery.",
      d5: "6 Gen 1 Processor.",
    },
    new_price: "₹13,499",
    old_price: "₹17,499",
    offer: "22% off",
    alt:"Vivo",
  },
  {
    id: 1,
    image: p1,
    name: "POCO M6 Pro 5G (Forest Green, 128 GB)",
    rating: "4.3★",
    review: "5,742 Reviews",
    description: {
      d1: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB.",
      d2: "17.07 cm (6.72 inch) Full HD+ Display.",
      d3: "50MP + 2MP | 8MP Front Camera.",
      d4: "5000 mAh Battery.",
      d5: "Snapdragon 4 Gen 2 Processor.",
    },
    new_price: "₹9,999",
    old_price: "₹16,999",
    offer: "41% off",
    alt:"Poco",
  },
  {
    id: 1,
    image: o1,
    name: "OPPO A38 (Glowing Black, 128 GB))",
    rating: "4.3★",
    review: "1,659 Reviews",
    description: {
      d1: "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB.",
      d2: "17.07 cm (6.72 inch) Full HD+ Display.",
      d3: "50MP + 2MP | 5MP Front Camera.",
      d4: "5000 mAh Battery.",
      d5: "Dimensity 6100+ Processor.",
    },
    new_price: "₹9,999",
    old_price: "₹11,999",
    offer: "16% off",
    alt:"Oppo",
  },
  {
    id: 1,
    image: sm1,
    name: "SAMSUNG Galaxy A35 5G (Awesome Lilac)",
    rating: "4.3★",
    review: "1,659 Reviews",
    description: {
      d1: "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB.",
      d2: "17.07 cm (6.72 inch) Full HD+ Display.",
      d3: "50MP + 8MP + 5MP | 13MP Front Camera.",
      d4: "5000 mAh Battery.",
      d5: "Dimensity 6100+ Processor.",
    },
    new_price: "₹36,999",
    old_price: "₹39,999",
    offer: "22% off",
    alt:"Samsung",
  },
  {
    id: 1,
    image: a1,
    name: "Apple iPhone 15 (Black, 128 GB)",
    rating: "4.3★",
    review: "1,659 Reviews",
    description: {
      d1: "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB.",
      d2: "17.07 cm (6.72 inch) Full HD+ Display.",
      d3: "50MP + 8MP + 5MP | 13MP Front Camera.",
      d4: "5000 mAh Battery.",
      d5: "Dimensity 6100+ Processor.",
    },
    new_price: "₹36,999",
    old_price: "₹39,999",
    offer: "22% off",
    alt:"Iphone",
  },
];
export { mobile };

let laptop = [
  {
    id: 1,
    name: "HP AMD Ryzen 3 Quad Core 5300U ",
    rating: "4.2★",
    review: "1,659 Reviews",
    description: {
      d1: "AMD Ryzen 3 Quad Core Processor",
      d2: "8 GB DDR4 RAM",
      d3: "64 bit Windows 11 Operating System",
      d4: "512 GB SSD",
      d5: "39.62 cm (15.6 inch) Display",
      d6: "1 Year Onsite Warranty",
    },
    image: hp1,
    old_price: "₹32,000",
    new_price: "₹47,000",
    offer: "32% off",
    alt:"HP",
  },
  {
    id: 1,
    name: "DELL Inspiron 3520 Intel Core i3 ",
    rating: "4.2★",
    review: "1,659 Reviews",
    description: {
      d1: "Intel Core i3 Core Processor",
      d2: "8 GB DDR4 RAM",
      d3: "64 bit Windows 11 Operating System",
      d4: "512 GB SSD",
      d5: "39.62 cm (15.6 inch) Display",
      d6: "1 Year Onsite Hardware Service",
    },
    image: d1,
    old_price: "₹38,000",
    new_price: "₹51,000",
    offer: "25% off",
     alt:"DELL",
  },
  {
    id: 1,
    name: "Lenovo V15 AMD Ryzen 3 Quad Core 7320U",
    rating: "4.2★",
    review: "1,659 Reviews",
    description: {
      d1: "AMD Ryzen 3 Quad Core Processor",
      d2: "8 GB DDR4 RAM",
      d3: "64 bit Windows 11 Operating System",
      d4: "512 GB SSD",
      d5: "39.62 cm (15.6 inch) Display",
      d6: "1 Year Onsite Hardware Service",
    },
    image: lv1,
    old_price: "₹28,000",
    new_price: "₹60,000",
    offer: "53% off",
     alt:"LENOVO",
  },
  {
    id: 1,
    name: "ASUS Chromebook Intel Celeron ",
    rating: "4.2★",
    review: "1,659 Reviews",
    description: {
      d1: "Intel Celeron Dual Core Processor",
      d2: "8 GB LPDDR4X RAM",
      d3: "Chrome Operating System",
      d4: "512 GB SSD",
      d5: "39.62 cm (15.6 inch) Display",
      d6: "1 Year Onsite Hardware Service",
    },
    image: as1,
    old_price: "₹21,000",
    new_price: "₹33,000",
    offer: "36% off",
     alt:"ASUS",
  },
  {
    id: 1,
    name: "Apple 2022 MacBook AIR Apple M2",
    rating: "4.2★",
    review: "1,659 Reviews",
    description: {
      d1: "Intel Celeron Dual Core Processor",
      d2: "8 GB LPDDR4X RAM",
      d3: "Chrome Operating System",
      d4: "512 GB SSD",
      d5: "39.62 cm (15.6 inch) Display",
      d6: "1 Year Onsite Hardware Service",
    },
    image: i1,
    old_price: "₹90,000",
    new_price: "₹99,000",
    offer: "9% off",
     alt:"MAC Book",
  },
  {
    id: 1,
    name: "Acer One (2024) Intel Core",
    rating: "4.2★",
    review: "1,659 Reviews",
    description: {
      d1: "Intel Celeron Dual Core Processor",
      d2: "8 GB LPDDR4X RAM",
      d3: "Chrome Operating System",
      d4: "512 GB SSD",
      d5: "39.62 cm (15.6 inch) Display",
      d6: "1 Year Onsite Hardware Service",
    },
    image: acer1,
    old_price: "₹21,000",
    new_price: "₹33,000",
    offer: "36% off",
     alt:"ACER",
  },
];
export { laptop };

let men = [
    {
         id:1,
         brand:"Allen Solly",
         name:"Men Full Sleeve Solid Hooded Sweatshirt",
         image:h1,
         new_price:"₹1379",
         old_price:"₹2299",
         offer:"40% off",
         rating:"4.3★",
         review:1256, 
         size:"M , L , XL",
         alt:"Hoodie"
     },
  {
         id:1,
         brand:"Allen Solly",
         name:"Men Slim Fit Solid Shirt",
         image:tsm1,
         new_price:"₹1499",
         old_price:"₹1699",
         offer:"12% off",
         rating:"4.3★",
         review:1256, 
         size:"M , L , XL",
          alt:"T-Shirt",
     },
 {
        id:2,
        brand:"Allen Solly",
        name:"Men Slim Mid Rise Dark Jeans",
        image:j2,
        new_price:"₹1379",
        old_price:"₹2299",
        offer:"40% off",
        rating:"4.3★",
        review:1256, 
        size:"30 , 32 , 34 , 36",
         alt:"Jeans",
    },
 {
        id:1,
        brand:"Allen Solly",
        name:"Men Slim Fit Solid Shirt",
        image:srt1,
        new_price:"₹1499",
        old_price:"₹1699",
        offer:"12% off",
        rating:"4.3★",
        review:1256, 
        size:"M , L , XL",
         alt:"Shirt",
    },
  {
    name: "Coat-Pant",
    image: coat,
    new_price: `₹3000`,
    old_price:`₹4500`,
    alt:"Coat Pant",
  },
  {
    name: "Shervani",
    image: shervani,
    new_price: `₹1500`,
    old_price:`₹2500`,
    alt:"Shervani",
  },
];
export { men };

let women = [
 {
         id:1,
         name:"Embroidered Semi Stitched Lehenga",
         image:l1,
         new_price:"₹15,920",
         old_price:"₹19,899",
         offer:"20% off",
         rating:"4.3★",
         review:1256, 
         size:"M , L , XL",
         alt:"Lahenga",
     },
 {
        id:1,
        name:"Women Viscose Rayon Kurta Pant Dupatta",
        image:ss1,
        new_price:"₹1599",
        old_price:"₹1999",
        offer:"20% off",
        rating:"4.3★",
        review:1256, 
        size:"M , L , XL",
        alt:"Salwar Suit",
    },
   {
         id:1,
         name:"Women One Piece dress",
         image:op5,
         new_price:"₹1599",
         old_price:"₹1999",
         offer:"20% off",
         rating:"4.3★",
         review:1256, 
         size:"M , L , XL",
         alt:"One-Piece",
     },
   {
          id:1,
          name:"Women Coat Solid Suit",
          image:s1,
          new_price:"₹15,920",
          old_price:"₹19,899",
          offer:"20% off",
          rating:"4.3★",
          review:1256, 
          size:"M , L , XL",
          alt:"Suit",
      },
 {
         id:1,
         name:"Printed Viscose Rayon Stitched Gown",
         image:g1,
         new_price:"₹1599",
         old_price:"₹1999",
         offer:"20% off",
         rating:"4.3★",
         review:1256, 
         size:"M , L , XL",
         alt:"Gown",
     },
   {
          id:1,
          name:"Women Solid Cotton Blend T-Shirt",
          image:ts1,
          new_price:"₹799",
          old_price:"₹1099",
          offer:"20% off",
          rating:"4.3★",
          review:1256, 
          size:"M , L , XL",
          alt:"T-shirt",
      },
];
export { women };
