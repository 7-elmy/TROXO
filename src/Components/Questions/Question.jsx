
// import React, { useState } from 'react';
// import 'flowbite';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const questions = [
//   {
//     id: 1,
//     question: 'هل تركسو شركة شحن؟',
//     answer: `تروكسو ليست شركة شحن أو شركة توصيل، بل هي بوابة شحن متكاملة متخصصة في بناء تقنيات إدارة عمليات الشحن والأتمتة للتجارة الإلكترونية. تمكّن تروكسو تجار التجزئة (متعددي القنوات) من شحن الطلبات وإدارتها وتتبعها وتحليلها وإرجاعها، إلى جانب التكامل مع أفضل شركات الشحن المحلية والدولية، وكل ذلك من خلال لوحة تحكم واحدة.`,
//     link: 'https://gotroxo.com/',
//     linkText: 'ابدا مجانا',
//   },
//   {
//     id: 2,
//     question: 'هل يجب أن أتعاقد مع تركسو؟',
//     answer: `الانضمام إلى تركسو لا يحتاج إلى أي عقود. كل ما عليك فعله هو تسجيل حسابك وشحن محفظتك ليتم استخدامها عند شحن طلباتك مع شركات الشحن المختلفة.`,
//     link: 'https://gotroxo.com/',
//     linkText: 'ابدا مجانا',
//   },
//   {
//     id: 3,
//     question: 'هل يمكن الشحن عبر عدة شركات في نفس الوقت؟',
//     answer: `نعم، يمكنك الشحن عبر عدة شركات في نفس الوقت من خلال تركسو خلافًا لنظام الشحن التقليدي الذي يقيدك بالتعاقد مع شركة شحن واحدة أو اثنتين.`,
//     link: 'https://gotroxo.com/',
//     linkText: 'ابدا مجانا',
//   },
// ];

// export default function Question() {
//   // State to track which accordion item is open
//   const [openId, setOpenId] = useState(null);
// const [t, i18n] = useTranslation();
//   // Toggle function for opening/closing accordion items
//   const toggleAccordion = (id) => {
//     setOpenId((prevId) => (prevId === id ? null : id));
//   };

//   return (
//     <div className='flex justify-center items-center h-[80vh]'>
//       <div className="container mx-auto py-5 w-[70%]">
//         <div id="accordion-collapse">
//           {questions.map((item) => (
//             <div key={item.id}>
//               <h2 id={`accordion-heading-${item.id}`}>
//                 <button
//                   type="button"
//                   onClick={() => toggleAccordion(item.id)}
//                   className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-t-0 border-b dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
//                   aria-expanded={openId === item.id}
//                   aria-controls={`accordion-body-${item.id}`}
//                 >
//                   <span>{item.question}</span>
//                   <svg
//                     className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 5 5 1 1 5"
//                     />
//                   </svg>
//                 </button>
//               </h2>
//               <div
//                 id={`accordion-body-${item.id}`}
//                 className={`${openId === item.id ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
//                 aria-labelledby={`accordion-heading-${item.id}`}
//               >
//                 <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//                   <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     <Link
//                       to={item.link}
//                       className="bg-[#4D1A2D] p-2 px-8 rounded-[7px] text-white hover:underline"
//                     >
//                       {item.linkText}
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
         
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import 'flowbite';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Question() {
  // State to track which accordion item is open
  const [openId, setOpenId] = useState(null);
  const [t, i18n] = useTranslation();

  // Toggle function for opening/closing accordion items
  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  // Get translated questions from JSON
  const questions = t('questions', { returnObjects: true });

  return (
    <div className={`flex justify-center items-center h-[80vh] ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto py-5 w-[90%] md:w-[70%]">
        <p className='text-center text-[25px] text-[#4D1A2D]'>{i18n.language === 'ar'?"الاسئلة الشائعة":"FAQS"}</p>
        <div id="accordion-collapse">
          {questions.map((item) => (
            <div key={item.id}>
              <h2 id={`accordion-heading-${item.id}`}>
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-t-0 border-b dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  aria-expanded={openId === item.id}
                  aria-controls={`accordion-body-${item.id}`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-body-${item.id}`}
                className={`${openId === item.id ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
                aria-labelledby={`accordion-heading-${item.id}`}
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    <Link
                      to={item.link}
                      className="bg-[#4D1A2D] p-2 px-8 rounded-[7px] text-white hover:underline"
                    >
                      {item.linkText}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
