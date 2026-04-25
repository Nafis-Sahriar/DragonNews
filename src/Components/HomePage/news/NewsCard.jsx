import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">

        {/* Author Info */}
        <div className="flex justify-between bg-gray-300 ">

                <div className="flex gap-2">

                    
                    <Image className="rounded-full" src={news.author?.img} alt="newsimage" height={50} width={50}></Image>

                    <div>
                           <h2>{news.author?.name}</h2>
                    <h2>{news.author?.published_date}</h2>
                    </div>

                 
                </div>

                <div className="icons flex gap-4 justify-between items-center ">

                    <div className="text-xl"> <FaRegBookmark /></div>
                   
                        <div className="text-xl"><FaShareAlt /></div>


                </div>


        </div>


        <h2 className="card-title">{news.title}</h2>
        <figure>
            <Image src={news.image_url} alt="newsimage" width={300} height={300} className="w-full"></Image>
      </figure>

      <p className="line-clamp-3">{news.details}</p>


        <div className="flex items-center justify-between ">

            <div className="flex gap-3">
                <h3 className="flex items-center gap-2"> <span className="text-yellow-400"><FaRegStar /></span>{news.rating.number}</h3>
                <h3 className="flex items-center gap-2"> <FaEye /> {news.total_view}</h3>
                
               
            </div>

             <Link href={`/news/${news._id}`}><button className="btn">See Details</button></Link>
       
        </div>
    
      

       
   



      </div>
      
    </div>
  );
};

export default NewsCard;
