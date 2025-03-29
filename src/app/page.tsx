import Link from "next/link";
import Hero from "../../components/Hero";
import Toggle from "../../components/ui/Toggle";


export default function Home() {
  return (
   <>
   <main className=" relative flex flex-col">
    <div>
      {//navbar
      }<div className="flex flex-row p-1 bg-amber-200 items-baseline justify-around min-w-full">
        
        <h2 className=" italic ">Pivanrios</h2>

        <nav>
          <ul className="flex flex-row xl:flex-col">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Connect</Link>
          </ul>
        </nav>

        <Toggle/>

      </div>

      <Hero/>
      
    </div>
   </main>
   </>
  );
}
