import Image  from 'next/image';
import Link from 'next/link';

export default function MealItem({title,slug,image,summary,creator}:
    {id: number,title:string,slug:string,image: any ,summary: string ,creator:string }
){
    return (
        <article className="w-[20em] p-[10px] m-[4px] rounded-[10px] bg-[#2f2f2f] text-[#f2f2f2]">
            <header className="w-[100%] h-[100%] flex flex-col justify-start items-start ">
                <img src={image} alt={title}   />
                {/* <Image src={image} alt={title}  fill  ></Image> */}
                {/* <Image src={image} alt={title}  className='w-[20em] h-[15em]'  ></Image> */}
                <div className=" mr-[auto] flex flex-col justify-start items-start">
                    <h2 className="font-[600] text-[1.4em]"> { title } </h2>
                    <p className="text-[.8em]">by { creator } </p>
                </div>
            </header>
            <div className="flex flex-col justify-start items-start">
                <p className="font-[400] text-[.8em]">{ summary }</p>
                <div className="bg-[orange] my-[5px] px-[10px] py-[5px] ml-[auto] rounded-[10px]">
                    <Link href={`/meals/${slug}`} >View Details</Link>
                </div>
            </div>
        </article>
    );
}