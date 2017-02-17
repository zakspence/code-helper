'use strict';


let firebase = require('./firebaseConfig');

// ****************************************
// DB interaction using Firebase REST API
// ****************************************


/*
 * Get the User's Movie List from Firebase
 */
function getURL(user) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `https://movie-history-team-team.firebaseio.com/movies.json?orderBy="uid"&equalTo="${user}"`
        }).done(function(URLData){
            resolve(URLData);
        }).fail( function(error){
            reject(error);
        });
    });
}


/* 
adding movies to firebase
*/
function addURL (URLFormObj) {
    console.log('add URL', URLFormObj);
    return new Promise ( function (resolve, reject ) {
        $.ajax ( {
            url: `https://movie-history-team-team.firebaseio.com/movies.json`,
            type: 'POST',
            data: JSON.stringify(URLFormObj),
            dataType: 'json'
        }).done(function () {
            resolve();
        });
    });
}


/*
deleting movies from firebase
*/
function deleteURL (URLId) {
    return new Promise ( function ( resolve, reject ) {
        $.ajax({
            url: `https://movie-history-team-team.firebaseio.com/movies/${URLId}.json`,
            method: 'DELETE'
        }).done( function () {
            resolve();
        });
    });
}

function editURL(URLFormObj, index) {
    return new Promise( function(resolve, reject){
        $.ajax({
            url: `https://movie-history-team-team.firebaseio.com/movies/${index}.json`,
            type: 'PUT',
            data: JSON.stringify(URLFormObj)
        }).done( function(){
            resolve();
        });
    });
}

module.exports = {
    getURL,
    addURL,
    deleteURL,
    editURL
};