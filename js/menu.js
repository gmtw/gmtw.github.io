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
	})
}