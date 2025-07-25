// Hp
import hp1 from '../Assets/Laptop/Hp/HP AMD Ryzen 3 Quad Core 5300U.jpeg'
import hp2 from '../Assets/Laptop/Hp/HP AMD Ryzen 3 Quad Core 5300U.jpeg'
import hp3 from '../Assets/Laptop/Hp/HP 255 G9 AMD Ryzen 3 Dual Core.jpeg'
import hp4 from '../Assets/Laptop/Hp/HP 250 G9 Intel Core i3.jpeg'
import hp5 from '../Assets/Laptop/Hp/HP Chromebook (2024) MediaTek.jpeg'
import hp6 from '../Assets/Laptop/Hp/HP Intel Core i5.jpeg'
// Dell
import d1 from '../Assets/Laptop/Dell/DELL Inspiron 3520 Intel Core i3.jpeg'
import d2 from '../Assets/Laptop/Dell/DELL Intel Core i3 12th Gen.jpeg'
import d3 from '../Assets/Laptop/Dell/DELL 3540 Intel Core i3 12th Gen.jpeg'
import d4 from '../Assets/Laptop/Dell/DELL Intel Core i3 12th Gen.jpeg'
import d5 from '../Assets/Laptop/Dell/DELL Intel Core i5 13th Gen.jpeg'
import d6 from '../Assets/Laptop/Dell/DELL Inspiron Intel Core i5 12th Gen.jpeg'
// Lenovo
import lv1 from '../Assets/Laptop/Lenovo/Lenovo V15 AMD Ryzen 3 Quad Core 7320U.jpeg'
import lv2 from '../Assets/Laptop/Lenovo/Lenovo V15 Intel Celeron Dual Core.jpeg'
import lv3 from '../Assets/Laptop/Lenovo/Lenovo IdeaPad Slim 1 AMD Ryzen 5 Quad Core.jpeg'
import lv4 from '../Assets/Laptop/Lenovo/Lenovo AMD Ryzen 5 Hexa Core 7530.jpeg'
import lv5 from '../Assets/Laptop/Lenovo/Lenovo IdeaPad Slim 5 AMD Ryzen 7 Octa Core 7730U.jpeg'
import lv6 from '../Assets/Laptop/Lenovo/Lenovo AMD Ryzen 3 Quad Core 7330U.jpeg'
// Asus
import as1 from '../Assets/Laptop/Asus/ASUS Chromebook Intel Celeron Dual Core N4500.jpeg'
import as2 from '../Assets/Laptop/Asus/ASUS Vivobook Go 15 Intel Celeron Dual Core N4020.jpeg'
import as3 from '../Assets/Laptop/Asus/ASUS Vivobook 16 (2023) AMD Ryzen 5 Hexa Core 7530U.jpeg'
import as4 from '../Assets/Laptop/Asus/ASUS Vivobook Pro 15 OLED For Creator AMD Ryzen 7 Octa Core 5800HS.jpeg'
import as5 from '../Assets/Laptop/Asus/ASUS ExpertBook B15 Intel Core i3 12th Gen 1215U.jpeg'
import as6 from '../Assets/Laptop/Asus/ASUS TUF Gaming F15, 90WHrs Battery Intel Core i7 13th Gen 13620H.jpeg'
// Acer
import acer1 from '../Assets/Laptop/Acer/ac1.jpeg'
import acer2 from '../Assets/Laptop/Acer/ac2.jpeg'
import acer3 from '../Assets/Laptop/Acer/ac3.jpeg'
import acer4 from '../Assets/Laptop/Acer/ac4.jpeg'
import acer5 from '../Assets/Laptop/Acer/ac5.jpeg'
import acer6 from '../Assets/Laptop/Acer/ac6.jpeg'
// Apple
import i1 from '../Assets/Laptop/Apple/i1.jpeg'
import i2 from '../Assets/Laptop/Apple/i2.jpeg'
import i3 from '../Assets/Laptop/Apple/i3.jpeg'
import i4 from '../Assets/Laptop/Apple/i4.jpeg'
import i5 from '../Assets/Laptop/Apple/i5.jpeg'
import i6 from '../Assets/Laptop/Apple/i6.jpeg'


