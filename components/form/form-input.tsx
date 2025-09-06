export default function FormInput({
    label,
    cls,
}:{
    label: string,
    cls?: string,
}){

    const id =( label + Math.random() )as string;
    return (
        <p className={`flex-col flex w-[12.79em] ${cls}`}>
            <label htmlFor={id} className="">{label}</label>
            <input type="text" id={id} className="text-[#f2f2f2] px-[10px] py-[5px] rounded-[5px] border border-1px border-solid broder-[gray] bg-[#2f2f2f] m-[5px] w-[90%]" required />
        </p>
    );
}