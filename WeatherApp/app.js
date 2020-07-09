var button=document.querySelector('.button');
var input=document.querySelector('.inputValue');
var name=document.querySelector('.nam');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var hum=document.querySelector('.hum');
var wind=document.querySelector('.wind');
button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=7b9143d82957f7256f448b5c2c035581')
.then(response=>response.json())
.then(data=>{
console.log(data);
//var nameValue=data['name'][0];
var nameValue=input.value;
console.log(nameValue);
var tempValue=Math.floor(data['main']['temp']-273);
var descValue=data['weather'][0]['description'];
var Humidity=data.main.humidity;
name.innerHTML=nameValue;
temp.innerHTML="Temprature : "+tempValue+" °C";
desc.innerHTML="Weather is " + descValue;
hum.innerHTML="Humidity is " + Humidity+"%";
wind.innerHTML="Wind Speed " + data.wind.speed;
})
.catch(err=>alert('Wrong City Name'))
})

