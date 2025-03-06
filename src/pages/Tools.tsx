
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Atom, Calculator, Code, Dna, Lightbulb, Microscope, Telescope, Wand2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Tools = () => {
  const { user, loading: authLoading } = useAuth();

  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-quantum-900 dark:text-white">
            Quantum Learning Tools
          </h1>
          <p className="text-lg text-quantum-700 dark:text-quantum-300">
            Interactive tools to help you explore and understand quantum concepts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Atom Builder */}
          <Card className="border-quantum-200 dark:border-quantum-800 hover:border-quantum-400 dark:hover:border-quantum-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Atom className="h-6 w-6 text-quantum-500" />
                <CardTitle>Atom Builder</CardTitle>
              </div>
              <CardDescription>
                Build and explore atomic structures with protons, neutrons, and electrons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md overflow-hidden flex items-center justify-center">
                <div className="relative">
                  <Atom size={64} className="text-quantum-500 animate-spin-slow" />
                  <div className="absolute inset-0 bg-quantum-500/20 rounded-full animate-quantum-pulse"></div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Launch Tool</Button>
            </CardFooter>
          </Card>

          {/* Quantum Circuit Simulator */}
          <Card className="border-quantum-200 dark:border-quantum-800 hover:border-quantum-400 dark:hover:border-quantum-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-6 w-6 text-quantum-500" />
                <CardTitle>Quantum Circuit Simulator</CardTitle>
              </div>
              <CardDescription>
                Design and test simple quantum circuits with gates and qubits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 w-8 border-2 border-quantum-500 rounded-md flex items-center justify-center">H</div>
                  <div className="h-8 w-8 border-2 border-quantum-500 rounded-md flex items-center justify-center">X</div>
                  <div className="h-8 w-8 border-2 border-quantum-500 rounded-md flex items-center justify-center">Z</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Launch Tool</Button>
            </CardFooter>
          </Card>

          {/* Quantum Calculator */}
          <Card className="border-quantum-200 dark:border-quantum-800 hover:border-quantum-400 dark:hover:border-quantum-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-6 w-6 text-quantum-500" />
                <CardTitle>Quantum Calculator</CardTitle>
              </div>
              <CardDescription>
                Perform calculations with quantum numbers and constants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md overflow-hidden flex items-center justify-center">
                <div className="text-2xl font-mono text-quantum-700 dark:text-quantum-300">ℏ = h/2π</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Launch Tool</Button>
            </CardFooter>
          </Card>

          {/* Quantum Visualizer */}
          <Card className="border-quantum-200 dark:border-quantum-800 hover:border-quantum-400 dark:hover:border-quantum-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Wand2 className="h-6 w-6 text-quantum-500" />
                <CardTitle>Quantum Visualizer</CardTitle>
              </div>
              <CardDescription>
                Visualize quantum waves and probability distributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md overflow-hidden flex items-center justify-center">
                <svg width="120" height="60" viewBox="0 0 120 60" className="text-energy-500">
                  <path d="M0,30 C20,10 40,50 60,30 C80,10 100,50 120,30" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Launch Tool</Button>
            </CardFooter>
          </Card>

          {/* Particle Explorer */}
          <Card className="border-quantum-200 dark:border-quantum-800 hover:border-quantum-400 dark:hover:border-quantum-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Microscope className="h-6 w-6 text-quantum-500" />
                <CardTitle>Particle Explorer</CardTitle>
              </div>
              <CardDescription>
                Learn about fundamental particles and their properties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-10 w-10 rounded-full bg-quantum-500 flex items-center justify-center text-white">e-</div>
                  <div className="h-10 w-10 rounded-full bg-energy-500 flex items-center justify-center text-white">p+</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Launch Tool</Button>
            </CardFooter>
          </Card>

          {/* Quantum Experiments */}
          <Card className="border-quantum-200 dark:border-quantum-800 hover:border-quantum-400 dark:hover:border-quantum-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-6 w-6 text-quantum-500" />
                <CardTitle>Quantum Experiments</CardTitle>
              </div>
              <CardDescription>
                Simulations of famous experiments in quantum physics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md overflow-hidden flex items-center justify-center">
                <Telescope className="h-12 w-12 text-quantum-500" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Launch Tool</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tools;
