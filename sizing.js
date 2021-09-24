var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;


var contentContainer = document.querySelector( '.top_text_container' );
let contentContainerHeight = contentContainer.offsetHeight;
let contentContainerWidth = contentContainer.offsetWidth;
let scalingFactor = (screenHeight/contentContainerHeight) - (screenHeight/950);
scalingFactor = scalingFactor.toFixed(2);

contentContainer.style.transform = "scale(" +scalingFactor+ ")";

window.addEventListener( 'resize', function() {

    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    
    if( screenHeight > 700 ) {
        
        scalingFactor = (screenHeight/contentContainerHeight) - (screenHeight/950);
        scalingFactor = scalingFactor.toFixed(2);
        contentContainer.style.transform = "scale(" +scalingFactor+  ")";

    }

} );
