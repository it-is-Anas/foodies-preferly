'use client';

import Image from "next/image";
import { ReactNode, useRef, useState } from "react";

export default function ImagePicker({label,name}:{
    label:string,
    name:string,
}){
    const [pickedImg,setPickedImg] = useState();
    const inputElement = useRef<any>();

    function handleClick(){
        if(inputElement.current && inputElement.current.click)
            inputElement.current.click();
    }   

    function handleImgChange(event){
        const file = event.target.files[0];
        if(!file){
            return ;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPickedImg(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    

    return(
        <div className="">
            <label htmlFor={name} className="hidden">{ label }</label>
            <div className="">
                <div className="relative  !border !border-solid !border-[1px] rounded-[2px]  w-[6em] h-[6em]  max-h-[10em] flex justify-center items-center ">
                    {!pickedImg && 
                        <p className="text-[10px] w-[80%] text-center">No Image picked yet</p>
                    }

                    {
                        pickedImg &&
                        <Image src={pickedImg} alt='the image selected by the user ' fill />
                    }
                </div>
                <input 
                    className="hidden" 
                    type='file'
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={inputElement}
                    onChange={handleImgChange}
                />
            </div>
            <button onClick={handleClick} className="bg-[royalblue] text-[#f2f2f2] py-[5px] px-[15px] my-[5px] rounded-[3px]" type="button" >
                pick an image
            </button>
        </div>
    );
}