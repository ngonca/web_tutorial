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


//print( find_average( [1,23,12,14,15]) )

//print( find_average2( [1,23,12,14,15]) )

print( find_avergae3( [1,23,12,14,15]) )



