import { useState } from "react";
import { Trophy, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SimulatorHeader from "./SimulatorHeader";

const QuantumChessSimulator = () => {
  const [activeMode, setActiveMode] = useState<"classical" | "quantum">("classical");
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [boardState, setBoardState] = useState(initialBoard);
  const [quantumMoves, setQuantumMoves] = useState<QuantumMove[]>([]);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  
  const handleSquareClick = (index: number) => {
    if (selectedPiece === null) {
      if (boardState[index].piece) {
        setSelectedPiece(index);
      }
    } else {
      if (selectedPiece !== index) {
        const newBoard = [...boardState];
        const selectedPieceType = newBoard[selectedPiece].piece;
        
        if (activeMode === "classical") {
          newBoard[index].piece = selectedPieceType;
          newBoard[selectedPiece].piece = null;
          
          const fromSquare = getSquareNotation(selectedPiece);
          const toSquare = getSquareNotation(index);
          setMoveHistory(prev => [...prev, `${selectedPieceType} ${fromSquare}-${toSquare}`]);
        } else {
          const newQuantumMove: QuantumMove = {
            pieceType: selectedPieceType!,
            originalPosition: selectedPiece,
            superpositionPosition: index,
            measured: false
          };
          
          setQuantumMoves(prev => [...prev, newQuantumMove]);
          
          const fromSquare = getSquareNotation(selectedPiece);
          const toSquare = getSquareNotation(index);
          setMoveHistory(prev => [...prev, `Q:${selectedPieceType} ${fromSquare}⟨+⟩${toSquare}`]);
        }
        
        setSelectedPiece(null);
      }
    }
  };
  
  const handleMeasure = () => {
    if (quantumMoves.length === 0) return;
    
    const newBoard = [...boardState];
    const newQuantumMoves = [...quantumMoves];
    
    newQuantumMoves.forEach(move => {
      if (!move.measured) {
        const measurementResult = Math.random() > 0.5;
        
        if (measurementResult) {
          newBoard[move.originalPosition].piece = null;
          newBoard[move.superpositionPosition].piece = move.pieceType;
        }
        
        move.measured = true;
      }
    });
    
    setBoardState(newBoard);
    setQuantumMoves(newQuantumMoves);
    setMoveHistory(prev => [...prev, "Measurement performed!"]);
  };
  
  const handleReset = () => {
    setBoardState(initialBoard);
    setQuantumMoves([]);
    setSelectedPiece(null);
    setMoveHistory([]);
  };
  
  return (
    <div className="bg-white dark:bg-quantum-950 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <SimulatorHeader 
          title="Quantum Chess Simulator" 
          mode="circuit"
        />
      </div>
      
      <Tabs defaultValue="board" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="board">Chess Board</TabsTrigger>
          <TabsTrigger value="rules">Quantum Rules</TabsTrigger>
        </TabsList>
        
        <TabsContent value="board" className="p-4">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                variant={activeMode === "classical" ? "default" : "outline"}
                onClick={() => setActiveMode("classical")}
                size="sm"
              >
                Classical Mode
              </Button>
              <Button
                variant={activeMode === "quantum" ? "default" : "outline"}
                onClick={() => setActiveMode("quantum")}
                size="sm"
                className={activeMode === "quantum" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Quantum Mode
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleMeasure}
              disabled={quantumMoves.length === 0 || quantumMoves.every(m => m.measured)}
            >
              Measure
            </Button>
          </div>
          
          <div className="grid grid-cols-8 gap-0 w-full max-w-md mx-auto mb-6 border border-gray-300 dark:border-gray-700">
            {boardState.map((square, index) => (
              <div 
                key={index}
                className={`aspect-square flex items-center justify-center cursor-pointer
                  ${square.color === "white" ? "bg-amber-100 dark:bg-amber-900/30" : "bg-amber-800 dark:bg-amber-800"} 
                  ${selectedPiece === index ? "ring-2 ring-blue-500 ring-inset" : ""}
                  ${quantumMoves.some(m => !m.measured && (m.originalPosition === index || m.superpositionPosition === index)) 
                    ? "bg-gradient-to-r from-purple-200 to-purple-400 dark:from-purple-900 dark:to-purple-700" : ""}`}
                onClick={() => handleSquareClick(index)}
              >
                {square.piece && (
                  <span className="text-2xl">
                    {getPieceSymbol(square.piece)}
                  </span>
                )}
                
                {index === 63 && (
                  <span className="absolute bottom-0 right-0 text-[8px] text-gray-500">a1</span>
                )}
              </div>
            ))}
          </div>
          
          {quantumMoves.some(m => !m.measured) && (
            <div className="mb-4 p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded">
              You have {quantumMoves.filter(m => !m.measured).length} pieces in quantum superposition!
            </div>
          )}
          
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Move History</h3>
            <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded-md h-32 overflow-y-auto">
              {moveHistory.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm">No moves yet</p>
              ) : (
                <div className="space-y-1">
                  {moveHistory.map((move, index) => (
                    <div key={index} className="text-sm flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 w-8">{index + 1}.</span>
                      <span className={move.startsWith("Q:") ? "text-purple-600 dark:text-purple-400" : ""}>
                        {move}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" onClick={handleReset}>
              Reset Board
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="rules" className="p-4">
          <div className="prose dark:prose-invert prose-sm max-w-none">
            <h3>Quantum Chess Rules</h3>
            <p>
              Quantum Chess combines classical chess with quantum mechanics principles:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Classical Mode:</strong> Pieces move as in regular chess
              </li>
              <li>
                <strong>Quantum Mode:</strong> Pieces can enter superposition, existing in two places at once
              </li>
              <li>
                <strong>Measurement:</strong> When you click "Measure", quantum pieces collapse to one location
              </li>
              <li>
                <strong>Strategy:</strong> Use quantum moves to create strategic advantages and surprises
              </li>
            </ul>
            
            <p className="mt-4">
              This simulator is a simplified version of Quantum Chess. In a full game, pieces would also become entangled 
              when they interact, and rules for piece capture would account for quantum states.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const getSquareNotation = (index: number): string => {
  const file = String.fromCharCode(97 + (index % 8));
  const rank = 8 - Math.floor(index / 8);
  return `${file}${rank}`;
};

const getPieceSymbol = (piece: string): string => {
  switch (piece) {
    case 'K': return '♔';
    case 'Q': return '♕';
    case 'R': return '♖';
    case 'B': return '♗';
    case 'N': return '♘';
    case 'P': return '♙';
    case 'k': return '♚';
    case 'q': return '♛';
    case 'r': return '♜';
    case 'b': return '♝';
    case 'n': return '♞';
    case 'p': return '♟';
    default: return '';
  }
};

interface ChessSquare {
  color: "white" | "black";
  piece: string | null;
}

interface QuantumMove {
  pieceType: string;
  originalPosition: number;
  superpositionPosition: number;
  measured: boolean;
}

const initialBoard: ChessSquare[] = Array(64).fill(null).map((_, index) => {
  const row = Math.floor(index / 8);
  const col = index % 8;
  const isWhiteSquare = (row + col) % 2 === 0;
  
  let piece: string | null = null;
  
  if (row === 1) piece = 'p';
  if (row === 6) piece = 'P';
  
  if (row === 0) {
    const pieces = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
    piece = pieces[col];
  }
  if (row === 7) {
    const pieces = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
    piece = pieces[col];
  }
  
  return {
    color: isWhiteSquare ? "white" : "black",
    piece
  };
});

export default QuantumChessSimulator;
