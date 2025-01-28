// import React from 'react'
// import PopularPost from './PopularPost'
// import { MainCard } from '../../utils/Card'
// import image from "../../assets/home.png"
// import OurRecent from './OurRecent'
//  import blog from "../../assets/blogmain.png"
// import wave from "../../assets/waves.png"
// import finger1 from "../../assets/finger2.png"
// import { useTranslation } from 'react-i18next'

// export default function Blog() {
//   const { t, i18n } = useTranslation();
//   const currentLang = i18n.language; // Detect current language
//   const isRTL = currentLang === "ar"; // Check if the language is Arabic
//   return (
//     <section dir={isRTL? "rtl":"ltr"}>
//         {/* first section */}
//           <div className='bg-white min-h-screen relative overflow-hidden'>
//             <img className='absolute top-[130px] right-[-10%]' loading='lazy' src={wave} alt="waves" />
//             <img className='absolute bottom-[-30%] '  loading='lazy' src={finger1} alt="lines" />
//             <div className='grid grid-cols-12 gap-3'>
//               <div className="col-span-12  md:col-span-6 flex justify-center items-center z-10">
//                 <div className='flex flex-col justify-center items-center space-y-8'>
//                 <h1 className="font-cairo text-[55px] text-[#4D1A2D] font-bold leading-[64.8px] tracking-[-1px] text-left">
//   {t("blog.title")}
// </h1>
// <p className="font-cairo text-[20px] text-[#373737] font-medium leading-[40px] text-right px-32">
// {t("blog.desc")}
// </p>

// <button className="w-[160px] bg-[#FFDDDD] text-[#373737] h-[53px]  p-[16px_48px] gap-[10px] rounded-[8px] ">
// {t("blog.btn")}
// </button>



//                 </div>
//               </div>
//               <div className="col-span-12 md:col-span-6 flex justify-center items-center z-10">
//                 <img src={blog} alt="blog" className='w-[80%]' loading='lazy' />
//               </div>
//             </div>
//           </div>
//         <div className='flex justify-center items-center my-8 mb-[130px] md:mb-24 py-16 md:py-0  relative'>
//             <div className='md:w-[90%] w-[98%] flex justify-center items-center rounded-lg '>
//                 <img src={image} alt="container" loading='lazy' className='object-cover rounded-lg ' />

//                 <div className='absolute  w-[75%]  md:w-[40%] bottom-[-138px] right-[5px] md:bottom-[-48px] md:right-[76.3px]'>
//                 <div className="bg-white p-4  rounded-lg">
//     <div className='flex items-center gap-5 py-4'>
//     <span className='font-roboto text-[12px] font-bold leading-[12px] md:leading-[18px]  text-[#333333]'>Travel</span>
//     <time datetime="2022-10-10" className="block text-xs text-gray-500"> 11 March 2023 </time>

//     </div>

//     <a href="#">
//       <h3 className="mt-0.5 font-raleway text-[16px] md:text-[32px] font-bold leading-[20px] md:leading-[45px] tracking-[-1px] text-left text-[#333333]">How to make a Game look more attractive with New VR & AI Technology</h3>
//     </a>

//     <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-roboto text-[14px] md:text-[16px] font-normal leading-[16px] md:leading-[24px] text-left">
    

//     Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.

//     </p>


//     <button className='border border-[#4D1A2D] rounded-lg text-[#4D1A2D] p-2 px-6 my-5'>Read more</button>
//   </div>
//                 </div>
//             </div>

//         </div>
//      <OurRecent/>
//       <PopularPost/>
//     </section>
//   )
// }


import React from 'react';
import PopularPost from './PopularPost';
import { MainCard } from '../../utils/Card';
import image from "../../assets/home.png";
import OurRecent from './OurRecent';
import blog from "../../assets/blogmain.png";
import wave from "../../assets/waves.png";
import finger1 from "../../assets/finger2.png";
import { useTranslation } from 'react-i18next';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language; // Detect current language
  const isRTL = currentLang === "ar"; // Check if the language is Arabic

  return (
    <section >
      {/* First Section */}
      <div className="bg-white min-h-screen relative overflow-hidden">
                   <img className='absolute top-[130px] right-[-10%]' loading='lazy' src={wave} alt="waves" />
                   <img className='absolute bottom-[-30%] '  loading='lazy' src={finger1} alt="lines" />
        <div dir={isRTL ? "rtl" : "ltr"} className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 flex justify-center items-center z-10">
            <div className={`flex flex-col justify-center items-${!isRTL? "center":"end "} space-y-8`}>
              <h1 className="font-cairo text-[55px] text-[#4D1A2D] font-bold leading-[64.8px] tracking-[-1px]">
                {t("blog.title")}
              </h1>
              <p className={`font-cairo text-[20px]  text-[#373737] font-medium leading-[40px] ${isRTL? "w-[60%]":""}   px-${isRTL? "0":"8"} text-${isRTL ? "left" : "left"}`}>
                {t("blog.desc")}
              </p>
              <button className={` bg-[#FFDDDD] ${isRTL? "w-[50%]":""}   text-[#373737] h-[53px] p-[16px_48px] gap-[10px] rounded-[8px]`}>
                {t("blog.btn")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center z-10">
            <img src={blog} alt="blog" className="w-[80%]" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div  className="flex justify-center items-center my-8 mb-[130px] md:mb-24 py-16 md:py-0 relative">
        <div className="md:w-[90%] w-[98%] flex justify-center items-center rounded-lg">
          <img src={image} alt="container" loading="lazy" className="object-cover rounded-lg" />
          <div className="absolute w-[75%] md:w-[40%] bottom-[-138px] right-[5px] md:bottom-[-48px] md:right-[76.3px]">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-5 py-4">
                <span className="font-roboto text-[12px] font-bold leading-[12px] md:leading-[18px] text-[#333333]">
                  {/* {t("blog.category")} */} development
                </span>
                <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                  11 March 2023
                </time>
              </div>
              <a href="#">
       <h3 className="mt-0.5 font-raleway text-[16px] md:text-[32px] font-bold leading-[20px] md:leading-[45px] tracking-[-1px] text-left text-[#333333]">How to make a Game look more attractive with New VR & AI Technology</h3>
     </a>

     <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-roboto text-[14px] md:text-[16px] font-normal leading-[16px] md:leading-[24px] text-left">
    

     Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.

     </p>


     <button className='border border-[#4D1A2D] rounded-lg text-[#4D1A2D] p-2 px-6 my-5'>Read more</button>
              {/* <a href="#">
                <h3 className="mt-0.5 font-raleway text-[16px] md:text-[32px] font-bold leading-[20px] md:leading-[45px] tracking-[-1px] text-[#333333]">
                  {t("blog.articleTitle")}
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-roboto text-[14px] md:text-[16px] leading-[16px] md:leading-[24px]">
                {t("blog.articleDesc")}
              </p>
              <button className="border border-[#4D1A2D] rounded-lg text-[#4D1A2D] p-2 px-6 my-5">
                {t("blog.readMore")}
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <OurRecent />
      <PopularPost />
    </section>
  );
}
