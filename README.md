Coin Flip and Flip Guessing Game (JavaScript)

A simple Coin Flip Guessing Game built using HTML, CSS, and JavaScript.
The user guesses HEADS or TAILS, the computer flips a virtual coin, and the result along with the score is displayed on the screen.

This project focuses on understanding JavaScript fundamentals like functions, scope, DOM manipulation, and localStorage.

🚀 Features

Guess between HEADS or TAILS

Random coin flip using Math.random()

Displays:

User choice

Computer choice

Result (win / loss)

Score tracking:

Wins

Losses

Score is saved using localStorage (persists after reload)

Simple and clean UI update using DOM manipulation

🛠️ Technologies Used

HTML

CSS

JavaScript (Vanilla JS)

📂 Project Structure
coin-flip-game/
│
├── index.html
├── style.css
├── script.js
└── README.md

🧠 What I Learned

Difference between scope and return

Why variables inside functions are not accessible globally

Updating UI directly from a function using DOM

Using localStorage to persist data

Writing cleaner and safer JavaScript without global variable leaks

▶️ How It Works

User clicks HEADS or TAILS

JavaScript generates a random number

Coin side is decided based on the random value

Result is calculated

Score is updated and saved in localStorage

Output and score are displayed in the UI

📌 Example Output
Your choice: HEADS
Computer choice: TAILS
Sorry, wrong guess!

Wins: 2
Losses: 3

🧪 How to Run Locally

Clone the repository:

git clone https://github.com/your-username/coin-flip-game.git


Open index.html in your browser

Start playing 🎉

🔮 Future Improvements

Add animations for coin flip

Add a Reset Score button

Improve UI design

Separate logic and UI rendering

Convert to a React component in the future

🙌 Acknowledgements

Built as a learning project to strengthen JavaScript fundamentals and frontend logic.
