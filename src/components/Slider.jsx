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
                slidesPerView={2}
                spaceBetween={20}
                slidesPerGroup={2}
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
                    <img src="https://i.pinimg.com/564x/bf/cf/90/bfcf90a2b311a6a2cf091341dc77865a.jpg" className="rounded" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/4e/0d/40/4e0d40d18d16409a54b9dc7281710b2c.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/b9/28/4c/b9284c1693235884ef500530f4615edc.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/72/c7/91/72c791ebcb6696fb3f0fe75d530a1946.jpg" alt="" />
                </SwiperSlide>
               
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/d0/a7/1d/d0a71d4476f9b29db6649291427d8e1b.jpg" alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/23/95/98/239598b39558449b43f9ac3dd3138166.jpg" alt="" />
                </SwiperSlide>
              
            </Swiper>
        </div>
     );
}
 
export default Slider;