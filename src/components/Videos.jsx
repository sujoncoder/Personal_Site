import React from 'react';

const Videos = () => {
    // Array of video links (YouTube embed links or any other video source)
    const videos = [
        'https://www.youtube.com/embed/FEA1FcLuBpA?si=AKCc-ymKah9qoMrz',
        'https://www.youtube.com/embed/-1eHgC1Aark?si=tlFO6zSZgx6i1wML',
        'https://www.youtube.com/embed/UFnpH0d8At4?si=i1ufYgZ9MaHmCxrf',
        'https://www.youtube.com/embed/EUksc2Zs6ZQ?si=aTaP8zTJJ7nx79Tz',
        'https://www.youtube.com/embed/T9zhJTpK5tk?si=B4RXX-kxlt_zQW46',
        'https://www.youtube.com/embed/FEA1FcLuBpA?si=LVFpgblb86qhSU5J',
    ];

    return (
        <div className="bg-[url('./assets/bg_img.png')] bg-cover bg-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    ভিডিওস
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
                        >
                            {/* Larger Video Container */}
                            <div className="aspect-w-16 aspect-h-9 w-full h-56">
                                <iframe
                                    src={video}
                                    title={`Video ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-t-xl"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-600">
                                    ভিডিও সম্পর্কে সংক্ষিপ্ত বিবরণ।
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Videos;