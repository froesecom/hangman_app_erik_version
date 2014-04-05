// win === _.Equal(solution, word)


$(document).ready(function() {
  $("#gallows").append("<img id='gallows_img' src='img/img8.jpg'>")
  var words = ["word", "anotherword", "fart", "anotherfart"];

  var word = ['a','p','p','l','e']   //_.sample(words).split('');
  var solution = [];

  // var underScore = function () {
    var wordLength = word.length;
      var underscores = [];
      for ( i = 0; i < wordLength; i++) {
      underscores = underscores + "_ ";
      // new_solution = underscores.slice();
      };
    $("#solution").text(underscores);
  // };

  var counter = 8;



  var guess = function (letter){
    if (_.contains(word, letter)) { 
      correctGuess(letter);
    } else {
      incorrectGuess(letter);
    };
  };

  var correctGuess = function (letter) {
    var i = _.indexOf(word, letter);
    solution[i] = letter;
    $( "#solution" ).text(solution);
    console.log(solution[i] = letter);
    if (_.uniq(word).sort() === solution.sort()) {
    console.log('win');
      // win();
    }; 
  };

  var incorrectGuess = function (letter) {
    counter -= 1;
    $("#guesses").text(counter);
    $("#gallows").html("<img id='gallows_img' src='img/img" + counter + ".jpg'>")
    // $('.img' + (counter + 1)).removeClass('img' + (counter + 1)).addClass('img' + counter);
  //div inner html
    console.log(counter);
    if (counter === 0) {
      $("#guess_inputs").hide();
      lose();
    };
  };
  

  var lose = function () {
    console.log('you suck!');   
  };
  // var win = function () {
   
  $("#letter-button").on('click', function(){
    var letter = $('#letter-input').val();
    // debugger;
    guess(letter);

  });
});


  // var correctGuess = function (letter) {
     
      
  //     word.forEach(function(x) {
  //       if (x === letter) {
  //         solution.push(x);
  //       } else {
  //         solution.push(" _ ");
  //       };
        
  //     });
  //     $( "#solution" ).text(solution);
     

  //     if (_.uniq(word).sort() === solution.sort()) {
  //     console.log('win');
  //       // win();
  //     }; 

  // };




