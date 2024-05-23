<h1>Rubik-Cube</h1>

<p align="center">
 
 <a href="https://github.com/Dev-tanay/Rubik-Cube/issues">
    <img src="https://img.shields.io/github/issues/Dev-tanay/Rubik-Cube?style=for-the-badge" alt="GitHub issues">
  </a>
  <a href="https://github.com/Dev-tanay/Rubik-Cube/network/members">
    <img src="https://img.shields.io/github/forks/Dev-tanay/Rubik-Cube?style=for-the-badge" alt="GitHub forks">
  </a>
  <a href="https://github.com/Dev-tanay/Rubik-Cube/stargazers">
    <img src="https://img.shields.io/github/stars/Dev-tanay/Rubik-Cube?style=for-the-badge" alt="GitHub stars">
  </a>
  <a href="https://github.com/Dev-tanay/Rubik-Cube/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Dev-tanay/Rubik-Cube?style=for-the-badge" alt="GitHub license">
  </a>
  <a href="https://dev-tanay.github.io/Rubik-Cube/">
    <img src="https://img.shields.io/website?style=for-the-badge&down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fdev-tanay.github.io%2FRubik-Cube%2F" alt="Website status">
  </a>
</p>
<h2>Link to Game Demo</h2>
<a href="https://dev-tanay.github.io/Rubik-Cube/">https://dev-tanay.github.io/Rubik-Cube/</a>

<img src="images/home.png" width="350">

<h2>About the Game</h2>
<p>This is a simple and elegant game where you can play Rubik's Cube from your own web browser.</p>
<p>Each of the six faces of the Rubik's cube is in one of the six colors - red, green, yellow, blue, white, and orange.</p>
<p>The visible part of the cube is divided into 26 pieces:</p>
<ul>
  <li>6 central pieces (one colored side)</li>
  <li>12 edge pieces (two colored sides)</li>
  <li>8 corner pieces (three colored sides)</li>
</ul>
<p>The 26 pieces are "scrambled" to have different colors on each face.</p>

<h2>How to Play</h2>
<p>The objective of this game is to get each face of the cube to have a single color.</p>
<p>This can be done in two ways:</p>
<ol type="i">
  <li>Twisting the segments</li>
  <p>This can be done by dragging the cursor over the segment you want to rotate.</p>
  <img src="images/twist1.png" width="300">
  <img src="images/twist2.png" width="300">
  <li>Changing the view of the cube</li>
  <p>This can be done by dragging the cursor in an arrow around the cube.</p>
  <img src="images/changeview.png" width="300">
</ol>

## 🧩 Installation Guide for Rubik-Cube 🧩

Follow the steps below to install and set up the Rubik-Cube project on your local machine.

### 📋 Prerequisites
- Ensure you have `git` installed on your system. If not, download and install it from [here](https://git-scm.com/).
- A modern web browser (e.g., Chrome, Firefox, Edge).

### 🛠️ Steps

1. **🔗 Clone the Repository**
   Open your terminal (or Command Prompt on Windows) and run the following command to clone the repository:
   ```sh
   git clone https://github.com/Dev-tanay/Rubik-Cube.git
   ```

2. **📂 Navigate to the Cloned Repository**
   Change directory to the cloned repository:
   ```sh
   cd Rubik-Cube
   ```

3. **🌐 Open the Index.html File**
   Locate the `index.html` file in the repository and open it in your web browser. You can do this by either:
   - **Double-clicking the `index.html` file** in your file manager. This will open the file in your default web browser.
   - **Running a simple HTTP server** (if you prefer):

     **Using Python (if installed):**
     ```sh
     python -m http.server
     ```
     Open your web browser and go to `http://localhost:8000`.

     **Using Node.js (if installed) with http-server package:**
     ```sh
     npx http-server
     ```
     Open your web browser and go to the provided local server URL (usually `http://127.0.0.1:8080` or similar).

4. **🎮 Play the Game**
   Once the `index.html` file is opened in the web browser, the game screen will be displayed. You can now start playing the Rubik-Cube game.

### ℹ️ Notes
- Ensure your browser allows running JavaScript, as the game likely depends on it.
- If you encounter any issues, check the browser console for error messages and ensure all assets are properly loaded.

Enjoy your Rubik-Cube game! 🕹️✨

<h2>Navigating the Game Screen</h2>
<ul>
  <li>Home</li>
  <img src="images/home1.png" width="300">
  <p>You'll see two icons, each on the two bottom corners of the screen. They're (1) Leaderboard and (2) Preferences.</p>
  <p>You can start the game by double-clicking on the text "DOUBLE TAP TO START"</p>
  <li>Game start</li>
  <img src="images/start.png" width="300">
  <p>Once you start the game, a timer will show above the cube.</p>
  <p>Now you'll see only one icon, that is Back.</p>
  <li>Preferences</li>
  <img src="images/preferences.png" width="300">
  <p>On clicking Preferences from Home screen, you'll be led to the settings page.</p>
  <p>The options you can change here are:</p>
  <ul>
    <li>Cube size</li>
    <li>Flip Type</li>
    <li>Scramble</li>
    <li>Camera Angle</li>
    <li>Color Scheme</li>
  </ul>
  <p>Also, there are two new icons in the bottom corners - (3) Back and (4) Theme.</p>
  <li>Theme</li>
  <img src="images/theme.png" width="300">
  <p>Here, you can adjust the hue, saturation, and lightness of the screen to your liking.</p>
  <p>The new icons in the bottom corners are - (5) Back and (6) Reset.</p>
  <li>Stats</li>
  <img src="images/stats.png" width="300">
  <p>These display the statistics of your Rubik's Cube game. The stats include:</p>
  <ul>
    <li>Total Number of Solves</li>
    <li>Best time</li>
    <li>Average of 5, 12, 25</li>
  </ul>
</ul>

<h3>LICENSE</h3>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
