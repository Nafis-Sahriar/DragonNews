import Link from "next/link";
import React from "react";

const LeftSiteBar = ({ categories, activeID }) => {
  return (
    <div className="w-full lg:w-64 xl:w-72 px-3 sm:px-4 lg:px-2">
      
      <p className="text-lg sm:text-xl lg:text-2xl font-bold">
        All Categories
      </p>

      <ul className="flex flex-col gap-2 sm:gap-3 mt-3">
        {categories.data.news_category.map((c) => {
          return (
            <li
              className={`${
                activeID === c.category_id
                  ? "text-green-800 bg-green-200 border-b-2 border-green-600 rounded-md font-semibold"
                  : "bg-slate-100 rounded-md font-semibold"
              } transition-all duration-200`}
              key={c.category_id}
            >
              <Link
                href={`/category/${c.category_id}`}
                className="block p-2 sm:p-3 text-sm sm:text-base"
              >
                {c.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
};

export default LeftSiteBar;