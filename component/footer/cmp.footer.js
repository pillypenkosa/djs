//console.log( 'header' );




class ComponentFooter {

	


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

		let html = '© pillypenkosa@gmail.com 2023. Footer прижат к низу экрана';



		return { html, tagParam };
	}







}











