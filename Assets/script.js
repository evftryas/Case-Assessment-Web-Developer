function make_ulasan(nama, tgl, jumlah_like, foto, isi_ulasan, is_active) {
  let parent = document.querySelector("#Ulasan");
  const card = document.createElement("div");

  card.className =
    "card ulasan carousel-item border-0 shadow-sm rounded-4 overflow-hidden";
  if (is_active == true) {
    card.classList.add("active");
  }
  card.innerHTML = `
            <div class="d-flex align-items-center gap-3 p-3 border-bottom">
                <img src="${foto}" alt="Ayu Pratiwi" class="rounded-circle border" style="width:56px;height:56px;object-fit:cover;">
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-baseline">
                        <h6 class="mb-0 text-white">${nama}</h6>
                        <small class="text-white opacity-50">${tgl}</small>
                    </div>
                    <div class="small mt-1 text-warning" aria-label="Rating 5 dari 5">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                </div>
            </div>
            <div class="p-3">
                <p class="mb-3 text-secondary">${isi_ulasan}</p>

                <div class="d-flex gap-2 flex-wrap mb-3">
                    <span class="badge rounded-pill text-bg-light border-none">Career Booster</span>
                    <span class="badge rounded-pill text-bg-success border-none">Networking Expert</span>
                    <span class="badge rounded-pill text-bg-dark border-none">Personal Branding Mastery</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-primary d-flex align-items-center gap-1" type="button">
                        <i class="bi bi-hand-thumbs-up"></i><span>${jumlah_like}</span>
                    </button>
                    <small class="ms-auto text-muted d-flex align-items-center gap-1 cl-prm">
                        <i class="bi bi-check-circle cl-prm"></i> 
                        <p class="clean-p cl-prm">Terverifikasi</p>
                    </small>
                </div>
            </div>
        `;
  parent.appendChild(card);
}

ulasan = [
  [
    "Ari Laso",
    "5 Oktober 2025",
    10,
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Awalnya saya bingung bagaimana membuat profil LinkedIn terlihat profesional. Setelah ikut kelas ini, profil saya langsung lebih menarik dan mulai banyak recruiter yang menghubungi. Sangat membantu untuk fresh graduate seperti saya!",
  ],
  [
    "Fanny wati",
    "7 Oktober 2025",
    15,
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Awalnya saya bingung bagaimana membuat profil LinkedIn terlihat profesional. Setelah ikut kelas ini, profil saya langsung lebih menarik dan mulai banyak recruiter yang menghubungi. Sangat membantu untuk fresh graduate seperti saya!",
  ],
  [
    "Cary Alson",
    "10 Oktober 2025",
    19,
    "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Awalnya saya bingung bagaimana membuat profil LinkedIn terlihat profesional. Setelah ikut kelas ini, profil saya langsung lebih menarik dan mulai banyak recruiter yang menghubungi. Sangat membantu untuk fresh graduate seperti saya!",
  ],
  [
    "Maria Rembo",
    "23 Oktober 2025",
    58,
    "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Awalnya saya bingung bagaimana membuat profil LinkedIn terlihat profesional. Setelah ikut kelas ini, profil saya langsung lebih menarik dan mulai banyak recruiter yang menghubungi. Sangat membantu untuk fresh graduate seperti saya!",
  ],
];

let count = 0;
ulasan.forEach((e) => {
  if (count == 0) {
    make_ulasan(e[0], e[1], e[2], e[3], e[4], true);
  } else {
    make_ulasan(e[0], e[1], e[2], e[3], e[4], false);
  }
  count++;
});

document.querySelectorAll("[data-include]").forEach((el) => {
  fetch(el.getAttribute("data-include"))
    .then((res) => res.text())
    .then((data) => {
      el.innerHTML = data;
    });
});
