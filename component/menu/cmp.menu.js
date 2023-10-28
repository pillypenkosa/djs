// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [

		{ title: 'Головна' 			, id: 'index' 					, href: '?' 			, args: { id1: 'arg_1' 		, }, },
		{ title: 'Щось' 			, id: 'any_thing' 				, href: '?any-thing-1'	, args: { id2: 'arg_22' 	, }, },
		{ title: 'Ще шось' 			, id: 'any_thing_2' 			, href: '?any-thing-2'	, args: { id3: 'arg_333' 	, }, },
		{ title: 'Ще шось там...' 	, id: 'any_thing_3' 			, href: '?any-thing-3'	, args: { id4: 'arg_4444' 	, }, },

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
 			html += `<div class="btn pointer" data-id="${ k.id }" onclick="${ this.name }.clc( '${ k.href }' )">${ k.title }</div>`;
		});
 



 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) {  
		const fooName = this.name + '.clc()';

		console.log( 'fooName: ', fooName );
		console.log( 'data: ', data );


		//console.log( 'data-id: ', data.dataset.id );
		//console.log( 'data-href: ', data.dataset.href );


		// чи відображти меню
		ComponentHeader.clc();


		if ( history.pushState ) {
			history.pushState( null, null, data );
			
			Router.loadContent();
		}

	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
