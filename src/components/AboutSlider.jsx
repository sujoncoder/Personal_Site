import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const AboutSlider = () => {
    // Array of image links
    const images = [
        "https://i.ibb.co.com/Q30JFGj4/1735561393719.jpg",
        "https://i.ibb.co.com/s9x6WRnP/1712076421729.jpg",
        "https://i.ibb.co.com/yFvvTR8v/FB-IMG-1729169799846.jpg",
        "https://i.ibb.co.com/vx3bzhc2/1739180668902.jpg"
    ];

    return (
        <div className="flex justify-center items-center">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-80 h-96 sm:w-96 sm:h-[500px] bg-transparent" // Set background to transparent
            >
                {/* Map over the images array and render each image in a SwiperSlide */}
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex items-center justify-center rounded-xl bg-transparent" // Set background to transparent
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full border-2 shadow-lg border-sky-500 object-cover rounded-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AboutSlider;