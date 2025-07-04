import React from 'react'

import aboutAr from "../../assets/aboutar.png"
import aboutEn from "../../assets/abouten.png"
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion"
import { useTranslation } from 'react-i18next'

import {  BiLogoInstagram} from 'react-icons/bi'
export default function About() {
    const [t , i18n ]= useTranslation()
  return (
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
      loading='lazy'
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
    {/* <div className="flex items-center gap-5">
      <hr className="h-[2px] bg-[#FC746C] w-[80px]" />
      <p
        className={`font-[Roboto] text-[#FC746C] text-[24px] ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {t("about.about_us")}
      </p>
    </div> */}

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
    
        {i18n.language =="ar"? <>
          <ul className='test'>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
          منصة سهلة الاستخدام.  
        </li>
       
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
        تربطك مع العديد من شركات الشحن. 

        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
      إمكانية اختيار شركات الشحن الأنسب. 

        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
        أدوات تسهل إدارة متجرك. 
        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
        إمكانية التفرغ لتطوير متجرك. 
        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
        خدمة عملاء مستمرة
        </li>
          </ul>
        </>:<>
        <ul className='test'>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
           Easy-to-use platform.
        </li>
       
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
        Connects you with multiple shipping companies.

        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
     Ability to choose the most suitable shipping companies. 

        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
        Tools to simplify managing your store.
        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
      Freedom to focus on developing your store.
        </li>
            <li className={`text-[#000] font-[Roboto] text-[18px] my-5 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}>
      Continuous customer service.
        </li>
          </ul>
  
        </>}



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
              className="text-[#461A2D] transition hover:text-[#461A2D]"
            >
              <span className="sr-only">Twitter</span>
              <FaXTwitter className="text-[#949494] transition hover:text-[#461A2D]"  />
            </a>
          </li>
          <li className='flex justify-center items-center  border rounded-full w-[40px] h-[40px]'>
            <a
              href="https://www.instagram.com/gotroxo"
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
