import React from 'react'
import Card from '../../utils/Card'
import wave from "../../assets/waves.png"
export default function PopularPost() {
  return (
    <section>
        <div className='flex justify-between items-center px-4'>

        <h2 className='font-raleway text-[25px] md:text-[48px] font-bold leading-[50px] tracking-[-0.88px] text-center text-[#4D1A2D]'>Popular Post</h2>
        <button className='bg-[#4D1A2D] text-white rounded-lg p-2 px-8'>View All</button>

        </div>

        <div className='grid grid-cols-12 gap-4 my-5 px-4'>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <Card
                name={"Travel"}
                time={"11March 2023"}
                mainTitle={"Best Website to research for your  next project"} 
                desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
            </div>
          
        </div>

        <div className='pop h-[100vh] md:h-[80vh] flex justify-center items-center relative overflow-hidden'>
            <div className='md:w-[55%] mt-[85px] md:mt-0'>
            <p className='font-raleway text-[52px] font-bold leading-[48px] tracking-[0.2px] text-center text-[#4D1A2D] '>Get our stories delivered From us to your inbox weekly.</p>

            <div className='mt-5 md:flex justify-center items-center space-y-2 md:space-y-0 gap-3 px-4'>
                <input type="text" className='bg-white outline-none text-black rounded-lg h-[48px] p-2   w-full md:w-[300px]' placeholder='Your Email'/>
                <button className='text-[#4D1A2D] px-4 p-2 w-full md:w-[200px] h-[48px] border border-[#4D1A2D] rounded-lg'>Get started</button>
            </div>

            <p className='font-raleway text-[16px] font-normal leading-[28px] text-center text-[#4D1A2D] mt-5 '>
            Get a response tomorrow if you submit by 9pm today. If we received after <br/> 9pm will get a reponse the following day.
            </p>

            </div>
                <img alt='wave' className='absolute -bottom-48 right-0' loading='lazy' src={wave}/>

        </div>
      
    </section>
  )
}
