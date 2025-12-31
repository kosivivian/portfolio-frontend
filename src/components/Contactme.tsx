import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Mail, Phone, MapPin} from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import { headingStyles } from '../constants/typography';
import Button from './Button';

const Contactme = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    //success message after submission
    const notify = () => toast("Thank you for reaching out. I'll get back to you soon!");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    notify();
    setFormData({name: '', email: '', subject: '', message: ''});
    setIsSubmitting(false);
    };

    const contactInfo = [
        { icon: <Mail className="w-5 h-5" />, text: "nebolisako@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, text: "+234 904 991 3578" },
    { icon: <MapPin className="w-5 h-5" />, text: "Lagos, Nigeria" },
    ]

  return (
    <section id="contactme" className="py-20 lg:py-32 bg-black relative left-[calc(-50vw+50%)] w-screen">
        <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
            <span className={headingStyles.H2b } >Contact</span>
            <h2 className='text-[24px] md:text-[28px] lg:text-[36px] text-white leading-[-0.9]  mt-6 mb-4 animate-slide-in-left'>Get in <span className='text-[#BE99F9] '>Touch</span></h2>
                <p className={headingStyles.H4b + " mt-6 animate-slide-in-left"} style={{ animationDelay: '0.2s' }}> Have a project in mind? Let's work together to bring your idea to life. </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6 animate-slide-in-left">
            <h3 className={headingStyles.H2 + " flex mb-6"}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4 ">
                    <div>
                        <label htmlFor="name" className={headingStyles.H4 + " flex mb-2"}>Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full p-3 bg-[#878484]/20 rounded-lg border border-[#878484]/30 focus:outline-none focus:ring-2 focus:ring-[#BE99F9]"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={headingStyles.H4 + " flex mb-2"}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="chidi@example.com"
                            className="w-full p-3 bg-[#878484]/20 rounded-lg border border-[#878484]/30 focus:outline-none focus:ring-2 focus:ring-[#BE99F9]"
                        />
                    </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className={headingStyles.H4 + " flex mb-2"}>Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Project Inquiry"
                            className="w-full p-3 bg-[#878484]/20 rounded-lg border border-[#878484]/30 focus:outline-none focus:ring-2 focus:ring-[#BE99F9]"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className={headingStyles.H4 + " flex mb-2"}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell me about your project..."
                            rows={5}
                            className="w-full p-3 bg-[#878484]/20 rounded-lg border border-[#878484]/30 focus:outline-none focus:ring-2 focus:ring-[#BE99F9]"/>
                    </div>
                    <Button type="submit" disabled={isSubmitting} variant="third" className="w-full mt-4">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                
            </form>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </div>
                    {/* Contact Details */}

                    <div className="flex flex-col justify-center">
                        <div className="mb-12">
                            <h3 className={headingStyles.H3b + " mb-6 animate-slide-in-right"} style={{ animationDelay: '0.1s' }}>Let's Connect</h3>
                            <p className={headingStyles.H4b + " animate-slide-in-right mb-8"} style={{ animationDelay: '0.2s' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the following channels.</p>

                            <div className=" space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-4 animate-slide-in-right" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                                        <div className="w-12 h-12 rounded-full text-[#BE99F9] bg-[#878484]/12 flex items-center justify-center border border-white/30">
                                            {info.icon}
                                        </div>
                                        <span className=" text-white text-lg">{info.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Contactme