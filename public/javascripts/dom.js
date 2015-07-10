var box = document.getElementById('table');
var mark = document.getElementsByTagName('p');
var cell = document.getElementsByTagName('td');
var counter = 0
var xArray = [];
var oArray = [];

  box.addEventListener('click', function(e){  //
    if(counter%2===0){
    e.target.innerHTML = 'X'
    xArray.push(e.target.id)
    } else {
      e.target.innerHTML = 'O'
      oArray.push(e.target.id)
      }
    counter++
    xWinner()
    oWinner()
    if(counter === 9){
      alert('You Tie');
    }

  })



function xWinner() {
  var diagonalOne = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'one') || (xArray[i]=='five') || (xArray[i]=='nine')){
      diagonalOne.push(xArray[i])
    }
  }
  if (diagonalOne.length === 3){
    alert('you won');
  }

  var diagonalTwo = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'three') || (xArray[i]=='five') || (xArray[i]=='seven')){
      diagonalTwo.push(xArray[i])
    }
  }
  if (diagonalTwo.length === 3){
    alert('you won');
  }

  var acrossOne = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'one') || (xArray[i]=='two') || (xArray[i]=='three')){
      acrossOne.push(xArray[i])
    }
  }
  if (acrossOne.length === 3){
    alert('you won');
  }

  var acrossTwo = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'four') || (xArray[i]=='five') || (xArray[i]=='six')){
      acrossTwo.push(xArray[i])
    }
  }
  if (acrossTwo.length === 3){
    alert('you won');
  }

  var acrossThree = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'seven') || (xArray[i]=='eight') || (xArray[i]=='nine')){
      acrossThree.push(xArray[i])
    }
  }
  if (acrossThree.length === 3){
    alert('you won');
  }

  var downOne = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'one') || (xArray[i]=='four') || (xArray[i]=='seven')){
      downOne.push(xArray[i])
    }
  }
  if (downOne.length === 3){
    alert('you won');
  }

  var downTwo = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'two') || (xArray[i]=='five') || (xArray[i]=='eight')){
      downTwo.push(xArray[i])
    }
  }
  if (downTwo.length === 3){
    alert('you won');
  }

  var downThree = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((xArray[i] == 'three') || (xArray[i]=='six') || (xArray[i]=='nine')){
      downThree.push(xArray[i])
    }
  }
  if (downThree.length === 3){
    alert('you won');
  }
}

function oWinner() {
  var diagonalOne = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((oArray[i] == 'one') || (oArray[i]=='five') || (oArray[i]=='nine')){
      diagonalOne.push(oArray[i])
    }
  }
  if (diagonalOne.length === 3){
    alert('you won');
  }

  var diagonalTwo = [];
  for (var i = 0; i < oArray.length; i++) {
    if ((oArray[i] == 'three') || (oArray[i]=='five') || (oArray[i]=='seven')){
      diagonalTwo.push(oArray[i])
    }
  }
  if (diagonalTwo.length === 3){
    alert('you won');
  }

  var acrossOne = [];
  for (var i = 0; i < oArray.length; i++) {
    if ((oArray[i] == 'one') || (oArray[i]=='two') || (oArray[i]=='three')){
      acrossOne.push(oArray[i])
    }
  }
  if (acrossOne.length === 3){
    alert('you won');
  }

  var acrossTwo = [];
  for (var i = 0; i < oArray.length; i++) {
    if ((oArray[i] == 'four') || (oArray[i]=='five') || (oArray[i]=='six')){
      acrossTwo.push(oArray[i])
    }
  }
  if (acrossTwo.length === 3){
    alert('you won');
  }

  var acrossThree = [];
  for (var i = 0; i < oArray.length; i++) {
    if ((oArray[i] == 'seven') || (oArray[i]=='eight') || (oArray[i]=='nine')){
      acrossThree.push(oArray[i])
    }
  }
  if (acrossThree.length === 3){
    alert('you won');
  }

  var downOne = [];
  for (var i = 0; i < oArray.length; i++) {
    if ((oArray[i] == 'one') || (oArray[i]=='four') || (oArray[i]=='seven')){
      downOne.push(oArray[i])
    }
  }
  if (downOne.length === 3){
    alert('you won');
  }

  var downTwo = [];
  for (var i = 0; i < oArray.length; i++) {
    if ((oArray[i] == 'two') || (oArray[i]=='five') || (oArray[i]=='eight')){
      downTwo.push(oArray[i])
    }
  }
  if (downTwo.length === 3){
    alert('you won');
  }

  var downThree = [];
  for (var i = 0; i < xArray.length; i++) {
    if ((oArray[i] == 'three') || (oArray[i]=='six') || (oArray[i]=='nine')){
      downThree.push(oArray[i])
    }
  }
  if (downThree.length === 3){
    alert('you won');
  }
}
