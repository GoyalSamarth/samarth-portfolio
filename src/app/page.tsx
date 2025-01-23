import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
      <Analytics />
    </>
  );
}
