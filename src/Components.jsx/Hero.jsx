import React from 'react'

function Hero() {
  return (
<>
    <section className="bg-[url('/Images/1.jpg')] bg-cover bg-center md:h-screen md:pl-20 pr-20">
    {/* h screen matlabb lambaui men is div ki lamabai pori hogi 100% */}
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col lg:flex-row pt-4 lg:pt-24 w-full px-4">
          {/* Left Side */}
          <div id="left" className="w-full lg:w-1/2 flex flex-col  md:gap-9 order-2 lg:order-1">
          {/* order ye batata he ke ap ne element ko kis tarah dika na he kis screen men  ab dosre wale men bhi set karde order */}
            <h1 className="  text-white text-4xl leading-relaxed  md:text-6xl font-bold ">
              Welcome to Our Masjid
            </h1>
            <p className=" text-white text-ellipsis font-small md:text-white mb-5 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus tristique dui, vel varius neque semper non. Donec ac
              aliquet lectus. Donec id ex id neque consectetur gravida.
            </p>
            <a
              href="#contact"
              className="bg-green-900 hover:bg-green-600 text-white font-bold py-4 px-9 rounded-full w-max"
            >
              Contact Us
            </a>
          </div>

          {/* Right Side */}
          <div id="right" className="w-full  lg:w-1/2 flex justify-end  order-1 lg:order-2 mb-8 lg:mb-0">
            <img
              src="/Images/hero-img-1.png"
              alt="Masjid"
              className="w-[260px] justify-start md:w-[360px] "
            />
          </div>
        </div>
        
      </div>
    </section>
  
</>
  )
}

export default Hero