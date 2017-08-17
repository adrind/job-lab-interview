$(function () {
   $('.btn-answer').click(function (evt) {
       var $el = $(evt.target),
           text = $el.parent().find('.suggestion').text(),
           questionText = $('.question-text').text();

       if($el.data('is-correct') === 'True') {
           $('.incorrect').hide();
           $('.correct.suggestion-box').show().find('.suggestion-text').html(text);
           $('.btn-answer').addClass('disabled');
           $el.addClass('correct-answer');
           ga('send', 'event', 'answer', 'correct', questionText);
       } else {
           $('.incorrect.suggestion-box').show().find('.suggestion-text').html(text);
           $('.incorrect').show();
           ga('send', 'event', 'answer', 'wrong', questionText);
       }
   });

   $('.btn-repeat').click(function (evt) {
       var $el = $(evt.target),
           questionText = $('.question-text').text();
       $('.btn-answer').removeClass('disabled correct-answer');
       $('.suggestion-box').hide();
       ga('send', 'event', 'repeat', 'correct', questionText);
   });
});
