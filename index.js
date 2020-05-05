console.log('project is up')

// 👉 TASK 1- Create a function called 'get'
// that takes a CSS selector as its argument
// and executes document.querySelector with the argument.
function get(selector){
  return document.querySelector(selector)
}

// 👉 TASK 2- Using 'get', select the following elements from the DOM:

// BUTTONS
const launchButton = get('#launchButton')
const confirmButton = get('#confirmButton')
const cancelButton = get('#cancelButton')

// MESSAGES
const successMessage = get('.report.success')
const failureMessage = get('.report.failure')

// MODAL
const modal = get('div.modal')
const modalOpacity = get('div.modal-opacity')


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(event) {
  // contains code that should run in the future
  // take out the off classname from the modal
  modal.classList.remove('off')
}
// on click of launchButton, run the launch function pretty please
launchButton.addEventListener(
  // type of event
  'click',
  // the callback that should run
  launch
)

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- Create a link and prevent its default behavior


// 👉 TASK 9- Using the mouseOver event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.


// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {

}

function closeModal() {

}

function killReports() {

}
