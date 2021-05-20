const { createTweet } = require("./api_util")

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