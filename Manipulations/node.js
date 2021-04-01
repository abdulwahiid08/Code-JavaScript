/* Manipulasi node 
    1.document.createElement() = membuat sebuah element baru
    2. document.createTextNode() = memberi nilai pada element tsb
    3. node.appendChild() = menggabungkan atau menyimpan dan menampilkan elemnt dan nilai menjadi satu
        appencChild akan menampilkan element dan nilai nya di akhir sebuah element html.
    4. node.insertBefore()
    5. parentNode.removeChild()
    6. parentaNode.replaceChild()
*/

// contoh
    // 1. membuat tag atau element baru
    const pBaru = document.createElement('p');
    // 2. memberi nilai pada element baru atau tag nya
    const textpBaru = document.createTextNode('Paragraf 5');
    // 4. menggabungkan element dengan nilainya
    pBaru.appendChild(textpBaru);
    // menyimpan atau menampilkan element yang baru ke html
    const result = document.getElementById('a');
        result.appendChild(pBaru);

    // 5. insertBerfore()   
    const liBaru = document.createElement('li');
    const baruLi = document.createTextNode('item 5');
    liBaru.appendChild(baruLi);
        // menangkap document yang ingin ditambahkan dengan element baru tsb.
    const hasil = document.querySelector('section#b ul');
        // menangkap element sebelumnya element baru ini di tempatkan
    const li2 = document.querySelector("section#b ul li:nth-child(2)");
    
    hasil.insertBefore(liBaru, li2);
    // cara baca
    // element baru (liBaru) akan di tempatkan kedalam element section# ul (hasil) yang mana berada sebelum item 2 (li2)
