# BPL-Dream-XI

> Build your dream Bangladesh Premier League (BPL) XI — a small, responsive React app that lets users pick players under a coin-based budget, inspired by fantasy-team interfaces.

Live demo: https://sf61561.github.io/BPL-Dream-XI/  

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [How it works (brief)](#how-it-works-brief)  
- [Development notes](#development-notes)  
- [Contributing](#contributing)  
- [License](#license)

---

## Project Overview

BPL-Dream-XI is a frontend React application that simulates selecting a cricket team under a limited coin budget. It follows a simple Figma-like design, supports responsive layouts, notifies the user of actions via toasts, and persists some small data in `localStorage`.

---

## Features

- Select and remove players for your squad.  
- Coin-based purchase system (players consume coins; users have a limited budget).  
- Maximum player limit (e.g., 6 players) and selection validation.  
- Toast notifications for success/error states (using React-Toastify).  
- Responsive UI built with Tailwind CSS and DaisyUI-like components.  
- Uses local JSON or a static `public` data file to store player info; some small data persisted to `localStorage`.

---

## Technologies

- **React** (Vite or Create React App setup)  
- **Tailwind CSS** (plus DaisyUI utilities)  
- **React-Toastify** (notifications)  
- **Local JSON / `public` folder** for player data  
- **LocalStorage** for persisting small items (e.g., newsletter or user preferences) :contentReference[oaicite:2]{index=2}

---

## Installation

> Make sure you have Node.js (v16+) and npm installed.

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/BPL-Dream-XI.git
cd BPL-Dream-XI

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
