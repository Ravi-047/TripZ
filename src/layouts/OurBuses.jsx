import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const OurBuses = () => {
    return (
        <section className="py-[5rem]">
            <div className="max-w-[77.5rem] w-full flex justify-between gap-4 m-auto"  >
                <div className="w-fit">
                    <h1 className="text-black max-w-[30.125rem] font-Inter text-[2.625rem] font-semibold leading-snug">Our buses take you to more than 300 cities for <span className="text-[#0BD2B4]">small prices.</span></h1>
                </div>

                <div className="w-[23.75rem] flex flex-col justify-between gap-[2.31rem]">
                    <p className="text-[#4C4848] font-Inter text-base font-normal leading-normal">
                        Every week, every month. To meet with a loved one, or to discover a new place. With a big family, or a big luggage.To Paris, Amsterdam or any other European destination.
                    </p>

                    <div className="text-white text-center cursor-pointer w-fit font-Inter text-base font-normal leading-normal rounded-[1.25rem] bg-[#55A4FF] nextRideBoxShadow px-[1.75rem] py-[0.625rem] transition-all duration-300 hover:scale-105 active:scale-95">
                        Discover the TripZ bus experience
                    </div>
                </div>
            </div>

            <div className='mt-[6rem]'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={50}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper "
                >
                    <SwiperSlide className=' !w-[45.10238rem] !h-[30.06825rem]'>
                        <img src="/src/assets/sliderImage1.png" alt="slider image1" className=' w-full h-full object-cover rounded-[0.75169rem]' />
                    </SwiperSlide>
                    <SwiperSlide className=' !w-[45.10238rem] !h-[30.06825rem]'>
                        <img src="/src/assets/sliderImage2.png" alt="slider image 2" className=' w-full h-full object-cover rounded-[0.75169rem]' />
                    </SwiperSlide>
                    <SwiperSlide className=' !w-[45.10238rem] !h-[30.06825rem]'>
                        <img src="/src/assets/sliderImage3.png" alt="slider image 3" className=' w-full h-full object-cover rounded-[0.75169rem]' />
                    </SwiperSlide>
                    <SwiperSlide className=' !w-[45.10238rem] !h-[30.06825rem]'>
                        <img src="/src/assets/sliderImage1.png" alt="slider image1" className=' w-full h-full object-cover rounded-[0.75169rem]' />
                    </SwiperSlide>
                    <SwiperSlide className=' !w-[45.10238rem] !h-[30.06825rem]'>
                        <img src="/src/assets/sliderImage2.png" alt="slider image 2" className=' w-full h-full object-cover rounded-[0.75169rem]' />
                    </SwiperSlide>
                    <SwiperSlide className=' !w-[45.10238rem] !h-[30.06825rem]'>
                        <img src="/src/assets/sliderImage3.png" alt="slider image 3" className=' w-full h-full object-cover rounded-[0.75169rem]' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default OurBuses