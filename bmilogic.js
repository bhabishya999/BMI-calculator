const form = document.querySelector('form')

form.addEventListener('submit',function(event){
event.preventDefault()
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');
let bim = 0;
if(height === ''|| height< 0|| isNaN(height)){
  result.innerHTML = "Please enter valid height"
}else if(weight === ''|| weight< 0|| isNaN(weight)){
  result.innerHTML = "Please enter valid weight"
}else{
  bim = (weight/((height*height)/10000)).toFixed(2);
}

if(result<18.6){
result.textContent = `You are under weight and your weight is ${bim}`
}else if(result >= 18.6 && result <= 24.6){
    result.textContent = `You are in normal and range and your weight is ${bim}`
}
else{
    result.textContent = `You are overweight and your weight is ${bim}`
}
})