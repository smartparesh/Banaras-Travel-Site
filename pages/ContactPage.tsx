
import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '../components/Icons';

const ContactInfoCard: React.FC<{ icon: React.ReactNode, title: string, content: string, href?: string }> = ({ icon, title, content, href }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {href ? (
                <a href={href} className="text-gray-600 hover:text-orange-500 transition-colors">{content}</a>
            ) : (
                <p className="text-gray-600">{content}</p>
            )}
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Have questions or need a custom tour plan? We're here to help. Reach out to us, and we'll get back to you shortly.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <ContactInfoCard 
                        icon={<PhoneIcon className="w-6 h-6"/>}
                        title="Call Us"
                        content="+91-987-654-3210"
                        href="tel:+919876543210"
                    />
                     <ContactInfoCard 
                        icon={<EnvelopeIcon className="w-6 h-6"/>}
                        title="Email Us"
                        content="contact@spiritualtriangle.com"
                        href="mailto:contact@spiritualtriangle.com"
                    />
                     <ContactInfoCard 
                        icon={<MapPinIcon className="w-6 h-6"/>}
                        title="Office Address"
                        content="123, Assi Ghat Road, Varanasi, UP, India"
                    />
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send an Enquiry</h2>
                    {submitted ? (
                        <div className="text-center bg-green-100 text-green-800 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold">Thank You!</h3>
                            <p>Your enquiry has been received. We will get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
