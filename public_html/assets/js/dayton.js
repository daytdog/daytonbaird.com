var list = ["Software Developer", "Graphic Designer", "Student", "Corporate Trainer", "Business Owner"]
var skills = document.querySelector(".blue");
// var interests = document.querySelector('.interests');
var change = document.querySelector("#change");

window.onload = function(){
	var index = 0;
	function nextItem() {
		skills.innerHTML = list[index];
		console.log(skills);
		index = (index + 1) % list.length;
		//adds one to index until it reaches list length, then resets to 0.
	}
	nextItem();
	//executes the first iteration of the function so you don't have to wait
	setInterval(nextItem, 2000);
};

