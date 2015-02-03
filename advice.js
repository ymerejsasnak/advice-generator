(function() {

	var output = document.getElementById("advice");
	var button = document.getElementById("generate");
  
  var getAdvice = advice();



	button.addEventListener("click", function() {
		if (output.firstChild) output.removeChild(output.firstChild);
    output.appendChild(document.createTextNode( getAdvice() ) );
	});



  
  function advice() {
    
    var text =  [
                "COUNT YOUR CHICKENS WITH A HATCHET",
                "HUG A STRANGER",
                "DRIVE INTO A TREE",
                "READ AN UNPOPULAR BOOK",
                "KISS A RACCOON",
                "ORDER A SHEET PIZZA AND DON'T SHARE IT WITH ANYONE",
                "RUN NAKED DOWN THE ROAD SCREAMING \"I LOVE YOU ABRAHAM LINCOLN!\"",
                "TELL YOUR EMPLOYER WHAT YOU REALLY THINK ABOUT HIM/HER",
                "SELL ALL YOUR BELONGINGS, MOVE TO A CABIN IN THE WOODS WITH NO ELECTRICITY OR PLUMBING, AND FINALLY WRITE THAT NOVEL!",
                "PAWN YOUR TELEVISION AND GIVE THE MONEY TO A WORTHY CHARITY",
                "DENY EVERYTHING",
                "THE TRUTH IS OUT THERE",
                "YOUR SENSE OF SELF IS AN ILLUSION - SO GO SHOPLIFT SOME TWINKIES",
                "PISS ON YOUR NEIGHBOR",
                "TAKE A SHOWER WITH YOUR CLOTHES ON",
                "PRACTICE FREELANCE DENTISTRY",
                "SHAVE YOUR BEST FRIEND'S BACK HAIR",
                "LIFE IS A CONTINUUM, WE ARE ALL ONE, NOTHING IS SEPERATE - SO IT DOESN'T REALLY MATTER IF YOU STEAL A CAR",
                "VOTE NO",
                "MASTURBATE WITH A STICK OF BUTTER - WE'RE ALL GONNA DIE ANYWAY",
                "GOOGLE THE WORD \"GOOGLE\" AND SEE IF IT BREAKS THE INTERNET",
                "GO TO WAL-MART AND SLAM AN EMPTY CART REPEATEDLY INTO THE WALL WHILE CRYING OUT \"VIVA LA REVOLUTION!\"",
                "TAKE A SHIT ON YOUR SPOUSE'S PET THEN BLAME THE KIDS",
                "DUMPSTER DIVE FOR FUN AND PROFIT",
                "BOYCOTT EVERYTHING",
                "TODAY, TELL EVERYONE YOU SEE NOTHING BUT THE DEEP DARK TRUTH",
                "SEND EVERYONE YOU KNOW LETTERS ENUMERATING THEIR CHARACTER FAULTS",
                "HAVE A DEEP PHILOSOPHICAL CONVERSATION WITH THE CASHIER AT YOUR LOCAL SUPERMARKET",
                "CALL JOEY AND TELL HIM TO GET OVER HERE AND MOW THE DAMN LAWN!"

                ];

    var lastPick;

    return function() {
    	do {
  	    var pick = Math.floor(Math.random() * text.length);
  	  } while (pick === lastPick); //ie don't let it pick the same thing 2 times in a row
  	  lastPick = pick;
  	  return text[pick];
  	}

  }
  
  

})();