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
var sym = 0;
var x;

function dzialanie(){
	if(sym=='dodaj'){
		wynik = wynik + x;
	}
	if(sym=='odejmij'){
		wynik = wynik - x;
	}
	if(sym=='mnoz'){
		wynik = wynik * x;
	}
	if(sym=='dziel'){
		if(x==0){
			res.innerHTML="error";
			x=0;
			wynik=0;
		}
		wynik = wynik / x;
	}
}


//wyświetl wynik
equal.addEventListener('click', function(){
	x=liczba;
	dzialanie();
	res.innerHTML=wynik;
})

//czyszczenie
clear.addEventListener('click', function(){
	liczba=0;
	x=0;
	wynik=0;
	sym=0;
	res.innerHTML=0;
})


//wczytanie liczby
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function(){
		liczba = liczba*10+parseInt(this.getAttribute('data'));
		res.innerHTML=liczba;
	})
}

//wczytanie dzialania
for (var i = 0; i < znak.length; i++) {
	znak[i].addEventListener('click', function(){

		if (wynik==0){
			wynik=liczba;
		} 
		else {
			x=liczba;
			res.innerHTML=wynik;	
			dzialanie();
		}
		
		res.innerHTML=wynik;
		sym=this.getAttribute('data');
		liczba=0;
		
	})


}
	

});
