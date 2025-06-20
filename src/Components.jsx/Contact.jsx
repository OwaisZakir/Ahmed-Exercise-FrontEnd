import React from "react";

function Contact() {
  return (
    <>
      <section id="contact ">
        <div className="container  mx-auto pt-4 pl-2 pr-4 md:pt-13  md:p-5   ">
          <div className="flex flex-col md:flex-row h-full ">
            {/* Left Images Section */}
            <div className="md:w-1/2 w-full h-full ">
              <h2 className="text-4xl mb-6 md:mb-12">Our Location</h2>
              <div className=" w-full  h-[400px] mb-6">
                <iframe
                  className="  w-full h-full "
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.365760797909!2d-122.40641708468113!3d37.78529727975856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d7740549d%3A0x5e71d8b7db6c1f9b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1664430573485!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="md:w-1/2 ">
              <h2 className="text-3xl  mb-6">Contact Us</h2>
              <form className=" px-5">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-600 "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
