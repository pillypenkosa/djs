//console.log( 'aside' );









class ComponentAside {


	static arrBtns = [

		{ title: 'Any' 			, id: 'any' , },


	];



	static html() {

		let innerHTML = '';

		this.arrBtns.forEach( k => {
			innerHTML += getComponentHtml({ 
				tag: 'btn', 
				innerHTML: k.title, 
				param: [
					{ k: 'data-id' 	, v: k.id 									, },
					{ k: 'title' 	, v: k.title 								, },
					{ k: 'onclick' 	, v: `ComponentAside.clc( '${ k.id }' )` 	, },
				], 
			});
		});

		return getComponentHtml({ tag: 'aside', innerHTML, });
	}



	static clc( id ) {

		// подсветка кнопок
		btnLight( 'cmp-aside', id );


		// очистка контента
		let content = document.getElementById( 'content' );
		content.innerHTML = '';



		if ( id == 'any' ) 
			content.innerHTML = ComponentAny.html();




	} 








}















