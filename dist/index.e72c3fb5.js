/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }
 alert(multiply(10,9))*/ document.querySelector('p').onclick = function() {
    alert('Ouch!!! Stop poking me!');
};
var myImage = document.querySelector('img');
myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/spring-tree.jpg') myImage.setAttribute('src', 'images/rainy-day.jpg');
    else myImage.setAttribute('src', 'images/spring-tree.jpg');
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Palanka is cool, ' + myName;
}
if (!localStorage.getItem('name')) setUserName();
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Palanka is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
};

//# sourceMappingURL=index.e72c3fb5.js.map
