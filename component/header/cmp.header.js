





class ComponentHeader {



	static args = {};




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




		let clsUnvisible = '';
		if ( Router.urlGET ) {
			if ( Router.urlGET.win ) {
				if ( Router.urlGET.win == 'index' || Router.urlGET.win == 'movie' ) 
					clsUnvisible = 'unvisible';
			}
		}




		let html = `
			<div class="head">
				<div class="title">${ appProjectName }</div>

				<div class="nav">
					<div class="btn pointer" onclick="ComponentHeader.clcFilter()">
						<img src="img/pic/filter.png" alt="menu">
					</div>

					<div class="btn pointer" onclick="ComponentHeader.clcMenu()">
						<img src="img/pic/menu.png" alt="menu">
					</div>
				</div>
			</div>
			<div class="nav-menu"></div>
			<div class="filter"></div>
		`;
			//<div class="nav-menu ${ clsUnvisible }">${ Component( 'Menu' ) }</div>

		return { tagParam, html };
	}




	static clcMenu() {
		const fooName = this.name + '.clc()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


		//document.querySelector( '.nav-menu' ).classList.toggle( 'unvisible' );


		let bodyMenu = document.querySelector( 'cmp-header .nav-menu' );

		if ( bodyMenu.innerHTML ) 
			this.delHtmlMenu();

		else 
			this.addHtmlMenu();
	}






	static clcFilter() {
		const fooName = this.name + '.clc()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

		//document.querySelector( '.nav-menu' ).classList.toggle( 'unvisible' );

		let bodyMenu = document.querySelector( 'cmp-header .filter' );

		if ( bodyMenu.innerHTML ) 
			this.delHtmlFilter();

		else 
			this.addHtmlFilter();
	}





	static addHtmlMenu() {
		document.querySelector( 'cmp-header .nav-menu' ).innerHTML = Component( 'Menu' );
	}

	static delHtmlMenu() {
		document.querySelector( 'cmp-header .nav-menu' ).innerHTML = '';

		//document.querySelector( '.nav-menu' ).classList.add( 'unvisible' );
	}








	static addHtmlFilter() {
		document.querySelector( 'cmp-header .filter' ).innerHTML = Component( 'Filter-People' );
	}

	static delHtmlFilter() {
		document.querySelector( 'cmp-header .filter' ).innerHTML = '';

		//document.querySelector( '.nav-menu' ).classList.add( 'unvisible' );
	}







/*
	static hide222() {
		document.querySelector( '.nav-menu' ).classList.add( 'unvisible' );
	}

*/





}











