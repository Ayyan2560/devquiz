# DevQuiz — Web Development Practice

A responsive, browser-based quiz app built with **HTML, CSS and vanilla JavaScript**.

## Topics included
- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js
- MongoDB
- MERN Stack

Each topic includes 10 multiple-choice questions with explanations. The **Full Test** combines all 80 questions. Each quiz allows one minute per question (10 questions = 10 minutes; the 80-question Full Test = 80 minutes). Time running out automatically submits the saved answers.

## Run locally
1. Download and extract `devquiz.zip`.
2. Open the `devquiz` folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension.
4. No build step, database, server or API key is required.

## Features
- Topic navigation inspired by common coding-learning sites
- Topic-wise quizzes and a full-stack test
- One minute per question, with a duration calculated from the question count
- Question map that unlocks in sequence, previous/next navigation, and no skip option
- You must answer each question before advancing; all questions must be answered before manual submission
- Score, percentage, time used and detailed answer explanations
- Restart and try-again options
- Responsive layouts and keyboard controls (1–4 to choose, arrow keys to navigate; every forward action still requires an answer)

## Customize questions
Open `script.js` and edit the `topics` object. Each question contains `q`, `options`, `answer` (zero-based option index), and `explanation`.
