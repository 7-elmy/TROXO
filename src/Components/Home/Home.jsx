import React from 'react'
 import curve from "../../assets/curve.png" 
import {motion} from "framer-motion"
import { FaShippingFast } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { section } from 'framer-motion/client'
import About from '../About/About'
import FeaturesLandingPage from '../Feature/Feature'
import WorkLandingPage from '../Work/Work'
import ManageShipmentsLandingPage from '../ManageShipment/ManageShipment'
import PartnersLandingPages from '../Partner/PartnerLanding'
import CustomerReviewsLandingPage from '../CustomerReview/CustomerReview'





export default function Home() {
    const [t,i18n] = useTranslation()
    const isArabic = i18n.language === "ar";
    return (
        <section>
                


<section className="custom min-h-screen bg-cover bg-center relative bg-no-repeat">
  <div
    className={`absolute  inset-0 bg-gray-900/75 sm:bg-transparent ${
      isArabic
        ? "rtl:sm:bg-gradient-to-l"
        : "ltr:sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-gray-900/25"
    }`}
  ></div>

  <div className="relative px-4 md:px-8 py-16">
    <div className={`flex flex-col ${isArabic ? "rtl" : "ltr"}`}>
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className={` text-4xl text-center md:text-8xl font-[inter] font-extrabold text-white ${
          isArabic ? "rtl:text-right md:text-center md:ml-auto" : "ltr:text-left md:w-[70%]"
        }`}
      >
        {t("home.maintitle")}
        <motion.strong
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2 }}
          className="block font-extrabold my-2 "
        >
          {t("home.subtitle1")}
        </motion.strong>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          {t("home.subtitle2")}
        </motion.span>
      </motion.h1>

      {/* Decorative Curve */}
      <motion.div
        initial={{ opacity: 0, y: 100, x: isArabic ? 150 : -150 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className={` md:w-[50%] my-5 flex justify-center items-center ${
          isArabic ? "ml-auto" : "mr-auto"
        } sm:w-full`} // Adjusts for small screens
      >
        <img src={curve} loading="lazy" alt="curve" />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, x: isArabic ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.7, duration: 1.5 }}
        className={` mt-4 max-w-2xl text-white sm:text-lg text-center sm:text-left ${
          isArabic ? "rtl:text-right ml-auto" : "ltr:text-left mr-auto"
        }`}
      >
        <span> {t("home.subtitle4")}</span>
        {t("home.subtitle3")}
      </motion.p>

      {/* Call-to-Action Button */}
      <div
        className={`  mt-8 flex flex-wrap gap-4 text-center ${
          isArabic ? "justify-end" : "justify-start"
        }`}
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8, rotate: isArabic ? -30 : 30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD] px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
        >
          {isArabic? <>
            <span className="ps-2 pr-3">{t("home.start")}</span>
            <FaShippingFast />
          </>:<>
          
          <FaShippingFast />
          <span className="ps-2 pr-3">{t("home.start")}</span>
          </>}
        </motion.button>
      </div>
    </div>
  </div>
</section>



            <About/>
            <FeaturesLandingPage/>
            <WorkLandingPage/>
            <ManageShipmentsLandingPage/>
            <PartnersLandingPages/>
            <CustomerReviewsLandingPage/>

        </section>
        
  
 


  )
}



