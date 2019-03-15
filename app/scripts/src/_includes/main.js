$(function(){


	function nextStep($this){
        $this.parents('.js-folder-list').attr('data-active',$this.data('id'));
        prevStep = $('.js-folder-img > div.active-js').data('step');
        prevStepSelector = '.js-folder-img > div[data-step="'+prevStep+'"]';

        activeStep = $this.data('id')+1;
        activeStepSelector = '.js-folder-img > div[data-step="'+activeStep+'"]';
        $(prevStepSelector).addClass("visible animated flipOutX");
        $('.js-folder-img > div').removeClass('active-js');
        $(activeStepSelector).addClass('active-js');
        $(activeStepSelector).removeClass('flipOutX');
        $(activeStepSelector).addClass("visible animated flipInX");
    };


    $('.js-folder-list li a').hover(function(){
        nextStep($(this));
    },function(){});




});