// Hp
let hp_product=[
     {
            id: 1,
            name:'HP AMD Ryzen 3 Quad Core 5300U - (8 GB/512 GB SSD/Windows 11 Home) 15s-eq2143au Thin and Light Laptop ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:hp1,
            old_price:"₹32,000",
            new_price:"₹47,000",
            offer:"32% off",
            alt:"HP AMD Ryzen 3 Quad Core 5300U"
        },
        {
            id: 2,
            name:'HP AMD Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) 15s-eq2143au Thin and Light Laptop ',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:hp2,
            old_price:"₹39,000",
            new_price:"₹52,000",
            offer:"23% off",
            alt:'HP AMD Ryzen 5 Hexa Core 5500U'
        },
        {
            id: 3,
            name:'HP 255 G9 AMD Ryzen 3 Dual Core R3 3250 - (8 GB/512 GB SSD/Windows 11 Home) 255 G8 Business Laptop ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Dual Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty by OEM",
            },
            image:hp3,
            old_price:"₹26,780",
            new_price:"₹39,999",
            offer:"33% off",
            alt:"HP 255 G9 AMD Ryzen 3 Dual Core R3 3250"
        },
        {
            id: 4,
            name:'HP 250 G9 Intel Core i3 12th Gen Intel Core i3 1215U - (8 GB/512 GB SSD/Windows 11 Home) 250 G9 Business Laptop  (15.6 inch, Silver, 1.47 kg) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Domestic Warranty",
            },
            image:hp4,
            old_price:"₹32,850",
            new_price:"₹47,553",
            offer:"30% off",
            alt:"HP 250 G9 Intel Core i3 12th Gen Intel Core i3 1215U"
        },
        {
            id: 5,
            name:'HP Chromebook (2024) MediaTek MT8183 - (4 GB/32 GB EMMC Storage/Chrome OS) 11MK G9 EE Chromebook  (11.6 Inch, Black, 1.34 Kg) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"MediaTek MT8183 Processor",
                d2:"4 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Carry-in Warranty",
            },
            image:hp5,
            old_price:"₹11,990",
            new_price:"₹34,553",
            offer:"65% off",
            alt:"HP Chromebook (2024) MediaTek MT8183"
        },
 
]
export {hp_product}

