//console.log( '' );






class ComponentAside {





	static args = {}; 




	static arrBtns = [

		{ title: 'Головна' 				, id: 'index' 			, href: '?', },
		{ title: 'Фільми' 				, id: 'films' 			, href: '?films', },
		{ title: 'Користувач 555' 		, id: 'user' 			, href: '?user/555', },

		{ title: 'Error 404' 		, id: 'err404' 			, href: '?any-left-page', },





		//{ title: 'Err 404' 			, id: 'err404_djs' 		, href: '#left-set-err', }, // id левый, чтоб как пример не сработала подсветка ( чтоб подсветка сработала прописать id: 'err404' )

	];






	static html( objData = {} ) {

		const fooName = this.name + '.html()';

		this.args = objData.args ? objData.args : {}; 


		let tagParam = {
			//'class' 		: 'active',
			//'name' 		: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 	: 'any-data',
			//'onclick' 	: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 	: '',
			//'defer' 		: '',
		};



		let html = '';
		this.arrBtns.forEach( k => {
			html += `<div class="btn" onclick="${ this.name }.clc( this )" data-id="${ k.id }" data-href="${ k.href }">${ k.title }</div>`;
		});
		

		return { html, tagParam };
	}



















	// ЗРОБИТИ ОКРЕМОЮ фуекцією для переходів по сторінках

	static clc( elem ) {


		const fooName = this.name + '.clc()';




	
		if ( history.pushState ) {
			history.pushState( null, null, elem.dataset.href );
			
			Router.loadContent();
		}
	



		





		//alert( data );

	}










}























