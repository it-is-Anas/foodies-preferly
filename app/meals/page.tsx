import MealGird from "@/components/meals/meal-grid";
import Link from "next/link";

import meals  from '../../faker/mealsFaker.ts';

export default function MealsPage(){
    return (
        <>
            <header className="w-[80%] mx-[auto] h-[15em] bg-[red]">
                <h1 className="">Delecious meals , created{' '}<span className="">by you</span> </h1>
                <p className="">chose your favorate recipe and cook it your self , it is easy and fun !</p>
                <p className="">
                    <Link href='/meals/share' className="" >share your favorate recipe</Link>
                </p>
            </header>
            <main className="w-[80%] mx-[auto] h-[15em] bg-[green]">
                <MealGird meals={meals} />
            </main>
        </>
    );  
}