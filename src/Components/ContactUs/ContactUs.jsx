
// import React from 'react'
// import contactus from "../../assets/contact-us.png"
// import air from "../../assets/air.png"
// export default function ContactUs() {
//   return (

//     <section>

//     <div>
//        <h1 className='text-[#FFDDDD] text-[60px] font-extrabold leading-[99.06px] tracking-[-0.03em] text-center '>Get in <span className='text-[#4D1A2D]'>touch</span> </h1>
//        <p className='font-inter text-[18px] font-medium leading-[26.63px] tracking-[-0.02em] text-center text-[#4D1A2D]'>Reach out, and let's create a universe of possibilities together!</p>
//     </div>

//     <div className='grid grid-cols-12 gap-5 py-8'>
//         <div className="col-span-12 md:col-span-6 flex justify-end items-center ">
//             <div className='w-[80%]'>
//             {/* header& desc */}
//             <div>
//                 <h1 className='text-[#4D1A2D] font-inter text-[30px] font-semibold leading-[36.31px] tracking-[-0.02em] my-2'> How can we help you? </h1>
//                 <p className='text-[#4D1A2D] font-inter text-[16px] font-normal leading-[19.36px] tracking-[-0.01em] w-[70%]'>If you would like to know more about how you can enjoy your dashboard on the web, please contact us and we will be in touch.</p>
//             </div>
//             {/* form */}

//             <form action="" className='my-5 space-y-5'>
//                 <div className='grid grid-cols-12 '>
//                     <div className='col-span-12 md:col-span-6'>
//                           <input type="text" name='' placeholder='First Name' className='w-[90%]  h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)]  bg-[#4D1A2D0D]' />

//                     </div>
//                     <div className='col-outline-none span-12 md:col-span-6'>
//                           <input type="text" placeholder='Last Name' className='w-[90%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)]  bg-[#4D1A2D0D]' />

//                     </div>

//     outline-none             </div>
//                 <input type="text" placeholder='Email' className='w-[95%]  h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)]  bg-[#4D1A2D0D]' />
//                 <input type="text" placeholder='Phone Number' className='w-[95%]  h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)]  bg-[#4D1A2D0D]' />
//                 <textarea  placeholder='Message' className='w-[95%]   p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)]  bg-[#4D1A2D0D]'>

//     outline-none             </textarea>
//outline-none                  <button className='font-inter text-[15px] font-medium leading-[18.15px] tracking-[-0.01em] bg-[#FFDDDD] w-[95%] py-4 text-[#4D1A2D] rounded-lg flex  justify-center items-center gap-2'>
//                     Send it to the moon
//                     <img src={air} loading='lazy' alt="air" />
//                     </button>
//             </form>


//             </div>
            
//         </div>
//         <div className="col-span-12 md:col-span-6 flex justify-center items-center ">
//             <div className='w-[70%]'>

//                 <img src={contactus} loading='lazy' alt="contact-us" />
//             </div>
//         </div>
        


//     </div>


//     </section>
//   )
// }



// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import contactus from '../../assets/contact-us.png';
// import air from '../../assets/air.png';

// export default function ContactUs() {
//   const { t } = useTranslation();

//   return (
//     <section>
//       <div>
//         <h1 className="text-[#FFDDDD] text-[60px] font-extrabold leading-[99.06px] tracking-[-0.03em] text-center">
//           {t('contactUs.title', { emphasis: <span className="text-[#4D1A2D]">touch</span> })}
//         </h1>
//         <p className="font-inter text-[18px] font-medium leading-[26.63px] tracking-[-0.02em] text-center text-[#4D1A2D]">
//           {t('contactUs.subtitle')}
//         </p>
//       </div>

//       <div className="grid grid-cols-12 gap-5 py-8">
//         <div className="col-span-12 md:col-span-6 flex justify-end items-center">
//           <div className="w-[80%]">
//             {/* Header & Description */}
//             <div>
//               <h1 className="text-[#4D1A2D] font-inter text-[30px] font-semibold leading-[36.31px] tracking-[-0.02em] my-2">
//                 {t('contactUs.helpTitle')}
//               </h1>
//               <p className="text-[#4D1A2D] font-inter text-[16px] font-normal leading-[19.36px] tracking-[-0.01em] w-[70%]">
//                 {t('contactUs.helpDescription')}
//               </p>
//             </div>

