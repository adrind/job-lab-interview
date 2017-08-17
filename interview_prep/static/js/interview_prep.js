$(function () {
   $('.btn-answer').click(function (evt) {
       var $el = $(evt.target),
           text = $el.parent().find('.suggestion').text();

       if($el.data('is-correct') === 'True') {
           $('.incorrect').hide();
           $('.correct.suggestion-box').show().find('.suggestion-text').html(text);
           $('.btn-answer').addClass('disabled');
           $el.addClass('correct-answer');
       } else {
           $('.incorrect.suggestion-box').show().find('.suggestion-text').html(text);
           $('.incorrect').show();
       }

   });

   $('.btn-repeat').click(function (evt) {
       var $el = $(evt.target);
       $('.btn-answer').removeClass('disabled correct-answer');

       $('.suggestion-box').hide();
   });
});
