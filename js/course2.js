// LOGIC OPERATORS
// true and true = true

// & -> apresant && -> an d
// | -> pipe || -> or
// ! -> Not
// exp ? val1 : val2; -> exp true ise val1 döner değilse val2 döner.

//b = (10%5) == 3 || 10*2 == 20;
//console.log(!b)

// boy kitle endeksi hesapla, obez olup olmadığını yazalım
// kilo durumunu göster
// örnek: kilolu: true
// end = kilo/boy^2
// end 30
//let boy = 1.61;
//let kilo = 79;

//let sonuc = (kilo/(boy**2)) > 30 ? "obez" : "obez değil"; 
//console.log(sonuc+", endeks: "+ (kilo/(boy**2)) );

// Arrays - variables that hold multiple values
// {"name":"nur"}
// [1,2,3,"vvd",{1:2,3:[]},false] -> [] array tanımlar



// ARRAYS
/**
 * isim array:
 *  0    1   2    3   4  indexes
 *  'n' 'a' 'z' 'l' 'ı'  : values
 * arrayName[index]
 * 
 *  'n' <- isim[0]
 */
var nazli = ['n','a','z','l','i'];
console.log(nazli);
console.log( nazli.sort() );
nazli.push('nurullah'); // appends the new elements
console.log(nazli); 
nazli.splice(1,1); // start, delete count
console.log(nazli);
console.log(nazli[0]); // 0. elemanı yazdır
console.log(nazli.length);


const numbers = new Array( 1,2,3,4,5);
console.log(numbers); 
const fruits = ['apples','oranges','pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries'); // insert new item at the begining the array
fruits.pop();  // remove the latest element
console.log("[] is Array: "+Array.isArray([]));
console.log(fruits.indexOf('oranges'));
console.log(fruits[1]); 
//alert('HELLO AŞKIM');
console.dir(document);



