import MealGird from "@/components/meals/meal-grid";
import Link from "next/link";


import { getMeals } from '../../lib/meals';
import { Suspense } from "react";

import LoadingPage from './loading-out';


async function DisplayMeals(){
    const meals = await getMeals ();

    return <MealGird meals={meals} />;
}

export default async function MealsPage(){


    


    return (
        <>
            <header className="w-[80%] mx-[auto] h-[15em] flex flex-col justify-center items-center ">
                <h1 className="text-[2em] py-[10px] text-center font-[600] text-[#2f2f2f]">Delecious meals , created{' '}<span className="">by you</span> </h1>
                <p className="text-[1.2em] py-[10px] text-center font-[600] text-[#2f2f2f]">chose your favorate recipe and cook it your self , it is easy and fun !</p>
                <p className="text-[1.2em] py-[10px] text-center font-[600] text-[#2f2f2f]">
                    <Link href='/meals/share' className="" >share your favorate recipe</Link>
                </p>
            </header>
            <main className="w-[80%] h-[50vh] mx-[auto] relative">
                <Suspense fallback={<LoadingPage />} >
                    <DisplayMeals />
                </Suspense>
            </main>
        </>
    );  
}