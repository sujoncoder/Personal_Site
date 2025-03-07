import Typewriter from 'typewriter-effect';
import AboutSlider from './AboutSlider';

const About = () => {
    return (
        <div className="bg-[url('./assets/bg_img.png')] bg-cover bg-center sm:py-0 py-10 px-4 sm:px-6 lg:px-8 sm:h-screen sm:flex justify-center items-center">
            <div className="max-w-7xl mx-auto">
                {/* Grid for About Text and Slider */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Right Side: AboutSlider Component (Top on Mobile) */}
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <AboutSlider />
                    </div>

                    {/* Left Side: About Text (Bottom on Mobile) */}
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-green-700">পরিচিতি</h2>
                        <h2 className="text-2xl font-bold text-slate-700 font-mono">
                            <Typewriter
                                options={{
                                    strings: ['হাসিব বিন মোহাম্মদ ।'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    cursor: "_",
                                    deleteSpeed: 50,
                                }}
                            />
                        </h2>
                        <p className="text-xl font-mono text-gray-700 leading-relaxed py-5">
                            বিশিষ্ট ইসলামী চিন্তাবিদ উদীয়মান আলোচক মিডিয়া ব্যক্তিত্ব জনপ্রিয় খতিব, একজন বাংলাদেশের ধর্মীয় ও ইসলামী গবেষক, ধর্মপ্রচারক, তিনি বর্তমানে ইসলামি বিষয়ক গুরুত্বপূর্ণ আলোচনার মাধ্যমে মানুষকে ইসলামের দিকে আহ্বান করছেন। একজন মুসলিম স্কলার হিসেবে নিজেকে প্রতিষ্ঠা করেছেন। হাফেজ ক্বারী মাওলানা হাসিব বিন মোহাম্মাদ, খতিব বায়তুল আমান জামে মসজিদ মাগুরা ।
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                className="relative inline-block px-6 py-3 font-medium group w-full text-center"
                            >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">ভিডিওস</span>
                            </button>


                            <button
                                className="relative px-6 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group w-full text-center"
                            >
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">যোগাযোগ</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;