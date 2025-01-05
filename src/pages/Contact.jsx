import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import toast, { Toaster } from 'react-hot-toast';
import ReactWhatsapp from "react-whatsapp";
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const data = e.target;
        emailjs
            .sendForm('service_ebrlz0k', 'template_7jyavji', form.current, {
                publicKey: 'I2AL38O6xwUGEigGZ',
            })
            .then(
                () => {
                    toast.success("Email sending successfully!")
                    data.reset();
                },
                (error) => {
                    toast.error(`Email sending Failed`, error.text);
                },
            );
    };
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center md:mt-0 md:py-0">
            <div className="container mx-auto px-4">
                <Toaster />
                <h1 className="text-4xl font-bold text-center my-10">Contact Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <div className="bg-white shadow-md rounded-lg px-8 py-6">
                        <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-1">
                                    Your Name <span className="text-orange-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-1">
                                    Email Address <span className="text-orange-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-1">
                                    Enter Your Subject <span className="text-orange-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your subject"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-1">
                                    Enter Your Text <span className="text-orange-500">*</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Write your message"
                                    name="message"
                                    required
                                ></textarea>
                            </div>
                            <input type="submit" className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base hover:bg-black w-full' value="Send Mail" />
                        </form>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="flex flex-col gap-6">
                        {/* Phone Section */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
                            <div className="text-3xl">
                                <FaPhoneAlt className="text-4xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-gray-700">+8801796905988</p>
                            </div>
                        </div>
                        {/* Email Section */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
                            <div className="text-3xl">
                                <AiOutlineMail className="text-5xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new' className="text-gray-700">ahasanhabib2912@gmail.com</Link>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">

                            <ReactWhatsapp number="+8801796905988" message="Hello World!!!">
                                <div className="text-3xl">
                                    <FaWhatsappSquare className="text-5xl" />
                                </div>
                            </ReactWhatsapp>
                            <ReactWhatsapp number="+8801796905988" message="Hello World!!!">
                                <div>
                                    <h3 className="font-semibold text-lg text-left">What's App</h3>
                                    <p className="text-gray-700">+8801796905988</p>
                                </div>
                            </ReactWhatsapp>
                        </div>
                        {/* Location Section */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
                            <div className="text-3xl">
                                <IoLocationSharp className="text-6xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Location</h3>
                                <p className="text-gray-700">Ashulia, Savar, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;