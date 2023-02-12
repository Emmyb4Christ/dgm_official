'use client'
import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import SwiperCore from 'swiper/core';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Slider = () => {
    const sliderData = [
        {
            image: '/sliderImg.png',
            title: 'welcome to dominion gospel ministry',
            subTitle: 'the sub-title goes here',
        },
        {
            image: '/sliderImg.png',
            title: 'welcome to dominion gospel ministry',
            subTitle: 'the sub-title goes here',
        },
        {
            image: '/sliderImg.png',
            title: 'welcome to dominion gospel ministry',
            subTitle: 'the sub-title goes here',
        },
    ]

    return (
        <div className='relative h-[350px]'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className='relative h-[350px]'
            >
                {sliderData.map((data, index) => {
                    return (
                        <SwiperSlide className='relative h-[350px]' key={index}>
                            <div className='absolute w-full h-full'>
                                <Image loader={() => data.image} fill={true} src={data.image} alt='altttt' />
                            </div>
                            <div className='absolute w-full h-full top-[5%]'>
                                <h1>{data.title}</h1>
                                <p>{data.subTitle}</p>
                            </div>
                        </SwiperSlide>
                    );

                })}

            </Swiper>
        </div>
    )
}

export default Slider