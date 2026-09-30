import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { EventPanels } from "@/components/events/EventPanels";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <EventPanels />
      <Contact />
    </>
  );
}
