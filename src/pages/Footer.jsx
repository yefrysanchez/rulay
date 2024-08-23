import React from "react";
import beach from "../../src/assets/image-beach.png";

const Footer = () => {
  return (
    <div className="min-h-screen relative mt-20 flex flex-col justify-center items-center">
      <div className="w-full absolute h-1/2 top-0 z-10">
        <img
          className="w-full h-full"
          src={beach}
          alt="beach image"
        />
      </div>
      <div className="h-[100px] md:h-[200px] w-full z-10 absolute top-0 bg-gradient-to-b from-white"></div>
      <div className="h-screen w-full bg-cyan-900 flex items-end">
        <div className="text-white flex justify-center z-50 gap-8 w-full pb-8 px-4">
          <div>
            <h2 className="font-bold mb-4">LEGAL</h2>
            <ul>
              <li className="font-thin mb-1">
                <a href="#">MSA Self Managed</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Privacy</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">GDPR</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Guidelines for Law Enforcement</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Terms of Service</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Manage Cookies</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">COMPANY</h2>
            <ul>
              <li className="font-thin mb-1">
                <a href="#">Team</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">About</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Jobs</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Partners</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Press</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Blog</a>
              </li>
              <li className="font-thin mb-1">
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-3xl">
            <ul>
              <li className="font-thin mb-5">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="font-thin mb-5">
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="font-thin mb-5">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="font-thin mb-5">
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
