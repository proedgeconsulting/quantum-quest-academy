
import React, { useEffect, useRef } from 'react';

const QuantumChessSimulator: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quantum Chess Simulator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: #1a1a1a;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .board {
            display: grid;
            grid-template-columns: repeat(8, 60px);
            gap: 0;
            border: 2px solid #666;
            margin: 20px;
        }

        .square {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            cursor: pointer;
            position: relative;
        }

        .white { background: #eee; color: #222; }
        .black { background: #222; color: #eee; }

        .quantum-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 150, 255, 0.3);
        }

        .quantum-dot {
            width: 10px;
            height: 10px;
            background: #00f;
            border-radius: 50%;
            position: absolute;
        }

        .controls {
            display: flex;
            gap: 10px;
            margin: 20px;
        }

        button {
            padding: 10px 20px;
            background: #00f;
            border: none;
            color: white;
            cursor: pointer;
            border-radius: 5px;
        }

        .entangled {
            box-shadow: 0 0 15px #0ff;
        }
    </style>
</head>
<body>
    <h1>Quantum Chess Simulator</h1>
    <div class="controls">
        <button id="quantumMode">Quantum Mode (OFF)</button>
        <button id="measure">Measure</button>
    </div>
    <div class="board" id="board"></div>

    <script>
        let quantumMode = false;
        let selectedPiece = null;
        let quantumStates = new Map();
        let entangledPairs = [];

        // Initialize board
        function createBoard() {
            const board = document.getElementById('board');
            board.innerHTML = '';
            
            for(let i = 0; i < 64; i++) {
                const square = document.createElement('div');
                square.className = \`square \${Math.floor(i/8 + i%8) % 2 === 0 ? 'white' : 'black'}\`;
                square.dataset.position = i;
                
                // Add initial pieces
                if(i === 0) square.textContent = '♜';
                if(i === 4) square.textContent = '♚';
                if(i === 63) square.textContent = '♔';
                
                square.addEventListener('click', handleSquareClick);
                board.appendChild(square);
            }
        }

        function handleSquareClick(e) {
            const square = e.target;
            const position = parseInt(square.dataset.position);
            
            if(quantumMode) {
                handleQuantumMove(square);
            } else {
                handleClassicalMove(square);
            }
        }

        function handleClassicalMove(square) {
            if(selectedPiece) {
                movePiece(selectedPiece, square);
                selectedPiece = null;
            } else if(square.textContent) {
                selectedPiece = square;
                highlightSquare(square);
            }
        }

        function handleQuantumMove(square) {
            if(!selectedPiece) {
                selectedPiece = square;
                quantumStates.set(square, [square.dataset.position]);
                highlightSquare(square);
            } else {
                const positions = quantumStates.get(selectedPiece) || [];
                positions.push(square.dataset.position);
                quantumStates.set(selectedPiece, positions);
                showQuantumState(selectedPiece, positions);
                selectedPiece = null;
            }
        }

        function showQuantumState(piece, positions) {
            positions.forEach(pos => {
                const square = document.querySelector(\`[data-position="\${pos}"]\`);
                const overlay = document.createElement('div');
                overlay.className = 'quantum-overlay';
                square.appendChild(overlay);
                
                // Add quantum effect dots
                for(let i = 0; i < 5; i++) {
                    const dot = document.createElement('div');
                    dot.className = 'quantum-dot';
                    dot.style.left = \`\${Math.random() * 80 + 10}%\`;
                    dot.style.top = \`\${Math.random() * 80 + 10}%\`;
                    overlay.appendChild(dot);
                }
            });
        }

        function measure() {
            quantumStates.forEach((positions, piece) => {
                const randomPos = positions[Math.floor(Math.random() * positions.length)];
                movePiece(piece, document.querySelector(\`[data-position="\${randomPos}"]\`));
                clearQuantumStates();
            });
        }

        function movePiece(from, to) {
            to.textContent = from.textContent;
            from.textContent = '';
            clearQuantumStates();
        }

        function clearQuantumStates() {
            document.querySelectorAll('.quantum-overlay').forEach(el => el.remove());
            quantumStates.clear();
        }

        function highlightSquare(square) {
            document.querySelectorAll('.square').forEach(sq => 
                sq.style.backgroundColor = sq.classList.contains('white') ? '#eee' : '#222');
            square.style.backgroundColor = '#ff0';
        }

        // Event Listeners
        document.getElementById('quantumMode').addEventListener('click', function() {
            quantumMode = !quantumMode;
            this.textContent = \`Quantum Mode (\${quantumMode ? 'ON' : 'OFF'})\`;
            selectedPiece = null;
            clearQuantumStates();
        });

        document.getElementById('measure').addEventListener('click', measure);

        // Initialize
        createBoard();
    </script>
</body>
</html>
    `;
    
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(htmlContent);
      doc.close();
    }
  }, []);
  
  return (
    <div className="quantum-chess-simulator">
      <div className="relative overflow-hidden rounded-lg border bg-background shadow">
        <iframe 
          ref={iframeRef}
          title="Quantum Chess Simulator"
          className="w-full h-[600px] border-0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        <p><strong>How to play:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>In Classical Mode: Click a piece to select it, then click a destination square to move it.</li>
          <li>In Quantum Mode: Click a piece, then click multiple squares to put it in superposition.</li>
          <li>Click "Measure" to collapse all quantum states into a single position.</li>
        </ul>
      </div>
    </div>
  );
};

export default QuantumChessSimulator;
