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
- **LocalStorage** for persisting small items (e.g., newsletter or user preferences)

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

```

---

## Usage

- Open the app in the browser (typically http://localhost:5173 when running Vite).
- Browse players, click the Add/Buy button to add a player to your team (coins will be deducted).
- Remove a player from the selected list to refund coins.
- Toasts will show validation messages (e.g., “Not enough coins”, “Player already selected”, or success messages).

---

## Project Structure

```bash
BPL-Dream-XI/
├─ public/
│  ├─ players.json      # sample player data used by the app
│  └─ vite.svg
├─ src/
│  ├─ assets/
│  │  ├─ images/
│  │  │  ├─ banner-main.png
│  │  │  ├─ bg-shadow.png
│  │  │  ├─ logo-footer.png
│  │  │  └─ logo.png
│  │  └─ react.svg
│  ├─ components/
│  │  ├─ Claim-card/
│  │  │  ├─ Claim_card.css
│  │  │  ├─ Claim_card.jsx
│  │  ├─ Footer/
│  │  │  ├─ Footer.css
│  │  │  ├─ Footer.jsx
│  │  ├─ Navbar/
│  │  │  ├─ Navbar.css
│  │  │  ├─ Navbar.jsx
│  │  ├─ Player/
│  │  │  ├─ Player.jsx
│  │  ├─ Players/
│  │  │  ├─ Players.jsx
│  │  ├─ Selected/
│  │  │  ├─ SelectedList.jsx
│  │  ├─ newsletter/
│  │  │  └─ Newsletter.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
└─ vite.config.js
```
---

## How it works

1. Load player data from a static JSON endpoint (e.g., public/players.json) or inline file.
2. State management: Selected players and coin balance are stored in React state (and optionally mirrored to localStorage).
3. Selection rules: App checks the coin balance, the maximum number of players, and duplicates before allowing a player to be added.
4. Notifications: React-Toastify displays messages for user feedback.
---
## Development notes

- Keep UI components small and reusable (e.g., PlayerCard, Button, Modal).
- Validate user actions centrally (e.g., selection functions in a single helper or context) to avoid duplicated logic.
- To add more players, update public/players.json (or your data source).
- If you plan to deploy to GitHub Pages, ensure homepage in package.json is set and configure the build to publish the dist folder.
---

Would you like me to:

- Put this `README.md` into a file and give you a download link?  
- Add badges (build, license, live demo) at the top?  
- Insert screenshots & example GIFs of the app (I can generate placeholders or show how to capture them)?  

Tell me which and I’ll produce the next step.
