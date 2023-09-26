// © 2023 DJS





class ComponentWinIndex {



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



		let html = name;



		setMeta({
			title 			: name,
			description 	: 'Опис' + name,
			//keywords 		: 'Ключові слова...' + name,
			//image 			: 'img/pic/kartinka-' + name + '.jpg',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 		: 'Назва сайту, мабуть стале значення... ' + name,
		});



		return { html, tagParam };
	}






	static clc( data ) {
		const name = this.name + '.clc()';


		cns( 'var', 'data', data );

	}










}























