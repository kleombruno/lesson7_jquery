/*
Program Name: Recipe Display Application
Author: Kyle Leombruno
Date:   07/27/2018
Filename: drill4.js
*/
/* global $ */

//displays the next element after the current target

function display(event) {
    
    $ (event.currentTarget).next().fadeIn("slow");
    
} // end of display 

//attach event listener to h3 elements to invoke display function when click 

//$("h3").click(display);


//displays and animates the next element after the current target

function display2(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow")
    
}// end of display 2


//attach event listener to h3 elements to invoke display function when click 
$("h3").click(display);


//changes the background color of h3 when the mouse hovers over it

$("h3").hover(function(){
 $(this).css("background-color", "blue");
 }, function(){
 $(this).css("background-color", "yellow");
});

//hover() will trigger display 2 method each time the mouse hovers over header

$("h3").hover(display2);