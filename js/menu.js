$(document).ready(main);

var contador = 1;


function main() {
	$('.menu_bar').click(function(){
		event.preventDefault();
		if (contador == 1) {
			$('.menu').animate({
				left:'0'
				// position = 'absolute'
			
			});
			

			contador = 0;
		} else{
			contador = 1;
			$('.menu').animate({
				left:'-100%'
				// position = 'assign(url: DOMString)bsolute'
			});

		}
	});

	// $('.contacto').scroll(function () {
	// 	// $('.costruccion').animate({
	// 	// 	left: '25%'
	// 	// });
	// 	console.log('hola');
	// });

	$(window).scroll(function () {
		event.preventDefault();
		// if ($(window).scrollTop() > 1415 && $(window).scrollTop() < 1690) {
		// 	console.log('abierto');
		// 	$('.construccion').animate({
		// 	left: '10%'
		// 	});
		//  } else {
		//  	console.log('cerrado');
		//  	$('.costruccion').animate({
		//  	left: '100%'
		//  	});
		// }

		if ($(window).scrollTop() > 1415 && $(window).scrollTop() < 1690) {
			$('.construccion').animate({
			left: '20%'
			});
			console.log('abierto')
		}

		// if ($(window).scrollTop() < 1415 || $(window).scrollTop() > 1690) {
		// 	$('.construccion').animate({
		// 	left: '100%'
		// 	});
		// 	console.log('cerrado')
		// }


	});
	
}