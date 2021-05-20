const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search')
const TweetCompose = require("./tweet_compose")

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