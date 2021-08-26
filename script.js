// Selectors
const eventDisplay = document.querySelector('.event-display');
const eventKey = document.querySelector('.event-key-value');
const eventLocation = document.querySelector('.event-location-value');
const eventWhich = document.querySelector('.event-which-value');
const eventCode = document.querySelector('.event-code-value');
const eventInitiator = document.querySelector('.event-initial-text');
const buttonTable = document.querySelector('.button-table');
const buttonTheme = document.querySelector('.button-theme');
const keyCodeDiv = document.querySelector('.keycode-table');
const eventSubDiv = document.querySelector('.event-sub-div');
const themeColor = document.querySelector('.light-theme');
let flag = 1;

// Event Listener
document.addEventListener('keypress', logKey);
buttonTable.addEventListener('click', tableFunction);
buttonTheme.addEventListener('click', updateTheme);

// Fucntions
function logKey(e) {
  e.preventDefault();
  if (keyCodeDiv.style.display != 'none' && flag == 0) return;
  eventInitiator.style.display = 'none';
  keyCodeDiv.style.display = 'none';
  eventDisplay.style.display = 'flex';
  eventSubDiv.style.display = 'flex';
  eventDisplay.textContent = `${e.which}`;
  eventKey.textContent = `${e.key}`;
  eventLocation.textContent = `${e.location}`;
  eventWhich.textContent = `${e.which}`;
  eventCode.textContent = `${e.code}`;
  flag = 0;
}

function tableFunction() {
  if (flag == 1) {
    if (keyCodeDiv.style.display != 'none') {
      eventInitiator.style.display = 'flex';
      keyCodeDiv.style.display = 'none';
    } else {
      eventInitiator.style.display = 'none';
      keyCodeDiv.style.display = 'block';
    }
  } else {
    if (keyCodeDiv.style.display == 'none') {
      keyCodeDiv.style.display = 'block';
      eventDisplay.style.display = 'none';
      eventSubDiv.style.display = 'none';
    } else {
      keyCodeDiv.style.display = 'none';
      eventDisplay.style.display = 'flex';
      eventSubDiv.style.display = 'flex  ';
    }
  }
}

function updateTheme() {
  document.body.classList.toggle('dark');
}
