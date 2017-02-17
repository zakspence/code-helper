'use strict';
//Brower Actions Scripts
console.log('app.js running');


/*

Requires for this file
*/

let bookmarkData = require('./bookmarks/bookmarkData.js');
let displayBookmarks = require('./bookmarks/displayBookmarks.js');



/*

Initial concept is to have a bookmarks stored within the user s machine. 
There are 5 initial categories. 
When user clicks category, they are displayed with their favorite URL's that 
are within the category context. 
The user can add or remove bookmarks.


Retrieve initial bookmarks from Bookmarks.json
*/

var myBookmarks = bookmarkData.getBookmarks();


/*

Sets categories under #nav-dean logo in a dropdown
*/

displayBookmarks.setCategories(myBookmarks);


/*

Opens categories dropdown whenever #nav-dean 
button is clicked
*/

$('.trigger-button').click(function(event) {
	$('.dropdown').toggleClass('open');
});


/*

Closes categories dropdown, and displays an input field 
so that you can upload your own categories.
*/





























