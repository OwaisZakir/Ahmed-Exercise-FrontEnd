import React from "react";

function Footer() {
  return (
    //  #08513f;
    //  #f1c152;
    <>
      <footer
        id="footer"
        className=" text-white w-full h-full md:h-[400px] pt-10 pb-8 mt-10 bg-[url('/Images/color-bg.jpg')] bg-cover bg-center  md:pl-20 pr-20"
      >
        <div className="container mx-auto px-4  ">
          <div className="flex  flex-col md:flex-row  ">
            {/* Logo and Description */}
            <div className="md:w-1/4 flex-wrap mb-4  ">
              <a href="#" className="">
                <img
                  src="/Images/logo.png"
                  alt="Masjid Logo"
                  className="w-45 h-auto"
                />
              </a>
              <p className=" mt-7 text-base text-white-300">
                Join our community and stay updated with the latest events,
                news, and activities from the Masjid.
              </p>
            </div>
            {/* Quick Links */}
            <div className="md:w-1/4  mb-4 ">
              <h5 className="text-3xl font-semibold   mb-4">Quick Links</h5>
              <ul className="space-y-2 text-base mt-7">
                <li>
                  <a href="#hero" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#activities" className="hover:text-blue-400">
                    Activities
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/4  mb-4  ">
              <h5 className="text-3xl font-semibold mb-4">Contact Us</h5>
              <ul className="space-y-3 mt-7 text-base text-gray-300">
                <li>
                  <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                  123 Masjid St, City, Country
                </li>
                <li>
                  <i className="fas fa-phone text-blue-400 mr-2"></i>
                  +1 234 567 890
                </li>
                <li>
                  <i className="fas fa-envelope text-blue-400 mr-2"></i>
                  info@masjid.com
                </li>
              </ul>
            </div>
            {/* Social Media & Newsletter */}
            <div className="md:w-1/4  ">
              <h5 className="text-3xl font-semibold ">Stay Connected</h5>
              <div className=" mt- flex flex-row gap-6 text-white text-3xl">
                <div className="mt-7 flex flex-wrap gap-6 text-white text-3xl">
                  <a href="#" className="hover:text-blue-400 w-1/4">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="hover:text-blue-400 w-1/4">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="hover:text-blue-400 w-1/4">
                    <i className="fab fa-instagram"></i>
                  </a>

                  {/* Next 3 icons */}
                  <a href="#" className="hover:text-blue-400 w-1/4">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="hover:text-blue-400 w-1/4">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" className="hover:text-blue-400 w-1/4">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </div>
              </div>
              {/* Newsletter Form */}
              <form action="#" method="POST" className="mt-4">
                <div className="flex gap-5">
                  <input
                    type="email"
                    placeholder="Subscribe "
                    required
                    className="text-black hover:bg-orange-400 bg-white font-bold py-4 px-4 text-cnter rounded-full md:w-[120px]
                  "
                  />
                  <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-700 text-white px-4 py-2 rounded-full"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}

        <div className="text-center text-sm md:text-lg text-green mt-8 pt-4 border-t border-gray-700">
          <p>&copy; 2024 Masjid Community. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