let allHp=[
        {
            id: 1,
            name:'HP AMD Ryzen 3 Quad Core 5300U - (8 GB/512 GB SSD/Windows 11 Home) 15s-eq2143au Thin and Light Laptop ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:hp1,
            old_price:"₹32,000",
            new_price:"₹47,000",
            offer:"32% off",
        },
        {
            id: 2,
            name:'HP AMD Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) 15s-eq2143au Thin and Light Laptop ',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:hp2,
            old_price:"₹39,000",
            new_price:"₹52,000",
            offer:"23% off",
        },
        {
            id: 3,
            name:'HP 255 G9 AMD Ryzen 3 Dual Core R3 3250 - (8 GB/512 GB SSD/Windows 11 Home) 255 G8 Business Laptop ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Dual Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty by OEM",
            },
            image:hp3,
            old_price:"₹26,780",
            new_price:"₹39,999",
            offer:"33% off",
        },
        {
            id: 4,
            name:'HP 250 G9 Intel Core i3 12th Gen Intel Core i3 1215U - (8 GB/512 GB SSD/Windows 11 Home) 250 G9 Business Laptop  (15.6 inch, Silver, 1.47 kg) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Domestic Warranty",
            },
            image:hp4,
            old_price:"₹32,850",
            new_price:"₹47,553",
            offer:"30% off",
        },
        {
            id: 5,
            name:'HP Chromebook (2024) MediaTek MT8183 - (4 GB/32 GB EMMC Storage/Chrome OS) 11MK G9 EE Chromebook  (11.6 Inch, Black, 1.34 Kg) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"MediaTek MT8183 Processor",
                d2:"4 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Carry-in Warranty",
            },
            image:hp5,
            old_price:"₹11,990",
            new_price:"₹34,553",
            offer:"65% off",
        },
        {
            id: 6,
            name:'HP Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) 15s-fq5330TU Thin and Light Laptop  (15.6 inch, Star Black, 1.69 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i5 Processor",
                d2:"16 GB LPDDR4X RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:hp6,
            old_price:"₹52,990",
            new_price:"₹68,553",
            offer:"22% off",
        },
    
]
export {allHp}
// Dell
let dell_product=[
     {
            id: 1,
            name:'DELL Inspiron 3520 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Platinum Silver, 1.65 Kg, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:d1,
            old_price:"₹38,000",
            new_price:"₹51,000",
            offer:"25% off",
            alt:"DELL Inspiron 3520 Intel Core i3 12th Gen 1215U"
        },
        {
            id: 2,
            name:'DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (38 cm, Carbon Black, 1.65 Kg, With MS Office)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor (12th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:d2,
            old_price:"₹38,000",
            new_price:"₹62,000",
            offer:"39% off",
            alt:"DELL Inspiron 3520 Intel Core i3 12th Gen 1215U"
        },
        {
            id: 3,
            name:'DELL 3540 Intel Core i3 12th Gen - (8 GB/512 GB SSD/Ubuntu) Latitude 3540 Laptop  (15.6 inch, Smoky Black) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor (12th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:d3,
            old_price:"₹31,780",
            new_price:"₹53,999",
            offer:"41% off",
            alt:"DELL 3540 Intel Core i3 12th Gen"
        },
        {
            id: 4,
            name:'DELL Inspiron 3520 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Carbon Black, 1.65 Kg, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i5 Processor (12th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:d4,
            old_price:"₹47,850",
            new_price:"₹62,553",
            offer:"23% off",
            alt:"DELL Inspiron 3520 Intel Core i5 12th Gen 1235U"
        },
        {
            id: 5,
            name:'DELL Intel Core i5 13th Gen 13450HX - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3050) GN5530N7HY001ORB1O Gaming Laptop  (15.6 inch, Dark Shadow Gray, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i5 Processor (13th Gen)",
                d2:"16 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"1 TB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:d5,
            old_price:"₹81,990",
            new_price:"₹1,07,553",
            offer:"23% off",
            alt:"DELL Intel Core i5 13th Gen 13450HX"
        },
]
export {dell_product}

let allDell=[
        {
            id: 1,
            name:'DELL Inspiron 3520 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Platinum Silver, 1.65 Kg, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:d1,
            old_price:"₹38,000",
            new_price:"₹51,000",
            offer:"25% off",
        },
        {
            id: 2,
            name:'DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (38 cm, Carbon Black, 1.65 Kg, With MS Office)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor (12th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:d2,
            old_price:"₹38,000",
            new_price:"₹62,000",
            offer:"39% off",
        },
        {
            id: 3,
            name:'DELL 3540 Intel Core i3 12th Gen - (8 GB/512 GB SSD/Ubuntu) Latitude 3540 Laptop  (15.6 inch, Smoky Black) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor (12th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:d3,
            old_price:"₹31,780",
            new_price:"₹53,999",
            offer:"41% off",
        },
        {
            id: 4,
            name:'DELL Inspiron 3520 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Carbon Black, 1.65 Kg, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i5 Processor (12th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:d4,
            old_price:"₹47,850",
            new_price:"₹62,553",
            offer:"23% off",
        },
        {
            id: 5,
            name:'DELL Intel Core i5 13th Gen 13450HX - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3050) GN5530N7HY001ORB1O Gaming Laptop  (15.6 inch, Dark Shadow Gray, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i5 Processor (13th Gen)",
                d2:"16 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"1 TB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:d5,
            old_price:"₹81,990",
            new_price:"₹1,07,553",
            offer:"23% off",
        },
        {
            id: 6,
            name:'DELL Inspiron Intel Core i5 12th Gen Core i5 - (8 GB/512 GB SSD/Windows 11 Home) 3520 Laptop  (15.6 inch, Platinum Silver, 1.25 kg, With MS Office)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i5 Processor (12th Gen)",
                d2:"8 GB LPDDR4X RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:d6,
            old_price:"₹50,990",
            new_price:"₹80,553",
            offer:"37% off",
        },
    
]
export {allDell}

