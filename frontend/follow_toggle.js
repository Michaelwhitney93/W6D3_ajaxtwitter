const apiUtil = require('./api_util.js');
class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    debugger
      this.userId = this.$el.data("userId");
      this.followState = this.$el.data("initialFollowState");
      this.$el.on("click", this.handleClick.bind(this));
      this.render();
  }

  render() {
    debugger
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
        debugger
        console.log("success");
      }, () => console.log("fail"));
    } else {
      const fol = apiUtil.follow(this.userId).then(() => {
        debugger
        console.log("success");
      }, () => console.log("fail"));
    }
  }
}

module.exports = FollowToggle;