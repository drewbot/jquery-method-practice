console.log('\'Allo \'Allo!');



// .append() - Add a paragraph
$('.button1').click(function(){
  $(this).parent().append('<p>Thanks!</p>');
});

// .animate() - Collapse and hide image / reappear
$( '.button2' ).click(function() {
  $( '.image2' ).animate({
    height: 'toggle'
  }, 2000, function() {
  });
});

// .css() - Change button background color
$('.button3').click(function(){
	$(this).css('background-color', '#FFB116');
});

// .parent() - Change parent background color
$('.button4').click(function(){
	$(this).parent().css('background-color', '#FFB116');
});

// .before() - Move the title outside of this container
$('.button5').click(function(){
	$(this).parent().before( $( '.h15' ) );
	$( '.h15' ).css('text-align', 'center');
	$( '.h15' ).css('color', '#FFB116');
});

// .clone() - Make a clone of this button
$('.button6').click(function(){
	// $(this).parent().append($(this).clone()); //This would work as well
	$('.button6').clone().appendTo( $(this).parent() );
	$('.button6').css('margin-bottom', '10px');
});

// :contains() - Underline a line of text. Only if it includes the word 'it'.
$('.button7').click(function(){
	$('.cont7 p:contains(it)').toggleClass('underline');
});

// .dblclick() - Bind and event to a double click
$('.button8').dblclick(function(){
	$(this).css('background-color', 'coral');
});

// .eq() - Highlight the 2nd list item
$('.button9').click(function(){
	$( 'li' ).eq( 2 ).css( 'color', '#A47A24' );
});

// :even Selector
$('.button10').click(function(){
	$( '.evenlist:even' ).css( 'color', '#A47A24' );
});

//,fadeToggle() - Fade image in and out
$( '.button11' ).click(function() {
  $('.image11').fadeToggle( 'slow', 'linear' );
});


// .get() - Retrieve and display the nodeName of the element clicked
$( "*",".cont12" ).click(function( event ) {
  var domElement = $( this ).get( 0 );
  $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
});

// .showHeight() - Display the height of this div
function showHeight( element, height ) {
  $( ".cont13" ).text( "The height for the " + element + " is " + height + "px." );
}
$( ".button13" ).click(function() {
  showHeight( "div", $( ".cont13" ).height() );
});

// .hide() - Hide this div
$( ".button14" ).click(function() {
  $( ".cont14" ).hide( "slow", function() {
  });
});


// ('*') - apply a red border to the entire site. List number of element updated
$( '.button15' ).click(function(){
	$('*').css( 'border', '3px solid red')
	var elementCount = $( '*' ).css( 'border', '3px solid #A47A24' ).length;
	$(this).parent().prepend( '<h3>' + elementCount + ' elements found</h3>' );
});













