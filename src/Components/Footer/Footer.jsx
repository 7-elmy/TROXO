import React from 'react';
import logo from "../../assets/logo1.png";
import { CiLocationOn } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer dir={isArabic ? "rtl" : "ltr"} className="bg-[#FFDDDD]">
      <div className="mx-auto max-w-screen-xl px-4 pb-6  lg:px-4 ">
        <div className={`grid grid-cols-1 gap-8 lg:grid-cols-3 ${isArabic ? "text-right" : "text-left"}`}>
          <div>
            {/* <div className={`flex  bg-red-500 ${!isArabic ? "justify-start " : "justify-start"}`}> */}
              <img loading="lazy" src={logo} className='bg-transparent w-[150px] h-[150px]' alt="troxo" />
            {/* </div> */}

            <p className="mt-6 font-[Poppins] max-w-md leading-relaxed text-[#461A2D] sm:max-w-xs">
              {t('footer.title')}
            </p>
            <p className="mt-8 font-[Inter] text-[13px] text-[#461A2D]">
              {t('footer.social')}
            </p>
                   <ul className="mt-2 flex justify-center gap-6  md:w-[50%] md:gap-8">
           {/* <li className='border-white border-2 p-1 rounded-md'>
             <a
              href="https://wa.me/message/ZFUQUX2KYTI7C1"
              rel="noreferrer"
              target="_blank"
              className="text-[#461A2D] transition hover:text-[#461A2D]"
            >
              <span className="sr-only">Whatsapp</span>
              <FaWhatsapp className="text-[24px] text-[#4D1A2D]" />
            
            </a>
          </li> */}

          <li className='border-white border-2 p-1 rounded-md'>
            <a
              href="https://www.instagram.com/gotroxo"
              rel="noreferrer"
              target="_blank"
              className="text-[#461A2D] transition hover:text-[#461A2D]"
            >
              <span className="sr-only">Instagram</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li className='border-white border-2 p-1 rounded-md'>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-[#461A2D] transition hover:text-[#461A2D]"
            >
              <span className="sr-only">Twitter</span>
              <FaXTwitter className="text-[24px] text-[#4D1A2D]"  />
            </a>
          </li>

       

        
        </ul>
          </div>

          <div className={`grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 pt-16   ${isArabic ? "text-right" : "text-left"}`}>
            <div>
              <p className="text-[24px] font-[Poppins] font-[700] text-[#FC746C]">
                {t('footer.services')}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {["home", "about", "contact", "blogs"].map((item) => (
                  <li key={item}>
                    <a className="text-[#461A2D] font-[Poppins] transition hover:text-[#461A2D] text-[16px]" href="#">
                      {t(`footer.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[24px] font-[Poppins] font-[700] text-[#FC746C]">
                {t('footer.explore')}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {["terms", "privacy", "FAQs"].map((item) => (
                  <li key={item}>
                    <a className="text-[#461A2D] font-[Poppins] transition hover:text-[#461A2D] text-[16px]" href="#">
                      {t(`footer.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[24px] font-[Poppins] font-[700] text-[#FC746C]">
                {t('footer.contact')}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className={`flex items-start ${isArabic ? "justify-start" : "justify-start"} gap-1.5`}>
                  <CiLocationOn className="text-lg text-[#4D1A2D]" />
                  <address className="not-italic text-[#461A2D] font-[Poppins]">
                    
                    {isArabic ?"جدة، المملكة العربية السعودية":"Jeddah, Saudi Arabia"}
                  </address>
                </li>
                <li>
                  <a className={`flex items-center ${isArabic ? "justify-start" : "justify-start"} gap-1.5`} target='_blank'  href="https://wa.me/message/ZFUQUX2KYTI7C1">
                  
                    <FaWhatsapp className="text-lg text-[#4D1A2D]" />
                   <span className='text-[#4D1A2D] font-[Poppins] text-sm'>
                   {isArabic ?"واتساب":"Whatsapp"}
                     </span>
                    
                  </a>
                </li>
                <li>
                  <a className={`flex items-center ${isArabic ? "justify-start" : "justify-start"} gap-1.5`} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-[#4D1A2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#461A2D] font-[Poppins]">Support@gotroxo.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-white pt-6">
          <div className={`text-center sm:flex sm:${isArabic ? "flex-row-reverse" : "flex-row"} sm:text-left`}>
            <p className="text-[10px] text-[#461A2D]">© 2023 TROXO Inc.</p>
            <p className="mt-4 text-[10px] text-[#461A2D] sm:order-first sm:mt-0">
              © 2023 TROXO.com, subsidiary of Iktsar Elzaman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

