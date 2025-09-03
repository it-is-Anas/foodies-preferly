'use client';

import Image from 'next/image';

import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';

import { useState , useEffect } from 'react';

interface image {
    image: any,
    alt: string,
};

const images: image[] = [
    { image: food1 , alt: 'A delecious food one !'},
    { image: food2 , alt: 'A delecious food two !'},
    { image: food3 , alt: 'A delecious food three !'},
];



export default function ImageSliderShow(){
    const [currentIndex, setCurrentIndex] =  useState<number>(0);

    useEffect(()=>{
        const intervel = setInterval(()=>{
            setCurrentIndex((prevIndex: number)=>{
                return prevIndex < images.length - 1 ? prevIndex + 1 : 0; 
            });
        },2000);
        return ()=> clearInterval(intervel);
    },[]);


    return (
        <div className="w-[100%] h-[100%]">
            {
                images.map((img,index)=>(
                    <Image
                        key={'img-slide'+ index}
                        src={img.image}
                        alt={img.alt}
                        style={{transform: 'translate(-50%,-50%)'}}
                        className={"w-[13em] h-[13em] absolute top-[50%] left-[50%] "+(index === currentIndex ? 'z-[200] ':'z-[100] ')}
                    />
                ))
            }
        </div>
    );
};

