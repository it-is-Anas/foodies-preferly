import ImageSliderShow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function WorkSpace(){
  return (
    <>
      <header className="w-[80%] mx-[auto] py-[2em] grid grid-cols-[50%_50%]" >
        <div className="relative w-[100%] h-[100%]"> 
          <ImageSliderShow /> 
        </div>
        <div className="w-[100%]">
          <div className="">
            <h1 className="font-[600] py-[10px] text-[Orange] text-[2em]">NEXTLEVEL FOODIES for next level for next level</h1>
            <p className="font-[500] py-[10px] text-[1.2em] text-[#2f2f2f]">Taste & share food all over the world </p>
          </div>
          <div className="py-[10px]">
            <Link className="text-[orange] font-[500] " href="/commuity" >Join the community</Link>
            <Link className="text-[white] bg-[orange] mx-[10px] p-[10px] rounded-[4px] font-[700] " href="/meals" >Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className="w-[80%] mx-[auto]" >
        <section className="text-center">
          <h2 className="font-[600] text-[1.4em] py-[20px]">How it works?!</h2>
          <p className="font-[500] text-[1.1em] py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
          </p>
          <p className="font-[500] text-[1.1em] py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
          </p>
        </section>
        <section className="text-center">
          <h2 className="font-[600] text-[1.4em] py-[20px]">How it works?!</h2>
          <p className="font-[500] text-[1.1em] py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
          </p>
          <p className="font-[500] text-[1.1em] py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
          </p>
        </section>
        <section className="text-center">
          <h2 className="font-[600] text-[1.4em] ">How it works?!</h2>
          <p className="font-[500] text-[1.1em] py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
          </p>
          <p className="font-[500] text-[1.1em] py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus aliquid alias architecto facilis impedit, velit quod, hic vel facere magni nisi dolores et incidunt. Labore deleniti in possimus harum!
          </p>
        </section>
      </main>
    </>    
  );
}