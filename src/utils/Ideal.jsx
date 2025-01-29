import React from "react";
import { motion } from "framer-motion";

// Example image imports (replace these paths with actual paths or props)
import underline from "../assets/underline.svg";
import ear from "../assets/catear.svg";


export default function Ideal({ mainName, mainText, mainImage, dir, number , number1 }) {
    console.log(number1);
    
  return (
    <section className="grid grid-cols-12 gap-5 text-[#4D1A2D] overflow-hidden">
      {dir === "rtl" ? (
        <>
          <motion.div
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: -150 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="col-span-12 flex justify-center items-center md:col-span-6"
          >
            <img src={mainImage} loading="lazy" alt={mainName} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: 150 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="col-span-12 flex justify-center items-center md:col-span-6"
          >
            <div className="w-[90%]">
              <div className="relative flex flex-col justify-center items-center my-3">
                <img
                  src={ear}
                  loading="lazy"
                  alt="ear"
                  className={`absolute hidden md:block -top-2 left-[${number}%] md:left-[${number1}%]`}
                />
                <h2 className="font-semibold text-[50px] ">{mainName}</h2>
                <img src={underline} loading="lazy" alt="underline" />
              </div>
              <p className="text-center text-[21px] font-[cairo]">{mainText}</p>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: -150 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="col-span-12 flex justify-center items-center md:col-span-6"
          >
            <div className="w-[90%]">
              <div className="relative flex flex-col justify-center items-center my-3">
                <img
                  src={ear}
                  loading="lazy"
                  alt="ear"
                  className={`absolute hidden md:block -top-2 left-[${number}%] md:left-[25%]`}
                />
                <h2 className="font-semibold text-[50px]">{mainName}</h2>
                <img src={underline} alt="underline" loading="lazy"/>
              </div>
              <p className="text-center text-[21px] font-[cairo]">{mainText}</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: 150 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="col-span-12 flex justify-center items-center md:col-span-6"
          >
            <img src={mainImage} loading="lazy" alt={mainName} />
          </motion.div>
        </>
      )}
    </section>
  );
}
