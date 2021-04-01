// DOM Travesal = DOM yang bertugas untuk menulusuri node atau mencari
    // DOM Traversal Method
    /* 
    1. parentNode
    2. parentElement
    3. nextSibling
    4. nextElementSibling
    5. previousSibling
    6. previousElementSibling
     */

// const tClose = document.querySelector('.close');
// const tCard = document.querySelector('.card');

// tClose.addEventListener('click', ()=> {
//     tCard.style.display = 'none';
// });


// DOM Traversal
//const tClose = document.querySelectorAll('.close');
    // menggunakan For biasa
    // for(let i = 0; i < tClose.length; i++){
    //   tClose[i].addEventListener('click', (e)=> {
        // DOM Traversal
        // kita cari parent dari close atau varibel tClose menggunkan parentElement
        // 1.
        //  tClose[i].parentElement.style.display = 'none';

        //2. Menggunakan Parameter di function
    //         e.target.parentElement.style.display = 'none';
    //   });
    // };


    // Menggunakan Foreach
    // tClose.forEach(function(el){
    //     el.addEventListener('click', function(e){
    //         e.target.parentElement.style.display = 'none';

    //         // Prevent Default
    //         // Berfungsi untuk menghentikan aksi default dari browser
    //         e.preventDefault();
    //     }); 
    // })


    // Cara Lebih Efektif (Event Bubling)
    // Mengambil element pembukus terluar dari elemnt yang mau diberi aksi
    const eContainer = document.querySelector('.container');
        eContainer.addEventListener('click', (e)=> {
            if(e.target.className == 'close') {
                e.target.parentElement.style.display = 'none';
                e.preventDefault();
            }
        });