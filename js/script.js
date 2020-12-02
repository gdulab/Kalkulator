'use strict';
document.addEventListener('DOMContentLoaded', function() {

function sprawdzam(){
	console.log('klik');
}
var res = document.querySelector('.result');
var number = document.querySelectorAll('.num');
var equal = document.querySelector('.eq');
var znak = document.querySelectorAll('.znak');
var clear = document.querySelector('.kasuj');
var wynik = 0;
var liczba = 0;
var dzialanie = 0;

function dodawanie(){
	wynik = wynik + liczba;
};
function odejmowanie(){
	wynik = wynik - liczba;
};
function dzielenie(){
	if(liczba==0){
		res.innerHTML="error";
		liczba=0;
		wynik=0;
	}
	wynik = wynik / liczba;
	
};
function mnozenie(){
	if(wynik==0){
		wynik=1;
	}
	wynik = wynik * liczba;

};


for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function(){
		liczba = liczba*10+parseInt(this.getAttribute('data'));
		res.innerHTML=liczba;
	if(dzialanie=='dodaj'){
		dodawanie();
	}
	if(dzialanie=='odejmij'){
		odejmowanie();
	}
	if(dzialanie=='mnoz'){
		mnozenie();
	}
	if(dzialanie=='dziel'){
		dzielenie();
	}
	console.log(wynik);	


})};

for (var i = 0; i < znak.length; i++) {
	equal.addEventListener('click', function(){
		res.innerHTML=wynik;
	})
		clear.addEventListener('click', function(){
		liczba=0;
		wynik=0;
		res.innerHTML=liczba;
	})
	znak[i].addEventListener('click', function(){
		dzialanie=this.getAttribute('data');
		res.innerHTML=wynik;
		liczba=0;
	})
	
};





});