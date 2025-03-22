import React, { useEffect } from 'react';
import './Whiteboard.css';  // Import the CSS file

const Whiteboard = () => {
  useEffect(() => {
    const canvas = document.getElementById('letterCanvas');
    const ctx = canvas.getContext('2d');
    const currentLetterDiv = document.getElementById('currentLetter');
    const letterLabel = document.getElementById('letter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const clearBtn = document.getElementById('clearBtn');

    const letters = 'அஆஇஈअई';
    let currentIndex = 0;

    // Initialize current letter
    letterLabel.textContent = letters[currentIndex];
    currentLetterDiv.textContent = letters[currentIndex];

    // Draw the letter on the canvas as a faint guide
    function drawLetter() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      currentLetterDiv.textContent = letters[currentIndex];
    }

    // Handling drawing
    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    function startDrawing(e) {
      drawing = true;
      [lastX, lastY] = getXY(e);
    }

    function stopDrawing() {
      drawing = false;
      ctx.beginPath();
    }

    function draw(e) {
      if (!drawing) return;
      const [x, y] = getXY(e);
      ctx.strokeStyle = '#FF5733';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      [lastX, lastY] = [x, y];
    }

    function getXY(e) {
      let x, y;
      if (e.touches && e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        const rect = canvas.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      return [x, y];
    }

    // Event listeners for mouse
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Event listeners for touch
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + letters.length) % letters.length;
      letterLabel.textContent = letters[currentIndex];
      clearCanvas();
      drawLetter();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % letters.length;
      letterLabel.textContent = letters[currentIndex];
      clearCanvas();
      drawLetter();
    });

    clearBtn.addEventListener('click', () => {
      clearCanvas();
      drawLetter();
    });

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Initial setup
    drawLetter();

    return () => {
      // Cleanup event listeners
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
      canvas.removeEventListener('touchcancel', stopDrawing);
    };
  }, []);

  return (
    <div>
      <h1>Alphabet Tracing App</h1>
      <div id="container">
        <canvas id="letterCanvas" width="500" height="500"></canvas>
        <div id="currentLetter"></div>
      </div>
      <div id="letterLabel">Letter: <span id="letter">अ</span></div>
      <div id="controls">
        <button id="prevBtn">Previous</button>
        <button id="clearBtn">Clear</button>
        <button id="nextBtn">Next</button>
      </div>
    </div>
  );
};

export default Whiteboard;
