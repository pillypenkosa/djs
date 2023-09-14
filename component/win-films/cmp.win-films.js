//console.log( '' );






class ComponentWinFilms {



	static args = {};





	static html( objData = {} ) {

		this.args = objData.args ? objData.args : {}; 


		let name = 'html';
		let ok = `\x1b[32m ok ${ this.name }.${ name }() `;
		let err = `\x1b[31m err ${ this.name }.${ name }() `;



		let tagParam = {
			//'class' 		: 'active',
			//'name' 			: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 		: 'any-data',
			//'onclick' 		: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 		: '',
			//'defer' 		: '',
		};

		let html = 'Я компонент ' + this.name;





		let description  	= 'Опис сторінки з фільмами...';
		let title  			= 'Фільми';



		document.title = title;

		document.querySelectorAll( 'head meta[ name="description" ]' )[ 0 ].content 			= description;
		document.querySelectorAll( 'head meta[ name="keywords" ]' )[ 0 ].content 				= 'Кіно...';

		document.querySelectorAll( 'head meta[ property="og:description" ]' )[ 0 ].content 		= description;
		document.querySelectorAll( 'head meta[ property="og:title" ]' )[ 0 ].content 			= title;





		//addErr( 'Шо-то не работает...', );








		return { html, tagParam };
	}






	static clc( data ) {

		//console.log( data );
		//alert( data );

	}










}























