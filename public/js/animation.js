/*****************************************
Animation JS
/*****************************************/

(function() {

var heroPage = document.getElementById("hero-page");
if (!heroPage || heroPage.querySelector('canvas')) return;

var canvaElement = document.createElement('canvas');
var ctx = canvaElement.getContext('2d');
heroPage.appendChild(canvaElement);

var mediaQuery = window.matchMedia('(max-width: 800px)');
var mediaQueryMiniPhone = window.matchMedia('(max-width: 400px)');
if (mediaQueryMiniPhone.matches) {
    var cw = canvaElement.width = 300;
    var ch = canvaElement.height = 55;
    ctx.font = 'normal 16px monospace';
} else if (mediaQuery.matches) {
    var cw = canvaElement.width = 340;
    var ch = canvaElement.height = 55;
    ctx.font = 'normal 18px monospace';
} else {
    var cw = canvaElement.width = 760;
    var ch = canvaElement.height = 80;
    ctx.font = 'normal 40px monospace';
}

ctx.textAlign = 'left';
ctx.textBaseline = 'top';
ctx.fillStyle = '#fff';
ctx.strokeStyle = 'rgba(0, 0, 0, .3)';
ctx.shadowColor = '#3f3';
var page=0;

  // ... multiple messages... //
  var messagesArray= new Array(
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Thank you for visiting...",
    "Please check my portfolio.",
    "My skills and achievements.",
    "███████████████████████████",
    "Full Scratch Site: ",
    "YutaHanda Portfolio"
  );

  // ...cursor style... //
  var cursor = new Array(
    "",
    "█",
    "",
    "█",
    "",
    "█",
    "",
    "█",
    "_",
    "",
    "\n",
    "█",
    " *Yuta Handa*",
    "█"
  );

var messageArray = messagesArray[page].split('');
var totalMessages = messagesArray.length-1;
var messageLength = messageArray.length;
var pointer = 0;
var typeTick = 0;
var typeTickMax = 0;

var minTick=5;
var maxTick=10;
var typeResetTick = 0;
var typeResetMax = 15;

var updateTypeTick = function(){
    if(pointer < messageLength){
        if(typeTick < typeTickMax){
            typeTick++;
        } else {
            typeTick = 0;
            pointer++;
            typeTickMax= Math.floor((Math.random()*maxTick)+minTick);
        }
    } else {
        if(typeResetTick < typeResetMax){
            typeResetTick++;
        } else {
            typeResetTick = 0;
            typeTick = 0;
            pointer = 0;

        // ...change message... //
        if(page<totalMessages) page++;
            else page=0;
            messageArray=messagesArray[page].split('');
            messageLength = messageArray.length;
        }
    }
}

var renderMessage = function(){
    var text;
    switch(cursor[page]){
        case "\n":   // ... NO ANIMATION
        text= messageArray.slice(0, messageLength);
        break;

        default:
        text= messageArray.slice(0, pointer);
        text[pointer]=cursor[page];
        break;
    }
    ctx.shadowBlur = 9;
    ctx.fillText(text.join(''), 20, 20);
    ctx.shadowBlur = 0;
}

var renderLines = function(){
    ctx.beginPath();
    for(var i = 0; i < ch/2; i += 1){
        ctx.moveTo(0, (i*2) + .5);
        ctx.lineTo(cw, (i*2) + .5);
    }
    ctx.stroke();
}

var loop = function(){
    ctx.clearRect(0, 0, cw, ch);
    updateTypeTick();
    renderMessage();
    renderLines();
    setTimeout(loop, 5);
}
loop();

})();