//             {/* Form */}
//             <form action="" className="my-5 space-y-5">
//               <div className="grid grid-cols-12 gap-4">
//                 <div className="col-span-12 md:col-span-6">
//                   <input
//                     type="text"
//                     placeholder={t('contactUs.form.firstName')}
//                     className="woutline-none -[90%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D]"
//                   />
//                 </div>
//                 <div className="col-span-12 md:col-span-6">
//                   <input
//                     type="text"
//                     placeholder={t('contactUs.form.lastName')}
//                     className="woutline-none -[90%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D]"
//                   />
//                 </div>
//               </div>
//               <input
//                 type="text"
//                 placeholder={t('contactUs.form.email')}
//                 className="woutline-none -[95%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D]"
//               />
//               <input
//                 type="text"
//                 placeholder={t('contactUs.form.phoneNumber')}
//                 className="woutline-none -[95%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D]"
//               />
//               <textarea
//                 placeholder={t('contactUs.form.message')}
//                 className="w-[95%] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D]"
//               ></textarea>
//               <button className="font-inter text-[15px] font-medium leading-[18.15px] tracking-[-0.01em] bg-[#FFDDDD] w-[95%] py-4 text-[#4D1A2D] rounded-lg flex justify-center items-center gap-2">
//                 {t('contactUs.form.buttonText')}
//                 <img src={air} loading="lazy" alt="air" />
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="col-span-12 md:col-span-6 flex justify-center items-center">
//           <div className="w-[70%]">
//             <img src={contactus} loading="lazy" alt="contact-us" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { useTranslation } from 'react-i18next';
import contactus from '../../assets/contact-us.png';
import air from '../../assets/air.png';

export default function ContactUs() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar'; // Adjust for RTL if the language is Arabic

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className={`${isRtl ? 'rtl' : 'ltr'}`}>
      <div>
        <h1 className="text-[#FFDDDD] text-[60px] font-extrabold leading-[99.06px] tracking-[-0.03em] text-center">
          {t('contactUs.title', { emphasis: <span className="text-[#4D1A2D]">touch</span> })}
        </h1>
        <p className="font-inter text-[18px] font-medium leading-[26.63px] tracking-[-0.02em] text-center text-[#4D1A2D]">
          {t('contactUs.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 py-8">
        <div className="col-span-12 md:col-span-6 flex justify-end items-center">
          <div className="w-[80%]">
            {/* Header & Description */}
            <div>
              <h1 className="text-[#4D1A2D] font-inter text-[30px] font-semibold leading-[36.31px] tracking-[-0.02em] my-2">
                {t('contactUs.helpTitle')}
              </h1>
              <p className="text-[#4D1A2D] font-inter text-[16px] font-normal leading-[19.36px] tracking-[-0.01em] w-[70%]">
                {t('contactUs.helpDescription')}
              </p>
            </div>

            {/* Form */}
            <form action="" className="my-5 space-y-5 text-black">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    placeholder={t('contactUs.form.firstName')}
                    className={`outline-none w-[90%] outline-none h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D] ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    placeholder={t('contactUs.form.lastName')}
                    className={`outline-none w-[90%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D] ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder={t('contactUs.form.email')}
                className={`outline-none w-[95%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D] ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              />
              <input
                type="text"
                placeholder={t('contactUs.form.phoneNumber')}
                className={`outline-none w-[95%] h-[42px] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D] ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              />
              <textarea
                placeholder={t('contactUs.form.message')}
                className={`outline-none w-[95%] p-[12px_14px] gap-[10px] rounded-[7px] border border-[rgba(77,26,45,0.2)] bg-[#4D1A2D0D] ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              ></textarea>
              <button className="font-inter text-[15px] font-medium leading-[18.15px] tracking-[-0.01em] bg-[#FFDDDD] w-[95%] py-4 text-[#4D1A2D] rounded-lg flex justify-center items-center gap-2">
                {t('contactUs.form.buttonText')}
                <img src={air} loading="lazy" alt="air" />
              </button>
            </form>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <div className="w-[70%]">
            <img src={contactus} loading="lazy" alt="contact-us" />
          </div>
        </div>
      </div>
    </section>
  );
}
