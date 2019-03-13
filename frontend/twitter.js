const followToggle = require("./follow_toggle.js");




$( ()=> {
  const $buttons = $('button.follow-toggle');

  $buttons.each(function (i) {
    new followToggle(this);
  });
}); 