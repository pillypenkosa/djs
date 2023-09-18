const appProjectName = 'DJS';






/*
let screenHeight = window.screen.height;
let screenWidth = window.screen.width;

alert( screenHeight );
alert( screenWidth );
*/






	//height: 500px;





let errConsole 		= [];
//let errConsole 		= [];
let warningConsole 	= [];

//errConsole.err = [];
//errConsole.warning = [];






function addErr( txt = '' ) {
	if ( txt )
		errConsole.push( txt );
		//errConsole.err.push( txt );
}


function addWarning( txt = '' ) {
	if ( txt )
		warningConsole.push( txt );
		//errConsole.warning.push( txt );
}





function isErr() {

	let ok = 'isErr() - помилок не зафіксовано )))';
	let err = 'isErr() - виявлені помилки:';

	//console.log( errConsole.err );
	//console.trace();


	//cns( 'var', 'errConsole', errConsole );



	//if ( errConsole.err || errConsole.warning ) {
	if ( errConsole.length || warningConsole.length ) {


		//if ( errConsole.err.length ) {
		if ( errConsole.length ) {
			//cns( 'Бля буду, помилки хуярять... ', 'шось', 'err' );

			//console.log( err );
			//cns( 'err', 'Помилки:', );

			errConsole.forEach( k => {
				//console.log( k );
				cns( 'err', k, );
			});
		}

		//if ( errConsole.warning.length ) {
		if ( warningConsole.length ) {
			//cns( 'Бля буду, помилки хуярять... ', 'шось', 'err' );

			//console.log( err );
			//cns( 'warning', 'Зауваження:', );

			warningConsole.forEach( k => {
				//console.log( k );
				cns( 'warning', k, );
			});
		}



	} else 
		//console.log( ok );
		//cns( 'ok', 'Помилок не вижу... ', );
		cns( 'ok', 'Помилок не виявлено...', );





	errConsole 		= [];	
	warningConsole 	= [];	
}


//function cns( txt, obj, type = 'ok' ) { 	// t - type: текст `ok`, `err`, `warning`, 	// txt - текстова назва змінної 		// obj - змінна з конкретним змістом 








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
		bgFrom 	= 'f70';
		bgTo 	= 'fc0';
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

		console.log( `%c${ txt }`, css );
	}

	if ( type == 'err' ) {
		bgFrom 	= 'f00';
		bgTo 	= '500';

		console.log( `%c${ txt }`, css );
	}

	if ( type == 'warning' ) {
		bgFrom 	= 'fc0';
		bgTo 	= 'f90';

		console.log( `%c${ txt }`, css );
	}

	if ( type == 'var' ) {
		bgFrom 	= '777';
		bgTo 	= '111';
		borderRadiusTR 	= 0; 	// L - left, R - right, T - top, B - bottom
		borderRadiusBR 	= 0; 	// L - left, R - right, T - top, B - bottom

		console.log( '%c' + txt + ':', css, obj );
		//console.log( obj );

	}

}












//console.log( window.location.search ); 





cns( 'var', 'window.location.search', window.location.search.slice( 1 ) );















/*
/ GitHub працює тільки зі знаком питання

https://pillypenkosa.github.io/djs/   ?   456/sfsf4/sfsf
*/





