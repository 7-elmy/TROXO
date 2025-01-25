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
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gray-900/75 sm:bg-transparent ${
          isArabic
            ? "rtl:sm:bg-gradient-to-l"
            : "ltr:sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-gray-900/25"
        }`}
      ></div>

      {/* Content */}
      <div className="relative px-4 md:px-8 py-16">
        <div className={`flex flex-col ${isArabic ? "rtl" : "ltr"}`}>
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className={`text-4xl text-center md:text-8xl   font-[inter] font-extrabold text-white ${
              isArabic ? "rtl:text-right md:text-center md:ml-auto" : "ltr:text-left md:w-[70%]"
            }`}
          >
            {t("home.maintitle")}
            <motion.strong
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              className="block font-extrabold my-2"
            >
              {t("home.subtitle1")}
            </motion.strong>
            <motion.span
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 4 }}
            >
              {t("home.subtitle2")}
            </motion.span>
          </motion.h1>

          {/* Decorative Curve */}
          <motion.div
            initial={{ opacity: 0, y: 500, x: isArabic ? 1024 : -1024 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 1, duration: 3 }}
            className={`md:w-[50%] my-5 flex justify-center items-center ${
              isArabic ? "ml-auto" : "mr-auto"
            }`}
          >
            <img src={curve} loading="lazy" alt="curve" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: isArabic ? -500 : 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 3 }}
            className={`mt-4 max-w-2xl text-white sm:text-xl/relaxed ${
              isArabic ? "rtl:text-right ml-auto" : "ltr:text-left mr-auto"
            }`}
          >
            {t("home.subtitle3")}
          </motion.p>

          {/* Call-to-Action Button */}
          <div
            className={`mt-8 flex flex-wrap gap-4 text-center ${
              isArabic ? "justify-end" : "justify-start"
            }`}
          >
            <motion.button
              initial={{ opacity: 0, y: -300, rotate: 50 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.5, duration: 3.5, ease: "easeOut" }}
              className="flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD] px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
            >
              <FaShippingFast />
              <span className="ps-2 pr-3">{t("home.start")}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
            {/* {i18n.language == "ar" ? 
                
                <section
                className="custom min-h-screen bg-cover bg-center relative  bg-no-repeat"
              >
                <div
                  className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>
              
                <div
                  className="relative px-4 md:px-8 py-16   "
                >
                  <div className="  text-right  ">
                      
                    <h1   className="text-4xl   md:text-8xl   font-[inter] font-extrabold text-white ">
                      
                      {t("home.maintitle")}
                      <strong initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{ duration:3}} className="block font-extrabold my-2">
                          
                      {t("home.subtitle1")}
                           
                            </strong>
                     <span initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{delay:0.5, duration:4}}>
              
                      {t("home.subtitle2")}
              
                      </span> 
                    </h1>
                    <div initial={{opacity:0 , y:500 , x:-1024}} animate={{opacity:1 , y:0 ,x:0}} transition={{ delay:1, duration:3}} className=' mx-4  my-5 flex justify-end'>
              
                    <img className='' src={curve}  loading='lazy' alt="curve"/>
                    </div>
              <div className='flex justify-end items-center'>
              
              
                    <p  className="mt-4   mx-12 text-right w-[50%]    text-white sm:text-xl/relaxed">

                      {t("home.subtitle3")}
              
                    </p>
              </div>
              
                    <div className="mt-8 mx-12 flex flex-wrap justify-end gap-4 text-center">
                    
              
              
              
              <button
              
              initial={{opacity:0 , y:-300 , rotate:50}} animate={{opacity:1 , y:0 , rotate:0 }}   transition={{ delay:0.5, duration:3.5 ,ease:"easeOut"}}
              className=" flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD]  px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
              
              >
              <FaShippingFast className='' />
                 
              <span className='ps-2 pr-3'>  {t("home.start")}</span>
              </button>
              
              
              
                    
                    </div>
                  </div>
                </div>
              </section>
                :
                <section
                  className="custom min-h-screen bg-cover bg-center relative  bg-no-repeat"
                >
                  <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                  ></div>
                
                  <div
                    className="relative px-4 md:px-8 py-16   "
                  >
                    <div className="  ltr:sm:text-left rtl:sm:text-right ">
                      <motion.h1  initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{ duration:2}} className="text-4xl text-center md:text-start md:text-8xl  md:w-[70%] font-[inter] font-extrabold text-white ">
                       
                        {t("home.maintitle")}
                        <motion.strong initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{ duration:3}} className="block font-extrabold my-2">
                            
                        {t("home.subtitle1")}
                             
                              </motion.strong>
                       <motion.span initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{delay:0.5, duration:4}}>
                
                        {t("home.subtitle2")}
                
                        </motion.span> 
                      </motion.h1>
                      <motion.div initial={{opacity:0 , y:500 , x:-1024}} animate={{opacity:1 , y:0 ,x:0}} transition={{ delay:1, duration:3}} className='md:w-[50%] mx-4  my-5 flex justify-center items-center'>
                
                      <img className='' src={curve}  loading='lazy' alt="curve"/>
                      </motion.div>
                
                      <motion.p initial={{opacity:0 , x:500}} animate={{opacity:1 , x:0 }} transition={{delay:1, duration:3}} className="mt-4   ms-12 max-w-2xl text-white sm:text-xl/relaxed">
                 
                
                      </motion.p>
                
                      <div className="mt-8 ms-12 flex flex-wrap gap-4 text-center">
                      
                
                
                
                <motion.button
                
                initial={{opacity:0 , y:-300 , rotate:50}} animate={{opacity:1 , y:0 , rotate:0 }}   transition={{ delay:0.5, duration:3.5 ,ease:"easeOut"}}
                className=" flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD]  px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
                
                >
                <FaShippingFast className='' />
                   
                <span className='ps-2 pr-3'>  {t("home.start")}</span>
                </motion.button>
                
                
                
                      
                      </div>
                    </div>
                  </div>
                </section>
                  
                  
                    
            } */}



            
            <About/>
            <FeaturesLandingPage/>
            <WorkLandingPage/>
            <ManageShipmentsLandingPage/>
            <PartnersLandingPages/>
            <CustomerReviewsLandingPage/>

        </section>
        
  
 


  )
}


// import React from 'react'
//  import curve from "../../assets/curve.png" 
// // // import { FaShippingFast } from "react-icons/fa";
// import {motion} from "framer-motion"
// import { FaShippingFast } from 'react-icons/fa'
// import { useTranslation } from 'react-i18next'





// export default function Home() {
//     const [t] = useTranslation()
//   return (<section
//   className="custom min-h-screen bg-cover bg-center relative  bg-no-repeat"
// >
//   <div
//     className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
//   ></div>

//   <div
//     className="relative px-4 md:px-8 py-16   "
//   >
//     <div className="  ltr:sm:text-left rtl:sm:text-right ">
//       <motion.h1  initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{ duration:2}} className="text-4xl text-center md:text-start md:text-8xl  md:w-[70%] font-[inter] font-extrabold text-white ">
//         {/* Make Your Online */}
//         {/* Smart Shipping And  */}
//         {t("home.maintitle")}
//         <motion.strong initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{ duration:3}} className="block font-extrabold my-2">
//              {/* Delivery Solutions  */}
//         {t("home.subtitle1")}
             
//               </motion.strong>
//        <motion.span initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{delay:0.5, duration:4}}>

//         {t("home.subtitle2")}

//         </motion.span> 
//       </motion.h1>
//       <motion.div initial={{opacity:0 , y:500 , x:-1024}} animate={{opacity:1 , y:0 ,x:0}} transition={{ delay:1, duration:3}} className='md:w-[50%] mx-4  my-5 flex justify-center items-center'>

//       <img className='' src={curve}  loading='lazy' alt="curve"/>
//       </motion.div>

//       <motion.p initial={{opacity:0 , x:500}} animate={{opacity:1 , x:0 }} transition={{delay:1, duration:3}} className="mt-4   ms-12 max-w-2xl text-white sm:text-xl/relaxed">
//       {/* Troxo is the most secure choice for premium shipping. It offers reliable and fast services that meet the needs of online stores and ensure products reach customers safely and quickly. */}

//       {/* TRXOX provides integrated logistics and trade execution solutions that get your shipment safely and quickly to the desired destination. */}
//         {t("home.subtitle3")}

//       </motion.p>

//       <div className="mt-8 ms-12 flex flex-wrap gap-4 text-center">
      



// <motion.button

// initial={{opacity:0 , y:-300 , rotate:50}} animate={{opacity:1 , y:0 , rotate:0 }}   transition={{ delay:0.5, duration:3.5 ,ease:"easeOut"}}
// className=" flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD]  px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"

// >
// <FaShippingFast className='' />
   
// <span className='ps-2 pr-3'>  {t("home.start")}</span>
// </motion.button>



      
//       </div>
//     </div>
//   </div>
// </section>


//   )
// }
