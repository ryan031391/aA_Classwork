class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // const $group = $(".group")
    this.$el.on('click', 'li', (e) => {

      const $square = $(e.target);
      // console.log($square);
      this.makeMove($square);
     })
  }

  makeMove($square) {
    let pos = $square.data("pos");
    this.game.playMove(pos);
    let current = this.game.currentPlayer;
    $square.addClass(current);
    let $message = $("<text>");
    let $body = $('body');

    if (this.game.isOver() && this.game.board.winner() !== null) {
      this.$el.off('click');
      let $temp = $(`.${current}`);
      $temp.addClass("winner");
      
      if (current === 'x') {
        let $temp_2 = $(`.o`);
        $temp_2.addClass("loser");
      } else {
        let $temp_2 = $(`.x`);
        $temp_2.addClass("loser");
      }
      $message.html(`<h3>You win, ${current}!</h3>`);
      $body.append($message);
      this.$el.addClass("game-over");
      
    } else if (this.game.isOver() && this.game.board.winner() === null) {
      this.$el.addClass("draw");
      $message.html("<h3>It's a draw!</h3>");
      $body.append($message);
    }
  } 

  setupBoard() {
    const $ul = $("<ul>")
    $ul.addClass("group")
    for (let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++){
        let $li = $("<li>");
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}



module.exports = View;
