let projelistesi = [
    {isim:"Site Tasarımı", aciklama:"Basit web sitesi", kategori:"web"},
    {isim:"Blog", aciklama:"Yazı paylaşım sitesi", kategori:"web"},
    {isim:"Hava Durumu", aciklama:"Mobil uygulama", kategori:"mobil"},
    {isim:"Not Uygulaması", aciklama:"Not alma uygulaması", kategori:"mobil"},
    {isim:"E-Ticaret", aciklama:"Ürün satış sitesi", kategori:"web"}
];

let projealan = document.getElementById("projeler");

function goster(liste){
    projealan.innerHTML = "";
    liste.forEach(p => {
        projealan.innerHTML += `
        <div class="kartproje">
            <h3>${p.isim}</h3>
            <p>${p.aciklama}</p>
            <small>Kategori: ${p.kategori}</small>
        </div>`;
    });
}

function filtrele(kategori){
    if(kategori === "hepsi"){
        goster(projelistesi);
    } else {
        let filtreli = projelistesi.filter(p => p.kategori === kategori);
        goster(filtreli);
    }
}

goster(projelistesi);

let temabutonu = document.getElementById("temabutonu");
temabutonu.onclick = function(){
    document.body.classList.toggle("dark");
}

let yazi = "Arda Melih Gerek - Portföy 2026";
let i = 0;
let alan = document.getElementById("yazi");

function yaz(){
    if(i < yazi.length){
        alan.innerHTML += yazi.charAt(i);
        i++;
        setTimeout(yaz, 80);
    }
}

yaz();