import Link from "next/link";


export default function Home() {
  return (
   <>
   <main>
    <div>
      {//navbar
      }<div className="flex flex-row justify-between p-3">
        <h2>Pivanrios</h2>
        <nav>
          <ul className="flex flex-row justify-center space-x-1">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Connect</Link>
          </ul>
        </nav>
      </div>

      
    </div>
   </main>
   </>
  );
}
