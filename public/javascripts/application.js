$(document).on('click', '.stinky-votes', function(event) {
  
  event.preventDefault();
 
  var self = this;
 
  $.getJSON($(this).data('url')).then(function(data) {
    $(self).find('.stinks').html(parseInt(data.stinks));
  });
});