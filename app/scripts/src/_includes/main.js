$.fn.getVal = function() {
    var values = [];

    this.each(function() {
        var v = $(this).val();
        v = parseFloat(v);
        if (!v) {
            v = 0;
        }
        values.push(v);
    });
    return values;
};

$(function(){

	function nextStep($this){
        $this.parents('.js-folder-list').attr('data-active',$this.data('id'));
        prevStep = $('.js-folder-img > div.active-js').data('step');
        prevStepSelector = '.js-folder-img > div[data-step="'+prevStep+'"]';

        activeStep = $this.data('id')+1;
        activeStepSelector = '.js-folder-img > div[data-step="'+activeStep+'"]';
        $(prevStepSelector).addClass("visible animated fadeOut");
        $('.js-folder-img > div').removeClass('active-js');
        $(activeStepSelector).addClass('active-js');
        $(activeStepSelector).removeClass('fadeOut');
        $(activeStepSelector).addClass("visible animated fadeInRight");
    };

    $('.js-folder-list li a').hover(function(){
        nextStep($(this));
        $('.js-folder-list li a').removeClass('active');
        $(this).addClass('active');
    },function(){
    });


    $('.js-open-card').on('click',function(){
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).text('- СВЕРНУТЬ ВСЕ');  
            $(this).parents('.accordion-in').find('.accordion-text').fadeIn();  
        } else {
            $(this).removeClass('active');
            $(this).text('+ ПОКАЗАТЬ ВСЕ'); 
            $(this).parents('.accordion-in').find('.accordion-text').fadeOut();   
        }
    });

    $('.js-open-popup').on('click',function(event){
        event.preventDefault();
        $('.popup-region').addClass('active');
    });
    $('.js-close-popup').on('click',function(){
        $('.popup-region').removeClass('active');
    });


    $('.js-product').lightGallery({
        thumbnail: false
    });
    if ($('.js-img-product .img-thumb').length>=5) {
        $('.js-img-product').addClass('wider')
    }
    $('.js-img-product .img-thumb').on('click',function(){
        $('.js-img-product .img-thumb').removeClass('active');
        $(this).addClass('active');
        $('.js-product img').removeClass('active');
        $('.js-product img').eq($(this).index()).addClass('active');
    });

    $('.js-other-prosucts').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            960:{
                items:2
            },
            1260:{
                items:3
            }
        }
    });

    $('.js-minus').on('click', function() {
        var $this = $(this),
            text = $this.siblings('input:text'),
            value = text.getVal();

        if (value) {
            value = value[0];
        }
        value -= 1;
        value = value.toFixed(5) - 0;

        if (value <= 1) {
            value = 1;
        }

        text.val(value);
    });

    $('.js-plus').on('click', function() {

        var $this = $(this),
            text = $this.siblings('input:text'),
            value = text.getVal();

        if (value) {
            value = value[0];
        }

        value += 1;
        value = value.toFixed(5) - 0;

        text.val(value);
    });

    $('.js-menu-top > li > ul').wrap('<div></div>');


    $('.btn-menu-popup').on('click',function(){
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.menu-top').addClass('active');
        } else {
            $(this).removeClass('active');
            $('.menu-top').removeClass('active');
        }
    });

    $('.js-buy-product').on('click', function(){
        $(this).after('<div class="hint-prod">'+$(this).data('hint')+'</div>');
        setTimeout(function(){
            $('.hint-prod').remove();
        },2600);
    });

    $('input[type="tel"]').mask("+7 ( 999 ) 999-99-99");

});