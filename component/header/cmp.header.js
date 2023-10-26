//console.log( '' );





class ComponentHeader {



	static args = {};


	// чи відображати меню 	
	static tfMenu = true; 		// при першому завантаженні застосування - TRUE !!!


	static html( objData = {} ) {
		const fooName = this.name + '.html()';
		
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



		//let html = appProjectName + ' ' + appVersion;
		//&#128660;
		let html = `
			<div class="head">
				<div class="title">${ appProjectName }</div>
				<div class="btn-menu pointer" onclick="ComponentHeader.clc()">
					<img src="img/pic/menu.png" alt="close">
				</div>
			</div>
			<div class="nav-menu"></div>
		`;

		return { tagParam, html };
	}




	static clc() {
		const fooName = this.name + '.clc()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );



		let elem = document.querySelector( '.nav-menu' );
		if ( this.tfMenu ) {

			elem.innerHTML = Component( 'Menu' );

		} else
			elem.innerHTML = '';


		this.tfMenu = !this.tfMenu;
	}








}











