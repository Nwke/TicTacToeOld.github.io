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
	if ( !element.classList.contains('zero') && !element.classList.contains('cross') ) {

		switch ( playerMark % 2 ) {
			case 0:
				putMark(element,'zero');
				break;
			case 1:
				putMark(element,'cross');
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
	let classCross = 'cross';
	let classZero = 'zero';

	if ( allCell[0].classList.contains(classZero) && allCell[1].classList.contains(classZero) && allCell[2].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);
	else if ( allCell[0].classList.contains(classZero) && allCell[3].classList.contains(classZero) && allCell[6].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);
	else if ( allCell[0].classList.contains(classZero) && allCell[4].classList.contains(classZero) && allCell[8].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);
	else if ( allCell[1].classList.contains(classZero) && allCell[4].classList.contains(classZero) && allCell[7].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);
	else if ( allCell[2].classList.contains(classZero) && allCell[4].classList.contains(classZero) && allCell[6].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);
	else if ( allCell[2].classList.contains(classZero) && allCell[5].classList.contains(classZero) && allCell[8].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);
	else if ( allCell[3].classList.contains(classZero) && allCell[4].classList.contains(classZero) && allCell[5].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);
	else if ( allCell[6].classList.contains(classZero) && allCell[7].classList.contains(classZero) && allCell[8].classList.contains(classZero) ) setTimeout(winZero('Zero', allCell),50);

	else if ( allCell[0].classList.contains(classCross) && allCell[1].classList.contains(classCross) && allCell[2].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
	else if ( allCell[0].classList.contains(classCross) && allCell[3].classList.contains(classCross) && allCell[6].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
	else if ( allCell[0].classList.contains(classCross) && allCell[4].classList.contains(classCross) && allCell[8].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
	else if ( allCell[1].classList.contains(classCross) && allCell[4].classList.contains(classCross) && allCell[7].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
	else if ( allCell[2].classList.contains(classCross) && allCell[4].classList.contains(classCross) && allCell[6].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
	else if ( allCell[2].classList.contains(classCross) && allCell[5].classList.contains(classCross) && allCell[8].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
	else if ( allCell[3].classList.contains(classCross) && allCell[4].classList.contains(classCross) && allCell[5].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
	else if ( allCell[6].classList.contains(classCross) && allCell[7].classList.contains(classCross) && allCell[8].classList.contains(classCross) ) setTimeout(winZero('Cross', allCell),50);
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
		arrayElems[count].classList.remove('zero');
		arrayElems[count].classList.remove('cross');
	}
}
