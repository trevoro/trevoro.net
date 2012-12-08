$(function() {
  var field = $('[name="email"]')
  field.focusin(function() {
    this.placeholder = "";
  });
  field.focusout(function() {
    this.placeholder = "> email address";
  });

});
