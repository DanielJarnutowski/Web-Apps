//Daniel Jarnutowski
//Web Programming
//java script file


function bet()
{ // function for determining if you placed a proper bet or if you can afford a bet
 
var money = (document.getElementById("Moneyvalue")); 
var bet = (document.getElementById("Betvalue"));
var MoneyValue = parseInt(money.value); //change money and and bet text field to integer
var BetValue = parseInt(bet.value);





if (MoneyValue>= BetValue )
{
		//if you can afford to gamble spin call the dopsin function

Dospin(MoneyValue,BetValue);
	
	
}

 if  (BetValue <1)
  {
	 alert("You need to bet at least $1");
	//message letting them know the placed an invalid bet
  }

   if(BetValue > MoneyValue)
	
	  {
	    alert("You don't have enough money to make that bet");
      // message outputted if you don't have enough money for that bet 
	  }
	
	


function Dospin(MoneyValue,BetValue)//function for spinning the slots
{
  	
var array = ["lemon.jpg","cherry.jpg","donut.jpg","bar.jpg"]; // create an array of images

document.getElementById("lemontag").src = array[Math.floor(Math.random()*array.length)];
document.getElementById("cherrytag").src = array[Math.floor(Math.random()*array.length)];
document.getElementById("donuttag").src = array[Math.floor(Math.random()*array.length)];  //randomizes images 
//money = document.getElementById("Moneyvalue");
MoneyValue = MoneyValue -  BetValue; //updates money value
money.value =MoneyValue;

Checkwinner(MoneyValue,BetValue); //calls winner function to see if the spin got a win
}

function Checkwinner(MoneyValue,BetValue) //function to determine if you win
  	
{
	//money = document.getElementById("Moneyvalue");
	
if(	document.getElementById("lemontag").src === document.getElementById("cherrytag").src && document.getElementById("lemontag").src === document.getElementById("donuttag").src)
   { // checks if all three images are equal
	   
	MoneyValue = MoneyValue + (13 * BetValue); // claculates proper winnings
    money.value =MoneyValue;
    setTimeout(()=>// used so the winning message and showing 3 images happen at the same time.
{
	alert("You win");
 
	
	

},100)    

	
	
   }

	
	
}
}