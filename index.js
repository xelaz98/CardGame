$(document).ready(function() {

var gameStarted = 0;    
var allCards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var colors = ['S','H','D','C']
var deck = [];
var player1 = [];
var player2 = [];
var flop = []; // 1st stage
var turn = []; // 2nd stage
var river = []; //3rd stage
    
//------------Functions---------------
    
function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}  
    
function giveCards(player,deck,numOfCards) {
    for (k = 0;k < numOfCards;k++) {
        player.push(deck.pop());
    }
}      
    
//----------------------------------  
    

//Prepare the deck    
for(let i = 0; i < allCards.length; i++) {
    for(let k = 0;k < colors.length;k++) {
        deck.push(allCards[i] + colors[k]);
    }
}

var shuffledDeck = shuffleArray(deck);

//When start button is clicked
$('.startButton').click(function() {   

if (gameStarted == 0) {
    
    //Main Player Cards
    giveCards(player1,shuffledDeck,2);
    $('#myCard1 .playerCard').attr("src","./images/" + player1[0] + ".svg");
    $('#myCard2 .playerCard').attr("src","./images/" + player1[1] + ".svg"); 

    //Enemy Player Cards
    giveCards(player2,shuffledDeck,2);
    $('#enemyCard1 .playerCard').attr("src","./images/" + player2[0] + ".svg");
    $('#enemyCard2 .playerCard').attr("src","./images/" + player2[1] + ".svg"); 
    
    $('.playerCard').show();
    $('.giveFlop').show();
    $('.clear').show();
    $('.flopCard').show();
} 
    
gameStarted = 1; 
    
});
    
$('.clear').click(function() {
    location.reload();
});
    
$('.giveFlop').click(function() {
    giveCards(flop,shuffledDeck,3);
    $('#flopCard1').attr("src","./images/" + flop[0] + ".svg");
    $('#flopCard2').attr("src","./images/" + flop[1] + ".svg"); 
    $('#flopCard3').attr("src","./images/" + flop[2] + ".svg");
    console.log(shuffledDeck.length);
    $('.giveFlop').hide();
    $('.giveTurn').show();
});
    
$('.giveTurn').click(function() {
    giveCards(turn,shuffledDeck,1);
    $('.turnCard').attr("src","./images/" + turn[0] + ".svg");
    console.log(shuffledDeck.length);
    $('.giveTurn').hide();
    $('.giveRiver').show();
});
    
$('.giveRiver').click(function() {
    giveCards(river,shuffledDeck,1);
    $('.riverCard').attr("src","./images/" + river[0] + ".svg");
    console.log(shuffledDeck.length);
    $('.giveRiver').hide();
});
    
});