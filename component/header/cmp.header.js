//console.log( '' );





class ComponentHeader {



	static args = {};





	static html( objData = {} ) {

		const name = this.name + '.html()';
		
		this.args = objData.args ? objData.args : {}; 




		let tagParam = {
			//'class' 		: 'active',
			//'name' 			: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 		: 'any-data',
			//'onclick' 		: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 		: '',
			//'defer' 		: '',
		};

		let html = appProjectName + ' ' + appVersion;



		return { html, tagParam };
	}




	static clc( objData = {} ) {

		let name = 'clc';
		let ok = `\x1b[32m ok ${ this.name }.${ name }( ${ objData } ) `;
		let err = `\x1b[31m err ${ this.name }.${ name }( ${ objData } ) `;



		//alert( ok );
		console.log( ok );
		console.log( objData );

	}








}











