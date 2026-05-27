import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import BookingForm from "@/components/BookingForm";
import Areas from "@/components/Areas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <BookingForm />
      <Areas />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
