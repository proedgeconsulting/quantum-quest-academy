
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/courses/HeroSection";
import CourseTabs from "@/components/courses/CourseTabs";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Courses Section */}
        <section className="py-16 bg-white dark:bg-quantum-950">
          <div className="container mx-auto px-4">
            <CourseTabs />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
