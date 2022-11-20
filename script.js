const numbers = document.querySelectorAll('.number-container');
const submitButton = document.querySelector('button');
const ratingStateContainer = document.querySelector('.rating-state-container');
const thankYouStateContainer = document.querySelector('.thank-you-state-container');
const choosenRating = document.querySelector('b');
var itemId;

numbers.forEach((item) => {
	item.addEventListener("click", () => {
		numbers.forEach((item) => {
			item.classList.remove("clicked");
		});
		item.classList.add("clicked");
		itemId = item.id;
	});
});

submitButton.addEventListener("click", () => {
	if(itemId) {
		ratingStateContainer.classList.add("hidden");
		thankYouStateContainer.classList.add("visible");
		choosenRating.innerText = itemId;
	} else {
		alert("Please choose a rating!");
	} 
});