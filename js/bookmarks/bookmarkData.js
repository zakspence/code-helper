"use strict";

/*  

The purpose of this file is to store data,
as well as retrieve and display data. 
*/

let myBookmarks = {
	categories: [
	{id: 0, name: "HTML"},
	{id: 1, name: "Stylings"},
	{id: 2, name: "Javascript"},
	{id: 3, name: "jQuery"},
	{id: 4, name: "Miscellaneous"}]
};

let getBookmarks = () => myBookmarks;

let removeBookmarks = (bookmark) => {
	for (let category = 0; category < myBookmarks.categories.length; category++) {
		if (bookmark === myBookmarks.categories[category].name) {
			console.log("You could splice myBookmarks.categories.splice(myBookmarks.categories[category], 1); if you wanted to. BUT YOU WONT.");

			// myBookmarks.categories.splice(myBookmarks.categories[category], 1);
		}
	}
};


module.exports = {getBookmarks};

