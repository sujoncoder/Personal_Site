import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

const HeroSlider = () => {
    // Array of image links for horizontal slides
    const horizontalImages = [
        'https://i.ibb.co.com/51xj9V7/dreamtravell.png',
        'https://i.ibb.co.com/51xj9V7/dreamtravell.png',
        'https://i.ibb.co.com/51xj9V7/dreamtravell.png',
    ];

    // Array of image links for vertical slides
    const verticalImages = [
        'https://i.ibb.co.com/NykvGFB/e-comerce-Filter.png',
        'https://i.ibb.co.com/NykvGFB/e-comerce-Filter.png',
        'https://i.ibb.co.com/NykvGFB/e-comerce-Filter.png',
    ];

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <Swiper
                className="mySwiper swiper-h w-4/5 h-4/5 bg-white rounded-xl shadow-2xl overflow-hidden"
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000, // Auto-slide delay in milliseconds (3 seconds)
                    disableOnInteraction: false, // Continue autoplay even after user interaction
                }}
                modules={[Pagination, Autoplay]} // Add Autoplay module
            >
                {/* Horizontal Slides */}
                {horizontalImages.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex justify-center items-center p-4"
                    >
                        <img
                            src={image}
                            alt={`Horizontal Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </SwiperSlide>
                ))}

                {/* Vertical Swiper inside a Horizontal Slide */}
                <SwiperSlide className="p-4">
                    <Swiper
                        className="mySwiper2 swiper-v w-full h-full bg-gray-100 rounded-lg shadow-md"
                        direction={'vertical'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000, // Auto-slide delay in milliseconds (3 seconds)
                            disableOnInteraction: false, // Continue autoplay even after user interaction
                        }}
                        modules={[Pagination, Autoplay]} // Add Autoplay module
                    >
                        {/* Vertical Slides */}
                        {verticalImages.map((image, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex justify-center items-center p-4"
                            >
                                <img
                                    src={image}
                                    alt={`Vertical Slide ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg shadow-sm"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>

                {/* Additional Horizontal Slides */}
                {horizontalImages.slice(2).map((image, index) => (
                    <SwiperSlide
                        key={index + horizontalImages.length}
                        className="flex justify-center items-center p-4"
                    >
                        <img
                            src={image}
                            alt={`Horizontal Slide ${index + 3}`}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;