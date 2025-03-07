import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

const HeroSlider = () => {
    // Array of image links for horizontal slides
    const horizontalImages = [
        'https://i.ibb.co.com/6R3bvpSM/IMG-20250211-222219.jpg',
        'https://i.ibb.co.com/ymNDsCKJ/1711275703498.jpg',
        'https://i.ibb.co.com/hJVSK6bP/1713102434592.jpg',
        'https://i.ibb.co.com/hx8htF2n/1735561393719.jpg',
        'https://i.ibb.co.com/svvV2NMs/1735671379064.jpg',
        'https://i.ibb.co.com/HfSRdR0G/1739180668902.jpg',
    ];

    return (
        <div className="bg-[url('./assets/bg_img.png')] bg-cover bg-center h-screen py-10">
            <Swiper
                className="mySwiper swiper-h w-full md:w-4/5 h-3/4 md:h-4/5 rounded-xl shadow-2xl overflow-hidden"
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
                        className="flex justify-center items-center"
                    >
                        <img
                            src={image}
                            alt={`Horizontal Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;