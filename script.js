const btn = document.getElementById("btn");
const envelopeHead = document.getElementById("head-envelope");
const content = document.querySelector(".card-content");
const closeBtn = document.getElementById("close");
const ucapan = document.getElementById("ucapan"); // tombol/link "click me"
const hbdCard = document.getElementById("HBD"); // kartu ucapan di halaman HBD

// === Logika buka amplop ===
if (btn) {
  btn.onclick = () => {
    envelopeHead.classList.toggle("aktif");
    setTimeout(() => {
      content.classList.add("show-content");
    }, 500);
    btn.style.display = "none"; // Hilangin tombol #btn
  };
}

if (closeBtn) {
  closeBtn.onclick = () => {
    content.classList.remove("show-content");
    envelopeHead.classList.remove("aktif");
    btn.style.display = "block"; // Munculin lagi tombol #btn
  };
}

// === Efek confetti waktu klik "click me" ===
if (ucapan) {
  ucapan.addEventListener("click", function (e) {
    e.preventDefault(); // tahan biar ga langsung pindah

    const duration = 2000; // 2 detik
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // redirect ke ucapan.html setelah confetti selesai
    setTimeout(() => {
      window.location.href = ucapan.getAttribute("href");
    }, duration);
  });
}

// === Efek confetti otomatis di halaman ucapan (HBD) ===
if (hbdCard) {
  window.onload = () => {
    // 💥 Ledakan besar di tengah
    confetti({
      particleCount: 300, // lebih banyak partikel
      spread: 120, // lebih lebar
      startVelocity: 50, // lebih kenceng
      origin: { y: 0.6 },
    });

    // 💥 Tambahin ledakan kiri & kanan biar makin heboh
    setTimeout(() => {
      confetti({
        particleCount: 200,
        angle: 60,
        spread: 100,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 200,
        angle: 120,
        spread: 100,
        origin: { x: 1 },
      });
    }, 500);

    // 🌈 Hujan confetti 4 detik
    const duration = 4000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };
}
