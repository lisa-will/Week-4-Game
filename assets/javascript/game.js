// Getting jQuery with it! NaN-NaN-NaN-NaN-NaN-Na! // 
 $(document).ready(function() {
   	
	var counter = 0;
	var wins = 0; 
	var losses = 0;
	$('#win').text(wins);
	$('#lose').text(losses);

	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
		while (numbers.length < 6) {
			var randomNumber = Math.ceil(Math.random()*12)
			var found = false;
			for (var i = 0; i < numbers.length; i++){
				if (numbers[i] == randomNumber) {
					found = true; break
				}
			}
			if(!found)numbers[numbers.length]=randomNumber;
		} 
		console.log(numbers);

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('img');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.addClass('crystalImage')
			$('crystals').append(imageCrystal);
		}
	}

function newGame() {

	counter = 0; 
	$('#score').text(counter);

	function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	var numberGuess = randomIntFromInterval(19,120);
	$('.value').text(numberGuess);

	$('.crystalImage').on('click', function(){
		counter = counter + parseInt($(this).data('num'));


		$('#score').text(counter);
		
		if(counter == numberGuess) {
			$('#status').text('WINNER!!!');
			wins++;
			$('#win').text(wins);
			console.log(wins);
			$('#crystals').empty();

			newCrystals();
			newGame();
			}	
		
		else if (counter > numberGuess){
			$('#status').text('LOSER!!');
			losses++;
			$('#loss').text(losses);
			console.log(losses);
			$('crystals').empty();
				
			newCrystals();
			newGame();
			}

	  });
	}
 });