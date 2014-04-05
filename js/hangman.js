$(document).ready(function() {
  $("#gallows").append("<img id='gallows_img' src='img/img8.jpg'>")
  var words = ["word", "anotherword", "fart", "anotherfart"];

  var word = ['a','p','p','l','e']   //_.sample(words).split('');
  var underscores = [];
  var guessedLetters = [];
  var counter = 8;

  //   var wordLength = word.length;
  //     for ( i = 0; i < wordLength; i++) {
  //     underscores = underscores + "_ ";
  //     // new_solution = underscores.slice();
  //     };
  //   $("#solution").text(underscores);

  var guess = function (letter) {

    var solution = [];

    guessedLetters.push(letter);

    _.each(word, function(letter){    
      if (_.indexOf(guessedLetters, letter) === -1) {
        solution.push("_"); 
        $('#solution').text(solution.join(' '));
      } else {
        solution.push(letter); 
        $('#solution').text(solution.join(' '));
        // if (word. === solution) {
        //    win();
        // };
      };
    });
  incorrectGuess(letter);
  };

 var incorrectGuess = function (letter) {
    if (_.indexOf(word, letter) === -1) {
      debugger;
      counter -= 1;
      $("#guesses").text(counter);
      $("#gallows").html("<img id='gallows_img' src='img/img" + counter + ".jpg'>")
      console.log(counter);
      if (counter === 0) {
        $("#guess_inputs").hide();
        lose();
      };
    };
  };
  

  var lose = function () {
    console.log('you suck!');
  };
 
  
  var win = function () {
    console.log('fuck yeah!');
  };

  $("#letter-button").on('click', function(){
    var letter = $('#letter-input').val();
    // debugger;
    guess(letter);
  });

});

