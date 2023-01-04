//console.log( 'aside' );









class ComponentAside {


	static arrBtns = [

		{ title: 'Головна' 			, id: 'index' , 	href: 'index', },
		{ title: 'Фільми' 			, id: 'films' , 	href: 'films', },
		{ title: 'Зірки' 			, id: 'stars' , 	href: 'stars', },
		{ title: 'Err 404' 			, id: 'err404' , 	href: 'awfasdfasdfasdfas', },


	];



	static html() {

		let innerHTML = '';

		this.arrBtns.forEach( k => {
			innerHTML += getComponentHtml({ 
				tag: 'btn', 
				innerHTML: k.title, 
				param: [
					{ k: 'data-id' 	, v: k.id 													, },
					{ k: 'title' 	, v: k.title 												, },
					{ k: 'onclick' 	, v: `ComponentAside.clc( '${ k.id }', '${ k.href }' )` 	, },
				], 
			});
		});

		return getComponentHtml({ tag: 'aside', innerHTML, });
	}



	static clc( id, href ) {

		// подсветка кнопок
		btnLight( 'cmp-aside', id );

		//alert( id );
		//alert( href );


		Router.link( href );

/*
		// очистка контента
		let content = document.getElementById( 'content' );
		content.innerHTML = '';



		if ( id == 'any' ) 
			content.innerHTML = ComponentAny.html();

*/


	} 








}















