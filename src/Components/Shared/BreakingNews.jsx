import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "New AI Technology is Transforming Education",
    description: "AI tools are helping students learn faster and more efficiently across the world.",
    date: "2026-04-20"
  },
  {
    id: 2,
    title: "Global Climate Summit 2026 Begins",
    description: "Leaders from different countries gather to discuss climate change solutions.",
    date: "2026-04-18"
  },
  {
    id: 3,
    title: "Tech Companies Launch New Smartphones",
    description: "Several companies unveiled their latest smartphones with advanced features.",
    date: "2026-04-15"
  },
  {
    id: 4,
    title: "Local Startup Raises Millions in Funding",
    description: "A rising startup secured major investment to expand its business globally.",
    date: "2026-04-12"
  },
  {
    id: 5,
    title: "Space Agency Plans New Moon Mission",
    description: "Scientists are preparing for a new mission aimed at exploring the Moon.",
    date: "2026-04-10"
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
