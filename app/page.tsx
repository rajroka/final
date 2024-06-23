
import Herosection from "@/Components/Herosection";
import About from "./About/About";
import Card from "@/Components/Card";
export default function Home() {
  return (
    <div className=" overflow-y-hidden">
      <Herosection />
      <section id="about">
        <About />
      </section>

      <Card />
    </div>
  );
}
