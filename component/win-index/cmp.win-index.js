// © 2023 DJS





class ComponentWinIndex {



	static args = {};





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



		//let html = '<div class="info">Бажаю здоров\'я! ))</div>';
		let html = `<div>${ fooName }</div>`;





		setMeta({
			title 			: '',
			description 	: '',
			//keywords 		: 'Ключові слова...' + name,
			image 			: '',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});



		return { tagParam, html };
	}






	static clc( data ) {
		const fooName = this.name + '.clc()';


		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

	}










}























