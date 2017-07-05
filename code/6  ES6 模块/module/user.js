// profile.js
let firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;


var getName=function(){

    return `${firstName}----${lastName}`;
}


export{

 	firstName
 	lastName
    getName:getName()
 }