"use Client"

import Link from "next/link";


export default function Home() {

  return (
   <div className="w-full h-[100vh] bg-white flex justify-center items-center">
 <div className="border bg-black rounded-md text-white p-1"><Link href={"/Registration"}><button>Register</button></Link></div>
   </div>
  );
}
