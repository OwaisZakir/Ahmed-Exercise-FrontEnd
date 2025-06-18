import React from 'react'

function About() {
  return (
<>
   <section id="about" className=' w-full  bg-black'>
<div className="container mx-auto flex bg-slate-700 ">
      <div className="flex flex-col lg:flex-row pt-4 md:pt-5 w-full px-4">
  {/* Left Side */}
    <div id="left" className="w-full lg:w-1/2 flex bg-white ">
    
    <div className=' flex'>
      <img src="Images/about-1.jpg" alt="" className='w-[290px] h-[85%]'/></div>
    <div className=''><img src="Images/about-2.jpg" alt="" className='w-[150px] h-[35%]' />
    <img src="Images/about-3.jpg" alt="" className='w-[150px] h-[35%]' /></div>
    
    
    
    
    </div>

          {/* Right Side */}
<div id="right" className="w-full  lg:w-1/2 flex flex-col "></div>











      </div>

</div>

   </section>




</>
  )
}

export default About
