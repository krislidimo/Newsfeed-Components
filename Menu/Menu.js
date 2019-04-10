
const toggleMenu = (menu) => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {

	//Animations GSAP
	if(menu.classList.contains('menu--open')) { //if menu is open do this
		TweenMax.to(".menu",1,{
			left: -350,
			opacity: 0,
			onComplete: () => {
				toggleMenu(menu)
			}
		});

	} else {																		//if menu is closed do this
		toggleMenu(menu);
		TweenMax.to(".menu",1,{
			left: -50,
			ease:Back.easeOut, 
  		opacity: 1,
		});
	}
});



