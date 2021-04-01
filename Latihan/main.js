    // click
const tangkapButton = document.getElementsByClassName('tombol')[0];
const tBody = document.getElementsByTagName('body')[0];   
    tangkapButton.addEventListener('click', () => {
        //tBody.style.backgroundColor = 'salmon';
        tBody.classList.toggle('ubahBackground');
    });

    //Click 2x
const tambahElement = document.createElement('button');
const teksElement = document.createTextNode('Clik 2x');
    // memberikan atribut ke dalam element button
    tambahElement.setAttribute('type', 'button');
tambahElement.appendChild(teksElement);
    // simpan Element
    tangkapButton.after(tambahElement);
    tambahElement.addEventListener('dblclick', ()=> {
        tBody.classList.toggle('ubahBackground2');
    });

    // MouseEnter dan MouseLeave
const tButton = document.createElement('button');
const teksButton = document.createTextNode('MouseEnter dan MouseLeave');
    tButton.setAttribute('type', 'button');    
tButton.appendChild(teksButton);
    // Simpan Element
tambahElement.after(tButton);
    tButton.addEventListener('mouseenter', () => {
        tBody.style.backgroundColor = "lightblue"
    });
    tButton.addEventListener("mouseleave", () => {
      tBody.style.backgroundColor = "white";
      stop;
    });
    

    // Acak Warna
const acakWarna = document.createElement('button');
const teksAcak = document.createTextNode('Tombol Acak Warna');
    acakWarna.setAttribute('type', 'button');
acakWarna.appendChild(teksAcak);
    //simpan
tButton.after(acakWarna);
    acakWarna.addEventListener('click', ()=>{
        // Membuat warna random saat diklik
        const merah = Math.round(Math.random() * 255 + 1);
        const hijau = Math.round(Math.random() * 255 + 1);
        const biru = Math.round(Math.random() * 255 + 1);
            tBody.style.backgroundColor = 'rgb('+ merah + ', ' + hijau + ', '+ biru +' )';
    });

    //Slider Warna
    const sMerah = document.querySelector('input[name=sliderMerah]');
    const sHijau = document.querySelector("input[name=sliderHijau]");
    const sBiru = document.querySelector("input[name=sliderBiru]");

        sMerah.addEventListener("input", () => {
          const merah = sMerah.value;
          const hijau = sHijau.value;
          const biru = sBiru.value;
          tBody.style.backgroundColor =
            "rgb(" + merah + "," + hijau + "," + biru + " )";
        });

        sHijau.addEventListener("input", () => {
          const merah = sMerah.value;
          const hijau = sHijau.value;
          const biru = sBiru.value;
          tBody.style.backgroundColor =
            "rgb(" + merah + "," + hijau + "," + biru + " )";
        });

        sBiru.addEventListener("input", () => {
            const merah = sMerah.value;
            const hijau = sHijau.value;
            const biru = sBiru.value;
                tBody.style.backgroundColor = "rgb(" + merah + ","+hijau+","+biru+" )";
    });

    // Membuat Efek Cursor/mouse
tBody.addEventListener('mousemove', (event)=> {
    // Mencari posisi cursor
    //console.log(event.clientX); // mencari posisi sumbu X
    //console.log(event.clientY);// mencari posisi sumbu Y

    // Mencari Ukuran Browser
    // 1. document = kanvas browser atau yang background putih
    // 2. window = kesulurahn browser, termasuk dengan tombol x, minimize, perbesar dll
        //console.log(window)

    const xPos = Math.round((event.clientX / window.innerWidth) * 255); 
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
        tBody.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)'
});