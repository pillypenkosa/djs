// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [

		{ title: 'Головна' 					, id: 'index' 					, href: '?', },
		{ title: 'Фабули постанов ПДР' 		, id: 'fabuly_postanov_pdr' 	, href: '?fabuly-postanov-pdr', },
		//{ title: 'Фабули протоколів ПДР' 	, id: 'fabuly_protokoliv_pdr' 	, href: '?fabuly-protokoliv-pdr', },
		{ title: 'Права та обов\'язки' 		, id: 'rights' 					, href: '?rights', },


		

		//{ title: 'КУпАП' 					, id: 'kupap' 					, href: '?kupap', },
		//{ title: 'Фабули протоколів ПДР' 	, id: 'fabuly_protokoliv_pdr' 	, href: '?fabuly-protokoliv-pdr', },

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
			html += `<div class="btn" onclick="${ this.name }.clc( this )" data-id="${ k.id }" data-href="${ k.href }">${ k.title }</div>`;
		});
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'data', elem.dataset.href ); 


		ComponentHeader.clc();


		if ( history.pushState ) {
			history.pushState( null, null, elem.dataset.href );
			
			Router.loadContent();
		}






 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
