//var output_div = document.getElementById("output");
//output_div.innerHTML =

var feeling = document.getElementById("feeling")
var container = $(".container");

var happyImg = $("#happy");
happyImg.on("click", pickHappyQuote);
var happyBox = $(".happy");

var sadImg = $("#sad");
sadImg.on("click", pickSadQuote);
var sadBox = $(".sad");

var angryImg = $("#angry");
angryImg.on("click", pickAngryQuote);
var angryBox = $(".angry");

var confusedImg = $("#confused");
confusedImg.on("click", pickConfusedQuote);
var confusedBox = $(".confused");

var tiredImg = $("#tired");
tiredImg.on("click", pickTiredQuote);
var tiredBox = $(".tired");

var scaredImg = $("#scared");
scaredImg.on("click", pickScaredQuote);
var scaredBox = $(".scared");

var miscImg = $("#misc");
miscImg.on("click", pickMiscQuote);


var quoteOutput = $("#quoteOutput");

var happy = [' “The healthiest response to life is joy.” -- Deepak Chopra', ' “Keep smiling, because life is a beautiful thing and there’s so much to smile about.” -- Marilyn Monroe', ' “The longer I live, the more beautiful life becomes.” -- Frank Lloyd Wright', ' "Happiness consists more in conveniences of pleasure that occur everyday than in great pieces of good fortune that happen but seldom." -- Benjamin Franklin', ' "Happiness lies in the joy of achievement and the thrill of creative effort." -- Franklin D. Roosevelt',' "Happiness is distraction from the human tragedy." -- J. M. Reinoso', ' “Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared." -- Buddha' ]

var sad = [' “Nobody really cares if you’re miserable, so you might as well be happy.”-- Cynthia Nelms', ' “You can’t be happy unless you’re unhappy sometimes.” -- Lauren Oliver', ' “You cannot protect yourself from sadness without protecting yourself from happiness." -- Jonathan Safran Foer', ' “Sadness flies away on the wings of time.” -- Jean de La Fontaine', ' "The word happy would lose its meaning if it were not balanced by sadness" -- Carl Jung', '"Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying." -- Arthur C. Clarke', '“The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us." -- Ashley Montagu']

var angry = [' "For every minute you remain angry, you give up sixty seconds of peace of mind." -- Ralph Waldo Emerson', ' "Speak when you are angry and you will make the best speech you will ever regret." -- Ambrose Bierce' , ' "There is no angry way to say bubbles." -- Anonymous', ' "It is okay to be angry. It is never okay to be cruel." -- Somewhere Over the Rainbow', ' "Holding onto anger is like drinking poison and expecting the other person to die." -- Buddha', ' "Every day you must unlearn the ways that hold you back. You ust rid yourself of negativity, so you can learn to fly."-- Leon Brown']

var confused = [' "If you are sure you understand everything that is going on, you are hopelessly confused." -- Walter F. Mondale', "The most confused we ever get is when we're trying to convince our heads of something our heart knows is a lie. -- Karen Marie Moning", 'Someday, everything will make perfect sense. So for now, laugh at the confusion, smile through the tears, be strong and keep reminding yourself that everything happens for a reason. - Anonymous', ' "If I look confused is it because I am thinking" -- Samuel Goldwyn', 'However confused the scene of our life appears, however torn we may be who now do face that scene, it can be faced, and we can go on to be whole. - Muriel Rukeyser', "When you don't know where to start, just go to a place you miss so much. --Toba Beta", ' "Confused? Confusion is good. It is an excellent place to learn something new from." -- Henna Inam']

var tired = ["You've got to get up every morning with determination if you're going to go to bed with satisfaction. -- George Horace Lorimer", "Run when you can, walk if you have to, crawl if you must; just never give up. -- Dean Karnazes", "There is virtue in work and there is virtue in rest. Use both and overlook neither. -- Alan Cohen", "Even when you have every right to be tired of everything, Never be tired of living. -- Terry Mark", "Once you become poor, tired and time-constrained, you become a much better human being. -- Caitlin Moran", "Many of life's failures are people who did not realize how close they were to success when they gave up. -- Thomas Edison", ' “Don’t underestimate the value of doing Nothing, of just going along, listening to all the things you can’t hear, and not bothering.” -- Winnie the Pooh', '“Time you enjoy wasting is not wasted time.” -- Marthe Troly-Curtin']

var scared = [' "To overcome fear, here’s all you have to do: realize the fear is there, and do the action you fear anyway." -- Peter McWilliams', ' "Keep your fears to yourself but share your courage with others." -- Robert Louis Stevenson', ' "Fear is pain arising from the anticipation of evil." -- Aristotle', ' "One of the greatest discoveries a man makes, one of his great surprises, is to find he can do what he was afraid he couldn’t do." -- Henry Ford', ' "Of all the liars in the world, sometimes the worst are our own fears." -- Rudyard Kipling', ' "Too many people are thinking of security instead of opportunity. They seem to be more afraid of life than death." -- James F. Byrnes', ' “Don’t let fear paralyze you, let it motivate you.” -- Robert Tew', ' “There are more things to alarm us than to harm us, and we suffer more often in apprehension than reality." -- Seneca']

