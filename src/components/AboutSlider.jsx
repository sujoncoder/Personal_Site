import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const AboutSlider = () => {
    // Array of image links
    const images = [
        'https://i.ibb.co.com/cNffv4X/profile.jpg',
        'https://i.ibb.co.com/cNffv4X/profile.jpg',
        'https://i.ibb.co.com/cNffv4X/profile.jpg',
    ];

    return (
        <div className="h-screen bg-white flex justify-center items-center">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-60 h-80"
            >
                {/* Map over the images array and render each image in a SwiperSlide */}
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex items-center justify-center rounded-xl"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AboutSlider;