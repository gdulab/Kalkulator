'use strict';
document.addEventListener('DOMContentLoaded', function() {

	function sprawdzam(){
		console.log('klik');
	}
	var res = document.querySelector('.result');
	var number = document.querySelectorAll('.num');
	var znak = document.querySelectorAll('.znak');
	var equal = document.querySelector('.eq');
	var clear = document.querySelector('.kasuj');
	var wynik = 0;
	var liczba = 0;
	var sym = 0;
	var x;
	var tmpx, tmps, tmpw;

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
				x=0;
				wynik=0;
				liczba=0;
				znak=0;
			}
			wynik = wynik / x;
		}
	}

	//wyświetl wynik
	equal.addEventListener('click', function(){
		// jeśli po wprowadzeniu pierwszej użyje =
		if (wynik==0){
				wynik=liczba;
			} 
		// normalne dzialanie =
		else {		
			x=liczba;
			if(x==0){ //powtarzanie ostatniego działania przy kilkukrotnym użyciu =
				wynik=tmpw;
				x=tmpx;
				sym=tmps;
			}
			dzialanie();
			tmpx=x;
			tmps=sym;
			tmpw=wynik;
			liczba=0;
			sym=0;	
		}
		console.log(wynik);
		res.innerHTML=wynik;
	})

	//czyszczenie
	clear.addEventListener('click', function(){
		liczba=0;
		wynik=0;
		sym=0;
		res.innerHTML=0;
	})


	//wczytanie liczby
	for (var i = 0; i < number.length; i++) {
		number[i].addEventListener('click', function(){
			if (sym==0){ //reset jesli wprowadzanie nowej liczby po uzyciu =
				wynik=0;
			}
			liczba = liczba*10+parseInt(this.getAttribute('data'));
			res.innerHTML=liczba;

		})

	}

	//wczytanie dzialania
	for (var i = 0; i < znak.length; i++) {
		znak[i].addEventListener('click', function(){
			//jeśli nic nie było wczytane wcześniej
			if (wynik==0){
				wynik=liczba;
			} 
			//jeśli było
			else {
				x=liczba;
				dzialanie();
			}
			res.innerHTML=wynik;
			sym=this.getAttribute('data');
			liczba=0; //czyszeczenie licznika
			x=0; //czyszczenie x
		})
	}

});