import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="h-auto w-full flex md:flex-row items-center justify-between lg:px-20  bg-bg2  py-16">
      <div className="">
        <h2 className="lg:text-7xl font-bold tracking-wider  text-brown">
          Contact
        </h2>
        <p className="lg:text-4xl text-black">
          Feel free to reach out!
        </p>
      </div>
      <ul className="flex flex-col items-start list-none gap-8">
        <li className="flex items-center gap-4">
          <MdOutlineEmail className="lg:text-4xl text-black" />
          <a className="lg:text-3xl text-black" href="mailto:ridhwanfnp@email.com">
            ridhwanfnp@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-4">
          <FaLinkedin className="lg:text-4xl text-black" />
          <a className="lg:text-3xl text-black" href="https://www.linkedin.com/in/ridhwanfnp" target="_blank" rel="noopener noreferrer">
            ridhwanfnp
          </a>
        </li>
        <li className="flex items-center gap-4">
          <FaGithub className="lg:text-4xl text-black" />
          <a className="lg:text-3xl text-black" href="https://www.github.com/oneraid" target="_blank" rel="noopener noreferrer">
            oneraid
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
