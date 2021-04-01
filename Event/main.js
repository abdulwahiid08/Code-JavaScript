/* Event
    1. Evnet Handler
        inline HTML attribute = memberi langsung event kepada atrbut hmtl
        Element Method = memberi method ke sebuah element
    2. addEentListener()

    */
    //1. Event Handler (Cara Lama)
        // codingan dipanggil kedalam atribut html
const klik = document.querySelector('.p3');
    function ubah() {
        klik.style.backgroundColor = "Salmon";
    }

    // Contoh 2. Element Method
    const klik2 = document.querySelector('.p2');
        klik2.onclick = function() {
                klik2.style.backgroundColor = 'lightblue';
                klik2.style.color = "red";
            }
    

    // 2. addEventListener (Cara Baru)
const tangkap = document.querySelector('section#b p');
    tangkap.addEventListener('click', function(){
        //Memberi Style
        tangkap.style.color = "green";
        tangkap.style.backgroundColor = "salmon"
        
        // javascriot akan memebrikan aksi jika di klik dan akan menambah sebuah element baru saat di klik
        // membuat element baru
        const a = document.createElement('li');
        const b = document.createTextNode('New Item');
            a.appendChild(b);
        // menyimpan element kedalam parent node atau kedalam html
        const c = document.querySelector('section#b ul');
        const d = c.querySelector('li:nth-child(2)');
        c.appendChild(a);
    });

    const transisi = document.querySelector('.p1');
        // js akan Memanipulasi element p1 dengan diberi event(mouse)
        // mouseenter akan memberi event disaat cursor berada pada element p1
        transisi.addEventListener('mouseenter', () => {
            transisi.style.backgroundColor = "black";
        })
        // mouseleave memberi event yang bertolak belakang dengan mouseenter
        transisi.addEventListener("mouseleave", () => {
            transisi.style.backgroundColor = "white";
        });