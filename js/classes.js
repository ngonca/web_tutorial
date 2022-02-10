//const fs = require('./functions.js');

//fs.find_avergae3([1,2,3,4]);

class User{

    constructor(username,password,email){
        this.username = username;
        this.password = password;
        this.email = email;

    }
   
     name(params) {
        
    }
}


let x = 5;
let y = "Nazli";

let arr = new Array();
let userlist = [];

let u = new User("nazli","pswd123","n@gonca.com");

userlist.push(u);
userlist.push(new User("ngumus","pswd123","n@gumus.com"));

let u2 = new User("ffs","vdgds","fsdgd");
userlist.push(u2);

//console.log(typeof arr);
//console.log(typeof u);
console.log(userlist);