// Lenovo
let lenovo_product=[
   {
            id: 1,
            name:'Lenovo V15 AMD Ryzen 3 Quad Core 7320U - (8 GB/512 GB SSD/Windows 11 Home) V15 G4 AMN 1 Thin and Light Laptop  (39.62 cm, Arctic Grey, 1.65 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:lv1,
            old_price:"₹28,000",
            new_price:"₹60,000",
            offer:"53% off",
            alt:"Lenovo V15 AMD Ryzen 3 Quad Core 7320U"
        },
        {
            id: 2,
            name:'Lenovo V15 Intel Celeron Dual Core 4th Gen N4500 - (8 GB/256 GB SSD/Windows 11 Home) 82QYA00MIN Laptop  (15.6 inch, Black, 1.7 kg)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor (4th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:lv2,
            old_price:"₹24,000",
            new_price:"₹40,000",
            offer:"43% off",
            alt:"Lenovo V15 Intel Celeron Dual Core 4th Gen N4500"
        },
        {
            id: 3,
            name:'Lenovo IdeaPad Slim 1 AMD Ryzen 5 Quad Core 7520U - (8 GB/512 GB SSD/Windows 11 Home) 15AMN7 Thin and Light Laptop  (15.6 inch, Cloud Grey, 1.58 kg, With MS Office) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Quad Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:lv3,
            old_price:"₹35,780",
            new_price:"₹67,999",
            offer:"46% off",
            alt:"Lenovo IdeaPad Slim 1 AMD Ryzen 5 Quad Core 7520U"
        },
        {
            id: 4,
            name:'Lenovo AMD Ryzen 5 Hexa Core 7530U - (16 GB/512 GB SSD/Windows 11 Home) ThinkBook 16 G6 Thin and Light Laptop  (16 Inch, Arctic Grey, 1.7 Kg, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:lv4,
            old_price:"₹42,850",
            new_price:"₹86,553",
            offer:"50% off",
            alt:"Lenovo AMD Ryzen 5 Hexa Core 7530U"
        },
        {
            id: 5,
            name:'Lenovo IdeaPad Slim 5 AMD Ryzen 7 Octa Core 7730U - (16 GB/512 GB SSD/Windows 11 Home) 14ABR8 Thin and Light Laptop  (14 Inch, Cloud Grey, 1.46 Kg, With MS Office)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:lv5,
            old_price:"₹59,990",
            new_price:"₹93,553",
            offer:"36% off",
            alt:"Lenovo IdeaPad Slim 5 AMD Ryzen 7 Octa Core 7730U "
        },
]
export {lenovo_product}

