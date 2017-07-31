/**
 * Created by Denis on 29.07.2017.
 */


/**
 * Created by Denis on 29.07.2017.
 */


let table = document.querySelector('table');
let playerMark = 0;

table.addEventListener('click', elementCheck);

function elementCheck(e) {
	console.log(e.target,e.target.parentElement);
	if ( e.target.parentElement.tagName === 'TD' ) {
		checkMark(e.target);
	}
}

function checkMark(element) {
	if ( !element.classList.contains('Love') && !element.classList.contains('Cloud') ) {

		switch ( playerMark % 2 ) {
			case 0:
				putMark(element,'Love');
				break;
			case 1:
				putMark(element,'Cloud');
				break;
		}
	}
	else alert('Пожалуйста,выберите другую точку!')
}

function putMark(element,nameClass) {
	element.classList.add(nameClass);
	checkWinner();
	playerMark++;
}




function checkWinner() {
	let allCell = document.querySelectorAll('div');
	let classCloud = 'Cloud';
	let classLove = 'Love';

	if ( allCell[0].classList.contains(classLove) && allCell[1].classList.contains(classLove) && allCell[2].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);
	else if ( allCell[0].classList.contains(classLove) && allCell[3].classList.contains(classLove) && allCell[6].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);
	else if ( allCell[0].classList.contains(classLove) && allCell[4].classList.contains(classLove) && allCell[8].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);
	else if ( allCell[1].classList.contains(classLove) && allCell[4].classList.contains(classLove) && allCell[7].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);
	else if ( allCell[2].classList.contains(classLove) && allCell[4].classList.contains(classLove) && allCell[6].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);
	else if ( allCell[2].classList.contains(classLove) && allCell[5].classList.contains(classLove) && allCell[8].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);
	else if ( allCell[3].classList.contains(classLove) && allCell[4].classList.contains(classLove) && allCell[5].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);
	else if ( allCell[6].classList.contains(classLove) && allCell[7].classList.contains(classLove) && allCell[8].classList.contains(classLove) ) setTimeout(winZero('Love', allCell),50);

	else if ( allCell[0].classList.contains(classCloud) && allCell[1].classList.contains(classCloud) && allCell[2].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);
	else if ( allCell[0].classList.contains(classCloud) && allCell[3].classList.contains(classCloud) && allCell[6].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);
	else if ( allCell[0].classList.contains(classCloud) && allCell[4].classList.contains(classCloud) && allCell[8].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);
	else if ( allCell[1].classList.contains(classCloud) && allCell[4].classList.contains(classCloud) && allCell[7].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);
	else if ( allCell[2].classList.contains(classCloud) && allCell[4].classList.contains(classCloud) && allCell[6].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);
	else if ( allCell[2].classList.contains(classCloud) && allCell[5].classList.contains(classCloud) && allCell[8].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);
	else if ( allCell[3].classList.contains(classCloud) && allCell[4].classList.contains(classCloud) && allCell[5].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);
	else if ( allCell[6].classList.contains(classCloud) && allCell[7].classList.contains(classCloud) && allCell[8].classList.contains(classCloud) ) setTimeout(winZero('Cloud', allCell),50);

	checkTie(allCell);
}


function checkTie(ArrayElements) {
	let arrayElems = ArrayElements;
	let flagTie = true;
	for ( let count = 0,lenArr = arrayElems.length; count < lenArr; count++ ) {
		if ( !arrayElems[count].classList.contains('Love') && !arrayElems[count].classList.contains('Cloud') )
			flagTie = false;
	}
	if ( flagTie ) winZero('Tie', arrayElems);
}

function winZero(playWon,array) {
	setTimeout(function () {
		alert(`${playWon} won!`);
		cleanClasses(array);
		alert('Давайте сыграем еще!')
	},500)
}

function cleanClasses(ArrayElements) {
	let arrayElems = ArrayElements;
	for ( let count = 0,lenArr = arrayElems.length; count < lenArr; count++ ) {
		arrayElems[count].classList.remove('Love');
		arrayElems[count].classList.remove('Cloud');
	}
}
