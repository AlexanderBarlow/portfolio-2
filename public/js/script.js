const themeButton = document.getElementById('flexSwitchCheckDefault');
const darkTheme = document.getElementsByClassName('dark-theme')
console.log('hello');

//by default we have a light theme
//apply dark theme on switch
//add event listener for click on switch
//add logic for what to do when button is clicked


const themeToggle = () => {
    //we need to add class dark theme upon click
    //change content of button text to click for light theme
    console.log('hi');
}

themeButton.addEventListener('click', themeToggle)