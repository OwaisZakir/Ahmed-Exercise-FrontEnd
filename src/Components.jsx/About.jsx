import React from 'react'

function About() {
  return (
<>
<section id="about">
  <div className="container mx-auto pt-4 pl-2 pr-4 md:pt-14">
    <div className="flex flex-col md:flex-row gap-5 ">
      
      {/* Left Images Section */}
      <div className="md:w-1/2">
        <div className="flex flex-row gap-7 p-2">
          <div>
            <img
              src="Images/about-1.jpg"
              className="w-full h-full " alt="" />
          </div>
          <div>
            <img
              src="Images/about-2.jpg"
              className="w-full pb-3"
              alt=""
            />
            <img
              src="Images/about-3.jpg"
              className="w-full pt-3 "
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div
        className="md:w-1/2 rounded-[20px] md:pl-10 md:pr-10 "
      >
        <p className="text-2xl uppercase font-semibold text-orange-400 ">
          About THE Masjid
        </p>
        <h1
          className="text-4xl font-bold pt-6 pb-7 m-0"
        >
          Allah Help Those Who Help Themselves
        </h1>
        <p className="  mb-4 md:pb-7 ">
          Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis
          aliquam. Etiam quis mauris justo. Vivamus purus nulla, rutrum ac
          risus in.
        </p>

        {/* Vision & Mission */}
        <div className="flex-flex-row md:flex gap-4 mb-4">
          <div className="flex items-start ps-3">
            <span className=" md:mt-4 ">
              <img src="Images/images.png" alt="" className='w-[50px]  md:w-[80px] ' />
            </span>
            <div className="ms-4">
              <h5 className="font-bold">Our Vision</h5>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet tetur nod elit sed
              </p>
            </div>
          </div>
          <div className="flex items-start mt-5 ps-3 ">
            <span className=" md:mt-4 ">
                  <img src="Images/images.png" alt="" className='w-[50px]  md:w-[80px]' />
            </span>
            <div className="ms-4">
              <h5 className="font-bold">Our Mission</h5>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet tetur nod elit sed
              </p>
            </div>
          </div>
        </div>

        {/* Donation Summary */}
        <div className="bg-gray-100 p-3  mb-4 md:mt-9">
          <div className="flex items-center justify-center flex-wrap">
            <div className="w-1/4">
              <img
                src="Images/child.jpg"
                className="w-full h-auto rounded-lg"
                alt=""
              />
            </div>
            <div className="w-1/2 px-2">
              <p className="mb-0">
                Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor
                mattis aliquam. Etiam quis mauris justo.
              </p>
            </div>
            <div className="w-1/4 text-center">
              <h2 className="mb-0 text-4xl text-orange-300">$20,46</h2>
              <h5 className="mb-0">Raised</h5>
            </div>
          </div>
        </div>

        {/* List Section */}
        <div className="flex-row md:flex  gap-20">
          <div>
            <p className="mb-2">
              <i className="fa fa-check text-orange-400 me-3 "></i>
              Charity &amp; Donation
            </p>
            <p className="mb-2">
              <i className="fa fa-check text-orange-400  me-3 "></i>
              Parent Education
            </p>
          </div>
          <div>
            <p className="mb-2">
              <i className="fa fa-check  text-orange-400  me-3 "></i>
              Hadith &amp; Sunnah
            </p>
            <p className="mb-20">
              <i className="fa fa-check  text-orange-400  me-3 "></i>
              Mosque Development
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default About
