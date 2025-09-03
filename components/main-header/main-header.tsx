'use client';
import Link from "next/link";
import Image from "next/image";
import appLogo from '../../assets/logo.png';
import appbg from '../../assets/appBg.png'; 
import { usePathname } from "next/navigation";

export default function MainHeader(){

    const path = usePathname();
    return (
        <header className='text-[1.4em] h-[5em]  relative font-[700] text-[white] flex justify-around items-center px-[10px] py-[10px]' >
            <Image className="w-[100%] h-[250%] absolute top-0 left-0 z-[-1]" src={appbg} alt="" />
            <Link className='flex items-center justify-center' href='/'>
                <Image src={appLogo} alt="a plate with food on it" className="w-[3em] h-[2.7em]" priority />
                {/* <img src={appLogo.src} alt="a plate with food on it" className="w-[3em] h-[2.7em]" /> */}
                NextLevel Food
            </Link>

            <nav className="">
                <ul className="flex ">
                    <li className={"mx-[10px] text-active "}>
                        <Link className={path.startsWith('/meals')?'text-[orange]':''} href='/meals' >Browes Meals</Link>
                    </li>
                    <li className="mx-[10px] text-active ">
                        <Link className={path.startsWith('/community')?'text-[orange]':''} href='/community' >Foodies community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}