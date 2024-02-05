// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');


// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById('choosenNoun1');
const chosenVerb = document.getElementById('choosenVerb');
const chosenAdjective = document.getElementById('choosenAdjective');
const chosenNoun2 = document.getElementById('choosenNoun2');
const chosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyDisplay = document.getElementById('story');
// Variables for pre-defined arrays
const nouns = ['adventurous explorer', 'mysterious castle', 'colorful parrot', 'ancient oak tree', 'sleek sports car'];
const verbs = ['discovered', 'explored', 'admired', 'climbed', 'zoomed'];
const adjectives = ['curious', 'majestic', 'playful', 'enchanting', 'sleek'];
const places = ['dense jungle', 'enchanted kingdom', 'sunny meadow', 'whispering forest', 'cosmic galaxy'];



// Variables for count to grab array elements
let count = 0;

// Functions

function noun1_on_click() {
    // variable to get array element and displaying it
    chosenNoun1.textContent = nouns[count];
    count++;
}

function verb_on_click() {
    chosenVerb.textContent = verbs[count];
    count++;
}

function adjective_on_click() {
    chosenAdjective.textContent = adjectives[count];
    count++;
}

function noun2_on_click() {
    chosenNoun2.textContent = nouns[count];
    count++;
}

function setting_on_click() {
    chosenSetting.textContent = places[count];
    count++;
}

// concatenate the user story and display
function playback_on_click() {
    const userStory = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} in ${chosenSetting.textContent}.`;
    storyDisplay.textContent = userStory;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    chosenNoun1.textContent = getRandomElement(nouns);
    chosenVerb.textContent = getRandomElement(verbs);
    chosenAdjective.textContent = getRandomElement(adjectives);
    chosenNoun2.textContent = getRandomElement(nouns);
    chosenSetting.textContent = getRandomElement(places);
}
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

