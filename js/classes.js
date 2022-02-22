//const fs = require('./functions.js');

//fs.find_avergae3([1,2,3,4]);
/*
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

*/

let obj = {
    "isim" : "nazli",
    "soyad" : "ğonca"
}
//console.log(obj);

// String Boolean Number Float, Null, Undefined


// Encapsulation (bilgi sarma)
// Abstraction: Class yaratma
class Person {

    // özel bir yaratıcı fonksiyon: Yeni bir Person objesi yaratır
    constructor(ad,soyad,dogumyili,evlimi){
        this.isim = ad;
        this.soyisim = soyad;
        this.dogumyili = dogumyili;
        this.evlimi = Boolean(evlimi);
    }

    // Object Metodların başına function yazılmaz
    // Class'a ait method
    getAge(){
        return (new Date().getFullYear()) - this.dogumyili;
    }
}

let a = new Person("nazli","gonca",2003,0); // new yeni bir obje yaratır
console.log(a);
console.log(a.isim,a.getAge(),"yaşında");
console.log(new Date());