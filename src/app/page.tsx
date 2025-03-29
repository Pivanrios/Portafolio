import Link from "next/link";
import Hero from "../../components/Hero";
import Toggle from "../../components/ui/Toggle";


export default function Home() {
  return (
   <>
   <main className=" relative flex justify-center items-center">
    <div>
      {//navbar
      }<div className="flex flex-row p-3">
        <h2 className=" italic ">Pivanrios</h2>
        <nav>
          <ul className="flex flex-row justify-center space-x-1 ">
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
