console.log('project is up')

// 👉 TASK 1- Create a function called 'get'
// that takes a CSS selector as its argument
// and executes document.querySelector with the argument.
function get(selector) {
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
  successMessage.classList.add('off')
  failureMessage.classList.add('off')

  // absolute power right here
}
// on click of launchButton, run the launch function pretty please
launchButton.addEventListener(
  // type of event
  'click',
  // the callback that should run
  launch,
)

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
const yes = (event) => {
  modal.classList.add('off')
  successMessage.classList.remove('off')
}
confirmButton.addEventListener('click', yes)

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
const denyLaunch = (event) => {
  // console.log('denyLaunch runs')
  // event has a wealth of info about the event
  // which we could use right here!
  modal.classList.add('off')
  failureMessage.classList.remove('off')
}
cancelButton.addEventListener(
  'click', denyLaunch
)

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function onEscape(event) {
  // this runs on ANY key 'keydown' event
  // we only want to shut down the modal if it's the Escape key

  // HOW DO WE KNOW WHAT EXACTLY GOT 'KEYED DOWN'?????
  // how does the browser inform us here of that info??

  // the EVENT OBJECT
  // event.key or event.code
  if (event.key === 'Escape') {
    modal.classList.add('off')
  }
}
document.addEventListener('keydown', onEscape)

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
function theClick(event) {
  console.log('🎯 the target    ', event.target)
  console.log('🧭 current target', event.currentTarget)
  console.log('\n')
}
const allElementsArray = Array.from(document.all)
allElementsArray.forEach(element => {
  element.addEventListener('click', theClick)
})


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
