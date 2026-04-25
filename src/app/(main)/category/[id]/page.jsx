import LeftSiteBar from '@/Components/HomePage/news/LeftSiteBar';
import NewsCard from '@/Components/HomePage/news/NewsCard';
import RightSideBar from '@/Components/HomePage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';




const NewsByCategoryPage = async ({params}) => {
     const {id} = await params;
     console.log(id);

  const categories = await getCategories();
  // console.log(categories.data.news_category);

  const news = await getNewsByCategoryId(id);
  // console.log(news);


    return (
        <div className="w-[90%] mx-auto mt-10">

      <div className="grid grid-cols-12 gap-5">

      <div className=" col-span-3">
      <LeftSiteBar categories={categories} activeID={id}></LeftSiteBar>

      </div>

      <div className=" col-span-6 ">
        
        <p className='font-bold text-lg p-2'>News By Category</p> 

        <div className="space-y-3 p-2">
        {
           news.length > 0 ? news.map(n => {return <NewsCard className="border p-5" key={n._id} news = {n}></NewsCard>}) : <h2>No News Found</h2>
        }
        </div>

        

      </div>
      <div className=" col-span-3"><RightSideBar></RightSideBar></div>

      </div>

    </div>
    );
};

export default NewsByCategoryPage;