// Select all elements with the class "ripple" and store them in the "buttons" variable
const buttons = document.querySelectorAll('.ripple')

// Loop through each button
buttons.forEach((button) => {
  // Add a click event listener to each button
  button.addEventListener('click', function (e) {
    // Get the x and y coordinates of the click event relative to the whole page
    const x = e.pageX
    const y = e.pageY

    // Get the top and left position of the button relative to its offset parent
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // Calculate the x and y coordinates of the click event relative to the button
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    // Create a new <span> element for the ripple effect
    const circle = document.createElement('span')
    // Add the "circle" class to the <span> element
    circle.classList.add('circle')
    // Set the top and left position of the <span> element based on the click coordinates inside the button
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    // Append the <span> element as a child of the button
    this.appendChild(circle)

    // After 500 milliseconds, remove the <span> element to fade out the ripple effect
    setTimeout(() => circle.remove(), 500)
  })
})
