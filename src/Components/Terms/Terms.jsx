import React from "react";
import { useTranslation } from "react-i18next";

export default function TermsConditions() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div dir={`${isArabic ? "rtl" : "ltr"}`} className={` pt-5 md:pb-12 ${isArabic ? "rtl" : "ltr"}`}>
      {/* Header Section */}
      <div className="md:h-[450px] py-12 md:bg-transparent flex justify-center items-center">
        <p
          className={`text-[#4D1A2D] text-center p-2  md:p-0 font-[Segoe UI] font-semibold text-[30px] md:text-[37px] mb-8 md:mb-0 ${
            isArabic ? "ps-8 md:ps-0 md:rtl:text-right text-center" : " ms-4 md:ms-0 text-center md:ltr:text-left"
          }`}
        >
          {t("terms.header.title")}
        </p>

        <p className="leading-[50px]  font-medium px-5">

        </p>

      </div>

     

<div className="w-full py-5 flex justify-center items-center">
  <div className="w-full bg-white rounded-md md:p-4">
    {Object.keys(t("terms.sections", { returnObjects: true })).map(
      (key, index) => {
        const section = t(`terms.sections.${key}`, { returnObjects: true });
        return (
          <div key={index} className="mb-8 px-4">
            {/* Section Title */}
            <p
              className={`font-[Barlow] fint-bold text-[25px] text-[#FC746C] ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {section.title}
            </p>
            {/* Section Content */}
            {section.content && (
              <p
                className={`text-[#000000] px-5 leading-[50px]  font-medium${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {section.content}
              </p>
            )}
            {section.content2 && (
              <p
                className={` font-[Barlow] font-bold text-[16px] text-[#373744] ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {section.content2}
              </p>
            )}
            {/* Section List (if available) */}
            {section.list && (
              <ul
                className={`text-[#000000] list-disc px-8  pl-5 ${
                  isArabic ? "rtl:text-right rtl:pr-5" : "ltr:text-left ltr:pl-5"
                }`}
              >
                {section.list.map((item, idx) => (
                  <li key={idx} className="mb-2 leading-[49px] font-[Poppins]  font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {/* Section Footer (if available) */}
            {section.footer && (
              <p
                className={`text-[#000000] leading-[49px] font-[Poppins]  font-medium mt-4 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
              
                {section.footer}
              </p>
            )}
          </div>
        );
      }
    )}
  </div>
</div>




    </div>
  );
}


