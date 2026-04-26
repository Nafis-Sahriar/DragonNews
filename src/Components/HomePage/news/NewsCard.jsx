import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm w-full">
      <div className="card-body p-3 sm:p-4 md:p-5">

        {/* Author Info */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-gray-300 p-2 sm:p-3 rounded-md">

          <div className="flex gap-2 items-center">
            <Image
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
              src={news.author?.img}
              alt="newsimage"
              height={50}
              width={50}
            />

            <div className="text-sm sm:text-base">
              <h2 className="font-semibold">{news.author?.name}</h2>
              <h2 className="text-xs sm:text-sm text-gray-600">
                {news.author?.published_date}
              </h2>
            </div>
          </div>

          <div className="icons flex gap-3 sm:gap-4 items-center justify-end">
            <div className="text-lg sm:text-xl cursor-pointer">
              <FaRegBookmark />
            </div>
            <div className="text-lg sm:text-xl cursor-pointer">
              <FaShareAlt />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-base sm:text-lg md:text-xl">
          {news.title}
        </h2>

        {/* Image */}
        <figure>
          <Image
            src={news.image_url}
            alt="newsimage"
            width={300}
            height={300}
            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md"
          />
        </figure>

        {/* Description */}
        <p className="line-clamp-3 text-sm sm:text-base text-gray-700">
          {news.details}
        </p>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <div className="flex gap-3 text-sm sm:text-base flex-wrap">
            <h3 className="flex items-center gap-1 sm:gap-2">
              <span className="text-yellow-400">
                <FaRegStar />
              </span>
              {news.rating.number}
            </h3>

            <h3 className="flex items-center gap-1 sm:gap-2">
              <FaEye /> {news.total_view}
            </h3>
          </div>

          <Link href={`/news/${news._id}`}>
            <button className="btn w-full sm:w-auto text-sm sm:text-base">
              See Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;