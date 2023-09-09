//console.log( '' );






class ComponentAside {





	static args = {}; 




	static arrBtns = [

		{ title: 'Головна' 			, id: 'index' 			, href: '#', },
		{ title: 'Фільми' 			, id: 'films' 			, href: '#films', },
		{ title: 'Error 404' 		, id: 'err404' 			, href: '#any-left-page', },





		//{ title: 'Err 404' 			, id: 'err404_djs' 		, href: '#left-set-err', }, // id левый, чтоб как пример не сработала подсветка ( чтоб подсветка сработала прописать id: 'err404' )

	];






	static html( objData = {} ) {


		this.args = objData.args ? objData.args : {}; 


		let name = 'html';
		let ok = `\x1b[32m ok ${ this.name }.${ name }() `;
		let err = `\x1b[31m err ${ this.name }.${ name }() `;



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








	static clc( elem ) {

		//btnLight( 'cmp-aside', elem.dataset.id );
		//console.log( elem.dataset.href );



		//return;







	
		if ( history.pushState ) {
			history.pushState( null, null, elem.dataset.href );
			
			Router.loadContent();
		}
	



		





		//alert( data );

	}










}























