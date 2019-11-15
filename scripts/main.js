var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/kotletka.jpg') {
		myImage.setAttribute ('src','images/kotletka2.jpg');
	} else {
		myImage.setAttribute ('src','images/kotletka.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Пожалуйста, введите ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Джунгарский Хомяк, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Джунгарский Хомяк, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}