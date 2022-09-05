/* Modules- every file is a module by default
the code is encapsulated. we only share whar we want to */

function sayHi(name){
    console.log(`hello ${name}`);
}
/* can also be written as ---
 const sayHi = (name) => {
    console.log(`hello ${name}`);
 }  */
sayHi('riya');