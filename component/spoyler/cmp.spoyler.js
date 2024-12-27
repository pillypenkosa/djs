// © 2024 DJS 
 
 
 
 
 
class ComponentSpoyler { 
 
 
 
	static args = {}; 

	//static pmClose = '&#9207';
	static pmClose = '+';
	//static pmClose = '&#11163';
	//static pmOpen = '&#9204';
	static pmOpen = '-';
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 


 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-key' 		: objData.key, 
			'data-id' 		: objData.id, 
			//'onclick' 		: `${ this.name }.clc( this )`,
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
		let htmlTitle = '';
		//let htmlThroughput = '';

		if ( objData ) {
			if ( objData.title ) 
				htmlTitle = objData.title;
		}

 
		let html = `
			<div class="title" data-cmp="${ objData.cmp }" onclick="${ this.name }.clc( this )">
				<div class="txt">${ htmlTitle }</div>
				<div class="pm" title="Розгорнути / згорнути">${ this.pmClose }</div>
			</div>
			<div class="body"></div>
		`; 

		return { tagParam, html };  
	} 














	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem );

		let elemParent 		= elem.closest( 'cmp-spoyler' );
		let id 				= elemParent.dataset.id;


		let cmpName 		= elem.dataset.cmp;

		//console.log( 'insert: ', insert );
		//console.log( 'id: ', id );

		let elemBody 		= document.querySelector( `cmp-spoyler[ data-id="${ id }" ] .body` );

		//console.log( 'elemBody: ', elemBody );

		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = Component( cmpName, id ); 
			//elemBody.innerHTML = eval( `${ cmpName }.insertHtmlBody( '${ id }' )`  ); // insertHtmlBody() - має бути прописаним у компоненті, назва якого залітає сюди
		
			//elemBody.innerHTML = this.getHtml( id );
		else 
			elemBody.classList.toggle( 'unvisible' );


		let htmlPM = '';
		if ( elemBody.classList.contains( 'unvisible' ) ) 
			htmlPM = this.pmClose;
		else 
			htmlPM = this.pmOpen;

		elem.querySelector( '.title .pm' ).innerHTML = htmlPM;
	} 
 
 









	static linkTo( data = {} ) {
		const fooName = this.name + '.linkTo()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 







	}






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
