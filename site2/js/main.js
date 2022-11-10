/*const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3
});

$('.slider__btn--prev').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('prev.owl.carousel');
})*/

function carusel(vector){
	var frames=document.getElementsByClassName('slider__item');
	//alert(frames.length);
	for(var i=0; i<frames.length; i++){
		if( frames[i].classList.contains('visible') ){
			frames[i].classList.remove('visible');
			
			if (vector=='next'){
				if(i<frames.length-1){
					frames[i+1].classList.add('visible');
				}
				else frames[0].classList.add('visible');
			}
			else{
				if(i>0){
					frames[i-1].classList.add('visible');
				}
				else frames[frames.length-1].classList.add('visible');
			}
			break;
		}
	}
}


