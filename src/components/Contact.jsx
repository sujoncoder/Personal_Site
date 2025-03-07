import React from 'react';
import Whatsapp from "../assets/icons/whatsapp.png";
import Facebook from "../assets/icons/facebook.png";
import Gmail from "../assets/icons/gmail.png";
import Location from "../assets/icons/location.png";

const Contact = () => {
    return (
        <div className="bg-[url('./assets/bg_img.png')] bg-cover bg-center flex justify-center items-center mb-2 sm:p-6">
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-4xl w-full mx-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-500 text-center mb-6 sm:mb-8">
                    যোগাযোগ
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* WhatsApp */}
                    <div className="flex items-center space-x-4 bg-blue-50 p-4 sm:p-6 rounded-lg hover:bg-blue-100 transition duration-300">
                        <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6 sm:w-8 sm:h-8" /> {/* Icon without background */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">WhatsApp</h3>
                            <a
                                href="https://wa.me/01603296044"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-sm sm:text-base break-words"
                            >
                                01603-296044
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4 bg-green-50 p-4 sm:p-6 rounded-lg hover:bg-green-100 transition duration-300">
                        <img src={Gmail} alt="Gmail" className="w-6 h-6 sm:w-8 sm:h-8" /> {/* Icon without background */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Email</h3>
                            <a
                                href="mailto:hasibbinmohammad@gmail.com"
                                className="text-green-600 hover:text-green-800 text-sm sm:text-base break-words"
                            >
                                hasibbinmohammad@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center space-x-4 bg-indigo-50 p-4 sm:p-6 rounded-lg hover:bg-indigo-100 transition duration-300">
                        <img src={Facebook} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" /> {/* Icon without background */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Facebook</h3>
                            <a
                                href="https://facebook.com/mohammadhasibbin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base break-words"
                            >
                                facebook.com/mohammadhasibbin
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-4 bg-red-50 p-4 sm:p-6 rounded-lg hover:bg-red-100 transition duration-300">
                        <img src={Location} alt="Location" className="w-6 h-6 sm:w-8 sm:h-8" /> {/* Icon without background */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Location</h3>
                            <p className="text-red-600 hover:text-red-800 text-sm sm:text-base">
                                Magura, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;