var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;


var contentContainer = document.querySelector( '.top_text_container' );
let contentContainerHeight = contentContainer.offsetHeight;
let contentScalingFactor = (screenHeight/contentContainerHeight) - (screenHeight/950);
contentScalingFactor = contentScalingFactor.toFixed(2);

var cardContainer = document.querySelector( '.card_container' );
let cardHeight = cardContainer.offsetHeight;
let cardScalingFactor = 0.84*(screenHeight/cardHeight);
cardScalingFactor = cardScalingFactor.toFixed(2);

console.log( cardScalingFactor );


contentContainer.style.transform = "scale(" +contentScalingFactor+ ")";


window.addEventListener( 'resize', function() {

    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    

    if( screenHeight > 700 ) {
        
        contentScalingFactor = (screenHeight/contentContainerHeight) - (screenHeight/950);
        contentScalingFactor = contentScalingFactor.toFixed(2);
        contentContainer.style.transform = "scale(" +contentScalingFactor+  ")";

        cardScalingFactor = 0.84*(screenHeight/cardHeight);
        cardScalingFactor = cardScalingFactor.toFixed(2);
        cardContainer.style.transform = "scale("+cardScalingFactor+")";

    }

} );
