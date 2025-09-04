import MealGird from "@/components/meals/meal-grid";
import Link from "next/link";

import food1 from '../../assets/food1.png';

export default function MealsPage(){


    const meals:{id:number,title:string,slug:string,image: any ,summary: string ,creator:string }[] = [
        {
            id: 1,
            title: 'Donatelos choclate!',
            slug: 'xchjk',
            image: food1,
            summary: 'a delicouse food here you can see delicouse food here you can see delicouse food here you can see ...',
            creator: 'Me',
        },
        {
            id: 133,
            title: 'Donatelos choclate!',
            slug: 'xchjk',
            image: food1,
            summary: 'a delicouse food here you can see delicouse food here you can see delicouse food here you can see ...',
            creator: 'Me',
        },
        {
            id: 21,
            title: 'Donatelos choclate!',
            slug: 'xchjk',
            image: food1,
            summary: 'a delicouse food here you can see delicouse food here you can see delicouse food here you can see ...',
            creator: 'Me',
        },
        {
            id: 13,
            title: 'Donatelos choclate!',
            slug: 'xchjk',
            image: food1,
            summary: 'a delicouse food here you can see delicouse food here you can see delicouse food here you can see ...',
            creator: 'Me',
        },
        {
            id: 11,
            title: 'Donatelos choclate!',
            slug: 'xchjk',
            image: food1,
            summary: 'a delicouse food here you can see delicouse food here you can see delicouse food here you can see ...',
            creator: 'Me',
        },
    ];

    return (
        <>
            <header className="w-[80%] mx-[auto] h-[15em] flex flex-col justify-center items-center ">
                <h1 className="text-[2em] py-[10px] text-center font-[600] text-[#2f2f2f]">Delecious meals , created{' '}<span className="">by you</span> </h1>
                <p className="text-[1.2em] py-[10px] text-center font-[600] text-[#2f2f2f]">chose your favorate recipe and cook it your self , it is easy and fun !</p>
                <p className="text-[1.2em] py-[10px] text-center font-[600] text-[#2f2f2f]">
                    <Link href='/meals/share' className="" >share your favorate recipe</Link>
                </p>
            </header>
            <main className="w-[80%] mx-[auto]">
                <MealGird meals={meals} />
            </main>
        </>
    );  
}