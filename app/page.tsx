
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Herosection from "@/Components/Herosection";
import About from "@/app/about/About";

import Card from "@/Components/Card";
export default function Home() {
  return (
   <>
   <Herosection />
   <section id="about">
      <About />
   </section>

      <Card /></>
  );
}
