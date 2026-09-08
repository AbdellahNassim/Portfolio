import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Hero } from "./_components/Hero";
import { Process } from "./_components/Process";
import { Services } from "./_components/Services";
import { Stack } from "./_components/Stack";
import { Work } from "./_components/Work";

export default function NewHome() {
  return (
    <main>
      <Hero />
      <Work />
      <Services />
      <Process />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}
