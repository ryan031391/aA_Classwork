/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
  followUser: id => $.ajax({
    method: "POST",
    url: `/users/${id}/follow`,
    dataType: "JSON"
  }),
  unfollowUser: id => $.ajax({
    method: "DELETE",
    url: `/users/${id}/follow`,
    dataType: "JSON"
  }),
  searchUsers: queryVal => $.ajax({
    method: 'GET',
    url: '/users/search',
    dataType: 'JSON',
    data: {
      query: queryVal
    }
  }),
  createTweet: data => $.ajax({
      method: 'POST',
      url: '/tweets',
      dataType: 'JSON',
      data
  })

}

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { followUser, unfollowUser } = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js")


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

/***/ }),

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createTweet } = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js")

    class TweetCompose {

        constructor(el) {
            this.$el = $(el)
            this.$el.on('submit', this.submit.bind(this))
        }

        submit(event) {
            event.preventDefault();
            const data = this.$el.serializeJSON();
            $(":input").prop("disabled", true);
            createTweet(data)
                .then((tweet) => {
                    console.log(tweet);
                    const $feed = $("#feed");
                    const $tweet = $("<li>");
                    $tweet.text(tweet.content);
                    const $link = $("<a>");
                    $link.attr("href", `users/${tweet.user_id}`);
                    $feed.append($tweet);
                    
                })
                .always(() => $(":input").prop("disabled", false))
        }

    }

module.exports = TweetCompose

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");
const { searchUsers } = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search */ "./frontend/users_search.js")
const TweetCompose = __webpack_require__(/*! ./tweet_compose */ "./frontend/tweet_compose.js")

$(() => {
  // find the element .follow-toggle
  //. instanitate FollowToggle instance
  $('.follow-toggle').each(function(index, el) {
    // el is htmlElement class
    const followToggle = new FollowToggle(el);
    followToggle.render();
  })

  $('.users-search').each(function(index, el) {
    // el is htmlElement class
    new UsersSearch(el);

  })

  $('.tweet-compose').each(function(_, el) {
    new TweetCompose(el);
    console.log("I'm working", el);
  })

})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map