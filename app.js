// import functions and grab DOM elements

const nameInput = document.getElementById('name-input');
console.log(nameInput);

const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);

const updateButton = document.getElementById('update-btn');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

updateButton.addEventListener('click', () => {
    const name = nameInput.value;
    console.log(name);
    nameDisplay.textContent = name;
});

const pronounDisplay = document.getElementById('pronoun-display');

pronounDisplay.addEventListener('select', () => {
    const pronoun = pronounDisplay.value;
    pronounDisplay.textcontent = pronoun;
});