let allLenovo=[
        {
            id: 1,
            name:'Lenovo V15 AMD Ryzen 3 Quad Core 7320U - (8 GB/512 GB SSD/Windows 11 Home) V15 G4 AMN 1 Thin and Light Laptop  (39.62 cm, Arctic Grey, 1.65 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:lv1,
            old_price:"₹28,000",
            new_price:"₹60,000",
            offer:"53% off",
        },
        {
            id: 2,
            name:'Lenovo V15 Intel Celeron Dual Core 4th Gen N4500 - (8 GB/256 GB SSD/Windows 11 Home) 82QYA00MIN Laptop  (15.6 inch, Black, 1.7 kg)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor (4th Gen)",
                d2:"8 GB DDR4 RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:lv2,
            old_price:"₹24,000",
            new_price:"₹40,000",
            offer:"43% off",
        },
        {
            id: 3,
            name:'Lenovo IdeaPad Slim 1 AMD Ryzen 5 Quad Core 7520U - (8 GB/512 GB SSD/Windows 11 Home) 15AMN7 Thin and Light Laptop  (15.6 inch, Cloud Grey, 1.58 kg, With MS Office) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Quad Core Processor",
                d2:"8 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:lv3,
            old_price:"₹35,780",
            new_price:"₹67,999",
            offer:"46% off",
        },
        {
            id: 4,
            name:'Lenovo AMD Ryzen 5 Hexa Core 7530U - (16 GB/512 GB SSD/Windows 11 Home) ThinkBook 16 G6 Thin and Light Laptop  (16 Inch, Arctic Grey, 1.7 Kg, With MS Office) ',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:lv4,
            old_price:"₹42,850",
            new_price:"₹86,553",
            offer:"50% off",
        },
        {
            id: 5,
            name:'Lenovo IdeaPad Slim 5 AMD Ryzen 7 Octa Core 7730U - (16 GB/512 GB SSD/Windows 11 Home) 14ABR8 Thin and Light Laptop  (14 Inch, Cloud Grey, 1.46 Kg, With MS Office)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:lv5,
            old_price:"₹59,990",
            new_price:"₹93,553",
            offer:"36% off",
        },
        {
            id: 6,
            name:'Lenovo AMD Ryzen 3 Quad Core 7330U - (8 GB/512 GB SSD/Windows 11 Home) ThinkBook 15 G5 Thin and Light Laptop  (15.6 Inch, Mineral Grey, 1.7 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:lv6,
            old_price:"₹34,990",
            new_price:"₹58,553",
            offer:"40% off",
        },
    
]
export {allLenovo}

// Asus
let asus_product=[
    {
            id: 1,
            name:'ASUS Chromebook Intel Celeron Dual Core N4500 - (8 GB/128 GB EMMC Storage/Chrome OS) CX1500CKA-NJ0395 Chromebook  (15.6 Inch, Transparent Silver, 1.80 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:as1, 
            old_price:"₹21,000",
            new_price:"₹33,000",
            offer:"36% off",
            alt:"ASUS Chromebook Intel Celeron Dual Core N4500"
        },
        {
            id: 2,
            name:'ASUS Vivobook Go 15 Intel Celeron Dual Core N4020 - (4 GB/256 GB SSD/Windows 11 Home) E510MA-EJ001W Thin and Light Laptop  (15.6 Inch, Star Black, 1.57 Kg)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"4 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:as2,
            old_price:"₹20,000",
            new_price:"₹34,000",
            offer:"41% off",
            alt:"ASUS Vivobook Go 15 Intel Celeron Dual Core N4020 "
        },
        {
            id: 3,
            name:'ASUS Vivobook 16 (2023) AMD Ryzen 5 Hexa Core 7530U - (16 GB/512 GB SSD/Windows 11 Home) M1605YA-MB542WS Laptop  (16 Inch, Cool Silver, 1.88 Kg, With MS Office) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:as3,
            old_price:"₹47,780",
            new_price:"₹74,999",
            offer:"36% off",
            alt:"ASUS Vivobook 16 (2023) AMD Ryzen 5 Hexa Core 7530U"
        },
        {
            id: 4,
            name:'ASUS Vivobook Pro 15 OLED For Creator AMD Ryzen 7 Octa Core 5800HS - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050) M6500QFB-LK741WS Gaming Laptop  (15.6 Inch, Quiet Blue, 1.80 Kg, With MS Office)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:as4,
            old_price:"₹59,850",
            new_price:"₹94,553",
            offer:"36% off",
            alt:"ASUS Vivobook Pro 15 OLED For Creator AMD Ryzen 7 Octa Core 5800HS"
        },
        {
            id: 5,
            name:'ASUS ExpertBook B15 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) B1502CBA-NJ1090WS Thin and Light Laptop  (15.6 Inch, Star Black, 1.69 Kg, With MS Office)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:as5,
            old_price:"₹36,990",
            new_price:"₹50,553",
            offer:"27% off",
            alt:"ASUS ExpertBook B15 Intel Core i3 12th Gen 1215U"
        },
]
export {asus_product}

