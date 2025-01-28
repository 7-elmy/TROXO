import React from 'react'

export default function Card({image , time , mainTitle , desc , name}) {
  return (
   <section>
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src={image}
    loading='lazy'
    className="h-56 w-full object-cover"
  />

  {/* <div className="bg-white p-4 sm:p-6">
    <div className='flex items-center gap-5'>
    <span className='font-roboto text-[12px] font-bold leading-[18px]  text-[#333333]'>{name}</span>
    <time datetime="2022-10-10" className="block text-xs text-gray-500"> {time} </time>

    </div>

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">{mainTitle}</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      {desc}
    </p>
  </div> */}
</article>
   </section>
  )
}


export  function  MainCard ({image , time , mainTitle , desc , name}){
    return (
        
        <section>

            <div className='grid grid-cols-10 gap-5 px-8'>
            
                <div className='col-span-12 md:col-span-6'>
                <img
    alt="blog"
    src={image}
    loading='lazy'
    className=" h-96 w-full object-cover rounded-xl"
  />
                </div>
                <div className='col-span-12 md:col-span-4'>
                <div className="bg-white p-4 sm:p-6 ">
    <div className='flex items-center gap-5 py-4'>
    <span className='font-roboto text-[12px] font-bold leading-[18px]  text-[#333333]'>{name}</span>
    <time datetime="2022-10-10" className="block text-xs text-gray-500"> {time} </time>

    </div>

    <a href="#">
      <h3 className="mt-0.5 font-raleway text-[32px] font-bold leading-[45px] tracking-[-1px] text-left text-[#333333]">{mainTitle}</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-roboto text-[16px] font-normal leading-[24px] text-left">
    

      {desc}
    </p>


    <button className='border border-[#4D1A2D] rounded-lg text-[#4D1A2D] p-2 px-6 my-5'>Read more</button>
  </div>
                </div>

            </div>


        </section>
        
    );
}

