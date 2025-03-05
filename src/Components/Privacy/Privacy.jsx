import React from "react";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  
  
  const highlightContent = (text) => {
    if (!text) return ""; // Return empty string if text is null or undefined
  
    // Regex patterns
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const domainRegex = /\bGOTROXO\b/gi;
    const urlRegex = /https:\/\/gotroxo\.com\b/gi;
    const staticUrl = '<a href="https://gotroxo.com" target="_blank" rel="noopener noreferrer" class="text-red-500 underline">https://gotroxo.com</a>';
    const staticDomain = '<span class="text-red-500">gotroxo.com</span>';
    // Replace patterns with colored spans or anchor tags
    return text
      .replace(emailRegex, '<span class="text-red-500">$1</span>')
      // .replace(domainRegex, '<span class="text-red-500">$&</span>')  // Change color of "GOTROXO"
      .replaceAll("https://gotroxo.com", staticUrl)
      .replaceAll("GOTROXO.COM", staticDomain);
  };
  
 
  
  

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={` pt-5 md:pb-12 ${isArabic ? "rtl" : "ltr"}`}
    >
      {/* Header Section */}
      <div className="md:h-[450px] py-12 md:bg-transparent flex justify-center items-center">
        <p
          className={`text-[#4D1A2D] text-center p-2 md:p-0 font-[Segoe UI] font-semibold text-[37px] mb-8 md:mb-0 ${
            isArabic ? "md:rtl:text-right" : "md:ltr:text-left"
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
                <div key={index} className="mb-8 px-4">
                  {/* Section Title */}
                 

                    <p
  className={`font-[Barlow] font-bold text-[18px] my-3 text-[#000000] ${
    isArabic ? "text-right" : "text-left"
  }`}
  dangerouslySetInnerHTML={{
    __html: highlightContent(section.test),
  }}
/>
                 
                  <p
                    className={`font-[Barlow] font-bold text-[25px] text-[#FC746C] ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {section.title}
                  </p>

                  {/* Dynamic Content Rendering */}
                  {[
                    "customer",
                    "in",
                    "content",
                    "contentlite",
                    "contentlite1",
                    "contentlite2",
                    "content2",
                    "nd",
                    "kind",
                    "info",
                    "footer",
                  ].map(
                    (contentKey) =>
                      section[contentKey] && (
                        <p
                          key={contentKey}
                          className={`text-[#000000] px-5 leading-[50px] font-medium ${
                            isArabic ? "text-right" : "text-left"
                          }`}
                          dangerouslySetInnerHTML={{
                            __html: highlightContent(section[contentKey]),
                          }}
                        />
                      )
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
                          dangerouslySetInnerHTML={{
                            __html: highlightContent(item),
                          }}
                        />
                      ))}
                    </ul>
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
