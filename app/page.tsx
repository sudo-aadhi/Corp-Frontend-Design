import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-[8300px] font-[family-name:var(--font-geist-sans)]  bg-black">
      <Header />
      <Hero />
    </div>
  );
}
