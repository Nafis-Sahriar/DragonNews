import LeftSiteBar from "@/Components/HomePage/news/LeftSiteBar";
import RightSideBar from "@/Components/HomePage/news/RightSideBar";
import Image from "next/image";
import { redirect } from "next/navigation";

// async function getCategories(){
//   const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//   const data = await res.json();
//   return data;
// }

// const getNewsByCategoryId =async (c_id)=>{

//     const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${c_id}`);
//     const data = await res.json();
//     return data.data;
// }  

const default_id = "01"

export default async function Home() 
{
      redirect(`/category/${default_id}`)
}

// export default async function Home() 
// {


//   const categories = await getCategories();
//   // console.log(categories.data.news_category);

//   const news = await getNewsByCategoryId("03");
//   console.log(news);
  


//   return (
//     <div className="w-[90%] mx-auto mt-10">


//       <div className="grid grid-cols-12 gap-5">

//       <div className=" col-span-3">
//       <LeftSiteBar categories={categories} activeID={"null"}></LeftSiteBar>

//       </div>

//       <div className="bg-blue-200 col-span-6">All News

//         <div className="space-y-3 ">
// {
//           news.map(n => {return <div className="border" key={n._id}>{n.title}</div>})
//         }
//         </div>

        

//       </div>
//       <div className=" col-span-3"><RightSideBar></RightSideBar></div>

//       </div>

// //     </div>
//   );
// }
