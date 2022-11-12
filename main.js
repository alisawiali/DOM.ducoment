

console.log('-------------DOM-----------------')


let esama = document.getElementById('main');
esama.style.background='blue';


/* und wenn wir die text ändern wollen denn benutzen wir so ----> esama.innerHTML = 'hallo Imad  */

esama.innerHTML='hallo Imad'
console.log(esama);


console.log('-------------mit dem class-----------------')


/*
let ali = document.getElementsByClassName('head')[1]
ali.style.color='red'
console.log(ali)*/


console.log('-------------mit dem tag-----------------')
/*
let ali = document.getElementsByTagName('h1')[2]
ali.style.color='red'
console.log(ali)
*/
console.log('-------------mit querSlector das beste-----------------')

// hier können wir alle benutzen (querSlector )

//  mit dem id -----> # (#ali)
// mit dem class TagName ----> h1 (h1)
//  mit dem class ----> . und dann die name des classes (.ali)
//  wenn wir alle  element haben wollen dann benutzen wir (querSlectorAll) [0] 0der [1] oder [2] und soweiter

// zb.

let ali=document.querySelectorAll('h1')[1];
ali.style.color='red';
ali.style.borderRadius='30px';
ali.style.background='#adad';
console.log(ali)

console.log('-------------body-----------------')
 let body = document.body;
// background ändern
 body.style.background='#adadad';
 console.log(body)

console.log('------------titel-----------------')
// titel können wir es auch ändern

 let titel = document.title;
title='Alisawi Imad'
 console.log(title)



 console.log('------------img-----------------')
 let images =document.images[2];/* wie man ein img erreichen kann [0] und und  und noch  wir können src erreichen */
 images.src='/images/bmw4.jpeg'
 images.style.borderRadius='50%'
 console.log(images.src)



 console.log('------------link-----------------')
// wenn das erst link errechen wollen dann gehen wir zum[ 0] und soweite

 let links = document.links[1];

links.href='https://www.google.com/';//  hier  können wir auch (href ändern) mit änderung die nummer ^

 console.log(links.href)