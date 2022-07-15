import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const axios = require("axios");
  function onSubmitForm(values) {
    let embeds = [
      {
        title: "📩 New Form Submission",
        color: 5174599,
        // timestamp: true,
        fields: [
          {
            name: "Name",
            value: values.name,
          },
          {
            name: "Email",
            value: values.name,
            inline: true,
          },
          {
            name: "Phone",
            value: values.phone || "No Phone Number",
            inline: true,
          },
          {
            name: "Subject",
            value: values.subject,
          },
          {
            name: "Message",
            value: values.message,
          },
        ],
      },
    ];

    //Stringify the embeds using JSON.stringify()
    let data = JSON.stringify({ embeds });

    var config = {
      method: "POST",
      url: process.env.WEBHOOK,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    //Send the request
    axios(config)
      .catch((error) => {
        console.log(error);
        return error;
      });
    const form = document.getElementById("fform");

    form.reset();
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#CC00FA]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Lucas Webber</h2>
                <p>Full-Stack Developer</p>
                {/* <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p> */}
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/lucas-webber-83a814206/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/XCraftMan52"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/#contact">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmitForm)} id="fform">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-white bg-[#21252B]"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      {...register("name", {
                        required: true,
                        shouldUnregister: true,
                      })}
                    />
                    {errors.name?.type === "required" &&
                      "First name is required"}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-white bg-[#21252B]"
                      type="text"
                      name="phone"
                      placeholder="123-456-7890"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-white bg-[#21252B]"
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-white bg-[#21252B]"
                    type="text"
                    name="subject"
                    placeholder="A Job Opportunity"
                    {...register("subject", { required: true })}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-white bg-[#21252B]"
                    rows="10"
                    name="message"
                    placeholder="Tell me about your Job"
                    {...register("message", { required: true })}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#CC00FA]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;