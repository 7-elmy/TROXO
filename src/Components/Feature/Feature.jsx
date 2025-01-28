
// import React from "react";
// import { useTranslation } from "react-i18next";

// import airplane from "../../assets/Airplane.svg";
// import premiumQuality from "../../assets/PremiumQuality.svg";
// import ContinuousImprovement from "../../assets/ContinuousImprovement.svg";
// import QuickConversion from "../../assets/Price.svg";
// import Cashondelivery from "../../assets/Cash.svg";
// import Directcoordination from "../../assets/Directcoordination.svg";
// import Plan from "../../assets/plane.svg.png";
// import box from "../../assets/services-shape-package.svg.png";

// import { motion } from "framer-motion";

// export default function FeaturesLandingPage() {
//   const { t, i18n } = useTranslation();

//   const isArabic = i18n.language === "ar";

//   const animationSettings = {
//     whileInView: { opacity: 1, translateY: 0 },
//     initial: { opacity: 0, translateY: 50 },
//     viewport: { once: true, amount: 0.5 },
//     transition: { duration: 1, ease: "easeOut" },
//   };

//   const cardAnimationSettings = {
//     whileInView: { opacity: 1, translateX: 0 },
//     initial: { opacity: 0, translateX: isArabic ? -100 : 100 },
//     viewport: { once: true, amount: 0.5 },
//     transition: { duration: 1, ease: "easeOut" },
//   };

//   const features = [
//     { image: airplane, titleKey: "features.highEfficiency" },
//     { image: premiumQuality, titleKey: "features.premiumQuality" },
//     { image: ContinuousImprovement, titleKey: "features.continuousImprovement" },
//     { image: QuickConversion, titleKey: "features.quickConversion" },
//     { image: Directcoordination, titleKey: "features.directCoordination" },
//     { image: Cashondelivery, titleKey: "features.cashOnDelivery" },
//   ];

//   return (
//     <section className={`relative ${isArabic ? "font-[Cairo]" : "font-[Poppins]"}`}>
//       {/* Header */}
//       <motion.h2
//         className={`bg-[#4D1A2D] text-center text-white ${
//           isArabic ? "text-right" : "text-left"
//         }`}
//         dir={isArabic ? "rtl" : "ltr"}
//         {...animationSettings}
//       >
//         <marquee width="100%" direction={isArabic ? "left" : "right"} height="20px">
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//           {t("features.marqueeText")}
//           <span className="px-5"></span>
//         </marquee>
//       </motion.h2>

//       {/* Intro Section */}
//       <div
//         className={`mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ${
//           isArabic ? "text-right" : "text-left"
//         }`}
//         dir={isArabic ? "rtl" : "ltr"}
//       >
//         <div className="mx-auto z-10 text-center">
//           <motion.h2
//             className="text-3xl font-bold text-[#4D1A2D] sm:text-[32px]"
//             {...animationSettings}
//           >
//             {t("features.header")}
//           </motion.h2>
//           <motion.p
//             className="mt-4 z-10 text-gray-300 text-[16px]"
//             {...animationSettings}
//             transition={{ ...animationSettings.transition, delay: 0.5 }}
//           >
//             {t("features.description")}
//           </motion.p>
//         </div>

//         {/* Decorative Images */}
//         <div className="absolute hidden md:block top-[200px] md:top-20 right-0">
//           <img src={Plan} alt="plan" loading="lazy" width={60} />
//         </div>
//         <div className="absolute hidden md:block bottom-[200px] md:bottom-[200px] left-0">
//           <img src={box} alt="box" loading="lazy" width={60} />
//         </div>

//         {/* Features Grid */}
//         <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               {...cardAnimationSettings}
//               transition={{
//                 ...cardAnimationSettings.transition,
//                 delay: index * 0.2,
//               }}
//               className="block bg-[#FFDDDD] rounded-xl p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10"
//             >
//               <div className="flex justify-center items-center">
//                 <img
//                   src={feature.image}
//                   alt={t(feature.titleKey)}
//                   loading="lazy"
//                 />
//               </div>
//               <h2 className="mt-4 text-[24px] font-bold text-[#4D1A2D] text-center">
//                 {t(feature.titleKey)}
//               </h2>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { useTranslation } from "react-i18next";

import airplane from "../../assets/Airplane.svg";
import premiumQuality from "../../assets/PremiumQuality.svg";
import ContinuousImprovement from "../../assets/ContinuousImprovement.svg";
import QuickConversion from "../../assets/Price.svg";
import Cashondelivery from "../../assets/Cash.svg";
import Directcoordination from "../../assets/Directcoordination.svg";
import Plan from "../../assets/plane.svg.png";
import box from "../../assets/services-shape-package.svg.png";

import { motion } from "framer-motion";

export default function FeaturesLandingPage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const animationSettings = {
    whileInView: { opacity: 1, translateY: 0 },
    initial: { opacity: 0, translateY: 50 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const cardAnimationSettings = {
    whileInView: { opacity: 1, translateX: 0 },
    initial: { opacity: 0, translateX: isArabic ? -100 : 100 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const features = [
    { image: airplane, titleKey: "features.highEfficiency" },
    { image: premiumQuality, titleKey: "features.premiumQuality" },
    { image: ContinuousImprovement, titleKey: "features.continuousImprovement" },
    { image: QuickConversion, titleKey: "features.quickConversion" },
    { image: Directcoordination, titleKey: "features.directCoordination" },
    { image: Cashondelivery, titleKey: "features.cashOnDelivery" },
  ];

  return (
    <section className={`relative  ${isArabic ? "font-[Cairo]" : "font-[Poppins]"}`}>
      {/* Header */}
      <motion.h2
        className={`bg-[#4D1A2D] text-center text-white ${isArabic ? "text-right" : "text-left"}`}
        dir={isArabic ? "rtl" : "ltr"}
        {...animationSettings}
      >
        <marquee width="100%" direction={isArabic ? "left" : "right"} height="20px">
          {t("features.marqueeText")}
          <span className="px-5"></span>
          {t("features.marqueeText")}
          <span className="px-5"></span>
          {t("features.marqueeText")}
        </marquee>
      </motion.h2>

      {/* Intro Section */}
      <div
        className={`mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ${isArabic ? "text-right" : "text-left"}`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="mx-auto z-10 text-center">
          <motion.h2
            className="text-3xl font-bold text-[#4D1A2D] sm:text-[32px]"
            {...animationSettings}
          >
            {t("features.header")}
          </motion.h2>
          <motion.p
            className="mt-4 z-10 text-gray-300 text-[16px]"
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.5 }}
          >
            {t("features.description")}
          </motion.p>
        </div>

        {/* Decorative Images */}
        <div className="absolute hidden md:block top-[200px] md:top-20 right-0">
          <img src={Plan} alt="plan" loading="lazy" width={60} />
        </div>
        <div className="absolute hidden md:block bottom-[200px] md:bottom-[200px] left-0">
          <img src={box} alt="box" loading="lazy" width={60} />
        </div>

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...cardAnimationSettings}
              transition={{
                ...cardAnimationSettings.transition,
                delay: index * 0.2,
              }}
              className="block bg-[#FFDDDD] rounded-xl p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            >
              <div className="flex justify-center items-center">
                <img src={feature.image} alt={t(feature.titleKey)} loading="lazy" />
              </div>
              <h2 className="mt-4 text-[24px] font-bold text-[#4D1A2D] text-center">
                {t(feature.titleKey)}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
