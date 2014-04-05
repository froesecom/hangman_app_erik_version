$(document).ready(function() {
  // This sets the first image of gallows when the screen is loaded.
    $("#gallows").append("<img id='gallows_img' src='img/img8.jpg'>")
    
  // These are the variables we use throughout the function
    var words = ["word", "anotherword", "fart", "anotherfart"];
    var word = _.sample(words).split('');
    var underscores = [];
    var guessedLetters = [];
    var counter = 8;
  
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
      $("*").fadeOut(1000, location.reload());
    };
   
    
    var win = function () {
      console.log('fuck yeah!');
    };

    $("#reset-button").on('click', function() {
      console.log("reset been pressed")
      location.reload();
    });

    $("#letter-button").on('click', function(){
      var letter = $('#letter-input').val();
      guess(letter);
    });
});

