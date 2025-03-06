
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emma, 12",
    role: "Student",
    content: "Quantum Quest made quantum physics fun! I never thought I'd understand superposition, but the interactive games helped me get it.",
    avatar: "E"
  },
  {
    name: "Dr. James Chen",
    role: "Physics Teacher",
    content: "I've implemented Quantum Quest in my classroom, and the difference in student engagement is remarkable. The curriculum is rigorous yet accessible.",
    avatar: "JC"
  },
  {
    name: "Michael, 15",
    role: "Student",
    content: "The quantum simulators are amazing. I built my first quantum circuit and it actually made sense! Now I'm showing my friends how it works.",
    avatar: "M"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-quantum-50 dark:bg-quantum-950">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Students Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-quantum-500">
                    <Quote size={24} />
                  </div>
                  <p className="mb-6 text-quantum-700 dark:text-quantum-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-quantum-200 text-quantum-700">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
