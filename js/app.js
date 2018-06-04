
let counterNumber = document.getElementById('counter');
let count = 0;


const photo = document.getElementById('cat');

//add event listener to the photo object
photo.addEventListener("click", click);

//function to count clicks
function click() {
	count += 1;
	counterNumber.innerHTML = count;
};

//photo.onclick = function() {
	//count += 1;
	//counterNumber.innerHTML = count;
//}

