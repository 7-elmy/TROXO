import React from "react";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={`privacy pt-5 md:pb-12 ${isArabic ? "rtl" : "ltr"}`}
    >
      {/* Header Section */}
      <div className="md:h-[450px] py-12 md:bg-transparent flex justify-center items-center">
        <p
          className={`text-white text-center p-2 md:p-0 font-[Segoe UI] font-semibold text-[37px] mb-8 md:mb-0 ${
            isArabic ? "rtl:text-right" : "ltr:text-left"
          }`}
        >
          {t("privacy.header.title")}
        </p>
      </div>

      {/* Privacy Sections */}
      <div className="w-full py-5 flex justify-center items-center">
        <div className="w-full bg-white rounded-md md:p-4">
          {Object.keys(t("privacy.sections", { returnObjects: true })).map(
            (key, index) => {
              const section = t(`privacy.sections.${key}`, {
                returnObjects: true,
              });
              return (
                <div key={index} className="mb-8">
                  {/* Section Title */}
                  <p
                    className={`font-[Barlow] font-bold text-[25px] text-[#FC746C] ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {section.title}
                  </p>
                  {section.customer && (
                    <p
                      className={`font-[Barlow] font-bold text-[16px] text-[#373744] ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {section.customer}
                    </p>
                  )}
                  {section.in && (
                    <p
                      className={`text-[#000000] px-5 leading-[50px] font-medium${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {section.in}
                    </p>
                  )}

                  {/* Section Content */}
                  {section.content && (
                    <p
                      className={`text-[#000000] px-5 leading-[50px] font-medium ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {section.content}
                    </p>
                  )}

                  {/* Additional Section Content */}
                  {section.content2 && (
                    <p
                      className={`font-[Barlow] font-bold text-[16px] text-[#373744] ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {section.content2}
                    </p>
                  )}
                  {section.nd && (
                    <p
                      className={`font-[Barlow] text-[#000] leading-10 text-[16px]  ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {section.nd}
                    </p>
                  )}
    {section.kind && (
                    <p
                      className={`font-[Barlow] font-bold text-[16px] text-[#373744] ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {section.kind}
                    </p>
                  )}
                  {/* Section List (if available) */}
                  {section.list && (
                    <ul
                      className={`text-[#000000] list-disc px-8 ${
                        isArabic
                          ? "rtl:text-right rtl:pr-5"
                          : "ltr:text-left ltr:pl-5"
                      }`}
                    >
                      {section.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="mb-2 leading-[49px] font-[Poppins] font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                      {section.info && (
                    <p
                      className={`font-[Barlow] font-bold text-[16px] text-[#373744] ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {section.info}
                    </p>
                  )}

                  {/* Section Footer */}
                  {section.footer && (
                    <p
                      className={`text-[#000000] leading-[49px] font-[Poppins] font-medium mt-4 ${
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
