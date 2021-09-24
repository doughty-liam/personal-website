var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;

console.log( 'height of the current display: ' +screenHeight );

if( innerHeight < 1000 ) {

    var content = document.querySelector( '.top_text_container' );
    let contentHeight = content.offsetHeight;
    content.setAttribute( "style", "transform: scale( 0.8 );" );

    console.log( 'contentHeight: ' +contentHeight );

}