let allAsus=[
        {
            id: 1,
            name:'ASUS Chromebook Intel Celeron Dual Core N4500 - (8 GB/128 GB EMMC Storage/Chrome OS) CX1500CKA-NJ0395 Chromebook  (15.6 Inch, Transparent Silver, 1.80 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:as1, 
            old_price:"₹21,000",
            new_price:"₹33,000",
            offer:"36% off",
        },
        {
            id: 2,
            name:'ASUS Vivobook Go 15 Intel Celeron Dual Core N4020 - (4 GB/256 GB SSD/Windows 11 Home) E510MA-EJ001W Thin and Light Laptop  (15.6 Inch, Star Black, 1.57 Kg)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"4 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:as2,
            old_price:"₹20,000",
            new_price:"₹34,000",
            offer:"41% off",
        },
        {
            id: 3,
            name:'ASUS Vivobook 16 (2023) AMD Ryzen 5 Hexa Core 7530U - (16 GB/512 GB SSD/Windows 11 Home) M1605YA-MB542WS Laptop  (16 Inch, Cool Silver, 1.88 Kg, With MS Office) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:as3,
            old_price:"₹47,780",
            new_price:"₹74,999",
            offer:"36% off",
        },
        {
            id: 4,
            name:'ASUS Vivobook Pro 15 OLED For Creator AMD Ryzen 7 Octa Core 5800HS - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050) M6500QFB-LK741WS Gaming Laptop  (15.6 Inch, Quiet Blue, 1.80 Kg, With MS Office)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:as4,
            old_price:"₹59,850",
            new_price:"₹94,553",
            offer:"36% off",
        },
        {
            id: 5,
            name:'ASUS ExpertBook B15 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) B1502CBA-NJ1090WS Thin and Light Laptop  (15.6 Inch, Star Black, 1.69 Kg, With MS Office)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:as5,
            old_price:"₹36,990",
            new_price:"₹50,553",
            offer:"27% off",
        },
        {
            id: 6,
            name:'ASUS TUF Gaming F15, 90WHrs Battery Intel Core i7 13th Gen 13620H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050/140 W) FX507VU-LP210W Gaming Laptop  (15.6 Inch, Mecha Gray, 2.2 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:as6,
            old_price:"₹1,21,990",
            new_price:"₹1,35,553",
            offer:"10% off",
        },
    
]
export {allAsus}

