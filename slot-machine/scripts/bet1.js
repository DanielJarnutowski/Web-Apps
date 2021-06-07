//Daniel Jarnutowski
//Virtual Slot Machine
  

function bet(){ // function for determining if you placed a proper bet or if you can afford a bet
var money = (document.getElementById("Moneyvalue")); 
var bet = (document.getElementById("Betvalue"));
var MoneyValue = parseInt(money.value); //change money and and bet text field to integer
var BetValue = parseInt(bet.value);

if (MoneyValue>= BetValue  && BetValue >0){
		//if you can afford to gamble spin call the dopsin function
Dospin(MoneyValue,BetValue);	
}
 	if  (BetValue <1){
		swal({
			title: "I'm sorry",
			text: "You gave an incorrect bet amount",
			icon: "error",
			button: "Please try again!"
		  });
	 //alert("You need to bet at least $1");
	//message letting them know the placed an invalid bet
 	}
	if(BetValue > MoneyValue){
		swal({
			title: "I'm sorry",
			text: "You don't have the funds to make that bet",
			icon: "error",
			button: "Please come back with more money"
		  });
      // message outputted if you don't have enough money for that bet 
	 }	
function Dospin(MoneyValue,BetValue) { //function for spinning the slot	
var array = ["images/lemon.jpg","images/cherry.jpg","images/donut.jpg","images/bar.jpg"]; // create an array of images
document.getElementById("lemontag").src = array[Math.floor(Math.random()*array.length)];
document.getElementById("cherrytag").src = array[Math.floor(Math.random()*array.length)];
document.getElementById("donuttag").src = array[Math.floor(Math.random()*array.length)];  //randomizes images 
MoneyValue = MoneyValue -  BetValue; //updates money value
money.value =MoneyValue;
Checkwinner(MoneyValue,BetValue);  } //calls winner function to see if the spin got a win
function Checkwinner(MoneyValue,BetValue)  { //function to determine if you win
if(	document.getElementById("lemontag").src === document.getElementById("cherrytag").src && document.getElementById("lemontag").src === document.getElementById("donuttag").src){ // checks if all three images are equal
	MoneyValue = MoneyValue + (13 * BetValue); // claculates proper winnings
    money.value =MoneyValue;
    setTimeout(()=>{ 
		if(BetValue ==1)
		{
		swal({
			title: "Congragulations!",
			text: "You won " + BetValue + " dollar",
			icon: "success",
			button: "Keep Playing"
		  });
		    }
			else
			{
		  swal({
			title: "Congragulations!",
			text: "You won " + BetValue +" dollars",
			icon: "success",
			button: "Keep playing"
		  });
		}

	//sets time delay for alert message
				   },100)    
   }	
										    }
}