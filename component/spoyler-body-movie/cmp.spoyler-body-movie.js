// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyMovie { 
 
 
 
	static args = {}; 
 
 
 
	static html( data = '' ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 



 
		//console.log( 'data: ', data ); 
 
 
		let html = ''; 
		let obj = {};


		if ( objFilms && objFilms[ data ] ) {
			obj = objFilms[ data ];






			html = `<div class="body-wrap">

				<div>ID: ${ obj.id }</div>
				<div>${ obj.title.ua } ( ${ obj.year } )</div>

			</div>`;
		}


		return { tagParam, html };  
	} 
 
 
 
 








 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
