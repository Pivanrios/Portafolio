import Link from "next/link";
import Hero from "../../components/Hero";


export default function Home() {
  return (
   <>
   <main className=" relative bg-black flex justify-center items-center">
    <div>
      {//navbar
      }<div className="flex flex-row p-3">
        <h2 className=" italic text-white">Pivanrios</h2>
        <nav>
          <ul className="flex flex-row justify-center space-x-1 text-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Connect</Link>
          </ul>
        </nav>
      </div>

      <Hero/>
      
    </div>
   </main>
   </>
  );
}
