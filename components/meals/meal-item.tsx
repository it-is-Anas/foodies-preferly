import Image  from 'next/image';
import Link from 'next/link';

export default function MealItem({title,slug,image,summary,creator}:
    {title:string,slug:string,image: string ,summary: string ,creator:string }
){
    return (
        <article className="w-[15em]  bg-[yellow]">
            <header className="w-[100%] h-[10em] bg-[purple]">
                <Image src={image} alt={title}  className='w-[100%] h-[100%]'  ></Image>
                <div className="">
                    <h2 className=""> { title } </h2>
                    <p className="">by { creator } </p>
                </div>
            </header>
            <div className="">
                <p className="">{ summary }</p>
                <div className="">
                    <Link href={`/meals/${slug}`} >View Details</Link>
                </div>
            </div>
        </article>
    );
}