import React from "react";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import dashboard from "../../assets/dashboard.png";
import shop from "../../assets/shop.png";

export default function ManageShipmentsLandingPage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      <section className={`p-8 md:p-0 ${isArabic ? "font-[Cairo]" : "font-[Poppins]"}`}>
        {/* Heading */}
        <motion.h2
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -100 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-[#4D1A2D] text-[32px] font-bold text-center px-4 md:px-16 lg:px-32 "
          dir={isArabic ? "rtl" : "ltr"}
        >
          {t("manage.heading")}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -150 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className={`text-[#666666] text-[17px] text-center px-4 md:px-16 lg:px-32  my-4`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <span className="text-[#FC746C]">{t("manage.highlight")}</span>
          {t("manage.description")}
        </motion.p>

        {/* Call-to-Action Button */}
        <div className="flex justify-center items-center my-5">
          <motion.a
            whileInView={{ opacity: 1, translateY: 0, rotate: 0 }}
            initial={{ opacity: 0, translateY: -150, rotate: 45 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            className="group relative rounded-md inline-block text-sm font-medium text-[#4D1A2D] focus:outline-none focus:ring"
            href="#"
          >
            <span className="absolute rounded-md inset-0 border border-[#FFDDDD] group-active:border-[#4D1A2D]"></span>
            <span className="block border rounded-md border-[#FFDDDD] bg-[#FFDDDD] px-12 py-3 transition-transform active:border-[#FFDDDD] active:bg-[#FFDDDD] group-hover:-translate-x-1 group-hover:-translate-y-1">
              {t("manage.startButton")}
            </span>
          </motion.a>
        </div>

        {/* Statistics Description */}
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className="text-[#263238] text-center text-[16px] my-5 px-4 md:px-16 lg:px-32"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {t("manage.statistics")}
        </motion.p>

        {/* Dashboard and Shop Section */}
        <div className=" space-y-10 md:space-y-14 my-10">
          {/* Dashboard */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex justify-center items-center w-[330px] md:w-auto  my-12"
          >
            <p
              className={`absolute top-3 ${
                isArabic ? "-right-11 md:right-[180px] rotate-45" : "-left-11 md:left-[180px] -rotate-45"
              } bg-[#FFDDDD] rounded-md h-[35px] w-[180px] text-center flex justify-center items-center gap-2 text-[#4D1A2D]`}
            >
              {t("manage.dashboardLabel")}
            </p>
            <img src={dashboard} loading="lazy" alt={t("manage.dashboardAlt")} />
          </motion.div>

          <motion.p
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -150 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className={`text-[#666666] text-[17px] text-center px-4 md:px-16 lg:px-32 my-8`}
          dir={isArabic ? "rtl" : "ltr"}
        >
         
          {t("manage.desc")}
        </motion.p>

          {/* Shop */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex justify-center items-center  w-[330px] md:w-auto mt-12"
          >
            <p
              className={`absolute top-3 ${
                isArabic ? "-left-12 md:left-[180px] -rotate-45" : "-right-12 md:right-[180px] rotate-45"
              } bg-[#FFDDDD] rounded-md h-[35px] w-[180px] text-center flex justify-center items-center gap-2 text-[#4D1A2D]`}
            >
              {t("manage.shopLabel")}
            </p>
            <img loading="lazy" src={shop} alt={t("manage.shopAlt")} />
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <div   dir={isArabic ? "rtl" : "ltr"} className="md:flex justify-around items-center bg-[#FFDDDD] my-5 pb-8">
        <div className="py-8 text-center">
          <motion.h2
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: -100 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            className="text-[40px] text-[#4D1A2D] font-bold"
          >
            { t("manage.footer.heading") }
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: -150 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            className="my-3 text-[16px] font-semibold text-[#4D1A2D]"
          >
            {t("manage.footer.description")}
          </motion.p>
        </div>

        {/* Footer Button */}
        <div className="flex justify-center items-center">
          <motion.button
            whileInView={{ opacity: 1, translateY: 0, rotate: 0 }}
            initial={{ opacity: 0, translateY: -150, rotate: 45 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            className="text-white px-6 bg-[#4D1A2D] font-semibold text-[18px] rounded-md h-[44px]"
          >
            {t("manage.startButton")}
          </motion.button>
        </div>
      </div>
    </>
  );
}
