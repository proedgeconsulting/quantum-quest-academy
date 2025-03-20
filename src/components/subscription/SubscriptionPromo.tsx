
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const SubscriptionPromo = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-12 bg-gradient-to-b from-quantum-50 to-white dark:from-quantum-950 dark:to-quantum-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="text-center space-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="text-quantum-600 dark:text-quantum-300 py-1 px-4 border-quantum-300 dark:border-quantum-700">
            Premium Access
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter">
            Unlock Advanced Quantum Knowledge
          </h2>
          <p className="text-quantum-600 dark:text-quantum-300 max-w-2xl mx-auto">
            Upgrade your learning experience with our premium subscription plans and gain access to comprehensive quantum computing courses
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-quantum-500 dark:text-quantum-400">
                  <Sparkles className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Basic</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Access to all Level 1 & 2 courses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Interactive quantum simulators</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Downloadable resources</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/pricing")}
                >
                  Start at $19.99/mo
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col border-quantum-500 dark:border-quantum-400 shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-quantum-500 hover:bg-quantum-500 text-white py-1 px-4">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-quantum-500 dark:text-quantum-400">
                  <Sparkles className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Professional</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Access to all courses (Levels 1-3)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Advanced quantum programming tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Personalized learning path</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Completion certificates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-quantum-500 hover:bg-quantum-600"
                  onClick={() => navigate("/pricing")}
                >
                  Start at $39.99/mo
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-quantum-500 dark:text-quantum-400">
                  <Sparkles className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Ultimate</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Everything in Professional tier</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>One-on-one mentorship sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Real quantum hardware access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span>Early access to new courses</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/pricing")}
                >
                  Start at $89.99/mo
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="link" 
            onClick={() => navigate("/pricing")}
            className="text-quantum-600 dark:text-quantum-300 group"
          >
            <span>View all subscription plans</span>
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPromo;
