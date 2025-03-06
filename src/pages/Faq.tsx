
import React from "react";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle, Info } from "lucide-react";

const Faq = () => {
  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-quantum-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-quantum-700 dark:text-quantum-300">
            Get answers to common questions about Quantum Quest
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  What age group is Quantum Quest designed for?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  Quantum Quest is designed primarily for students aged 10-17, with different difficulty levels to accommodate various ages and prior knowledge. Our content is carefully crafted to make quantum concepts accessible without oversimplifying the science.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  Do I need any prior knowledge to start learning?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  No prior knowledge of quantum physics is required! We start with the fundamentals and gradually build up to more complex concepts. Basic math skills are helpful but not mandatory, as we focus on conceptual understanding first.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  How do I track my learning progress?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  Quantum Quest includes a comprehensive progress tracking system that shows completed lessons, quiz scores, and earned achievements. You can view your progress dashboard to see how far you've come and what's next in your quantum journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  Are the quantum simulations scientifically accurate?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  Yes! While we've simplified certain aspects to make learning more accessible, our simulations and tools are based on real quantum principles and equations. Our content is developed with input from quantum physicists and educators to ensure scientific accuracy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  Can I use Quantum Quest for school projects?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  Absolutely! Quantum Quest is designed to complement school science curricula. Our interactive tools and simulations are perfect for science projects, and many teachers use our platform to introduce quantum concepts in their classrooms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  How often is new content added?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  We regularly update our platform with new lessons, activities, and tools. We typically add new content monthly, with major course additions quarterly. Follow our updates section to stay informed about the latest additions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  Do I need special equipment to use the interactive tools?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  No special equipment is needed! All of our interactive tools run in your web browser. We recommend using an updated browser for the best experience, and some activities work better on larger screens, but no additional hardware or software is required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg text-quantum-800 dark:text-quantum-200">
                  Is there a way for parents to monitor learning progress?
                </AccordionTrigger>
                <AccordionContent className="text-quantum-700 dark:text-quantum-300">
                  Yes, we offer parent accounts that can be linked to student accounts. This allows parents to view progress, achievements, and time spent learning without interfering with the student's independent learning experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto bg-quantum-100 dark:bg-quantum-800 rounded-lg p-6 flex gap-4">
          <div className="flex-shrink-0">
            <Info className="h-10 w-10 text-quantum-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-quantum-800 dark:text-quantum-200 mb-2">Still have questions?</h3>
            <p className="text-quantum-700 dark:text-quantum-300 mb-4">
              If you couldn't find the answer to your question, feel free to contact our support team. We're here to help!
            </p>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-quantum-500" />
              <span className="text-quantum-700 dark:text-quantum-300">Email: support@quantumquest.edu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
