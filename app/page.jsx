import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover text-white">
    <section className="min-h-dvh bg-black/40 flex items-center justify-center">
      <div className="space-y-10 md:max-w-4xl p-3">
        <h1 className="md:text-5xl text-3xl font-bold">ScholarNote - A Research Hub</h1>
        <p className="md:text-2xl text-lg font-light">
          <span className="text-orange-300 font-semibold">ScholarNote</span> is a modern research hub designed for organizing, sharing and discovering 
          knowledge in one place. It allows researchers as well as students to create structured notes, 
          connect ideas, collaborate with others and turn scattered research into clear usable insights.
        </p>
        <div className="flex items-center gap-10">
          <Link href={"#"} className="bg-orange-600 px-6 py-3 uppercase font-semi-bold max-md:w-full text-center">View Our Catalogue</Link>
          <Link href={"#"} className="border px-6 py-3 font-semibold max-md:w-full text-center">Find Out More</Link>
        </div>
      </div>
    </section>
   </main>
  );
}
