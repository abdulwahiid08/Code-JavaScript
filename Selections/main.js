// DOM Selection
/* 
    1. document.getElmentById()
        DOM akan mencari element yang mempunyai atribut Id
    2. document.getElemnetsTagName()
        DOM akan mencari element-element atau kumpulan html (HTMLCollections) yang memiliki Tag Name
    3. document.getElementsByClassName()
        DOM akan mencari element-element atau kumpulan html (HTMLCollections) yang memiliki atribut class
    4. document.querySelector()
    5. document.querySelectorAll()
        kedua method diatas itu sama, yaitu DOM akan mencari selectro yang ada di css, karna selector itu berada di css. dan mengbalikan element sama seperti byId
*/
//1. document.getElementsById
const title = document.getElementById('judul');
    title.style.color = 'red';
    title.style.backgroundColor = 'salmon';
    title.innerHTML = "Abdul Wahid";

//2. document.getElementsByTagName()
    //HTMLCollections
    // TagName ini berbentuk sebuah array, jadi jika ingin memanggilnya harus mnegunakan indeks.
        //const parag = document.getElementsByTagName('p');
// contoh 1
    // cara pakai index
        //parag[1].style.fontSize = '30px';

//contoh 2 
    //pakai looping
        // for (let i = 0; i < parag.length; i++) {
        //     parag[i].style.backgroundColor = 'salmon';
        // }

//3. document.getElementsByClassName
    //HTML Collections
    // karna dia html collection, maka dia berbentuk array sama seperti byTagName
    // Tidak bisa menggunkan Looping seperti byTagName
    // const kelas = document.getElementsByClassName('p1');
        // kelas[0].innerHTML = 'A. Rokan Hulu';


//4. document.querySelector() = mecari selector yang ada di css
    const parag4 = document.querySelector('#b p'); // query tolong cari kan tag p yang berada didalam id b.
    parag4.style.backgroundColor = 'salmon';

    const li2 = document.querySelector('section#b li:nth-child(2)'); // query tolong carikan tag li yang dia adlah ana kedua, yang mna dia berada di dalam section yang ber id b
    li2.style.backgroundColor = 'blue';


//5. document.querySelectorAll()
    // cara kerja nya hampir sama dengan byTagName dan byClassName
    // Berbentuk Array
    // tag dan class menghasilkan HTMLCollection
    // SelectorAll menghasilkan NodeList
        const all = document.querySelectorAll('li');
            all[0].style.color = 'red';
    // bisa menggunakan looping


