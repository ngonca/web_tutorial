/**
 *  LOGICAL EXPRESSIONS
 *  && 
 * 
 * 
 * 
 * if()
 * else if()
 * else()
 * 
 * 
 */
// Girilen sayının 10'a göre durmunu yaz
let sayi = parseInt(Math.random()*20);
console.log("Sayi ",sayi);
if(sayi === 10){
    console.log("10 a eşittir");
}else if (sayi < 10){
    console.log("10'dan küçüktür");
}else {
    console.log("10'dan büyüktür");

}