
//Reference needed elements
const result = document.getElementById('result');
const nameInput = document.getElementById('name');

// Action to take on user event 
// eslint-disable-next-line no-unused-vars
function updateResult() {
    result.textContent = nameInput.value;
}
