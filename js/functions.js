// Javascriptte fonksiyonlar function ketwordu ile tanımlanır. () fonksiyon demektir. İsim almak zorunda değiller
/**
 * 
 *  İsimsiz fonkssiyonlara ananuymus fonksiyon denir.
 * 
 * function {donus_tipi} isim( {params.. } ){ kodlar }
 * */
 
// Fonksiyon tanımladık
function print_hello(/*parametre*/){
    // fonsiyonun scopu
    console.log("Hello World!");
}

function print(parametre_adi){
    console.log(parametre_adi);
}
/**print_hello();

print("Hello Nazli");
print("esdgxdfgdfxxf");
print();
**/
function sum_ints(x,y){
return x+y;
}

//print( sum_ints(3,5) );


function find_average(array){
    let sum = 0;
    print(array)
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum/array.length;
}

function find_average2(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
} 

function find_avergae3(arr){
    let sum = 0;
    print(arr)
    for(x in arr){
        sum += arr[x];
    }
    print(sum)
    return sum/arr.length;

}

module.exports = {
    find_avergae3,
    find_average
}

//print( find_average( [1,23,12,14,15]) )

//print( find_average2( [1,23,12,14,15]) )

//print( find_avergae3( [1,23,12,14,15]) );
function line(a,b,c){
    let x,y,z ;
    if( a>=b && a>=c) {
    x = a;
    // console.log(String(a)+">"+String(b)+">"+String(c));
    
    if(b>c){
        y = b;
        z =  c;
    }else{
        y = c;
        z =  b;
    }

    }else if (b >= a && b >=c )
    {
        x = b;
        if(a>c){
            y = a;
            z =  c;
        }else{
            y = c;
            z =  a;
        }

    }else{
        x = c;
        if(a>b){
            y = a;
            z =  b;
        }else{
            y = b;
            z =  a;
        }

    }
    console.log(`${x} > ${y} > ${z}`)

}


function find_min(arr){
    let min = arr[0];

    for (let index = 1; index < arr.length; index++) {
       if(arr[index] < min ){
           min = arr[index];
       }
        
    }
    return min;

}


function selection_sort(arr){


}

// [1,2,3,-4,-50,23,12,44]

//line(7,5,3);

//line(3,5,9);

//line(3,5,5);

// index:   0    1   2   3
// arr  :   3   -1  10  40

//console.log( find_min([1,3,7,-12,4,-24,-99]) );

// soru soruyorum... Soru: Girilen yazıyı tersten yazdıran fonksiyonu yaz!
// örn: tersten("Hello"); çıktı: "olleH"
function tersten(text){ 
    console.log(text);
    let ters = ""
 for (let index = text.length-1 ; index >= 0; index--) {
     let harf = text[index];
     ters = ters + harf;
 }
 return ters;
}


function is_polindrom(text){
    text = String(text);
    if(tersten(text)===text){ 
console.log("POLİNDROM SAYIDIR!"); 
}
else console.log("POLİNDROM SAYI DEĞİLDİR");
};

function tersten2(text){
    let phrase = "";
    /** hello
     *  ""
     *   olleh
     */
    for (let index = 0; index < text.length; index++) {
        phrase =  text[index] + phrase ;
        console.log(phrase);
    }
}


tersten("nurullah");
tersten2("nazli");
/*
console.log("ABC".charCodeAt(1));

console.log(String.fromCharCode(65));

for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    console.log(String.fromCharCode(i));
    
}
nazli
qd?om
*/
function sifrele(text){
let sifreli ="";
    for (let index = 0; index < text.length; index++) {
    let element = text[index];
    //String.fromCharCode(element.charCodeAt(0) + 3);
sifreli = sifreli + String.fromCharCode(element.charCodeAt(0) + 3);
    
} 
console.log(sifreli);
}

function desifre(text){
    let sifreli ="";
    for (let index = 0; index < text.length; index++) {
    let element = text[index];
    String.fromCharCode(element.charCodeAt(0) - 3);
sifreli = sifreli + String.fromCharCode(element.charCodeAt(0) - 3);
    
} 
console.log(sifreli);

}

//sifrele("abc");
//desifre("qxuxoodk");
is_polindrom(1234054321);









