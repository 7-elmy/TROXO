import React from 'react'
import Card, { MainCard } from '../../utils/Card'

export default function OurRecent() {
  return (
    <section>

        <div className='flex justify-between items-center px-4  my-5'>
        
                <h2 className='font-raleway text-[25px] md:text-[48px] font-bold leading-[50px] tracking-[-0.88px] text-center text-[#4D1A2D]'>Our Recent Post</h2>
                <button className='bg-[#4D1A2D] text-white rounded-lg p-2 px-8'>View All</button>
        
                </div>

                <MainCard 
         name={"DEVELOPMENT"}
         time={"11March 2023"}
         mainTitle={"How to make a Game look more attractive with New VR & AI Technology"} 
         desc={"Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone."}
        />
        
                <div className='grid grid-cols-12 gap-4 my-5 px-4'>
 
                    <div className='col-span-12 md:col-span-3'>
                        <Card
                        name={"Travel"}
                        time={"11 March 2023"}
                        mainTitle={"Best Website to research for your  next project"} 
                        desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
                    </div>
                    <div className='col-span-12 md:col-span-3'>
                        <Card
                        name={"Travel"}
                        time={"11 March 2023"}
                        mainTitle={"Best Website to research for your  next project"} 
                        desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
                    </div>
                    <div className='col-span-12 md:col-span-3'>
                        <Card
                        name={"Travel"}
                        time={"11 March 2023"}
                        mainTitle={"Best Website to research for your  next project"} 
                        desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
                    </div>
                    <div className='col-span-12 md:col-span-3'>
                        <Card
                        name={"Travel"}
                        time={"11 March 2023"}
                        mainTitle={"Best Website to research for your  next project"} 
                        desc={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"}/>
                    </div>
                  
                </div>
          


      
    </section>
  )
}
