const apiUtil = {
    unfollow: (userId) => { 
      debugger
      return $.ajax({
      method: "DELETE",
      url: `/users/${userId}/follow`,
      dataType: JSON
    });
  },
  follow: (userId) => { 
    // debugger
    return $.ajax({
    method: "POST",
    url: `/users/${userId}/follow`,
    dataType: JSON

  });
}
};

module.exports = apiUtil;