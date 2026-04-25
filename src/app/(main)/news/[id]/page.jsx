import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

export const generateMetadata =async ({params})=>{

    // console.log(params);

    const {id} = await params;

    const news =await getNewsDetailsById(id);

    console.log(news);

    return{
        title: news.title,
        description: news.details
    };


}



const NewsDetailsPage =async ({params}) => {
    const {id} = await params;

    // console.log(id);

     const news =await getNewsDetailsById(id);
    //  console.log(news);
    
    return (
        <div className='w-[80%] mx-auto my-10 space-y-3'>

     <figure>
            <Image src={news.image_url} alt="newsimage" width={300} height={300} className="w-full"></Image>
      </figure>
                

            <h1 className='text-2xl font-bold'>{news.title}</h1>
            <p className=''>{news.details}</p>


            <Link href={`/category/${news.category_id}`}><button className='btn bg-green-600 text-white'> See Other News For this Category <BsArrowRight></BsArrowRight></button></Link>

        </div>

    
    );
};

export default NewsDetailsPage;