/* Manipulasi Element 
    1.innerHTML
        merubah data yang ada didalam html
        Penulisan : element.innerHTML
    2.Style
        memberi style pada html
        element.style.<property>    
    3.setAttribute() = menambahkan atribut
      getAttribute() = mengambil atribut
      removeAttribute() = menghapus atribut
        attribut itu seperti (id, class, hreaf, dll)
       = element.setAttribute()
    4.classList = mengelolas atribut class 
        - element.classList.add()
         - element.classList.remove()
          - element.classList.toggle()
           - element.classList.item()
            - element.classList.contains()
             - element.classList.replace()
       
*/
//contoh
const title = document.getElementById("judul");
    // merubah data yang ada di dalam Id judul
    title.innerHTML = '<div>paragrap1 <ul><li>nama</li></ul></div>';
    //memberi style pada html di Id judul
    title.style.backgroundColor = "salmon";
    //menambahkan attribute pada id judul
    title.setAttribute('name','title');

// contoh classList
    // 1. menambah class pada element id judul
        title.classList.add('label');
       
    //2. Menghapus kelas
        title.classList.remove('container');
        // akan menghapus kelas container
    
    // 3. element toggle
    // mengecek apakah class sudah dibuat atau belum, jika belum maka javascript akan menambahkan classnya, jika sudah maka javascript akan menghapusnya
    // element ini cocok digunakan untuk tombol, seperti tombol navbar. disaat klik dia muncul dan disaat klik lagi maka dia menghilang, karna kelas nya sudah dihapus.
//contoh    
    const bton = document.querySelectorAll('section#a p');
        bton[2].classList.toggle('btn');

    // 4. classList.item
    // melihat isi class pada suatu element
    // cara melihatnya menggunakan index, dimulai dengan angka 0 dan seterusnya
        title.classList.item(0);

    // 5. classList.contains
    // mengecek isi kelas itu ada atau tidak 
    // jika ada akan menghasilkan true, jika tidak ada maka akan menghasilkan false
        title.classList.contains('label');
        // consolle akan mengecek, apakah class label itu ada atau tidak

    // 6. classLsit.replace
    // mengganti isi class
        title.classList.replace('label','tag');
        // maka kelas label akan diganti dengan kelas
