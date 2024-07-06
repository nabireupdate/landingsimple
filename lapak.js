 //galeri
 document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.album img');
    const albumButton = document.getElementById('albumButton');
    let currentIndex = 8; // jumlah foto awal
    const imagesPerPage = 8; // jumlah foto yang di tampilkan

    function updateDisplay() {
      images.forEach((img, index) => {
        img.style.display = (index < currentIndex) ? 'inline-block' : 'none';
      });

      if (currentIndex >= images.length) {
        albumButton.textContent = 'Kembali ke Atas';
        albumButton.onclick = () => { window.location.href = '#galeri'; };
      }
    }

    albumButton.addEventListener('click', function() {
      currentIndex += imagesPerPage;
      updateDisplay();
    });

    // Initialize the display
    updateDisplay();
  });
 
 // Fungsi untuk menambahkan teks copyright dan tautan ke dalam elemen footer
 function addCopyrightAndLink() {
    // Mengambil elemen dengan id 'copyright'
    const copyrightElement = document.getElementById('copyright');
  
    if (copyrightElement) {
      // Menyimpan teks asli
      const originalText = copyrightElement.innerHTML;
  
      // Membuat teks tambahan
      const additionalText = document.createElement('span');
      additionalText.innerHTML = ' | Made with ';
  
      // Membuat elemen tautan
      const nabireLink = document.createElement('a');
      nabireLink.href = 'https://www.nabireupdate.com/';
      nabireLink.innerText = 'NabireKreatif';
  
      // Menambahkan teks asli, tambahan, dan tautan ke dalam elemen copyright
      copyrightElement.innerHTML = '';
      copyrightElement.innerHTML = originalText;
      copyrightElement.appendChild(additionalText);
      copyrightElement.appendChild(nabireLink);
    }
  }
  
  // Fungsi untuk mengecek keberadaan elemen copyright
  function checkCopyright() {
    // Mengambil elemen dengan id 'copyright'
    const copyrightElement = document.getElementById('copyright');
  
    // Jika elemen tidak ada, tampilkan pesan peringatan
    if (!copyrightElement) {
      document.body.innerHTML = ''; // Mengosongkan konten halaman
      
      // Membuat elemen container untuk pesan error
      const errorContainer = document.createElement('div');
      errorContainer.style.position = 'fixed';
      errorContainer.style.top = '50%';
      errorContainer.style.left = '50%';
      errorContainer.style.transform = 'translate(-50%, -50%)';
      errorContainer.style.backgroundColor = '#f8d7da';
      errorContainer.style.padding = '20px';
      errorContainer.style.borderRadius = '8px';
      errorContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      errorContainer.style.textAlign = 'center';
  
      // Membuat elemen untuk ikon
      const errorIcon = document.createElement('div');
      errorIcon.innerHTML = '&#x2639;'; // Unicode untuk ikon sedih
      errorIcon.style.fontSize = '50px';
      errorIcon.style.color = '#721c24';
      
      // Membuat elemen pesan error
      const errorMessage = document.createElement('div');
      errorMessage.innerText = 'Error 404\nOperation could not be completed\n(Jangan hapus kode copyright. Untuk mendapatkan lisensi, hubungi atau kunjungi www.nabireupdate.com)';
      errorMessage.style.color = '#721c24';
      errorMessage.style.marginTop = '10px';
  
      // Membuat tombol retry
      const retryButton = document.createElement('button');
      retryButton.innerText = 'RETRY';
      retryButton.style.backgroundColor = '#f5c6cb';
      retryButton.style.color = '#721c24';
      retryButton.style.border = 'none';
      retryButton.style.borderRadius = '5px';
      retryButton.style.padding = '10px 20px';
      retryButton.style.cursor = 'pointer';
      retryButton.style.marginTop = '20px';
      
      // Menambahkan event listener pada tombol retry
      retryButton.addEventListener('click', function() {
        window.location.href = 'https://www.nabireupdate.com';
      });
  
      // Menambahkan ikon, pesan, dan tombol ke dalam container
      errorContainer.appendChild(errorIcon);
      errorContainer.appendChild(errorMessage);
      errorContainer.appendChild(retryButton);
  
      // Menambahkan container ke dalam body
      document.body.appendChild(errorContainer);
    }
  }
  
  // Menambahkan teks copyright dan tautan ketika halaman selesai dimuat
  document.addEventListener('DOMContentLoaded', () => {
    addCopyrightAndLink();
  
    // Mengecek keberadaan elemen copyright setiap detik
    setInterval(checkCopyright, 1000);
  });

  //menu open
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('closeBtn');
    let isMenuOpen = false;

    function toggleMenu() {
        if (isMenuOpen) {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        menu.style.display = 'none';
        isMenuOpen = false;
    }

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    closeBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        closeMenu();
    });

    document.addEventListener('click', function () {
        if (isMenuOpen) {
            closeMenu();
        }
    });

    menu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

/*<![CDATA[*/
// source code: www.w3schools.com modified by wendycode
// last updated 28-05-2023
var timeOut = 3000, // 3 seconds change image
    autoOn = true, // change it to false if you don't want automatic slides
    slideIndex = 0,
    slideTimer;
if (autoOn) {
   var slider = document.querySelector(".slideshow-container");
    slider.addEventListener("mouseenter", function() {
        clearTimeout(slideTimer);
        autoOn = false;
    });

    slider.addEventListener("touchstart", function() {
        clearTimeout(slideTimer);
        autoOn = false;
    });

    slider.addEventListener("mouseleave", function() {
        autoOn = true;
        autoSlides();
    });

    slider.addEventListener("touchend", function() {
        autoOn = true;
        autoSlides();
    });

    function autoSlides() {
        slideTimer = setTimeout(function() {

              showSlides();
              autoSlides();
            }
            , timeOut);
    }
     autoSlides();
} else {
     showSlides()
}

function prevSlide() {
      var e = document.getElementsByClassName("mySlides"),
        s = document.getElementsByClassName("dot");
       for (i = 0; i < e.length; i++) {
       e[i].style.display = "none";
       s[i].className = s[i].className.replace(" active", "");
    }
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = e.length - 1;
    }
    e[slideIndex].style.display = "block";
    s[slideIndex].className += " active";

}

function showSlides() {
    var e = document.getElementsByClassName("mySlides"),
       s = document.getElementsByClassName("dot");
    for (i = 0; i < e.length; i++) {
        e[i].style.display = "none";
        s[i].className = s[i].className.replace(" active", "");
     }
    slideIndex++;
    if (slideIndex >= e.length) {
       slideIndex = 0;
    }
    e[slideIndex].style.display = "block";
    s[slideIndex].className += " active";
}

slideIndex = -1;
showSlides();
/*]]>*/
