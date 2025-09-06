// components/form/submit-btn.tsx
'use client';

import { useFormStatus } from "react-dom";


export default function SubmitBtn(){
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className="bg-[orange] py-[5px] px-[10px] rounded-[5px] font-[400] text-[white] my-[5px]" type="submit">
            {pending ? 'Sharing...' : 'Share Meal'}
        </button>
    );
}