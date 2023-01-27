import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
// import required modules
import { Pagination, Navigation } from "swiper";


const Slider = () => {
    return ( 
        <div className="h-80 flex justify-center items-center py-4 px-3">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/4f/09/a6/4f09a662ecac3abf856ecd281958c8d7.jpg" className="w-full h-full" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/44/f1/73/44f173853b2a1671e7c5e3b5243a10d1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/8e/4d/d6/8e4dd65526f19d76f8f0ee9c6866aa21.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/84/bf/ec/84bfec37e33733dd3aafc8f5c87ad4d1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/4f/09/a6/4f09a662ecac3abf856ecd281958c8d7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/44/f1/73/44f173853b2a1671e7c5e3b5243a10d1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/8e/4d/d6/8e4dd65526f19d76f8f0ee9c6866aa21.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/84/bf/ec/84bfec37e33733dd3aafc8f5c87ad4d1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/84/bf/ec/84bfec37e33733dd3aafc8f5c87ad4d1.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
     );
}
 
export default Slider;