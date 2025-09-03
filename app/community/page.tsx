
import Image from 'next/image';

import mealIcon from '../../assets/mealIcon.png';
import communityIcon from '../../assets/communityIcon.png';
import eventsIcon from '../../assets/eventsIcon.png';

export default function communityPage(){
    return (
        <>
        <header className="w-[80%] mx-[auto] flex flex-col justify-center items-center h-[15em]">
            <h1 className="text-[2em] font-[700] text-[#2f2f2f] py-[10px]">
                One shared passion: <span className="text-[orange]">Food</span>
            </h1>
            <p className="font-[1.4em] font-[500]">Join our community and enjoy recipes!</p>
        </header>
        <main className="w-[80%] mx-[auto] flex flex-col justify-start items-center" >
            <h2 className="text-[1.4em] font-[700] mx-[auto]">Community Perks</h2>
            <ul className="">
                <li className="my-[10px] mx-[auto] w-[20em] flex flex-col justify-center items-center ">
                    <Image className='w-[6em] h-[5em] my-[10px]' src={mealIcon} alt='A delecios food here ' />
                    <p className="font-[600] text-[1em] text-[#2f2f2f]">Share & dicover recipes</p>
                </li>
                <li className="my-[10px] mx-[auto] w-[20em] flex flex-col justify-center items-center">
                    <Image className='w-[6em] h-[5em] my-[10px]' src={communityIcon} alt='A crowd of people cooking' />
                    <p  className="font-[600] text-[1em] text-[#2f2f2f]">Find new freinds like minded people</p>
                </li>
                <li className="my-[10px] mx-[auto] w-[20em] flex flex-col justify-center items-center">
                    <Image className='w-[6em] h-[5em] my-[10px]' src={communityIcon} alt='A crowd of people cooking' />
                    <p className="font-[600] text-[1em] text-[#2f2f2f]">Find new freinds like minded people</p>
                </li>
            </ul>
        </main>
        </>
    );
}