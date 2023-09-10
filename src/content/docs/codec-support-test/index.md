---
title: "Codec Support Test"
description: "A test to check which audio formats your browser supports"
---

This Test Checks Audio Format Compatibility in Browsers

**Features:**

- Start the test by clicking the button.
- If your browser settings support starting the Audio Context without user interaction,
it will start automatically.
- Supports various audio types: Webm, Mp4, Mp3, etc.
- Provides error messages if a format isn’t compatible.
- Option to play audio if the format is supported.

**Tech Details:**

- The test utilizes the AudioContext Web API and JavaScript.
- We've included polyfills for webkit audio context to enhance browser compatibility.

**Purpose:**

- This tool assists users in quickly determining which audio formats
their browsers support.

---

<button id="start" onclick="{
  document.getElementById('start').remove()
}">Start</button>

<script src="app.js" module type="module" defer></script>

<style>
  .results {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .result {
    width: 30%;
    padding: 20px;
    background-color: #444;
    border-radius: 4px;
  }

  .success {
    color: rgb(0, 255, 17);
  }

  .failure {
    color: #f00;
  }

  #start, #buttons > button {
    display: inline-block;
    padding: 10px;
    background-color: #666;
    color: #fff;
    border: #333;
    border-radius: 6px;
    border-width: 2px;
    padding: 8px;
    box-shadow: 4px 4px 0px black;
    cursor: pointer;
    text-decoration: none;
    width: 140px;
    height: 80px
  }

   #start, #buttons > button:hover {
    background-color: #555;
  }
</style>

<section>
  <p id="context"></p>
  <p id="webm"></p>
  <p id="mp4"></p>
  <p id="mp3"></p>
  <p id="ogg"></p>
  <p id="opus"></p>
  <p id="caf-short"></p>
  <p id="caf-long"></p>
  <p id="wav"></p>
</section>
<section id="buttons">
</section>
