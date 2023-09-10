



class LoadDependences {






	static load() {

		//let name = 'html';
		let ok = `\x1b[32m ok ${ this.name }.load()`;
		let err = `\x1b[31m err ${ this.name }.load()`;

		dependences.forEach( k => {

			if ( k.name ) {

				let fileName = k.name.toLowerCase();



				if ( k.id == 'arrDB' ) {
					let script = document.createElement( 'script' );
					script.src = `https://pillypenkosa.github.io/database/list/list.${ fileName }.js`;
					script.setAttribute( 'defer', '' );
					//divList.append( script ); 	// divList = <div id="divList">
					document.head.append( script );
				} 



				if ( k.id == 'arr' ) {
					let script = document.createElement( 'script' );
					script.src = `list/list.${ fileName }.js`;
					script.setAttribute( 'defer', '' );
					//divList.append( script ); 	// divList = <div id="divList">
					document.head.append( script );
				} 



				if ( k.id == 'component' ) {

					let css = document.createElement( 'link' );
					css.href = `component/${ fileName }/cmp.${ fileName }.css`;
					css.rel = 'stylesheet'; 
					css.type = 'text/css'; 
					document.head.append( css );

					let script = document.createElement( 'script' );
					script.src = `component/${ fileName }/cmp.${ fileName }.js`;
					script.setAttribute( 'defer', '' );
					//divComponent.append( script ); 	// divComponent = <div id="divComponent">
					document.head.append( script );
				}



			} else addErr( err + ' - Існують `dependences` без назви...' );

					
		});
	}




}




