// toglochiin eljiig hadgalah huwisagch, negduuger toglogchiig 0 2 dugar toglogch n 1 gej nerlii
var activePlayer = 0;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch 
var scores = [0,0];
//toglochiiin eljindeer tusgluulj bgaa onoog hadgalah huwisagch
 var roundScore = 0;
//shoonii ali talaar busniig hadgalah huwisagch heregtei 1-6 gesen utgatiig ene huwisgachd
// sanamsargui uusgej ogno.

//programm ehlel
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


var diceDom = document.querySelector(".dice");

diceDom.style.display = 'none'; 
// shoog shideh event lister
document.querySelector('.btn-roll').addEventListener('click', function(){

    // 1-6 dotorh sanamsargui neg too gargaj avna
    var diceNumber = Math.floor( Math.random() * 6) + 1;

    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    // buusan shoo sanamsargui toond hargalzah shooniii zurgiig web deer gargaj irne.
    
    diceDom.src = 'dice-' + diceNumber + '.png';

    // alert('shoo buulaa : '  + diceNumber);

    // buusan toon n 1 ees yalgaatai bol toglogchiin eeljiin onoog nemegduulnee

    if(diceNumber !== 1 ) {
        // 1-ees yalgaatai too buulaa. buusan toog toglogchid nemj ogno 
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

    } else {
        switchToNextPlayer();

    }
});

// hold towchnii event listner
document.querySelector('.btn-hold').addEventListener('click', function()
{
    //ug toglochiin tsugluulson eeljnii onoog globla onoon deer nemej ogno.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 20) {
        // yalagch text iig nernii orond n winner tawinaa
        document.getElementById('name-' + activePlayer).textContent = '!winner'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    } else {
        switchToNextPlayer();
    }



    //delgets deer onoog n oorchlono

});
/// ene function n togloh eeljiin daraachiiin toglogch ruu shiljdeg
function switchToNextPlayer() {
    roundScore = 0 ;
    document.getElementById('current-' + activePlayer).textContent = 0;

// toglogchiin eeljiiig solino.
activePlayer === 0 ? (activePlayer=1) : (activePlayer=0);
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
diceDom.style.display = "none";

}
//shine tolgoom ehluuleh 
document.querySelector('.btn-new').addEventListener('click',function(){
    alert('clicked')

})




