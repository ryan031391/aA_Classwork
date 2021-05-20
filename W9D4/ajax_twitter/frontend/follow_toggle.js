const { followUser, unfollowUser } = require("./api_util")


class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id')
    this.followState = this.$el.data('initial-follow-state')
    this.$el.on('click', this.handleClick.bind(this))
  }

  render() {
    this.$el.text(this.followState ? 'Unfollow!' : 'Follow!');
  }

  handleClick(event) {
    event.preventDefault();
    this.$el.prop("disabled", true);

    if (this.followState) {
      this.updateAndRender(false)
      unfollowUser(this.userId)
        .then(() => this.updateAndRender(false))
        .always(() => this.$el.prop("disabled", false))
    } else {
      this.updateAndRender(true)
      followUser(this.userId)
        .then(() => this.updateAndRender(true))
        .always(() => this.$el.prop("disabled", false))
    }

  }

  updateElementState(following) {
    this.$el.data('initial-follow-state', following);
    this.followState = this.$el.data('initial-follow-state');
  }

  updateAndRender(following) {
    this.updateElementState(following);
    this.render();
  }

  // $.ajax({
  // method: this.followState ? 'DELETE' : 'POST',
  // url: `/users/${this.userId}/follow`,
  // dataType: 'JSON',

  // success: (follow) => {
  //   this.$el.data('initial-follow-state', !this.followState);
  //   this.followState = this.$el.data('initial-follow-state');
  //   this.render();
  // }
  // })

}

FollowToggle.createJQueryObject = function (user) {
  const $followButton = $('<button>')
  $followButton.addClass('follow-toggle')
  $followButton.attr('data-user-id', user.id)
  $followButton.attr('data-initial-follow-state', user.followed)
  const followToggle = new FollowToggle($followButton.get(0))
  followToggle.render();
  return $followButton;
}

module.exports = FollowToggle;