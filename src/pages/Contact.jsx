import React from 'react';
import { BsTelephone, BsWhatsapp, BsEnvelope } from 'react-icons/bs';
import FadeIn from '../components/FadeIn';

const Contact = () => {
    return (
        <div className="pt-10 md:pt-24 min-h-screen bg-gradient-to-b from-white via-third to-third font-primary text-gray-900 overflow-x-hidden">
            
            {/* 1. Main Content Section */}
            <section className="container mx-auto px-6 xl:px-16 2xl:px-2 pt-16 md:pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Text and Contact Details */}
                    <div className="space-y-12">
                        <FadeIn delay={0.2} direction="right" className="space-y-6">
                            <h1 className="text-5xl md:text-9xl font-medium leading-tight text-black tracking-tight">
                                Let's get <br className="hidden md:block"/> in touch
                            </h1>
                            <p className="text-xl md:text-3xl font-medium text-black">
                                Don't be afraid to <br className="hidden md:block"/> say hello with us!
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up" className="space-y-8 md:pt-8">
                            <div className="space-y-1">
                                <p className="text-gray-500 text-md">Phone</p>
                                <p className="text-lg font-medium text-black">021-2944-0077</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500 text-md">Whatsapp</p>
                                <p className="text-lg font-medium text-black">0821-2410-3644</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500 text-md">Email</p>
                                <p className="text-lg font-medium text-black">marketing@himmelhpl.com</p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Side: Description and Form */}
                    <FadeIn delay={0.6} direction="left" className="flex flex-col justify-between gap-16 md:mt-35">
                        <div className="max-w-md md:max-w-sm ml-auto md:text-left">
                             <p className="text-black text-lg font-medium leading-rela">
                                Great! we're excited to hear from you and let's start something special together. <br />call us for any inquery.
                             </p>
                        </div>

                        {/* Dark Contact Form */}
                        <div className="bg-black p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-xl font-bold mb-10 tracking-wide uppercase">Contact</h2>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative border-b border-white/50 focus-within:border-white transition-colors">
                                        <input 
                                            type="text" 
                                            id="name"
                                            placeholder="Name" 
                                            className="w-full bg-transparent py-2 px-0 text-sm focus:outline-none placeholder-white"
                                        />
                                    </div>
                                    <div className="relative border-b border-white/50 focus-within:border-white transition-colors">
                                        <input 
                                            type="email" 
                                            id="email"
                                            placeholder="Email" 
                                            className="w-full bg-transparent py-2 px-0 text-sm focus:outline-none placeholder-white"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative border-b border-white/50 focus-within:border-white transition-colors">
                                        <input 
                                            type="text" 
                                            id="phone"
                                            placeholder="Phone" 
                                            className="w-full bg-transparent py-2 px-0 text-sm focus:outline-none placeholder-white"
                                        />
                                    </div>
                                    <div className="relative border-b border-white/50 focus-within:border-white transition-colors">
                                        <input 
                                            type="text" 
                                            id="subject"
                                            placeholder="Subject" 
                                            className="w-full bg-transparent py-2 px-0 text-sm focus:outline-none placeholder-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="interest" className="text-xs text-white block pb-4">Tell us about your interested in</label>
                                    <div className="relative border-b border-white/50 focus-within:border-white transition-colors">
                                        <textarea 
                                            id="interest"
                                            rows="3"
                                            className="w-full bg-transparent py-2 px-0 text-sm focus:outline-none placeholder-white resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="mb-10 cursor-pointer w-full bg-gradient-to-r from-primary to-[#801115] hover:bg-[#c41a21] text-white py-4 rounded-sm text-sm font-medium tracking-widest transition-all mt-8"
                                >
                                    Send to us
                                </button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Map Section */}
            <section className="w-full h-[450px] md:h-[600px] mb-[-2px] mt-15 md:mt-0">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2377337135304!2d106.70450670367649!3d-6.176764967843799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f99e5e642f25%3A0xa7cafbab0d126381!2sHimmel%20HPL%20(PT%20Jaya%20Lestari%20Buildindo)!5e1!3m2!1sen!2sid!4v1767107146661!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

        </div>
    );
};

export default Contact;