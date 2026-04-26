import LeftSiteBar from '@/Components/HomePage/news/LeftSiteBar';
import NewsCard from '@/Components/HomePage/news/NewsCard';
import RightSideBar from '@/Components/HomePage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsByCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto mt-6 sm:mt-8 lg:mt-10">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

        {/* Left Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
          <LeftSiteBar categories={categories} activeID={id} />
        </div>

        {/* Main Content */}
        <div className="col-span-1 lg:col-span-6">

          <p className='font-bold text-base sm:text-lg md:text-xl p-2'>
            News By Category
          </p>

          <div className="space-y-3 p-2">
            {
              news.length > 0
                ? news.map(n => (
                    <NewsCard
                      className="border p-5"
                      key={n._id}
                      news={n}
                    />
                  ))
                : <h2 className="text-center text-gray-500">No News Found</h2>
            }
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
          <RightSideBar />
        </div>

      </div>

    </div>
  );
};

export default NewsByCategoryPage;