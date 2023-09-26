//console.log( '' );






class ComponentWinUser {




	static args = {};





	static html( objData = {} ) {

		const name = this.name + '.html()';
		
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

		html = name;



		setMeta({
			title 			: name,
			description 	: 'Опис ' + name,
			keywords 		: 'Ключові слова...' + name,
			//image 			: 'img/pic/kartinka-' + name + '.jpg',
			//url 			: 'url/any/there/' + name,
			type 			: 'Тіпі-тіп ' + name,
			//site_name 		: 'Назва сайту, мабуть стале значення... ' + name,
		});




		return { html, tagParam };
	}























	static arrArgs222 = [ 
		{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 





	static html222( tag ) {


		return this.name;













		//const title = 'Головна';
		document.title = appProjectName + ' ' + this.name;



		let data = {
			tag: tag,
			param: [
				{ k: 'class' 		, v: 'anyCls' 											, },
				{ k: 'name' 		, v: 'anyName' 											, },
				{ k: 'title' 		, v: 'Вспливаюча підказка' 								, },
				{ k: 'data-id' 		, v: 'anyData' 											, },
				{ k: 'selected' 	, v: '' 												, }, // без значений
				{ k: 'defer' 		, v: '' 												, }, // без значений

				// onclick - прописати рядком з дотримуванням лапок ( тобто без них ) як тут // в аргумент потрапить реальний массив this.arrArgs
				{ k: 'onclick' 		, v: this.name + '.clc( ' + this.name + '.arrArgs )' 	, },

				// в аргумент потрапляє рядок ( вказувати в лапках )
				//{ k: 'onclick' 		, v: `ComponentAny.clc( 'левый текст' )` 	, }, 
				//{ k: 'onclick' 		, v: `ComponentAny.clc( '${ txt }' )` 		, }, 

			],
			innerHTML: this.name + '.html()',
		};

		//console.log( tag );


		return getComponentHtml( data );
	}



	static clc( data ) {

		console.log( data );
		//alert( data );

	}










}























