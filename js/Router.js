class Router {






	static loadApp() {


		//let name = 'loadApp';
		let ok = `\x1b[32m ok ${ this.name }.loadApp()`;
		let err = `\x1b[31m err ${ this.name }.loadApp()`;


		let html = 
			'<header>' + Component( 'Header' ) + '</header>' +
			'<div id="middle">' +
				'<aside>' + Component( 'Aside' ) + '</aside>' +
				'<div id="content"></div>' +
			'</div>' +
			'<footer>' + Component( 'Footer' ) + '</footer>'
		;

		document.querySelector( 'app' ).innerHTML = html;

		this.loadContent();
	}






	static loadContent() {

		let name = this.name + '.loadContent()';

		//cns( 'ok', name );
		//cns( 'var', 'window.location.search', window.location.search.slice( 1 ) );



		const roites = [

			{ href: '', cmp: '', }

		];






		let txt = 'user/5298789';
		//let regexp = /\d/; 	// цифра
		//let regexp = /^[0-9]+$/;
		let regexp = /^user\/[0-9]+$/;



		if ( regexp.test( txt ) ) {

			cns( 'var', 'regexp', regexp );
			cns( 'var', 'txt', txt );
		
		} else
			cns( 'err', 'Не канає...' );




















		let html = 'Шось сюди виведемо...';







		// відображення помилок в консолі
		isErr();
		document.getElementById( 'content' ).innerHTML = html;
	}































	static loadContent222() {

		//console.clear();

		let name = this.name + '.loadContent()';

		//let ok = `\x1b[32m ok ${ this.name }.loadContent()`;
		//let err = `\x1b[31m err ${ this.name }.loadContent()`;

		//return;



		let hash = window.location.hash ? window.location.hash : '';
		
		//console.log( ok, hash );

		let html = '';
		if ( hash ) {

			let cmp = dependences.filter( k => {

				if ( k.route ) 
					if ( k.route == hash ) 
						return k;
				
			});

			if ( cmp.length ) {
				if ( cmp[ 0 ].name ) 
					html = Component( cmp[ 0 ].name );
				
			} else {
				addWarning( name + ' ...такого `url` не існує...' );
				

				//cns( 'warning', '...такого `url` не існує...', );

				html = Component( 'Win-Err404' );

			}

		} else 
			html = Component( 'Win-Index' );


		// відображення помилок в консолі
		isErr();

		document.getElementById( 'content' ).innerHTML = html;
	}


















	static link222( txt ) {

		//history - встроенный объект, не трогать!!!
		if ( history.pushState ) {
			history.pushState( null, null, window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + txt );
		
			this.loadContent();
		}
	}



	// подсветка активных элементов, например кнопок в навигации или изменения чего-либо в хедере, футере и т.д. и т.п.
	static activeElem222( txt ) { // txt






	}








}








