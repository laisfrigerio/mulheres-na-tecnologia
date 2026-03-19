import { Hero } from "@/components/Hero";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { DynamicContent } from "@/components/DynamicContent";

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicContent />
      <Community />
      <Footer />
    </>
  );
}
