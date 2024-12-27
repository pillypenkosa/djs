// © 2024 DJS 
 
 
 
 
 
class ComponentWinMovies { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '123', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		//let html = ''; 
 
		//console.log( objData ); // GET - параметры

		//let arrSelected = arrFilms;

		//console.log( arrSelected );

		let html = '';
		if ( objData ) {

			arrFilms.forEach( k => {

				html += `${ 
					Component( 'Spoyler', { 
						id 		: k.id, 
						title 	: `${ k.title.ua } (${ k.year })`, 
						cmp 	: 'Spoyler-Body-Movie', // для вставки в body спойлера
					})}`;
			});

		}





		//console.log( arrSelected );
		//console.log( arrSelected );



		//let html2 = '';

















		//html = html2 + html;
 
 
		setMeta ({ 
			title 			: 'Movie Films', 
			description 	: 'Опис...', 
			image 			: 'img/pic/logoDJS.png', 
		}); 
 

		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 

	} 
 
 
 


 
} 
 
 
 	
 
 
 
 
 	
 
 
