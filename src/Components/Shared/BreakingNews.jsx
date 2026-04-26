import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "10 e 10",
    description: "AI tools are helping students learn faster and more efficiently across the world.",
    date: "2026-04-20"
  }
 

];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 bg-gray-200 w-[90%] mx-auto p-2">


      <button className="btn bg-red-600 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={150}>
           {
            news.map((n => <span className="px-10" key={n.id}>{n.title}</span>))
           }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
