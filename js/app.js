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



	console.log( 'txt', txt );
	console.log( 'className', className );
	console.log( 'tagName', tagName );
	console.log( 'fileName', fileName );




		
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











