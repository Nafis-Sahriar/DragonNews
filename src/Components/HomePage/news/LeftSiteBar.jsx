import Link from "next/link";
import React from "react";

const LeftSiteBar = ({categories , activeID}) => {
  return (
    <div>
     
        <p className="text-xl font-bold">All Categories</p>

        <ul className="flex flex-col gap-3 mt-3">
          {categories.data.news_category.map((c) => {
            return (
              <li
                className={`${activeID===c.category_id ? "text-green-800 bg-green-200 border-b-2 border-green-600  rounded-md font-semibold" : "bg-slate-100  rounded-md font-semibold"}`}
                key={c.category_id}
              >
                <Link href={`/category/${c.category_id}`} className="block p-2">{c.category_name} </Link>
              </li>
            );
          })}
        </ul>
      
    </div>
  );
};

export default LeftSiteBar;
