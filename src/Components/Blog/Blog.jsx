import React from 'react'
import PopularPost from './PopularPost'
import { MainCard } from '../../utils/Card'
import image from "../../assets/Container.png"
import OurRecent from './OurRecent'

export default function Blog() {
  return (
    <section>
        <div className='flex justify-center items-center mb-[130px] md:mb-24 py-16 md:py-0'>
            <div className='w-[90%] flex justify-center items-center '>
                <img src={image} alt="container" loading='lazy' className='object-cover' />

                <div className='absolute w-[80%]  md:w-[40%] bottom-48 right-[18px] md:bottom-[-48px] md:right-[140px]'>
                <div className="bg-white p-4  rounded-lg">
    <div className='flex items-center gap-5 py-4'>
    <span className='font-roboto text-[12px] font-bold leading-[12px] md:leading-[18px]  text-[#333333]'>Travel</span>
    <time datetime="2022-10-10" className="block text-xs text-gray-500"> 11 March 2023 </time>

    </div>

    <a href="#">
      <h3 className="mt-0.5 font-raleway text-[16px] md:text-[32px] font-bold leading-[20px] md:leading-[45px] tracking-[-1px] text-left text-[#333333]">How to make a Game look more attractive with New VR & AI Technology</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-roboto text-[14px] md:text-[16px] font-normal leading-[16px] md:leading-[24px] text-left">
    

    Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.

    </p>


    <button className='border border-[#4D1A2D] rounded-lg text-[#4D1A2D] p-2 px-6 my-5'>Read more</button>
  </div>
                </div>
            </div>

        </div>
     <OurRecent/>
      <PopularPost/>
    </section>
  )
}
