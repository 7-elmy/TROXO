import React from "react";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import map1 from "../../assets/partners/map1.svg";
import map2 from "../../assets/partners/Frame.svg";
import smsa from "../../assets/partners/smsa.png.svg";
import dhl from "../../assets/partners/DHL.svg";
import aramex from "../../assets/partners/aramex.svg";
import container2 from "../../assets/partners/illustration.jpg";
import men from "../../assets/partners/mens.jpg";
import circle from "../../assets/partners/circle.jpg";
import star from "../../assets/partners/star.jpg";

export default function PartnersLandingPages() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className={`overflow-hidden ${isArabic ? "rtl" : "ltr"} font-${isArabic ? "[Cairo]" : "[Poppins]"}`}>
      {/* Shipping Partners Section */}
      <motion.div
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: -150 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="grid grid-cols-12 gap-4"
      >
        <div className="col-span-12 md:col-span-3">
          <img loading="lazy" src={map1} alt={t("partners.map1Alt")} />
        </div>
        <div className="col-span-12 md:col-span-6 md:pt-16 text-center">
          <h2 className="font-bold text-[35px] text-[#4D1A2D] my-3">
            {t("partners.heading")}
          </h2>
          <p className="text-[#6C757D] text-[16px]">
            {t("partners.description")}
          </p>
          <div className="md:flex justify-between items-center gap-8 my-5 space-y-10">
            <img loading="lazy" className="mx-auto  md:m-0" src={smsa} alt="smsa" />
            <img loading="lazy" className="mx-auto  md:m-0" src={dhl} alt="DHL" />
            <img loading="lazy" className="mx-auto   md:m-0" src={aramex} alt="aramex" />
          </div>
          <p className="text-[#6C757D] text-[16px] py-5">
            {t("partners.prideStatement")}
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-end items-center">
          <img loading="lazy" src={map2} alt={t("partners.map2Alt")} />
        </div>
      </motion.div>

      {/* Safe and Reliable Services Section */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="grid grid-cols-12 gap-4 mt-10"
      >
        <div className="col-span-12 md:col-span-3">
          <img loading="lazy" src={container2} alt={t("partners.container1Alt")} />
        </div>
        <div className="col-span-12 md:col-span-6 text-center">
          <h2 className="font-bold text-[35px] text-[#4D1A2D] my-3">
            {t("partners.servicesHeading")}
          </h2>
          <p className="text-[#6C757D] text-[16px]">
            {t("partners.servicesDescription")}
          </p>
          <div className="flex justify-between items-center gap-8 my-5">
            {/* Statistic 1 */}
            <div className="flex flex-col justify-center items-center">
              <img loading="lazy" src={men} alt={t("partners.stat1Alt")} />
              <p className="text-[22px] md:text-[32px] font-extrabold text-[#4D1A2D]">
                10000+
              </p>
              <p className="text-[16px] md:text-[20px] font-medium text-[#949494]">
                {t("partners.stat1Label")}
              </p>
            </div>
            {/* Statistic 2 */}
            <div className="flex flex-col justify-center items-center">
              <img loading="lazy" src={circle} alt={t("partners.stat2Alt")} />
              <p className="text-[22px] md:text-[32px] font-extrabold text-[#4D1A2D]">
                20000+
              </p>
              <p className="text-[16px] md:text-[20px] font-medium text-[#949494]">
                {t("partners.stat2Label")}
              </p>
            </div>
            {/* Statistic 3 */}
            <div className="flex flex-col justify-center items-center">
              <img loading="lazy" src={star} alt={t("partners.stat3Alt")} />
              <p className="text-[22px] md:text-[32px] font-extrabold text-[#4D1A2D]">
                {isArabic ? <>اكثر من 10 سنوات+</>:<>10+ {t("partners.stat3Years")}</>}
                
              </p>
              <p className="text-[16px] md:text-[20px] font-medium text-[#949494]">
                {t("partners.stat3Label")}
              </p>
            </div>
          </div>
          <p className="text-[#6C757D] text-[16px] py-5">
            {t("partners.prideStatement")}
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-end items-center">
          <img loading="lazy" src={container2} alt={t("partners.container2Alt")} />
        </div>
      </motion.div>
    </section>
  );
}