// Acer
let acer_product=[
    {
            id: 1,
            name:'Acer One (2024) Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) AO 14 Z 8-415 Thin and Light Laptop  (14 Inch, Silver, 1.49 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:acer1, 
            old_price:"₹21,000",
            new_price:"₹33,000",
            offer:"36% off",
            alt:"Acer One (2024) Intel Core i3 11th Gen 1115G4"
        },
        {
            id: 2,
            name:'Acer Swift Go 14 EVO OLED Intel Core i5 13th Gen 13500H - (16 GB/512 GB SSD/Windows 11 Home) SFG14-71-58UB Thin and Light Laptop  (14 Inch, Pure Silver, 1.25 Kg, With MS Office)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"4 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:acer2,
            old_price:"₹20,000",
            new_price:"₹34,000",
            offer:"41% off",
            alt:"Acer Swift Go 14 EVO OLED Intel Core i5 13th Gen 13500H"
        },
        {
            id: 3,
            name:'Acer One 14 AMD Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 11 Home) Z2-493 Thin and Light Laptop  (14 inch, Silver, 1.5 Kg) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:acer3,
            old_price:"₹47,780",
            new_price:"₹74,999",
            offer:"36% off",
            alt:"Acer One 14 AMD Ryzen 3 Dual Core 3250U"
        },
        {
            id: 4,
            name:'Acer Chromebook (2024) Intel Celeron Dual Core N4500 - (8 GB/64 GB EMMC Storage/Chrome OS) CB314-3H-COBZ Chromebook  (14 inch, Silver, 1.45 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:acer4,
            old_price:"₹59,850",
            new_price:"₹94,553",
            offer:"36% off",
            alt:"Acer Chromebook (2024) Intel Celeron Dual Core N4500"
        },
        {
            id: 5,
            name:'Acer Aspire 3 Backlit Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) as324-51 Thin and Light Laptop  (14 Inch, Steel Gray, 1.45 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:acer5,
            old_price:"₹36,990",
            new_price:"₹50,553",
            offer:"27% off",
            alt:"Acer Aspire 3 Backlit Intel Core i5 12th Gen 1235U"
        },
]
export {acer_product}

let allAcer=[
        {
            id: 1,
            name:'Acer One (2024) Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) AO 14 Z 8-415 Thin and Light Laptop  (14 Inch, Silver, 1.49 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:acer1, 
            old_price:"₹21,000",
            new_price:"₹33,000",
            offer:"36% off",
        },
        {
            id: 2,
            name:'Acer Swift Go 14 EVO OLED Intel Core i5 13th Gen 13500H - (16 GB/512 GB SSD/Windows 11 Home) SFG14-71-58UB Thin and Light Laptop  (14 Inch, Pure Silver, 1.25 Kg, With MS Office)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"4 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:acer2,
            old_price:"₹20,000",
            new_price:"₹34,000",
            offer:"41% off",
        },
        {
            id: 3,
            name:'Acer One 14 AMD Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 11 Home) Z2-493 Thin and Light Laptop  (14 inch, Silver, 1.5 Kg) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:acer3,
            old_price:"₹47,780",
            new_price:"₹74,999",
            offer:"36% off",
        },
        {
            id: 4,
            name:'Acer Chromebook (2024) Intel Celeron Dual Core N4500 - (8 GB/64 GB EMMC Storage/Chrome OS) CB314-3H-COBZ Chromebook  (14 inch, Silver, 1.45 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:acer4,
            old_price:"₹59,850",
            new_price:"₹94,553",
            offer:"36% off",
        },
        {
            id: 5,
            name:'Acer Aspire 3 Backlit Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) as324-51 Thin and Light Laptop  (14 Inch, Steel Gray, 1.45 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:acer5,
            old_price:"₹36,990",
            new_price:"₹50,553",
            offer:"27% off",
        },
        {
            id: 6,
            name:'Acer Aspire 7 (2024) Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050) A715-76G-59WG Gaming Laptop  (15.6 Inch, Charcoal Black, 2.1 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:acer6,
            old_price:"₹1,21,990",
            new_price:"₹1,35,553",
            offer:"10% off",
        },
    
]
export {allAcer}

