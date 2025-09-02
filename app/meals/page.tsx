import Link from "next/link";

export default function MealsPage(){
    return (
        <div className="">
            <p className="w-[100%] my-[1em] p-[10px] font-[700] rounded-[10px] bg-[tomato]"> <Link href='/meals/meal-one' >Meal One</Link> </p>
            <p className="w-[100%] my-[1em] p-[10px] font-[700] rounded-[10px] bg-[tomato]"><Link href='/meals/meal-two' >Meal ywo</Link> </p>
            <p className="w-[100%] my-[1em] p-[10px] font-[700] rounded-[10px] bg-[tomato]"><Link href='/meals/meal-three' >Meal three</Link> </p>
        </div>
    );
}