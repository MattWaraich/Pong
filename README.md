# Pong Game Starter

**This is the second project for the web dev program at RED Academy, object oriented programming using HTML, CSS, and Javascript.**

A starter project for a basic pong game using SVGs.

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂

# TYPOGRAPHY

Base font size is 16px

The headings font-family is Silkscreen Web

Width of desktop-friendly content area is 1240px

## COLOURS

The HEX code for the background is #000000 and #434343 with a linear gradient from left to right containing colours of rgb(0, 0, 0), rgb(67, 67, 67

The HEX code for the black heading text colour is #000000

## TECHNOLOGIES USED & INSTALLATION INSTRUCTIONS

HTML

CSS

JavaScript

Image from "https://opengameart.org/sites/default/files/cohete_off_0.png"

### HTML

Contain syntactically-valid HTML5 code

Include all essential elements in the <head> of the document (e.g. doctype, title, charset, etc.)

Use semantically-appropriate HTML elements

Use an icon font

### CSS

Translate the designer’s overall vision for the website into code

Use appropriate CSS selectors (e.g. classes instead of IDs, no overly-specific selectors, etc.)

Demonstrate effective use of typographic properties and values (e.g. font-family, font-style, text-transform, etc.)

Incorporate custom fonts using @font-face

Optimize layout for all required breakpoints

Optimizing moving image features through infinite properties

### JAVASCRIPT

Define variables where needed with let and const

Use functions to effectively organize code

Use consistent, descriptive variable and function names

Check for strict equality with comparison operators

Demonstrate effective use of control flow (loops, conditionals, etc.)

Change in paddle colour when colliding with pong balls

Paddle height decreasing in size with every paddle collision

Sound on ball to paddle collision

Import and export of numerous JavaScript elements

## FUNCTIONALITY

Contain a single .html file and an external .css file (CSS reset may be included in a separate file) as well as JavaScript to make a fully functioning game of Pong

Incorporate a smooth scrolling paddle feature

Incorporate a a moving image slider using a JavaScript plugin for the featured "Rocket-ship" image

Display a scoreboard that consistently keeps track of the game score

## PERSONAL LEARNINGS

Further knowledge of HTML, CSS, and JavaScript

Framework for website/game building/design

Importance of import and export files through JavaScript files

Importance of Git and making commits

## STRETCH GOALS

Momentary change in paddle colour when colliding with pong balls

Paddle height decreasing with every ball-to-paddle collision

Multi-ball game play with balls varying in size in order to increase difficulty and varying colours for easy viewing

Moving rocket-ship to emphasize space theme
