import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ThoughtSection from "@/components/ThoughtSection";

export default function Home() {
  return (
    <div className=" flex flex-1 flex-col">
      <Hero />
      <ThoughtSection />
      <Feature />
      <Footer />
    </div>
  );
}
