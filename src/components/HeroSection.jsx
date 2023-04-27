import Image from "next/image";
import Hero from "@/assets/hero.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="h-screen flex justify-between items-center px-20 py-8">
      <div className="w-[70%]">
        <h1 className="text-3xl font-semibold">Let&apos;s Watch Together</h1>
        <h2 className="text-2xl font-semibold my-4 text-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Amet assumenda sit illo
          explicabo doloribus commodi autem nesciunt rem necessitatibus id?
        </h2>
        <button className="bg-gradient-to-tr from-slate-800 to-slate-600 text-white my-1 px-5 py-1 rounded-r-xl hover:bg-gradient hover:from-slate-600 hover:to-slate-800 transition duration-500 ease-in-out">
          <Link href="/movies">Explore Movies</Link>
        </button>
      </div>

      <div>
        <Image src={Hero} alt="" width={360} height={360} />
      </div>
    </main>
  );
}
