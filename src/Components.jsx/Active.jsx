import React from "react";

function Active() {
  return (
    <>
      <section id="Activities">
        <div className="w-full h-auto flex flow-wrap flex-col items-center p-5 ">
          <div className=" w-full h-auto flex flow-wrap flex-col  items-center ">
            <p className="text-2xl  text-orange-400  ">Activities</p>
            <h3 className="text-3xl md:text-6xl mt-5">
              Here Are Our Activities
            </h3>
          </div>

          <div className=" w-[90%] h-auto flex flex-wrap  justify-evenly mt-10 ">
            <div className=" rounded-[20px] w-85 h-full flex p-7 hover:bg-orange-400 mb-5">
              <i className="fa fa-mosque fa-4x text-dark mt-12"></i>
              <div className=" ms-4">
                <h4 className="text-2xl">Mosque Development</h4>
                <p className=" mb-4">
                  Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor
                  mattis aliquam.
                </p>
                <a
                  href=""
                  className="  hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full w-max border bg-orange-400 "
                >
                  Read More
                </a>
              </div>
            </div>
            <div className=" rounded-[20px] w-85 h-full flex p-7 hover:bg-orange-400">
              <i class="fa fa-donate fa-4x text-dark mt-12"></i>
              <div className=" ms-4">
                <h4 className="text-2xl">Charity & Donation</h4>
                <p className=" mb-8">
                  Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor
                  mattis aliquam.
                </p>
                <a
                  href=""
                  className="  hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full w-max  border bg-orange-400 "
                >
                  Read More
                </a>
              </div>
            </div>{" "}
            <div className=" rounded-[20px] w-85 h-full flex  p-7 hover:bg-orange-400">
              <i class="fa fa-quran fa-4x text-dark mt-12"></i>
              <div className=" ms-4">
                <h4 className="text-2xl mb-6">Quran Learning</h4>
                <p className=" mb-8">
                  Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor
                  mattis aliquam.
                </p>
                <a
                  href=""
                  className="  hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full w-max border bg-orange-400 "
                >
                  Read More
                </a>
              </div>
            </div>{" "}
            <div className=" rounded-[20px] w-85 h-full flex p-7 hover:bg-orange-400">
              <i class="fa fa-book fa-4x text-dark mt-12"></i>
              <div className=" ms-4">
                <h4 className="text-2xl mb-6">Hadith & Sunnah</h4>
                <p className=" mb-8">
                  Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor
                  mattis aliquam.
                </p>
                <a
                  href=""
                  className="  hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full w-max  border bg-orange-400 "
                >
                  Read More
                </a>
              </div>
            </div>{" "}
            <div className=" rounded-[20px] w-85 h-full flex  p-7 hover:bg-orange-400">
              <i class="fa fa-book-open fa-4x text-dark mt-12"></i>
              <div className=" ms-4">
                <h4 className="text-2xl  mb-6">Parent Education</h4>
                <p className=" mb-8">
                  Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor
                  mattis aliquam.
                </p>
                <a
                  href=""
                  className="  hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full w-max border bg-orange-400 "
                >
                  Read More
                </a>
              </div>
            </div>{" "}
            <div className=" rounded-[20px] w-85 h-full flex p-7 hover:bg-orange-400">
              <i class="fa fa-hands fa-4x text-dark mt-12"></i>
              <div className=" ms-4">
                <h4 className="text-2xl  mb-6">Help Orphans</h4>
                <p className=" mb-8">
                  Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor
                  mattis aliquam.
                </p>
                <a
                  href=""
                  className="  hover:bg-white hover:text-black text-white font-bold  py-3 px-6 rounded-full w-max border bg-orange-400 "
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr /> <hr /> <hr />
    </>
  );
}

export default Active;
