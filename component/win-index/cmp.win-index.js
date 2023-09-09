//console.log( '' );






class ComponentWinIndex {




	static args = {};





	static html( objData = {} ) {

		this.args = objData.args ? objData.args : {}; 


		let name = 'html';
		let ok = `\x1b[32m ok ${ this.name }.${ name }() `;
		let err = `\x1b[31m err ${ this.name }.${ name }() `;



		let tagParam = {
			//'class' 		: 'active',
			//'name' 			: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 		: 'any-data',
			//'onclick' 		: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 		: '',
			//'defer' 		: '',
		};


/*
		let html = `${ ok } <div>
				Зробити підвал притиснутим до низу
			</div>
		`;
*/
		let html = '';

		html = `
			${ ok }
			<br/>


/*


a;lsjdf ;alskd jf;asl jf;al f;aslkdf j;asl jf;asjdf pqwjre tqj ;akdf 0q3 trpwe sp0a apf mapsdf a0udf name
aODSF AOJDF NQ0U APKF MASM PASJ isj-twire sdfm gwp[i ms'dfm sgf ]

a;kldf j;asl jfij ;q3kl ds.f nqp3j ;zds mnv;asdklf qwp3j ;zdfvm ;adsjgf pajdf; asdfm ;asduf apsdf m/asdf apsu ;akdsmf ;ajg psi jg;sldm ;asjd ;asjdfa'j ;aksj aposu ;aslkm asdjf ;asjf a';ds f[air g;asd jg;ask jgasp asd ;asdk j;asiut asij dasmf ;adfng [wijtr pqu r'aij -q8j ra'ij gfpqu rqwem ./cn ;asdjfq8
43jq'prm'faidjf m-zx?  ja[s9u pqioj ;lzsdh ]]]

asdfg s gsdfg sdfg sdfg sdfg 	lorem ip
dsh d;ajire apji asd fla hf/asmnf ql hre	ql2b r1poj vnre ;sj n
sdgf ss d
fg sdfgg sdf gsd getComponentHtml sdfg 

*/

		`;







		



		return { html, tagParam };
	}























	static arrArgs222 = [ 
		{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 





	static html222( tag ) {


		return this.name;













		//const title = 'Головна';
		document.title = appProjectName + ' ' + this.name;



		let data = {
			tag: tag,
			param: [
				{ k: 'class' 		, v: 'anyCls' 											, },
				{ k: 'name' 		, v: 'anyName' 											, },
				{ k: 'title' 		, v: 'Вспливаюча підказка' 								, },
				{ k: 'data-id' 		, v: 'anyData' 											, },
				{ k: 'selected' 	, v: '' 												, }, // без значений
				{ k: 'defer' 		, v: '' 												, }, // без значений

				// onclick - прописати рядком з дотримуванням лапок ( тобто без них ) як тут // в аргумент потрапить реальний массив this.arrArgs
				{ k: 'onclick' 		, v: this.name + '.clc( ' + this.name + '.arrArgs )' 	, },

				// в аргумент потрапляє рядок ( вказувати в лапках )
				//{ k: 'onclick' 		, v: `ComponentAny.clc( 'левый текст' )` 	, }, 
				//{ k: 'onclick' 		, v: `ComponentAny.clc( '${ txt }' )` 		, }, 

			],
			innerHTML: this.name + '.html()',
		};

		//console.log( tag );


		return getComponentHtml( data );
	}



	static clc( data ) {

		console.log( data );
		//alert( data );

	}










}























