// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [

		{ title: 'Головна' 				, id: 'index' 				, href: '?', },
		{ title: 'Ще шось...' 			, id: 'any-thing' 			, href: '?any-thing', },


	];







 
	static html( objData = {} ) { 
		const name = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 
 		this.arrBtns.forEach( k => {
			html += `<div class="btn pointer" onclick="${ this.name }.clc( this )" data-id="${ k.id }" data-href="${ k.href }">${ k.title }</div>`;
		});
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) {  
		const fooName = this.name + '.clc()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


		ComponentHeader.clc();


		if ( history.pushState ) {
			history.pushState( null, null, elem.dataset.href );
			
			Router.loadContent();
		}



	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
