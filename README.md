# Tic Tac Toe Game - React

A simple Tic Tac Toe game built using React. This project is designed to introduce the basics of React components, `props`, `useState`, and how to manage and use state effectively in a real-world example.

## 🧩 Components Overview

- **App**: The main component that holds the game logic and state.
- **Board**: Receives the state from `App` via `props` and renders 9 `Square` components.
- **Square**: A presentational component that displays the value ('X' or 'O') and handles click events.
- **History**: Displays a list of all moves made in the game with the ability to jump to previous moves.

## 🧠 Key Concepts Demonstrated

- ✅ **React Components**: Functional components structure for building UI.
- ✅ **Props**: Passing data and functions between components.
- ✅ **useState**: Managing local state in functional components.
- ✅ **State Management**: Keeping track of game history, current player, and board status.
- ✅ **Component Composition**: Breaking down UI into reusable, small components.

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:

- Node.js (v14 or above)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone ttps://github.com/sunam-ali/tic_tac_toe.git

# Navigate into the project directory
cd tic_tac_toe

# Install dependencies
npm install

# Start the development server
npm run dev