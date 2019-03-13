const followToggle = require("./follow_toggle.js");
const UserSearch = require('./users_search.js');



$( ()=> {
  const $users = $("nav.users-search");
  const $buttons = $('button.follow-toggle');
  $users.each(function (i) {
    new UserSearch(this);
  });

  $buttons.each(function (i) {
    new followToggle(this);
  });
}); 


