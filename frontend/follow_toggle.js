const apiUtil = require('./api_util.js');
class FollowToggle {
  constructor(el) {
      this.$el = $(el);
      this.userId = this.$el.data("user-id");
      this.followState = this.$el.data("initial-follow-state");
      this.$el.on("click", this.handleClick.bind(this));
      this.render();
  }

  render() {
    if (this.followState === "followed") {
      this.$el.text("unfollow");
    }
    else {
      this.$el.text("follow");
    }
  }

  handleClick(event) {
    event.preventDefault();
    if (this.followState === "followed") {
      const un = apiUtil.unfollow(this.userId).then(() => {
        this.followState = "unfollowed";
        this.render();
      }, () => console.log("fail"));
    } else {
      const fol = apiUtil.follow(this.userId).then(() => {
        this.followState = "followed";
        this.render();
      }, () => console.log("fail"));
    }
  }
}

module.exports = FollowToggle;