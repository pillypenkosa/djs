const appProjectName = 'DJS';






/*
let screenHeight = window.screen.height;
let screenWidth = window.screen.width;

alert( screenHeight );
alert( screenWidth );
*/






	//height: 500px;




let errConsole = [];




function addErr( txt = '' ) {
	if ( txt )
		errConsole.push( txt );
}

function isErr() {

	let ok = 'isErr() - помилок не зафіксовано )))';
	let err = 'isErr() - виявлені помилки:';



	if ( errConsole.length ) {


		//cns( 'Бля буду, помилки хуярять... ', 'шось', 'err' );

		console.log( err );

		errConsole.forEach( k => {
			console.log( k );
		});

	} else 
		console.log( ok );
		//cns( 'ok', 'Помилок не вижу... ', );


	errConsole = [];	
}


//function cns( txt, obj, type = 'ok' ) { 	// t - type: текст `ok`, `err`, `warning`, 	// txt - текстова назва змінної 		// obj - змінна з конкретним змістом 















function isErr222() {

	let ok = `\x1b[32m ok isErr() - помилок не зафіксовано )))`;
	let err = `\x1b[31m err isErr() виявлені помилки:`;

	if ( errConsole.length ) {

		console.log( err );

		errConsole.forEach( k => {
			console.log( k );
		});

	} else 
		console.log( ok );

	errConsole = [];	
}








// возврат HTML-разметки конкретного компонента
function Component( txt, obj = {} ) { 		// txt - назва компонента, obj - дані для компонента

	// txt - Win-Car-Engine // кожне слово з ВЕЛИКОЇ літери // Всі слова через дефіс

	//console.log( 'txt:', txt );



	let arr = txt.split( '-' );
	//console.log( 'arr:', arr );

	let className = 'Component';
	arr.forEach( k => {
		className += k;
	});

	let tagName = 'cmp-' + txt.toLowerCase();
	let fileName = txt.toLowerCase();



	//console.log( 'txt', txt );
	//console.log( 'className', className );
	//console.log( 'tagName', tagName );
	//console.log( 'fileName', fileName );




		
	//Router.loadApp();


	// дані з конкретного компонента
	let objIni = eval( `${ className }.html( obj )` );

	//console.log( objIni );

	let tagParam = '';
	if ( objIni ) {
		if ( objIni.tagParam ) {

			for ( let k in objIni.tagParam ) 
				tagParam += ' ' + k + '="' + objIni.tagParam[ k ] + '"';
		}
	}


	return '<' + tagName + ' ' + tagParam + '>' + ( objIni.html ? objIni.html : '' ) + '</' + tagName + '>';
}










// подсветка кнопок
function btnLight222( container, id ) { 	// container - блок, где расположены кнопки 		// data-id - идентификатор конкретной кнопки

	// !!! в каждой кнопке должен быть класс `btn` и атрибут data-id <div class="btn" data-id=" ...anyTxt... "></div>
	//console.log( container, id );
	//alert( container );
	//alert( id );

	let arr = document.querySelectorAll( container + ' .btn' );

	arr.forEach( k => {
		if ( k.dataset.id == id ) 
			k.classList.add( 'active' );
		else 
			k.classList.remove( 'active' );
	});
}






function big1Letter222( txt ) {

	return txt[ 0 ].toUpperCase() + txt.slice( 1 );
}




// вся строка в нижний регистр
// toLowerCase()




