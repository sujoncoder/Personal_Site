import React from 'react';
import { Phone, Mail, Facebook, MapPin } from 'lucide-react'; // Import Lucide icons

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex justify-center items-center p-6">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    যোগাযোগ করুন
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* WhatsApp */}
                    <div className="flex items-center space-x-4 bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition duration-300">
                        <div className="bg-blue-500 p-4 rounded-full">
                            <Phone className="text-white w-6 h-6" /> {/* Lucide Phone icon */}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                +123 456 7890
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4 bg-green-50 p-6 rounded-lg hover:bg-green-100 transition duration-300">
                        <div className="bg-green-500 p-4 rounded-full">
                            <Mail className="text-white w-6 h-6" /> {/* Lucide Mail icon */}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                            <a
                                href="mailto:example@example.com"
                                className="text-green-600 hover:text-green-800"
                            >
                                example@example.com
                            </a>
                        </div>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center space-x-4 bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition duration-300">
                        <div className="bg-indigo-500 p-4 rounded-full">
                            <Facebook className="text-white w-6 h-6" /> {/* Lucide Facebook icon */}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Facebook</h3>
                            <a
                                href="https://facebook.com/example"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                facebook.com/example
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-4 bg-red-50 p-6 rounded-lg hover:bg-red-100 transition duration-300">
                        <div className="bg-red-500 p-4 rounded-full">
                            <MapPin className="text-white w-6 h-6" /> {/* Lucide MapPin icon */}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                            <p className="text-red-600 hover:text-red-800">
                                Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;