// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyPeople { 
 
 
 
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


		if ( objListPeople && objListPeople[ data ] ) {
			obj = objListPeople[ data ];



			let tBody = '';





			if ( obj.img ) {

				let htmlImg = '';
				if ( obj.img[ 0 ] ) {

					for ( let i=1; i<obj.img[ 0 ]+1; i++ ) 
						htmlImg += `<img src="https://pillypenkosa.github.io/media/img/people/${ obj.id }/${ i }.jpg" alt="${ obj.id }">`;
				}

				tBody += `<tr><td class="key">img</td><td class="val">${ htmlImg }</td></tr>`;
			}


			if ( obj.id ) 
				tBody += `<tr><td class="key">id</td><td class="val">${ obj.id }</td></tr>`;


			if ( obj.name ) {

				if ( obj.name.n )
					tBody += `<tr><td class="key">name.n</td><td class="val">${ obj.name.n }</td></tr>`;

				if ( obj.name.p )
					tBody += `<tr><td class="key">name.p</td><td class="val">${ obj.name.p }</td></tr>`;

				if ( obj.name.s )
					tBody += `<tr><td class="key">name.s</td><td class="val">${ obj.name.s }</td></tr>`;
			}

			if ( obj.sex ) 
				tBody += `<tr><td class="key">sex</td><td class="val">${ obj.sex }</td></tr>`;



			if ( obj.life ) {

				let htmlLife = '';

				if ( obj.life.bd ) 
					tBody += `<tr><td class="key">life.bd</td><td class="val">${ obj.life.bd }</td></tr>`;

				if ( obj.life.bm ) 
					tBody += `<tr><td class="key">life.bm</td><td class="val">${ obj.life.bm }</td></tr>`;

				if ( obj.life.by ) 
					tBody += `<tr><td class="key">life.by</td><td class="val">${ obj.life.by }</td></tr>`;

				if ( obj.life.dd ) 
					tBody += `<tr><td class="key">life.dd</td><td class="val">${ obj.life.dd }</td></tr>`;

				if ( obj.life.dm ) 
					tBody += `<tr><td class="key">life.dm</td><td class="val">${ obj.life.dm }</td></tr>`;

				if ( obj.life.dy ) 
					tBody += `<tr><td class="key">life.dy</td><td class="val">${ obj.life.dy }</td></tr>`;
			}


			if ( obj.internet ) {

				if ( obj.internet.imdb ) 
					tBody += `<tr><td class="key">internet.wiki_ua</td><td class="val">
						<a href="https://www.imdb.com/name/nm${ obj.internet.imdb }/" target="_blank">IMDb&#11023;</a>
					</td></tr>`;

				if ( obj.internet.wiki_ua ) 
					tBody += `<tr><td class="key">internet.wiki_ua</td><td class="val">
						<a href="https://uk.wikipedia.org/wiki/${ obj.internet.wiki_ua }" target="_blank">WikiUa&#11023;</a>
					</td></tr>`;
			}





			html = `<div class="body-wrap">
				<table class="table-key-val">${ tBody }</table>
			</div>`;
		}


		return { tagParam, html };  
	} 
 
 
 
 

/*

				<div>ID: ${ obj.id }</div>
				<div>${ obj.name.n ? obj.name.n : '' } ${ obj.name.p ? obj.name.p : '' } ${ obj.name.s ? obj.name.s : '' }</div>


*/






 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
