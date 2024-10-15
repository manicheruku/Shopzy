import React from "react";
import { Link } from "react-router-dom";

const womenCategories = [
  { title: "Women's Dresses", img: "dress2.png" },
  { title: "Tshirts", img: "dress3.png" },
  { title: "Jeans", img: "dress4.png" },
  { title: "Shoes & Boots", img: "dress6.png" },
  { title: "Handbags", img: "dress7.png" },
  { title: "Accessories", img: "dress8.png" },
];
const mensCategories = [
  { title: "Shirts", img: "mens1.png" },
  { title: "Tshirts", img: "mens2.png" },
  { title: "Jeans", img: "dress4.png" },
  { title: "Shoes & Boots", img: "mens3.png" },
  { title: "Suits", img: "mens4.png" },
  { title: "Accessories", img: "mens5.png" },
];

function Categories() {
  return (
    <>
      <main className="mt-10 mx-4 lg:ml-10 lg:mr-10">
        <p className="m-4 font-semibold text-lg">Shop Womens</p>
        <section className="grid grid-cols-3 grid-rows-2 gap-6  lg:grid-cols-6 lg:grid-rows-none ">
          {womenCategories.map((category) => (
            <div className="w-full h-48 flex flex-col bg-[#F7F7F7] justify-center items-center hover:underline border border-transparent hover:border-orange-500 transition-all duration-300">
              <Link
                to="/womensfashion"
                className="flex flex-col justify-center items-center w-full h-full"
              >
                <img
                  src={category?.img}
                  className="h-[90%] object-contain w-24 mt-2"
                  alt={category?.title || "Category Image"}
                />
                <p className="text-center mt-2">
                  {category?.title || "Category"}
                </p>
              </Link>
            </div>
          ))}
        </section>
        <div className="my-10"></div>
        <p className="m-4 font-semibold text-lg">Shop Mens</p>
        <section className="grid grid-cols-3 grid-rows-2 gap-6  lg:grid-cols-6 lg:grid-rows-none ">
          {mensCategories.map((category) => (
            <div className="w-full h-48 flex flex-col bg-[#F7F7F7]  justify-center items-center hover:underline border border-transparent hover:border-orange-500 transition-all duration-300">
              <Link
                to="/mensfashion"
                className="flex flex-col justify-center items-center w-full h-full"
              >
                <img
                  src={category.img}
                  className="h-[90%] justify-center object-contain text-center w-24 mt-2"
                  alt=""
                />

                <p className="">{category.title}</p>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Categories;
