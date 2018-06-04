
/*let counterNumber = document.getElementById('counter');
let count = 0;


const photo = document.getElementById('cat');

//add event listener to the photo object
photo.addEventListener("click", click);

//function to count clicks
function click() {
	count += 1;
	counterNumber.innerHTML = count;
};*/

//photo.onclick = function() {
	//count += 1;
	//counterNumber.innerHTML = count;
//}

const cats = [
	{
		name: "LEOPOLD", 
		image: "images/leopard-515509_640.jpg", 
		clicks: "0"
	}, {
		name: "TIGGY", 
		image: "images/sumatran-tiger-518771_640.jpg", 
		clicks: "0"
	}

];



let catImage;
let catName;

//for (let cat of cats) { 

//	catImage = cat.image;
//	catName = cat.name;
//	let catPhoto ="<img src='catImage' alt='catName'>";
	//document.getElementById("main").innerHTML = catPhoto;
//	document.getElementById('main').appendChild(catPhoto);
	
	
//};
/*let imageEl = document.createElement('img');
imageEl.setAttribute("src", "images/sumatran-tiger-518771_640.jpg");
imageEl.setAttribute("alt", "TIGGY");
document.getElementById('main').appendChild(imageEl);


//let catImage = "<img src='images/leopard-515509_640.jpg' alt='LEOpold'>";
//document.getElementById('main').innerHTML = catImage;

let imageLeo = document.createElement('img');
imageLeo.setAttribute("src", "images/leopard-515509_640.jpg");
imageLeo.setAttribute("alt", "LEOPOLD");
document.getElementById('main').appendChild(imageLeo);*/

(function() {
	for (let i = 0; i < cats.length; i++){ 
		catImage = cats[i].image;
		catName = cats[i].name;

		let imageEl = document.createElement('img');
		imageEl.setAttribute("src", "catImage");
		imageEl.setAttribute("alt", "catName");
		document.getElementById('main').appendChild(imageEl)[0];
		}
	
}) ();