// Apple
let apple_product=[
     {
            id: 1,
            name:'Apple 2022 MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY33HN/A  (13.6 Inch, Midnight, 1.24 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:i1, 
            old_price:"₹90,000",
            new_price:"₹99,000",
            offer:"9% off",
            alt:"Apple 2022 MacBook AIR Apple M2"
        },
        {
            id: 2,
            name:'Apple 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"4 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:i2,
            old_price:"₹70,000",
            new_price:"₹90,000",
            offer:"22% off",
            alt:"Apple 2020 Macbook Air Apple M1"
        },
        {
            id: 3,
            name:'Apple 2022 MacBook AIR Apple M2 - (8 GB/512 GB SSD/Mac OS Monterey) MLY23HN/A  (13.6 Inch, Starlight, 1.24 kg) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:i3,
            old_price:"₹1,12,780",
            new_price:"₹1,19,999",
            offer:"5% off",
            alt:"Apple 2022 MacBook AIR Apple M2"
        },
        {
            id: 4,
            name:'Apple MacBook Air Apple M3 - (8 GB/256 GB SSD/macOS Sonoma) MRYR3HN/A  (15 Inch, Starlight, 1.51 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:i4,
            old_price:"₹1,26,850",
            new_price:"₹1,34,553",
            offer:"5% off",
            alt:"Apple MacBook Air Apple M3"
        },
        {
            id: 5,
            name:'Apple 2023 MacBook Pro Apple M3 - (8 GB/512 GB SSD/macOS Sonoma) MTL73HN/A  (14 Inch, Space Grey, 1.55 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:i5,
            old_price:"₹1,57,990",
            new_price:"₹1,69,553",
            offer:"7% off",
            alt:"Apple 2023 MacBook Pro Apple M3"
        },
]
export {apple_product}

let allApple=[
        {
            id: 1,
            name:'Apple 2022 MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY33HN/A  (13.6 Inch, Midnight, 1.24 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"Chrome Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:i1, 
            old_price:"₹90,000",
            new_price:"₹99,000",
            offer:"9% off",
        },
        {
            id: 2,
            name:'Apple 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)',
            rating:"4.3★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Celeron Dual Core Processor",
                d2:"4 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"256 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Hardware Service",
            },
            image:i2,
            old_price:"₹70,000",
            new_price:"₹90,000",
            offer:"22% off",
        },
        {
            id: 3,
            name:'Apple 2022 MacBook AIR Apple M2 - (8 GB/512 GB SSD/Mac OS Monterey) MLY23HN/A  (13.6 Inch, Starlight, 1.24 kg) ',
            rating:"4.0★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 5 Hexa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Linux/Ubuntu Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:i3,
            old_price:"₹1,12,780",
            new_price:"₹1,19,999",
            offer:"5% off",
        },
        {
            id: 4,
            name:'Apple MacBook Air Apple M3 - (8 GB/256 GB SSD/macOS Sonoma) MRYR3HN/A  (15 Inch, Starlight, 1.51 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 7 Octa Core Processor",
                d2:"16 GB DDR4 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:i4,
            old_price:"₹1,26,850",
            new_price:"₹1,34,553",
            offer:"5% off",
        },
        {
            id: 5,
            name:'Apple 2023 MacBook Pro Apple M3 - (8 GB/512 GB SSD/macOS Sonoma) MTL73HN/A  (14 Inch, Space Grey, 1.55 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"Intel Core i3 Processor",
                d2:"8 GB DDR45 RAM",
                d3:"Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"29.46 cm (11.6 inch) Display",
                d6:"1 Year Warranty",
            },
            image:i5,
            old_price:"₹1,57,990",
            new_price:"₹1,69,553",
            offer:"7% off",
        },
        {
            id: 6,
            name:'Apple MacBook Air Apple M3 - (8 GB/256 GB SSD/macOS Sonoma) MRXV3HN/A  (13 Inch, Midnight, 1.24 Kg)',
            rating:"4.2★",
            review:'1,659 Reviews',
            description:{
                d1:"AMD Ryzen 3 Quad Core Processor",
                d2:"8 GB LPDDR4X RAM",
                d3:"64 bit Windows 11 Operating System",
                d4:"512 GB SSD",
                d5:"39.62 cm (15.6 inch) Display",
                d6:"1 Year Onsite Warranty",
            },
            image:i6,
            old_price:"₹1,06,990",
            new_price:"₹1,15,553",
            offer:"6% off",
        },
    
]
export {allApple}