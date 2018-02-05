'use strict'; let p = console.log;

let start = //prompt('Input your IMS', 'К155ЛА3');
'КМ155ЛА3';

p( anylize(start) );

function anylize(input) {
	let result = ''; p(input);
	input = input.toUpperCase();

	let part1 = parseStr(input);
	result += anylizeArea(part1);
	input = input.slice(part1.length);

	let part2 = parseInt(input);
	result += anylizeDate(part2); // дописать анализатор тип ИМС, переименовать функцию, логическая группа ИМС

	p( part2 )

	return result;
}

function anylizeArea(string) {
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

function anylizeDate(number) {
	let result = '';

	if (number % 2 == 0) result += 'гібридна';


	return result;
}

function parseStr(string) {
	let count = 0;
	for (let i = 0, n = string.length; i < n; i++) {
		if ( !+string[i] ) count++;
		else break;
	}
	return string.slice(0,count);
}

	// if (number.length == 2) {
	// 	result += '84-, '
	// } else {
	// 	result += '84+, '
	// }