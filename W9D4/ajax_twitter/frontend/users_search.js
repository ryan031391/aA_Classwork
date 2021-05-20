const FollowToggle = require('./follow_toggle');
const { searchUsers } = require('./api_util');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $('.users-search input');
    this.$ul = $('.users-search .users');
    this.$input.on('input', this.handleInput.bind(this))
  }

  handleInput(event) {
    searchUsers(event.target.value)
      .then((users) => {
        this.render(users);
      })
      .fail((error) => console.log(error))
  }

  render(users) {
    this.$ul.empty()
    users.forEach((user) => {
      const $user = $('<li>')
      const $link = $('<a>')
      $link.attr('href', `users/${user.id}`)
      $link.text(user.username)
      $user.append($link)
      const $followButton = FollowToggle.createJQueryObject(user)
      $user.append($followButton)
      this.$ul.append($user)
    })
  }

}


module.exports = UsersSearch;