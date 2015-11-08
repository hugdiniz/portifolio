
/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com

 * Edited by Hugo.
 */

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		imagem = document.querySelector( '#imgTitulo' ),
		nomeTitulo = document.querySelector( '#nomeTitulo' ),
		nomeTituloHeader = document.querySelector( '#nomeTituloHeader' ),
		star = document.querySelector( '#StarTitle' ),
		SkillsTitle = document.querySelector( '#SkillsTitle' )

		didScroll = false,
		changeHeaderOn = 40;
		var posicao = 0;

	function init() {
		if(! device ) /* Verifica se nao e mobile */
		{
			window.addEventListener( 'scroll', function( event ) {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 100);
				}
			}, false );
		}
		else
		{
			$(".imgTitulo-none").css("left","0px");
			$(".imgTitulo-none").css("position","relative");
			$(".imgTitulo-none").css("width","45%");
			$(".navbar-toggle").css("background-color","#f05f40");
			$("#bs-example-navbar-collapse-1").css("background-color","#f05f40");
			$("#bs-example-navbar-collapse-1").css("opacity","0.8");
		}
	}
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function scrollPage() {
	

		var sy = scrollY();	
		console.log(sy);
		
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );

			classie.remove( imagem, "imgTitulo-aparecendo" );
			classie.remove( imagem, "imgTitulo-none" );
			classie.add( imagem, "imgTitulo-inline" );

			classie.remove( nomeTitulo, "nomeTituloAparecendo" );			
			classie.add( nomeTitulo, "nomeTituloSumindo" );

			classie.remove( nomeTituloHeader, "nomeTituloHeaderAparecendo" );
			classie.remove( nomeTituloHeader, "nomeTituloHeaderNone" );
			classie.add( nomeTituloHeader, "nomeTituloHeader" );

			classie.remove( star, "nomeTituloAparecendo" );			
			classie.add( star, "nomeTituloSumindo" );

			classie.remove( SkillsTitle, "nomeTituloAparecendo" );			
			classie.add( SkillsTitle, "nomeTituloSumindo" );

		
			
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			
			classie.remove( imagem, "imgTitulo-inline" );
			classie.add( imagem, "imgTitulo-aparecendo" );

			classie.remove( nomeTitulo, "nomeTituloSumindo" );
			classie.add( nomeTitulo, "nomeTituloAparecendo" );

			classie.remove( nomeTituloHeader, "nomeTituloHeader" );
			classie.add( nomeTituloHeader, "nomeTituloHeaderAparecendo" );

			classie.remove( star, "nomeTituloSumindo" );
			classie.add( star, "nomeTituloAparecendo" );

			classie.remove( SkillsTitle, "nomeTituloSumindo" );
			classie.add( SkillsTitle, "nomeTituloAparecendo" );

			
			
		}

		var tamPortifolio = 1415;
		var tamSobre = 3415;
		if(sy >= tamPortifolio && sy < tamSobre && posicao != 1)
		{
			if (posicao == 0)
			{
				classie.remove( header, "headerCorVermelho" );			
				classie.add( header, "headerCorVerde" );
			}
			else
			{
				classie.remove( header, "headerCorAzul" );
				classie.add( header, "headerCorAzulVerde" );
			}			
			posicao = 1;
		}
		else if(sy >= tamSobre && posicao != 2)
		{
			classie.remove( header, "headerCorVerde" );	
			classie.remove( header, "headerCorAzulVerde" );			
			classie.add( header, "headerCorAzul" );
			posicao = 2;		
		}
		else if (sy < tamPortifolio && posicao != 0)
		{
		    classie.remove( header, "headerCorVerde" );	
			classie.remove( header, "headerCorAzulVerde" );	
			
			classie.add( header, "headerCorVermelho" );
			posicao = 0;
		}	

		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();