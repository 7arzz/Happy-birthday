// Floating hearts
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = Math.random() * 100 + "%";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
}

const btn = document.getElementById("btn");
const envelopeHead = document.getElementById("head-envelope");
const content = document.querySelector(".card-content");
const closeBtn = document.getElementById("close");
const ucapan = document.getElementById("ucapan");
const hbdCard = document.getElementById("HBD");

// Buka amplop
if (btn) {
  btn.onclick = () => {
    envelopeHead.classList.toggle("aktif");
    setTimeout(() => {
      content.classList.add("show-content");
      document.getElementById("body-envelope").style.display = "block";
    }, 400);

    btn.style.display = "none";

    document.body.style.animation = "shake 0.3s";
    setTimeout(() => (document.body.style.animation = ""), 300);
  };
}

// Tutup amplop
if (closeBtn) {
  closeBtn.onclick = () => {
    content.classList.remove("show-content");
    envelopeHead.classList.remove("aktif");
    btn.style.display = "block";
    document.getElementById("body-envelope").style.display = "none";
  };
}

// Klik "ucapan"
if (ucapan) {
  ucapan.addEventListener("click", function (e) {
    e.preventDefault();

    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 } });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    setTimeout(() => {
      window.location.href = ucapan.getAttribute("href");
    }, duration);
  });
}

// Halaman HBD → big confetti
if (hbdCard) {
  window.onload = () => {
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
    }, 300);

    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 10, angle: 60, spread: 80, origin: { x: 0 } });
      confetti({ particleCount: 10, angle: 120, spread: 80, origin: { x: 1 } });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };
}
