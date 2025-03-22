import React, { useEffect, useState } from 'react';
import './styles.css';
//import p5 from 'p5';

const MatchTheFollowing = () => {
    useEffect(() => {
        const sketch = (p) => {
            let states = [];
            let capitals = [];
            let shuffledCapitals = [];
            let selectedState = null;
            let selectedCapital = null;

            const data = [
                { State: "DOG", Capital: "நாய்" },
                { State: "CAT", Capital: "பூனை" },
                { State: "BIRD", Capital: "பறவை" },
                { State: "FISH", Capital: "மீன்" }
            ];

            // Box Class
            class Box {
                constructor(x, y, label, match, isCapital) {
                    this.x = x;
                    this.y = y;
                    this.width = 200;
                    this.height = 50;
                    this.label = label;
                    this.match = match;
                    this.isCapital = isCapital;
                    this.selected = false;
                }

                display() {
                    p.fill(this.selected ? 'lightblue' : 'white');
                    p.stroke(0);
                    p.rect(this.x, this.y, this.width, this.height, 10);
                    p.fill(0);
                    p.textSize(16);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.text(this.label, this.x + this.width / 2, this.y + this.height / 2);
                }

                isClicked(mx, my) {
                    return mx > this.x && mx < this.x + this.width &&
                           my > this.y && my < this.y + this.height;
                }
            }

            function shuffleCapitals() {
                shuffledCapitals = data.map(item => item.Capital);
                shuffledCapitals.sort(() => Math.random() - 0.5);
            }

            p.setup = () => {
                console.log("Setup function is running...");  // Debugging
                p.createCanvas(600, 380).parent('canvas-container');

                shuffleCapitals();

                data.forEach((e, index) => {
                    states.push(new Box(50, index * 75 + 20, e.State, e.Capital, false));
                    capitals.push(new Box(350, index * 75 + 20, shuffledCapitals[index], null, true));
                });
            }

            p.draw = () => {
                p.background(220);
                p.textSize(20);
                p.text("Match the words", p.width / 2, 10);

                states.forEach(state => state.display());
                capitals.forEach(capital => capital.display());

                if (selectedState && selectedCapital) {
                    p.stroke('black');
                    p.strokeWeight(2);
                    p.line(selectedState.x + selectedState.width, selectedState.y + selectedState.height / 2,
                           selectedCapital.x, selectedCapital.y + selectedCapital.height / 2);
                }
            }

            p.mousePressed = () => {
                for (let state of states) {
                    if (state.isClicked(p.mouseX, p.mouseY)) {
                        selectedState = state;
                        selectedState.selected = true;
                        return;
                    }
                }

                for (let capital of capitals) {
                    if (capital.isClicked(p.mouseX, p.mouseY)) {
                        selectedCapital = capital;
                        selectedCapital.selected = true;

                        if (selectedState && selectedCapital) {
                            if (selectedState.match === selectedCapital.label) {
                                console.log("Correct match!");
                            } else {
                                console.log("Incorrect match. Try again!");
                                selectedState.selected = false;
                                selectedCapital.selected = false;
                                selectedState = null;
                                selectedCapital = null;
                            }
                        }
                        return;
                    }
                }
            }
        }

        // Initialize p5 instance
        new p5(sketch);

        // Cleanup on component unmount
        return () => {
            document.getElementById('canvas-container').innerHTML = '';
        };
    }, []);

    return (
        <div>
            <header role="banner">
                <h1>Match The Following</h1>
                <p>LEARN TAMIL WORDS</p>
            </header>
            
            <main id="canvas-container" role="main"></main>

            <footer role="contentinfo">
                <p>&copy; 2025 Language Learning App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MatchTheFollowing;
