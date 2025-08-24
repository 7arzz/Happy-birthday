const btn = document.getElementById("btn");
const envelopeHead = document.getElementById("head-envelope");
const content = document.querySelector(".card-content");
const closeBtn = document.getElementById("close");

btn.onclick = () => {
  envelopeHead.classList.toggle("aktif");
  setTimeout(() => {
    content.classList.add("show-content");
  }, 500);
  btn.style.display = "none"; // Hilangin tombol #btn
};

closeBtn.onclick = () => {
  content.classList.remove("show-content");
  envelopeHead.classList.remove("aktif");
  btn.style.display = "block"; // Munculin lagi tombol #btn
};
