

var box = document.getElementById('table');

var counter = 0

box.addEventListener('click', function(e){
  if(counter%2===0){
  e.target.style.backgroundColor='purple'
  } else{
    e.target.style.backgroundColor='yellow'
  }
  counter++

})