// виведення інформвції в консоль
function cns( type, txt, obj ) { 	// t - type: текст `ok`, `err`, `warning`, 	// txt - текстова назва змінної 		// obj - змінна з конкретним змістом 

	let bgFrom 			= '';
	let bgTo 			= '';
	let borderRadiusTL 	= 10; 	// L - left, R - right, T - top, B - bottom
	let borderRadiusTR 	= 10; 	// L - left, R - right, T - top, B - bottom
	let borderRadiusBL 	= 10; 	// L - left, R - right, T - top, B - bottom
	let borderRadiusBR 	= 10; 	// L - left, R - right, T - top, B - bottom
	let css 			= '';

	let outContent 		= '';


	if ( type == 'ok' ) {
		bgFrom 	= '0f0';
		bgTo 	= '050';
	}

	if ( type == 'err' ) {
		bgFrom 	= 'f00';
		bgTo 	= '500';
	}

	if ( type == 'warning' ) {
		bgFrom 	= 'fc0';
		bgTo 	= 'f90';
	}

	if ( type == 'var' ) {
		bgFrom 	= '777';
		bgTo 	= '111';
		borderRadiusTR 	= 0; 	// L - left, R - right, T - top, B - bottom
		borderRadiusBR 	= 0; 	// L - left, R - right, T - top, B - bottom
	}


	css = `
		padding: 0 10px; 
		border-top-left-radius: ${ borderRadiusTL }px; 
		border-top-right-radius: ${ borderRadiusTR }px; 
		border-bottom-left-radius: ${ borderRadiusBL }px; 
		border-bottom-right-radius: ${ borderRadiusBR }px; 
		font-size: 10px; 
		font-family: Courier; 
		font-weight: bold; 
		background: linear-gradient( to top, #${ bgFrom }, #${ bgTo } ); 
		color: #fff; 
	`;

	outContent = `%c${ type }: ${ txt }` ;




	if ( type == 'ok' ) {
		bgFrom 	= '0f0';
		bgTo 	= '050';

		console.log( `%cOk! ${ txt }`, css );
	}

	if ( type == 'err' ) {
		bgFrom 	= 'f00';
		bgTo 	= '500';

		console.log( `%cПомилка! ${ txt }`, css );
	}

	if ( type == 'warning' ) {
		bgFrom 	= 'fc0';
		bgTo 	= 'f90';

		console.log( `%cУвага! ${ txt }`, css );
	}

	if ( type == 'var' ) {
		bgFrom 	= '777';
		bgTo 	= '111';
		borderRadiusTR 	= 0; 	// L - left, R - right, T - top, B - bottom
		borderRadiusBR 	= 0; 	// L - left, R - right, T - top, B - bottom

		console.log( `%cЗмінна ${ txt }`, css );
	}




	//if ( obj !== undefined ) 
		console.log( obj );





	return;


	console.log( outContent, css );

	//console.log( obj );








	let arrDjs1 = {


		aaa: { id: 1, key: '123', val: 'qwer', },
		bbb: { id: 2, key: '456', val: 'asdf', },
		ccc: { id: 3, key: '789', val: 'zxcv', },

	} ;










	console.groupCollapsed ( 'шо-то у Ашота 1' );

		console.log( 'Какая-то жопа 11...' );
		console.warn( 'Какая-то жопа 12...' );
		console.error( 'Какая-то жопа 13...' );


		//console.groupEnd();


		console.groupCollapsed ( 'шо-то у Ашота 2' );

			console.log( 'Какая-то жопа 21...' );
			console.log( 'Какая-то жопа 22...' );
			console.log( 'Какая-то жопа 23...' );


		console.groupEnd();

		console.log( 'просто жопа ...' );

	console.groupEnd();

	console.log( 'просто жопа 2...' );




	//let css = "font-size: 20px; font-family: Courier; font-weight: bold; background: linear-gradient( to top, #0f0, #050 ); color: #fff; padding: 0 50px; border-radius: 10px;";


	console.log( '%cЛевый текст... меняй подушки...', css );



	console.warn( 'Name is not provided...' );
	console.error( 'Какая-то памилка...' );

	console.info( 555 );






	let color = '\x1b[32m';




	//console.clear();




	console.trace();


	let fruits = [ 
		[ `&#91;Apple`, 'Orange1', 'Banana1' ], 
		[ `&#91;Apple`, 'Orange2', 'Banana2' ], 
		[ `&#91;Apple`, 'Orange3', 'Banana3' ], 
		[ `&#91;Apple`, 'Orange4', 'Banana4' ], 
		[ `&#91;Apple`, 'Orange5', 'Banana5' ], 
	];









	console.table( arrDjs1 );







	//console.log( "%cExample %s", css, 'all code runs happy' );
	

	console.log( '%cExample all code runs %shappy', css, 'after555' );





	console.log( color + k + ':' );
	console.log( v );



}





