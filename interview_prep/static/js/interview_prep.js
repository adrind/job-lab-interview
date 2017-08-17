$(function () {
   $('.btn-answer').click(function (evt) {
       var $el = $(evt.target),
           text = $el.parent().find('.suggestion').text();

       $('.suggestion-box').show().find('.suggestion-text').html(text);
       $('.btn-answer').prop('disabled', true);
   });

   $('.btn-repeat').click(function (evt) {
       var $el = $(evt.target);
       $('.btn-answer').prop('disabled', false);

       $('.suggestion-box').hide();
   });
});
