//Examine the document object //
//console.dir(document);
//console.log("domain:",document.domain);
//console.log("URL: ",document.URL);
//console.log(document.title);
//document.title="ycycyucu";
//console.log(document.doctype);
//console.log(document.forms);
//console.log(document.links);

// GETELEMENTEDBYID //
let aa = document.getElementById("title1");
console.log(aa);
//aa.textContent = "ipike"
//aa.innerText = 'goodbye'
//aa.innerHTML = '<h3>HELLO</h3>'
//aa.style.borderBottom='solid 3px #000';

//GETELEMENTSBYCLASSNAME//
// []
let items = document.getElementsByClassName('list-group-item');
console.log("items",items[1]);
//items[1].innertext="helloo";
items[1].style.backgroundColor = '#ff00';
items[1].style.fontWeight ='bold';
for (let i = 0; i < items.length; i++){
    items[i].style.color = '#ff000';
};
//GETELEMENTSBYTAGNAME//
let li = document.getElementsByTagName('li');
console.log(li);
for (let i = 0 ; i < li.length; i++){
//li[i].style.backgroundColor = '#ff0000';
};
//QUERYSELECTOR//
let header = document.querySelector('#title1');
header.style.borderBottom = 'solid 4px #ccc';
let input = document.querySelector('input');
input.value = 'hello world!!';

//let kk = document.querySelector("a[nazli]");
//console.log("Nazli: ",kk);
//document.querySelector("li").style.backgroundColor = "red";
/**
 *  Query:
 *  .isim -> classname göre
 *  #id -> id'ye göre
 *  [color='saczddzv] -> attribute/property  göre arar
 *  tag -> tag
 * 
 */