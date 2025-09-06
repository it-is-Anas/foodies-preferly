import { getMeal } from "@/lib/meals";
import type { Params } from "next/dist/server/request/params";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function MealsPost({params}: {params:Params}){ // here there is issue (1)

    const slug = params?.slug;
    if(slug){
        const meal = getMeal(slug);  
        if(!meal){
            notFound();
        }
        meal.instructions.replace(/\n/g,'<br/>');
        return (
            <>
                <header className="w-[80%] m-[auto] py-[10px] flex justify-start items-center">
                    <div className="w-[20em] h-[14em]  relative">
                        <Image src={meal.image} alt={meal.title} fill  />
                    </div>
                    <div className="">
                        <h1 className="text-[2.3em] font-[700]">{meal.title}</h1>
                        <p className="text-[1.2em]">by <a className="font-[500] text-[orange]" href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
                        <p className="font-[500]">{meal.summary}</p>
                    </div>
                </header>
                <main className="w-[80%] m-[auto]">
                    <p className="w-[80%]  m-[auto] font-[700] text-[white] my-[1em] p-[10px] bg-[orange] rounded-[10px] min-h-[3em]" dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }} ></p>
                </main>
            </>
        );
    }
}