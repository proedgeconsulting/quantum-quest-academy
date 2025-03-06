
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Atom, Calculator, Code, Dna, Lightbulb, Microscope, Telescope, Wand2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import QuantumSimulator from "@/components/QuantumSimulator";
import AtomSimulation from "@/components/AtomSimulation";

const Tools = () => {
  const { user, loading: authLoading } = useAuth();
  const [activeToolDialog, setActiveToolDialog] = useState<string | null>(null);

  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  const handleLaunchTool = (toolId: string) => {
    setActiveToolDialog(toolId);
  };

  const closeToolDialog = () => {
    setActiveToolDialog(null);
  };

  const renderToolContent = () => {
    switch (activeToolDialog) {
      case "atom-builder":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Atom Builder</DialogTitle>
              <DialogDescription>
                Build and explore atomic structures with protons, neutrons, and electrons
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <AtomSimulation />
            </div>
          </>
        );
      case "quantum-circuit":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Quantum Circuit Simulator</DialogTitle>
              <DialogDescription>
                Design and test simple quantum circuits with gates and qubits
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <QuantumSimulator />
            </div>
          </>
        );
      case "quantum-calculator":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Quantum Calculator</DialogTitle>
              <DialogDescription>
                Perform calculations with quantum numbers and constants
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="text-2xl font-mono bg-quantum-100 dark:bg-quantum-900 p-6 rounded-md">
                    <div className="mb-4">ℏ = 1.054571817 × 10<sup>-34</sup> J·s</div>
                    <div className="mb-4">E = ℏω</div>
                    <div>Δx·Δp ≥ ℏ/2</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-quantum-700 dark:text-quantum-300 mb-2 block">
                      Calculate photon energy (E = hf)
                    </label>
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        placeholder="Frequency (Hz)" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" 
                      />
                      <Button>Calculate</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-quantum-700 dark:text-quantum-300 mb-2 block">
                      Calculate wavelength (λ = h/p)
                    </label>
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        placeholder="Momentum (kg·m/s)" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" 
                      />
                      <Button>Calculate</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "quantum-visualizer":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Quantum Visualizer</DialogTitle>
              <DialogDescription>
                Visualize quantum waves and probability distributions
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <QuantumSimulator />
            </div>
          </>
        );
      case "particle-explorer":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Particle Explorer</DialogTitle>
              <DialogDescription>
                Learn about fundamental particles and their properties
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Electron", symbol: "e-", charge: "-1", mass: "0.511 MeV/c²", spin: "1/2", color: "bg-blue-500" },
                  { name: "Proton", symbol: "p+", charge: "+1", mass: "938.3 MeV/c²", spin: "1/2", color: "bg-red-500" },
                  { name: "Neutron", symbol: "n", charge: "0", mass: "939.6 MeV/c²", spin: "1/2", color: "bg-gray-500" },
                  { name: "Photon", symbol: "γ", charge: "0", mass: "0", spin: "1", color: "bg-yellow-500" },
                  { name: "Muon", symbol: "μ-", charge: "-1", mass: "105.7 MeV/c²", spin: "1/2", color: "bg-purple-500" },
                  { name: "Tau", symbol: "τ-", charge: "-1", mass: "1777 MeV/c²", spin: "1/2", color: "bg-green-500" }
                ].map((particle, index) => (
                  <div key={index} className="border border-quantum-200 dark:border-quantum-800 rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex justify-center mb-3">
                      <div className={`h-12 w-12 rounded-full ${particle.color} flex items-center justify-center text-white font-bold`}>
                        {particle.symbol}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">{particle.name}</h3>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-quantum-600 dark:text-quantum-400">Charge:</span>
                        <span>{particle.charge}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-quantum-600 dark:text-quantum-400">Mass:</span>
                        <span>{particle.mass}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-quantum-600 dark:text-quantum-400">Spin:</span>
                        <span>{particle.spin}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case "quantum-experiments":
        return (
          <>
            <DialogHeader>
              <DialogTitle>Quantum Experiments</DialogTitle>
              <DialogDescription>
                Simulations of famous experiments in quantum physics
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-6">
                <div className="border border-quantum-200 dark:border-quantum-800 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2">Double Slit Experiment</h3>
                  <p className="text-sm text-quantum-600 dark:text-quantum-400 mb-4">
                    The experiment that demonstrates the wave-particle duality of quantum objects
                  </p>
                  <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <p className="mb-2">Interactive simulation coming soon</p>
                      <Button variant="outline" size="sm">Watch Video</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-quantum-200 dark:border-quantum-800 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2">Quantum Entanglement</h3>
                  <p className="text-sm text-quantum-600 dark:text-quantum-400 mb-4">
                    Explore the "spooky action at a distance" of entangled particles
                  </p>
                  <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <p className="mb-2">Interactive simulation coming soon</p>
                      <Button variant="outline" size="sm">Watch Video</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

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
              <Button className="w-full" onClick={() => handleLaunchTool("atom-builder")}>Launch Tool</Button>
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
              <Button className="w-full" onClick={() => handleLaunchTool("quantum-circuit")}>Launch Tool</Button>
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
              <Button className="w-full" onClick={() => handleLaunchTool("quantum-calculator")}>Launch Tool</Button>
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
              <Button className="w-full" onClick={() => handleLaunchTool("quantum-visualizer")}>Launch Tool</Button>
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
              <Button className="w-full" onClick={() => handleLaunchTool("particle-explorer")}>Launch Tool</Button>
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
              <Button className="w-full" onClick={() => handleLaunchTool("quantum-experiments")}>Launch Tool</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Tool Dialog */}
      <Dialog open={!!activeToolDialog} onOpenChange={(isOpen) => !isOpen && closeToolDialog()}>
        <DialogContent className="max-w-4xl">
          {renderToolContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tools;
