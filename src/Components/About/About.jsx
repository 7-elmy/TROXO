import React from 'react'

import aboutAr from "../../assets/aboutar.png"
import aboutEn from "../../assets/abouten.png"

import {motion} from "framer-motion"
import { useTranslation } from 'react-i18next'
import { FaFacebook } from 'react-icons/fa'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
export default function About() {
    const [t , i18n ]= useTranslation()
  return (
//     <section  className='grid grid-cols-12 gap-5 py-12 relative z-10 overflow-hidden '>
//     <motion.div  
//            whileInView={{opacity:1 , translateX:0 , translateY:0}}
//            initial={{opacity:0 , translateX:-50 , translateY:-50}}
//            viewport={{ once: true, amount: 0.5 }}
//            transition={{ duration: 1.5 , ease: "easeOut" }}
//   className="col-span-12  md:col-span-6 flex justify-center items-center p-5 md:p-0">
       
//         <img src={abouten} alt="experience" />
//     </motion.div>
//     <motion.div 
//            whileInView={{opacity:1 , translateX:0 , translateY:0}}
//            initial={{opacity:0 , translateX:100 , translateY:-50}}
//            viewport={{ once: true, amount: 0.5 }}
//            transition={{ duration: 1.5 , ease: "easeOut" }}
//  className="col-span-12  md:col-span-6 pt-1 p-5 md:p-0">
//         <div className='flex  items-center gap-5' > <hr className='h-[2px] bg-[#FC746C] w-[80px] ' />
//         <p className='font-[Roboto] text-[#FC746C] text-[24px]'>ABOUT US</p>
//         </div>
//         <div>
//         <p className='font-[Inter] text-[#4D1A2D] text-[50px] md:text-[64px] text-center md:text-start font-semibold uppercase'>Transport & <br/>
//             <span className='text-[#FC746C] '>logistics</span>
//         </p>
//         <p className='text-[#949494] font-[Roboto] text-[18px] my-5'>
//         We leverage advanced smart technology to deliver a comprehensive fleet<br/> management solution, granting you full control over your vehicles anywhere <br/> in the city or remote areas like the Sa&rsquo;adiya provinces. Our innovative system <br/> ensures seamless, secure operations, allowing you to achieve optimal <br/> efficiency and keep your fleet under control, wherever your business takes <br/> you.

//         </p>

//         <p className='text-[#949494] font-[Roboto] text-[18px] mt-8'>
//         This emphasizes the company&rsquo;s strengths in control, security, and efficiency,<br/> tailored to meet customer needs.
//         </p>
//         <div className='flex justify-end items-center mt-2'>
//         <ul className="mt-2 flex justify-center gap-6  md:w-[50%] md:gap-8">
//           <li >
//             <a
//               href="#"
//               rel="noreferrer"
//               target="_blank"
//               className="text-[#949494] transition hover:text-[#461A2D]"
//             >
//               <span className="sr-only">Facebook</span>
//               <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path
//                   fillRule="evenodd"
//                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </li>

//           <li >
//             <a
//               href="#"
//               rel="noreferrer"
//               target="_blank"
//               className="text-[#949494] transition hover:text-[#461A2D]"
//             >
//               <span className="sr-only">Instagram</span>
//               <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path
//                   fillRule="evenodd"
//                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </li>

//           <li >
//             <a
//               href="#"
//               rel="noreferrer"
//               target="_blank"
//               className="text-[#949494] transition hover:text-[#461A2D]"
//             >
//               <span className="sr-only">Twitter</span>
//               <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path
//                   d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
//                 />
//               </svg>
//             </a>
//           </li>

       

        
//         </ul>
//         </div>
         
//         </div>
//     </motion.div>

// </section>
<section
  className={`grid grid-cols-12 gap-5 py-12 relative z-10 overflow-hidden`}
  dir={i18n.language === "ar" ? "rtl" : "ltr"}
>
  {/* Image Section */}
  <motion.div
    whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
    initial={{
      opacity: 0,
      translateX: i18n.language === "ar" ? 50 : -50,
      translateY: -50,
    }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="col-span-12 md:col-span-6 flex justify-center items-center p-5 md:p-0"
  >
    <img
      src={i18n.language === "ar" ? aboutAr : aboutEn}
      alt="experience"
    />
  </motion.div>

  {/* Text Section */}
  <motion.div
    whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
    initial={{
      opacity: 0,
      translateX: i18n.language === "ar" ? -100 : 100,
      translateY: -50,
    }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="col-span-12 md:col-span-6 pt-1 p-5 md:p-0"
  >
    <div className="flex items-center gap-5">
      <hr className="h-[2px] bg-[#FC746C] w-[80px]" />
      <p
        className={`font-[Roboto] text-[#FC746C] text-[24px] ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {t("about.about_us")}
      </p>
    </div>

    <div>
      <p
        className={`font-[Inter] text-[#4D1A2D] text-[50px] md:text-[64px] font-semibold uppercase ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {t("about.transport")}
        <br/>
        <span className='text-[#FC746C] '> {t("about.logistics")}</span>
      </p>
    

      <p
        className={`text-[#949494] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {t("about.discription1")}
      </p>
      <p
        className={`text-[#949494] font-[Roboto] text-[18px]  mt-8 ${
          i18n.language === "ar" ? "text-right w-[70%]" : "text-left"
        }`}
      >
       {t("about.discription2")}
      </p>


      <div className="flex justify-end items-center mt-2">
        <ul
          className={`mt-2 mx-4 flex ${
            i18n.language === "ar" ? "justify-start" : "justify-end"
          } gap-6 md:w-[50%] md:gap-8`}
        >
          {/* Social Icons */}
          <li className='flex justify-center items-center  border rounded-full w-[40px] h-[40px]'>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-[#949494] transition  hover:text-[#461A2D]"
            >
              <span className="sr-only">Twitter</span>
              <BiLogoTwitter className="size-6"/>
             
            </a>
          </li>

          <li className='flex justify-center items-center  border rounded-full w-[40px] h-[40px]'>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-[#949494] transition hover:text-[#461A2D]"
            >
              <span className="sr-only">Facebook</span>
             
              <BiLogoFacebook className="size-6"/>
              {/* <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                
              </svg> */}
            </a>
          </li>
          <li className='flex justify-center items-center  border rounded-full w-[40px] h-[40px]'>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-[#949494] transition hover:text-[#461A2D]"
            >
              <span className="sr-only">Instagram</span>
              <BiLogoInstagram  className="size-6"/>
           
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  </motion.div>
</section>

  )
}
