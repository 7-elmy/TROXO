import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/MaskGroup.png";
import image2 from "../../assets/Top.png";
import image3 from "../../assets/shop-about.png";
import image4 from "../../assets/iPhone-about.png";
import { FaShippingFast } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Ideal from "../../utils/Ideal";
import ideal from "../../assets/ideal.svg";
import message from "../../assets/message.svg";
import last from "../../assets/Clip path group.svg";
import smsa from "../../assets/partners/smsa.png.svg";
import dhl from "../../assets/partners/DHL.svg";
import aramex from "../../assets/partners/aramex.svg";
import Fedex from "../../assets/partners/تنزيل (2).png";
export default function AboutUs() {
  const [t, i18n] = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <>
      <section className="about-us  my-52  hidden md:block">
        <div className="min-h-[320vh] relative  flex flex-col justify-between items-center ">
          <div className="grid grid-cols-12 gap-8   ">
            <div className="col-span-12 md:col-span-8 -mt-32 ">
              <div className="py-4 px-8">
                <h1 className="text-[96px] text-[#4D1A2D] font-roboto font-extrabold leading-[105.6px] text-left mt-12">
                  {t("about-us.manage")}
                  {/* Manage your shipments */}
                </h1>
                <p className="text-[40px] text-[#4D1A2D]  font-roboto my-2 font-bold leading-[44px] text-left ">
                  {t("about-us.subtitle")}
                  {/* with ease and smoothness */}
                </p>
                <p className="text-[18px] text-gray-300 font-roboto font-normal leading-[28.8px] text-left w-[50%]">
                  {t("about-us.desc")}
                  {/* With our smart system, track your shipments every step of the way. Get accurate statistics including customer numbers, shipments, and your preferred shipping companies, to achieve the highest levels of safety and efficiency in your shipping experience. */}
                </p>

                <motion.button
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: isArabic ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD] px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
                >
                  <FaShippingFast />
                  <span className="ps-2 pr-3">{t("home.start")}</span>
                </motion.button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-center items-center mx-8 absolute top-[-150px] right-0">
              <img src={image1} loading="lazy" alt="" />
            </div>
          </div>

          <div>
            <img src={image2} loading="lazy" alt="" />
          </div>

          <div className="grid grid-cols-12 gap-8    ">
            <div className="col-span-12 md:col-span-8 flex justify-center items-end mx-8    ">
              <img
                src={image3}
                loading="lazy"
                alt=""
                className="absolute bottom-[-200px]"
              />
            </div>

            <div className="col-span-12 md:col-span-4  w-full  flex justify-center items-center px-6    ">
              <div className="py-4 px-2">
                <h1 className=" text-[#4D1A2D] text-[40px] font-roboto font-bold leading-[44px] text-left ">
                  {t("about-us.store")}
                  {/* Manage your shipments */}
                </h1>

                <p className="text-[18px] text-[#4D1A2D] font-roboto font-normal leading-[28.8px] text-left">
                  {t("about-us.desc2")}
                  {/* With our smart system, track your shipments every step of the way. Get accurate statistics including customer numbers, shipments, and your preferred shipping companies, to achieve the highest levels of safety and efficiency in your shipping experience. */}
                </p>

                <motion.button
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: isArabic ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD] px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
                >
                  <FaShippingFast />
                  <span className="ps-2 pr-3">{t("home.start")}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* small screen */}
      <section className="block md:hidden">
        <div className="py-4 px-8">
          {/* description */}
          <h1 className="font-roboto text-[45px] text-center font-extrabold leading-[61.6px]  text-[#4D1A2D]">
            {t("about-us.manage")}
          </h1>
          <p className="font-roboto text-[#4D1A2D] text-[25px] font-bold leading-[31.9px] text-center py-2">
            {t("about-us.subtitle")}
          </p>
          <p className="text-[18px] text-gray-300 font-roboto font-normal leading-[28.8px] text-center ">
            {t("about-us.desc")}
          </p>

          <div className="flex justify-center items-center my-5">
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: isArabic ? -30 : 30 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="flex  items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD] px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
            >
              <FaShippingFast />
              <span className="ps-2 pr-3">{t("home.start")}</span>
            </motion.button>
          </div>
        </div>
        {/* background */}
        <div className="block md:hidden">
          <div className="h-[200vh] about1-us    mt-16  relative ">
            <div className="flex justify-center items-center ">
              <img
                src={image1}
                loading="lazy"
                className="w-[70%] absolute -top-16 "
                alt=""
              />
            </div>
            <div className="flex justify-center items-center ">
              <img
                src={image2}
                loading="lazy"
                className="w-[90%] absolute top-[42%]"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center ">
              <img
                src={image3}
                loading="lazy"
                className="w-[70%] absolute bottom-[-5%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* partner */}

      <div className="mt-16 ">
        <h2 className="font-roboto text-[56px] font-extrabold leading-[61.6px] text-center text-[#4D1A2D] ">
          {/* Our Top Partners */}
          {t("about-us.partner")}
        </h2>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:justify-between items-center mx-8 py-16 ">

            <img src={smsa} alt="smsa" loading="lazy" />
            <img src={aramex} alt="aramex" loading="lazy" />
            <img src={Fedex} alt="FedEx" loading="lazy" />
            <img src={dhl} alt="DHL" loading="lazy" />
        </div>
      </div>

      <section className="bg-white ">
        <Ideal
          number={15}
          number1={32}
          dir={"rtl"}
          mainImage={ideal}
          mainText={t("about-us.idealDesc")}
          mainName={t("about-us.idealTitle")}
        />
        <Ideal
          number={300}
          number1={32}
          dir={"ltr"}
          mainImage={message}
          mainText={t("about-us.messageDesc")}
          mainName={t("about-us.messageTitle")}
        />
        <Ideal
          number={-260}
          number1={28}
          dir={"rtl"}
          mainImage={last}
          mainText={t("about-us.visionDesc")}
          mainName={t("about-us.visionTitle")}
        />
      </section>

      <section className="hidden md:block about-last-section min-h-screen mt-48  relative">
        <div className="grid grid-cols-12 gap-8    ">
          <div className="col-span-12 md:col-span-8 flex justify-start items-end mx-8    ">
            <img
              src={image4}
              loading="lazy"
              alt=""
              className=" absolute top-[-150px]"
            />
          </div>

          <div className="col-span-12 md:col-span-4  w-full  flex justify-center items-center px-6    ">
            <div className="py-4 px-2 absolute bottom-[215px]">
              <h1 className=" text-[#4D1A2D] text-[40px] font-roboto font-bold leading-[44px] text-left ">
                {t("about-us.store")}
                {/* Manage your shipments */}
              </h1>

              <p className="text-[18px] text-[#4D1A2D] font-roboto font-normal leading-[28.8px] text-left">
                {t("about-us.desc2")}
                {/* With our smart system, track your shipments every step of the way. Get accurate statistics including customer numbers, shipments, and your preferred shipping companies, to achieve the highest levels of safety and efficiency in your shipping experience. */}
              </p>

              <motion.button
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: isArabic ? -30 : 30,
                }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="flex items-center font-[sarabun] rounded-lg border-none bg-[#FFDDDD] px-16 py-3 text-lg font-medium text-[#4D1A2D] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"
              >
                <FaShippingFast />
                <span className="ps-2 pr-3">{t("home.start")}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <section className=" md:hidden about1-last-section min-h-screen  flex justify-center items-center">
        <div className="flex justify-center items-center pt-16">
          <img src={image4} loading="lazy" alt="" className=" w-[70%]" />
        </div>
      </section>
    </>
  );
}
