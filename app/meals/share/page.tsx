import FormInput from "@/components/form/form-input";
import ImagePicker from "@/components/form/image-picker";

export default function ShareMealsPage(){
    return (
        <>
            <header className="w-[80%] mx-[auto]">
                <h1 className="text-[2em] font-[500] py-[10px]">
                    share your <span className="text-[orange] font-[700]">Favorate meal</span>
                </h1>
                <p className="text-[1.3em] py-[10px]">Or any other meal you feel needs sharing !</p>
            </header>
            <main className="w-[80%] mx-[auto]">
                <form action="" className="">
                    <div className="">
                        <div className="flex justify-start items-center">
                            <FormInput label="name" />
                            <FormInput label="email" />
                        </div>
                        <div className="flex justify-start items-center">
                            <FormInput cls="w-[27em]" label="title" />
                        </div>
                        <div className="flex justify-start items-center">
                            <FormInput cls="w-[27em]"  label="summary" />
                        </div>
                        <p className={`flex-col flex w-[27em]`} >
                            <label htmlFor='instrcs' className="">{'instructions'}</label>
                            <textarea className="text-[#f2f2f2] px-[10px] py-[5px] h-[7em] rounded-[5px] border border-1px border-solid broder-[gray] bg-[#2f2f2f] m-[5px] w-[90%]" name="" id="instrcs"></textarea>
                        </p>
                        <ImagePicker label="image" name="image" />
                        <p className={`flex  items-center justify-end w-[24.4em]`}>
                            <button className="bg-[orange] py-[5px] px-[10px] rounded-[5px] font-[400] text-[white] my-[5px]" type="submit"> share meal </button>
                        </p>
                    </div>
                </form>
            </main>

        </>
    );
}