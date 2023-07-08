import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PropertyCard from 'features/common/modules/PropertyCard';

const PropertySlider = ({ properties }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            loopFillGroupWithBlank={true}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            pagination={{ dynamicBullets: true }}
            modules={[Autoplay, Pagination]}
            className='mySwiper'
        >
            {properties.map((property) => (
                <SwiperSlide key={property.id}>
                    <PropertyCard {...property} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PropertySlider
