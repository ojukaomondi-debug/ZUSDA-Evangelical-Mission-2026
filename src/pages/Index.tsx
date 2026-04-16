import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DetailsSection from "@/components/DetailsSection";
import ThemeSection from "@/components/ThemeSection";
import BudgetSection from "@/components/BudgetSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import CommitteeSection from "@/components/CommitteeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DetailsSection />
    <ThemeSection />
    <BudgetSection />
    <GetInvolvedSection />
    <CommitteeSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
