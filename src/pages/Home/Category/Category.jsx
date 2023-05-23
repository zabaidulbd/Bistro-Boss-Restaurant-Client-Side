
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/catergory/slide1.jpg'
import slide2 from '../../../assets/catergory/slide2.jpg'
import slide3 from '../../../assets/catergory/slide3.jpg'
import slide4 from '../../../assets/catergory/slide4.jpg'
import slide5 from '../../../assets/catergory/slide5.jpg'


const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20 mt-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className="text-center uppercase text-3xl -mt-10">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className="text-center uppercase text-3xl -mt-10">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className="text-center uppercase text-3xl -mt-10">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className="text-center uppercase text-3xl -mt-10">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className="text-center uppercase text-3xl -mt-10">Salad</h2>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Category;