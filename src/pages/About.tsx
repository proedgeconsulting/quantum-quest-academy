
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Brain, GraduationCap, Lightbulb, Puzzle, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-quantum-600 to-energy-600 text-transparent bg-clip-text">
            About Quantum Quest
          </h1>
          <p className="text-lg text-quantum-700 dark:text-quantum-300">
            Bringing quantum physics and computing to the next generation of scientists and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-quantum-800 dark:text-quantum-200">
              Our Mission
            </h2>
            <p className="text-quantum-700 dark:text-quantum-300 mb-4">
              Quantum Quest is dedicated to making quantum physics and computing accessible to young learners. 
              We believe that early exposure to quantum concepts can inspire the next generation of scientists, 
              engineers, and innovators.
            </p>
            <p className="text-quantum-700 dark:text-quantum-300">
              Our interactive platform transforms complex quantum principles into engaging, 
              age-appropriate learning experiences that spark curiosity and build confidence 
              in young minds exploring the quantum world.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-quantum-500/20 to-energy-500/20 p-1">
            <div className="h-full w-full flex items-center justify-center bg-white dark:bg-quantum-900 rounded-lg p-8">
              <div className="relative">
                <Atom size={180} className="text-quantum-500 animate-spin-slow" />
                <div className="absolute inset-0 bg-quantum-500/10 rounded-full blur-xl animate-quantum-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-quantum-800 dark:text-quantum-200">
            Our Approach to Learning
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Puzzle className="h-8 w-8 text-quantum-500 mb-2" />
                <CardTitle>Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Hands-on activities and experiments that make abstract quantum concepts tangible and engaging.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <GraduationCap className="h-8 w-8 text-quantum-500 mb-2" />
                <CardTitle>Scaffolded Progression</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Carefully designed learning paths that build competence and confidence at each stage.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Target className="h-8 w-8 text-quantum-500 mb-2" />
                <CardTitle>Achievement-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Milestones and rewards that celebrate progress and motivate continued exploration.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Brain className="h-8 w-8 text-quantum-500 mb-2" />
                <CardTitle>Cognitive Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Activities designed to develop critical thinking and problem-solving skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Lightbulb className="h-8 w-8 text-quantum-500 mb-2" />
                <CardTitle>Creative Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Open-ended challenges that encourage innovation and creative applications of quantum principles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Atom className="h-8 w-8 text-quantum-500 mb-2" />
                <CardTitle>Scientific Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Content developed by experts to ensure concepts are simplified without being misleading.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-800 dark:to-energy-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-quantum-800 dark:text-quantum-200">Join Our Quantum Journey</h2>
          <p className="text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
            Whether you're a student, parent, or educator, Quantum Quest provides the tools and resources 
            to explore the fascinating world of quantum physics and computing. Start your quantum journey today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
