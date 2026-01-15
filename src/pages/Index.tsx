import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import AccessControl from "@/components/AccessControl";
import Monitoring from "@/components/Monitoring";
import Differentials from "@/components/Differentials";
import TargetAudience from "@/components/TargetAudience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <AccessControl />
        <Monitoring />
        <Differentials />
        <TargetAudience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;