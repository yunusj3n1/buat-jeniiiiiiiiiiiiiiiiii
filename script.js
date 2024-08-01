$(document).ready(function () {
    // Kode yang sudah ada
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // Tambahkan kode berikut untuk autoplay musik
    var music = document.getElementById("background-music");
    
    // Fungsi untuk memulai pemutaran musik
    function playMusic() {
        music.play();
    }

    // Memulai musik saat halaman dimuat
    playMusic();

    // Memulai musik saat user berinteraksi dengan halaman
    document.addEventListener('click', playMusic);
});