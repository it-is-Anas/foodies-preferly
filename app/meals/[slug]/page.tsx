import type { Params } from "next/dist/server/request/params";

export default function MealsPost({params}: {params:Params}){ // here there is issue (1)
    return (
        <div className="">
            <h1 className="">Meals Post</h1>
            <p className="w-[100%] my-[1em] p-[10px] font-[700] rounded-[10px] bg-[tomato]">{ params.slug }</p>{/* // here there is issue (2) */}
        </div>
    );
}