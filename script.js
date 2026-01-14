
document.addEventListener("DOMContentLoaded", function () {
    alert("PortCity Tanıtım Sitesine Hoş Geldiniz");

    menuHover();
    menuAktif();
    temaDegistir();
    aktiviteOlustur();
    begeniSistemi();
    formKontrol();
    gorselEtkilesim();
});


function menuHover() {
    const menuLinkleri = document.querySelectorAll(".menu-link");

    menuLinkleri.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            link.style.color = "#a8f1ff";
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "white";
        });
    });
}


function menuAktif() {
    const menuLinkleri = document.querySelectorAll(".menu-link");

    menuLinkleri.forEach(function (link) {
        link.addEventListener("click", function () {
            menuLinkleri.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}


let temaDurumu = false;

function temaDegistir() {
    const temaButonu = document.createElement("button");
    temaButonu.textContent = "🎨 Tema Değiştir";
    document.body.prepend(temaButonu);

    temaButonu.addEventListener("click", function () {
        temaDurumu = !temaDurumu;
        document.body.classList.toggle("koyu-tema");
    });
}


function aktiviteOlustur() {
    const liste = document.getElementById("aktiviteListesi");
    if (!liste) return;

    const aktiviteler = [
        { ad: "Tekne Turu", bilgi: "PortCity koylarını keşfedin" },
        { ad: "Dalış Deneyimi", bilgi: "Berrak sularda dalış keyfi" },
        { ad: "Marina Restoranları", bilgi: "Deniz manzaralı yemekler" },
        { ad: "Gün Batımı Yürüyüşü", bilgi: "Muhteşem manzaralar" }
    ];

    aktiviteler.forEach(function (aktivite) {
        const li = document.createElement("li");
        li.textContent = aktivite.ad;

        const span = document.createElement("span");
        span.textContent = " → " + aktivite.bilgi;
        span.className = "aciklama";

        li.appendChild(span);

        li.addEventListener("mouseover", () => span.style.display = "inline");
        li.addEventListener("mouseout", () => span.style.display = "none");

        liste.appendChild(li);
    });
}


let begeniSayisi = 0;

function begeniSistemi() {
    const buton = document.getElementById("begeniButonu");
    const sayac = document.getElementById("begeniSayisi");

    if (!buton || !sayac) return;

    buton.addEventListener("click", function () {
        begeniSayisi++;
        sayac.textContent = begeniSayisi;
    });
}


function formKontrol() {
    const form = document.getElementById("iletisimFormu");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const ad = document.getElementById("ad").value.trim();
        const eposta = document.getElementById("eposta").value.trim();
        const mesaj = document.getElementById("mesaj").value.trim();

        if (ad === "" || eposta === "" || mesaj === "") {
            alert("Lütfen tüm alanları doldurun");
        } else {
            alert("Mesajınız başarıyla gönderildi");
            form.reset();
        }
    });
}


function gorselEtkilesim() {
    const resimler = document.querySelectorAll("img");

    resimler.forEach(function (resim) {
        resim.addEventListener("click", function () {
            resim.classList.toggle("buyuk");
        });
    });
}