var misc = [' "Everybody wants to go to heaven but nobody wants to die" -- Peter Tosh', ' "Time has a wonderful way of showing us what truly matters." -- Anonymous', ' "There’s something beautiful about keeping certain aspects of your life hidden. Maybe people and clouds are beautiful because you can’t see everything." -- Kamenashi Kazuya', ' “It all begins and ends in your mind. What you give power to, has power over you, if you allow it.” -- Leon Brown', ' “Don’t block the exit. If someone wants to leave, release them and hold on to your peace.” -- Thema Davis', ' “When someone is going through a storm, your silent presence is more powerful than a million empty words.” -- Thema Davis']

var emotion;

function pickQuote(emotion) {
  random = Math.floor(Math.random() * emotion.length);
  //console.log(emotion[random]);
  quoteOutput.text(emotion[random]);
}

function pickHappyQuote() {
  pickQuote(happy);
  document.body.style.backgroundColor = "#ffff75";
  sadBox.addClass("hide");
  angryBox.addClass("hide");
  confusedBox.addClass("hide");
  tiredBox.addClass("hide");
  scaredBox.addClass("hide");
  happyBox.removeClass("hide");
  happyImg.addClass("happyClick");
  sadImg.removeClass("sadClick");
  angryImg.removeClass("angryClick");
  confusedImg.removeClass("confusedClick");
  tiredImg.removeClass("tiredClick");
  scaredImg.removeClass("scaredClick");
  /*happyImg.style.borderRadius = 30px;*/
  
}
function pickSadQuote() {
  pickQuote(sad);
  document.body.style.backgroundColor = "lightblue";
  happyBox.addClass("hide");
  angryBox.addClass("hide");
  confusedBox.addClass("hide");
  tiredBox.addClass("hide");
  scaredBox.addClass("hide");
  sadBox.removeClass("hide");
  sadImg.addClass("sadClick");
  happyImg.removeClass("happyClick");
  angryImg.removeClass("angryClick");
  confusedImg.removeClass("confusedClick");
  tiredImg.removeClass("tiredClick");
  scaredImg.removeClass("scaredClick");
}
function pickAngryQuote() {
  pickQuote(angry);
  document.body.style.backgroundColor = "pink";
  sadBox.addClass("hide");
  happyBox.addClass("hide");
  confusedBox.addClass("hide");
  tiredBox.addClass("hide");
  scaredBox.addClass("hide");
  angryBox.removeClass("hide");

  happyImg.removeClass("happyClick");
  sadImg.removeClass("sadClick");
  angryImg.addClass("angryClick");
  confusedImg.removeClass("confusedClick");
  tiredImg.removeClass("tiredClick");
  scaredImg.removeClass("scaredClick");
}
function pickConfusedQuote() {
  pickQuote(confused);
  document.body.style.backgroundColor = "#9effa8";
  sadBox.addClass("hide");
  angryBox.addClass("hide");
  happyBox.addClass("hide");
  tiredBox.addClass("hide");
  scaredBox.addClass("hide");
  confusedBox.removeClass("hide");

  happyImg.removeClass("happyClick");
  sadImg.removeClass("sadClick");
  angryImg.removeClass("angryClick");
  confusedImg.addClass("confusedClick");
  tiredImg.removeClass("tiredClick");
  scaredImg.removeClass("scaredClick");
}
function pickTiredQuote() {
  pickQuote(tired);
  document.body.style.backgroundColor = "#fcd26f";
  sadBox.addClass("hide");
  angryBox.addClass("hide");
  confusedBox.addClass("hide");
  happyBox.addClass("hide");
  scaredBox.addClass("hide");
  tiredBox.removeClass("hide");

  happyImg.removeClass("happyClick");
  sadImg.removeClass("sadClick");
  angryImg.removeClass("angryClick");
  confusedImg.removeClass("confusedClick");
  tiredImg.addClass("tiredClick");
  scaredImg.removeClass("scaredClick");
}
function pickScaredQuote() {
  pickQuote(scared);
  document.body.style.backgroundColor = "#d8b7e8";
  sadBox.addClass("hide");
  angryBox.addClass("hide");
  confusedBox.addClass("hide");
  tiredBox.addClass("hide");
  happyBox.addClass("hide");
  scaredBox.removeClass("hide");

  happyImg.removeClass("happyClick");
  sadImg.removeClass("sadClick");
  angryImg.removeClass("angryClick");
  confusedImg.removeClass("confusedClick");
  tiredImg.removeClass("tiredClick");
  scaredImg.addClass("scaredClick");
}
function pickMiscQuote() {
  pickQuote(misc);
  document.body.style.backgroundColor = "white"
}


var retry = $("#retry");
retry.on("click", clearAndReset);
function clearAndReset() {
  //console.log("reset");
  document.body.style.backgroundColor = "lavenderblush";
  quoteOutput.text(" ");
  sadBox.removeClass("hide");
  angryBox.removeClass("hide");
  confusedBox.removeClass("hide");
  tiredBox.removeClass("hide");
  happyBox.removeClass("hide");
  scaredBox.removeClass("hide");

  happyImg.removeClass("happyClick");
  sadImg.removeClass("sadClick");
  angryImg.removeClass("angryClick");
  confusedImg.removeClass("confusedClick");
  tiredImg.removeClass("tiredClick");
  scaredImg.removeClass("scaredClick");
}

/*var input = window.prompt('hello')*/