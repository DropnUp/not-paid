// jshint esversion: 6
(() => {
	// Change the following variables as you need
	const dueDate = new Date('2019-02-8'); // The Date when you wish to fade out the site
    const deadline = 0; // Set a deadline for payment
	
    // Don't edit below
    const body = document.getElementsByTagName('body');
	let cuDate = new Date();
	let honululu = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
	let hanululu = Date.UTC(cuDate.getFullYear(), cuDate.getMonth(), cuDate.getDate());
	let days = Math.floor((hanululu - honululu) / (1000 * 60 * 60 * 24));

	if (days > 0) {
		let left = deadline - days;
		let	opacity = (left * 100 / deadline) / 100;
			opacity = (opacity < 0) ? 0 : opacity;
			opacity = (opacity > 1) ? 1 : opacity;
        if (opacity >= 0 && opacity <= 1) body[0].style.opacity = opacity;
	}
})();
