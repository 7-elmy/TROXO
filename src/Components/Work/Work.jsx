// import React from "react";
// import { useTranslation } from "react-i18next";

// import one from "../../assets/feature-ils-1.svg.svg";
// import two from "../../assets/feature-ils-2.svg.svg";
// import three from "../../assets/feature-ils-3.svg.svg";

// import { motion } from "framer-motion";

// export default function WorkLandingPage() {
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   return (
//     <section className={`${isArabic ? "font-[Cairo]" : "font-[Poppins]"}`}>
//       <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         {/* Heading */}
//         <motion.h2
//           whileInView={{ opacity: 1, translateY: 0 }}
//           initial={{ opacity: 0, translateY: -100 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className={`text-center text-2xl font-bold tracking-tight text-[#4D1A2D] ${
//             isArabic ? "text-center" : "text-left"
//           }`}
//           dir={isArabic ? "rtl" : "ltr"}
//         >
//           {t("work.heading")}
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           whileInView={{ opacity: 1, translateY: 0 }}
//           initial={{ opacity: 0, translateY: -100 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//           className={`text-[16px] text-center text-[#6c757D] my-3 ${
//             isArabic ? "text-center" : "text-left"
//           }`}
//           dir={isArabic ? "rtl" : "ltr"}
//         >
//           {t("work.description")}
//         </motion.p>

//         {/* Steps */}
//         <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
//           {/* Step 3 */}
//           <motion.blockquote
//             whileInView={{ opacity: 1, translateX: 0 }}
//             initial={{ opacity: 0, translateX: 100 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//             className="rounded-lg p-6 shadow-sm sm:p-8"
//           >
//             <div className="flex items-center justify-center gap-4">
//               <img alt={t("work.step3Alt")} src={three} />
//             </div>
//             <p className="mt-4 text-[#4D1A2D] font-bold text-[21px] text-center">
//               {t("work.step3.title")}
//             </p>
//             <p className="mt-2 text-[#373744] text-[16px] text-center">
//               {t("work.step3.description")}
//             </p>
//           </motion.blockquote>

//           {/* Step 2 */}
//           <motion.blockquote
//             whileInView={{ opacity: 1, translateX: 0 }}
//             initial={{ opacity: 0, translateX: 100 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
//             className="rounded-lg p-6 shadow-sm sm:p-8"
//           >
//             <div className="flex items-center justify-center gap-4">
//               <img alt={t("work.step2Alt")} src={two} />
//             </div>
//             <p className="mt-4 text-[#4D1A2D] font-bold text-[21px] text-center">
//               {t("work.step2.title")}
//             </p>
//             <p className="mt-2 text-[#373744] text-[16px] text-center">
//               {t("work.step2.description")}
//             </p>
//           </motion.blockquote>

//           {/* Step 1 */}
//           <motion.blockquote
//             whileInView={{ opacity: 1, translateX: 0 }}
//             initial={{ opacity: 0, translateX: 100 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
//             className="rounded-lg p-6 shadow-sm sm:p-8"
//           >
//             <div className="flex items-center justify-center gap-4">
//               <img alt={t("work.step1Alt")} src={one} />
//             </div>
//             <p className="mt-4 text-[#4D1A2D] font-bold text-[21px] text-center">
//               {t("work.step1.title")}
//             </p>
//             <p className="mt-2 text-[#373744] text-[16px] text-center">
//               {t("work.step1.description")}
//             </p>
//           </motion.blockquote>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { useTranslation } from "react-i18next";

import one from "../../assets/feature-ils-1.svg.svg";
import two from "../../assets/feature-ils-2.svg.svg";
import three from "../../assets/feature-ils-3.svg.svg";

import { motion } from "framer-motion";

export default function WorkLandingPage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className={`${isArabic ? "font-[Cairo]" : "font-[Poppins]"}`}>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Heading */}
        <motion.h2
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -50 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`text-center text-2xl font-bold tracking-tight text-[#4D1A2D] ${
            isArabic ? "text-center" : "text-left"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {t("work.heading")}
        </motion.h2>

        {/* Description */}
        <motion.p
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -50 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={`text-[16px] text-center text-[#6c757D] my-3 ${
            isArabic ? "text-center" : "text-left"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {t("work.description")}
        </motion.p>

        {/* Steps */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 md:gap-8">
          {/* Step 3 */}
          <motion.blockquote
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="rounded-lg p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center justify-center gap-4">
              <img alt={t("work.step3Alt")} src={three} className="max-w-full" />
            </div>
            <p className="mt-4 text-[#4D1A2D] font-bold text-[21px] text-center">
              {t("work.step3.title")}
            </p>
            <p className="mt-2 text-[#373744] text-[16px] text-center">
              {t("work.step3.description")}
            </p>
          </motion.blockquote>

          {/* Step 2 */}
          <motion.blockquote
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="rounded-lg p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center justify-center gap-4">
              <img alt={t("work.step2Alt")} src={two} className="max-w-full" />
            </div>
            <p className="mt-4 text-[#4D1A2D] font-bold text-[21px] text-center">
              {t("work.step2.title")}
            </p>
            <p className="mt-2 text-[#373744] text-[16px] text-center">
              {t("work.step2.description")}
            </p>
          </motion.blockquote>

          {/* Step 1 */}
          <motion.blockquote
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            className="rounded-lg p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center justify-center gap-4">
              <img alt={t("work.step1Alt")} src={one} className="max-w-full" />
            </div>
            <p className="mt-4 text-[#4D1A2D] font-bold text-[21px] text-center">
              {t("work.step1.title")}
            </p>
            <p className="mt-2 text-[#373744] text-[16px] text-center">
              {t("work.step1.description")}
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}

