'use client';

import FormInput from "@/components/form/form-input";
import ImagePicker from "@/components/form/image-picker";
import SubmitBtn from "@/components/form/submit-btn";
import { shareMeal } from '@/lib/actions';
import { useActionState } from "react";

interface FormState {
  message?: string;
};

const initialState: FormState = {};

export default function ShareMealsPage() {
  const [state, formAction] = useActionState(shareMeal, initialState);

  return (
    <>
      <header className="w-[80%] mx-[auto]">
        <h1 className="text-[2em] font-[500] py-[10px]">
          share your <span className="text-[orange] font-[700]">Favorate meal</span>
        </h1>
        <p className="text-[1.3em] py-[10px]">Or any other meal you feel needs sharing !</p>
      </header>
      <main className="w-[80%] mx-[auto]">
        <form className="" action={formAction}>
          <div className="">
            <div className="flex justify-start items-center">
              <FormInput label="name" name='name' />
              <FormInput label="email" name='email' />
            </div>
            <div className="flex justify-start items-center">
              <FormInput cls="w-[27em]" label="title" name='title' />
            </div>
            <div className="flex justify-start items-center">
              <FormInput cls="w-[27em]" label="summary" name='summary' />
            </div>
            <p className={`flex-col flex w-[27em]`}>
              <label htmlFor='instrcs' className="">{'instructions'}</label>
              <textarea name='instructions' className="text-[#f2f2f2] px-[10px] py-[5px] h-[7em] rounded-[5px] border border-1px border-solid broder-[gray] bg-[#2f2f2f] m-[5px] w-[90%]" id="instrcs"></textarea>
            </p>
            <ImagePicker label="image" name="image" />
            {state?.message && <p className="">{state.message}</p>}
            <p className={`flex  items-center justify-end w-[24.4em]`}>
              <SubmitBtn />
            </p>
          </div>
        </form>
      </main>
    </>
  );
}