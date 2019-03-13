const apiUtil = {
    unfollow: (userId) => { 
      return $.ajax({
      method: "DELETE",
      url: `/users/${userId}/follow`,
      dataType: "JSON"
    });
  },
  follow: (userId) => { 
    return $.ajax({
    method: "POST",
    url: `/users/${userId}/follow`,
    dataType: "JSON"
  });
}
};

module.exports = apiUtil;