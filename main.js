'use strict'; let p = console.log;

let start = //prompt('Input your IMS', 'К155ЛА3');
'КМ155ЛА3';

p( analyze(start) );

function analyze(input) {
	let result = '', ims = input;
	input = input.toUpperCase();

	let part1 = parseStr(input);
	result += analyzeArea(part1);
	input = input.slice(part1.length);

	let part2 = parseInt(input);
	result += analyzeSeria(part2);
	input = input.slice( (part2+'').length );

	let part3 = parseStr(input);
	result += analyzeGroup(part3);
	input = input.slice(part3.length);

	let part4 = parseInt(input);
	result += analyzeDate(part4);
	input = input.slice( (part4+'').length );

	if (input.length != 0) {
		result += ', модифікація ' + input; 
	}

	return ims + ' - ' + result;
}

function analyzeArea(string) {
	let result = '', len = string.length;

	let imsFrom = ["К", "Э"],
			imsFromAns = ["Сертифікована, ", "Експортна, ", "Внутрішня, "],
			imsMaterial = ['М', 'Н', 'Р', 'А', 'Ф', 'Б', 'Е'],
			imsMaterialAns = ['металокерамічна, ', 'mini металокерамічна, ', 'пластмасовий DIP, ', 'mini пластмасовий DIP, ', 'mini пластмасовий DIP (інша тех.), ', 'безкорпусний, ', 'металополімерний DIP'];
	
	if (len == 0) return '';

	if (len > 0)	result += imsFromAns[ imsFrom.indexOf(string[0]) ];

	if (len > 1) result += imsMaterialAns[ imsMaterial.indexOf(string[1]) ];

	return result;
}

function analyzeSeria(number) {
	let result = '', flag = 0;
	number += '';

	if (number[0] % 2 == 0) result += 'гібридна, ';
	if (number[0] == 1 || number[0] == 5 || number[0] == 7) result += 'напівпровідникова, ';
	if (number[0] == 3) result += 'специфічна, ';
	if (number[0] == 5){
		result += 'ТТЛ/КМОН, ';
		flag = 5;
	} 

	if (number.slice(1) == '59' || number.slice(1) == '33') result += 'ТТЛ, біполярні'.slice(flag);

	return result;
}

function analyzeGroup(string) {
	let result = '';

	let imsGroup = ['ЛИ', 'ЛЛ', 'ЛН', 'ЛА', 'ЛЕ', 'ЛС', 'ЛБ', 'ЛР', 'ЛК', 'ЛК', 'ЛД', 'ЛП'],
			imsGroupAns = ["і (кон'юнктор), ", "або (альт-або), ", "не (інвертор), ", "і-не (штрих шефера), ", "або-не (стрілка пірса), ", "і-або (комплексні МС), ", "і-не, або-не (комплексні мс, стрілка + штрих), ", "і-або-не (комплексні МС і полярними входами), ", "і-або-не, і-або (комплексні МС с полярними входами, стрілка + штрих), ", "або-не, або, ", "розширені, ", "інші, "]
	if (!!~imsGroup.indexOf(string)) {
		result += imsGroupAns[imsGroup.indexOf(string)];
	} else alert('Group "' + string + '" is not include! Try pick another.');
	
	return result;
}

function analyzeDate(number) {
	let result = '';

	number += '';
	if (number.length <= 2) {
		result += '84-, '
	} else {
		result += '84+, '
	}

	return result + number + ' - номер розробки';
}

function parseStr(string) {
	let count = 0;
	for (let i = 0, n = string.length; i < n; i++) {
		if ( !+string[i] ) count++;
		else break;
	}
	return string.slice(0,count);
}