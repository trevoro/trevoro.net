//= require jquery-1.8.3.min
//= require jquery-ui-1.10.3.custom.min
//= require jquery.ui.touch-punch.min
//= require bootstrap.min
//= require bootstrap-select
//= require bootstrap-modal
//= require flatui-checkbox
//= require flatui-radio
//= require jquery.tagsinput
//= require jquery.placeholder
//= require prettify

$(function() {
  // Google+ Sharing
  $('#share-gplus').on('click', function() {
    var url, x, y;
    url = this.getAttribute('data-url');
    x = screen.width / 2 - 313,
    y = screen.height / 2 - 218

    window.open(
      'https://plus.google.com/share?url='+encodeURIComponent(url), 
      'google-share-dialog', 
      'width=626,height=436,left='+x+',top='+y
    );
    return false;
  });

  $('#share-twitter').on('click', function() {
    var text, url, x, y;
    url = this.getAttribute('data-url');
    text= this.getAttribute('data-text');
    x = screen.width / 2 - 313,
    y = screen.height / 2 - 218

    window.open(
      'https://twitter.com/intent/tweet?text='+encodeURIComponent(text) + '&url=' + encodeURIComponent(url),
      'facebook-share-dialog', 
      'width=626,height=436,left='+x+',top='+y
    );
    return false;
  });

  // Facebook Sharing
  $('#share-facebook').on('click', function() {
    var url, x, y;
    url = this.getAttribute('data-url');
    x = screen.width / 2 - 313,
    y = screen.height / 2 - 218

    window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url), 
      'facebook-share-dialog', 
      'width=626,height=436,left='+x+',top='+y
    );
    return false;
  });
});
