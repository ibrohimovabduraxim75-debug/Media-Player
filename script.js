// =====================================================
// 1) QO'SHIQLAR RO'YXATI (Array)
//    Yangi qo'shiq qo'shish uchun shunchaki yangi qator yozing:
//    { title: "Nomi", file: "fayl_nomi.mp3" },
//    Fayllar "Musics" papkasi ichida turishi kerak.
// =====================================================
const songs = [
  { title: "Alan Walker - Play",             file: "Alan_Walker_-_Play_(mp3.pm).mp3" },
  { title: "Another Love",                   file: "Another Love.m4a" },
  { title: "Arcade",                         file: "Arcade.m4a" },
  { title: "Attention",                      file: "Attention.m4a" },
  { title: "Battlecry",                      file: "Battlecry.mp3" },
  { title: "Believer",                       file: "Believer.m4a" },
  { title: "Centuries",                      file: "Centuries.m4a" },
  { title: "Counting Stars",                 file: "Counting Stars.m4a" },
  { title: "Dancing",                        file: "Dancing.m4a" },
  { title: "David Guetta - Titanium",        file: "David Guetta - Titanium (Lyrics) ft. Sia.mp3" },
  { title: "Daylight",                       file: "Daylight.m4a" },
  { title: "Dernière danse",                 file: "Dernière danse.m4a" },
  { title: "Diamonds",                       file: "Diamonds.m4a" },
  { title: "Die With A Smile",               file: "Die With A Smile.m4a" },
  { title: "Don't Let Me Down",              file: "Don't Let Me Down.m4a" },
  { title: "Enemy",                          file: "Enemy.m4a" },
  { title: "Faded",                          file: "Faded.m4a" },
  { title: "Fairytale",                      file: "Fairytale.m4a" },
  { title: "Grateful",                       file: "Grateful.m4a" },
  { title: "Headlights",                     file: "Headlights.m4a" },
  { title: "Heat Waves",                     file: "Heat Waves.m4a" },
  { title: "House of Memories",              file: "House of memorise.m4a" },
  { title: "Hymn for the Weekend",           file: "Hymn for the Weekend.m4a" },
  { title: "I'm Good",                       file: "I m Good.m4a" },
  { title: "Ignite",                         file: "Ignite.m4a" },
  { title: "Infinity",                       file: "Infinity.m4a" },
  { title: "Legends Never Die",              file: "Legends Never Die.m4a" },
  { title: "Let Me Down Slowly",             file: "Let Me Down Slowly.m4a" },
  { title: "Let Me Love You - DJ Snake",     file: "Let Me Love You - DJ Snake.mp3" },
  { title: "Link - Jim Yosef",               file: "Link - Jim Yosef.mp3" },
  { title: "Lost Control",                   file: "Lost Control.m4a" },
  { title: "Love Me Like You Do",            file: "Love Me Like You Do.m4a" },
  { title: "Middle of the Night",            file: "MIDDLE OF THE NIGHT.m4a" },
  { title: "Mary On A Cross",                file: "Mary On A Cross.m4a" },
  { title: "Mortals x Royalty",              file: "Mortals x Royalty.m4a" },
  { title: "On My Way",                      file: "On My Way.m4a" },
  { title: "Alex Warren - Ordinary",         file: "Ordinary_Alex-Warren1.mp3" },
  { title: "Ravyn Lenae - Love Me Not",      file: "Ravyn_Lenae_-_Love_Me_Not.mp3" },
  { title: "TheFatRat - Rise Up",            file: "Rise Up   TheFatRat.m4a" },
  { title: "Shameless",                      file: "Shameless.m4a" },
  { title: "Sky High",                       file: "Sky High.m4a" },
  { title: "Someone You Loved",              file: "Someone You Loved.m4a" },
  { title: "Stay",                           file: "Stay.m4a" },
  { title: "Stereo Hearts",                  file: "Stereo Hearts.m4a" },
  { title: "Stereo Love",                    file: "Stereo_Love.m4a" },
  { title: "The Nights",                     file: "The Nights.m4a" },
  { title: "The Spectre",                    file: "The Spectre.m4a" },
  { title: "The Weeknd - Blinding Lights",   file: "The Weeknd - Blinding Lights (Official Audio).mp3" },
  { title: "Tourner Dans Le Vide",           file: "Tourner Dans Le Vide.m4a" },
  { title: "Unity",                          file: "Unity.m4a" },
  { title: "Vicetone - Nevada",              file: "Vicetone_-_Nevada_feat._Cozi_Zuehlsdorff_(mp3.pm).mp3" },
  { title: "Whatever It Takes",              file: "Whatever It Takes.m4a" }
];

// =====================================================
// 2) HTML ELEMENTLARINI TOPAMIZ
// =====================================================
const audio       = document.getElementById("audio");
const titleEl     = document.getElementById("title");
const numberEl    = document.getElementById("number");
const progress    = document.getElementById("progress");
const currentEl   = document.getElementById("currentTime");
const durationEl  = document.getElementById("duration");
const playBtn     = document.getElementById("playBtn");
const playIcon    = document.getElementById("playIcon");
const pauseIcon   = document.getElementById("pauseIcon");
const prevBtn     = document.getElementById("prevBtn");
const nextBtn     = document.getElementById("nextBtn");
const backBtn     = document.getElementById("backBtn");
const fwdBtn      = document.getElementById("fwdBtn");
const speedBtn    = document.getElementById("speedBtn");
const favBtn      = document.getElementById("favBtn");
const muteBtn     = document.getElementById("muteBtn");
const volumeEl    = document.getElementById("volume");
const volNumber   = document.getElementById("volNumber");
const volOnIcon   = document.getElementById("volOnIcon");
const volOffIcon  = document.getElementById("volOffIcon");
const playlistEl  = document.getElementById("playlist");

// =====================================================
// 3) O'ZGARUVCHILAR
// =====================================================
let currentIndex = 0;                 // hozir qaysi qo'shiq (0 dan boshlanadi)
let favorites = [];                   // sevimli qo'shiqlar indekslari
const speeds = [1, 1.25, 1.5, 2, 0.75];
let speedIndex = 0;

// =====================================================
// 4) YORDAMCHI FUNKSIYA: soniyani "2:05" ko'rinishiga o'tkazadi
// =====================================================
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}

// =====================================================
// 5) RO'YXATNI EKRANGA CHIQARAMIZ
// =====================================================
function renderPlaylist() {
  playlistEl.innerHTML = "";

  songs.forEach(function (song, index) {
    const li = document.createElement("li");
    li.innerHTML =
      '<span class="num">' + (index + 1) + '</span>' +
      '<span class="name">' + song.title + '</span>' +
      (favorites.includes(index) ? '<span class="star">★</span>' : '');

    if (index === currentIndex) li.classList.add("active");

    // Ro'yxatdagi qo'shiqni bosganda shuni chalamiz
    li.addEventListener("click", function () {
      loadSong(index);
      playSong();
    });

    playlistEl.appendChild(li);
  });
}

// =====================================================
// 6) QO'SHIQNI YUKLASH (hali chalmaydi)
// =====================================================
function loadSong(index) {
  currentIndex = index;
  const song = songs[index];

  audio.src = "Musics/" + song.file;
  titleEl.textContent  = song.title;
  numberEl.textContent = (index + 1) + " / " + songs.length;
  favBtn.classList.toggle("active", favorites.includes(index));

  // Tezlik 1x dan qolib ketmasligi uchun qayta o'rnatamiz
  audio.playbackRate = speeds[speedIndex];

  renderPlaylist();

  // Aktiv qo'shiq ro'yxatda ko'rinib turishi uchun
  const activeItem = playlistEl.querySelector(".active");
  if (activeItem) activeItem.scrollIntoView({ block: "nearest" });
}

// =====================================================
// 7) CHALISH va PAUZA
// =====================================================
function playSong() {
  audio.play();
  playIcon.style.display  = "none";
  pauseIcon.style.display = "block";
}

function pauseSong() {
  audio.pause();
  playIcon.style.display  = "block";
  pauseIcon.style.display = "none";
}

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

// =====================================================
// 8) KEYINGI va OLDINGI
// =====================================================
function nextSong() {
  let newIndex = currentIndex + 1;
  if (newIndex >= songs.length) newIndex = 0;   // oxiriga yetsa, boshiga qaytadi
  loadSong(newIndex);
  playSong();
}

function prevSong() {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = songs.length - 1; // boshida bo'lsa, oxirgisiga o'tadi
  loadSong(newIndex);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Qo'shiq tugasa, o'zi keyingisiga o'tadi
audio.addEventListener("ended", nextSong);

// =====================================================
// 9) 10 SONIYA ORQAGA / OLDINGA
// =====================================================
backBtn.addEventListener("click", function () {
  audio.currentTime = audio.currentTime - 10;
});

fwdBtn.addEventListener("click", function () {
  audio.currentTime = audio.currentTime + 10;
});

// =====================================================
// 10) TEZLIK (1x, 1.25x, 1.5x ...)
// =====================================================
speedBtn.addEventListener("click", function () {
  speedIndex = speedIndex + 1;
  if (speedIndex >= speeds.length) speedIndex = 0;

  audio.playbackRate = speeds[speedIndex];
  speedBtn.textContent = speeds[speedIndex] + "x";
});

// =====================================================
// 11) SEVIMLILAR (bookmark tugmasi)
// =====================================================
favBtn.addEventListener("click", function () {
  if (favorites.includes(currentIndex)) {
    // bor edi -> olib tashlaymiz
    favorites = favorites.filter(function (i) { return i !== currentIndex; });
  } else {
    // yo'q edi -> qo'shamiz
    favorites.push(currentIndex);
  }
  favBtn.classList.toggle("active", favorites.includes(currentIndex));
  renderPlaylist();
});

// =====================================================
// 12) PROGRESS BAR
// =====================================================

// Qo'shiq yuklanganda umumiy vaqtni ko'rsatamiz
audio.addEventListener("loadedmetadata", function () {
  durationEl.textContent = formatTime(audio.duration);
});

// Qo'shiq chalinib turganda har safar chaqiriladi
audio.addEventListener("timeupdate", function () {
  if (!audio.duration) return;

  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
  progress.style.setProperty("--fill", percent + "%");
  currentEl.textContent = formatTime(audio.currentTime);
});

// Foydalanuvchi progress barni surganda qo'shiq o'sha joyga o'tadi
progress.addEventListener("input", function () {
  audio.currentTime = (progress.value / 100) * audio.duration;
  progress.style.setProperty("--fill", progress.value + "%");
});

// =====================================================
// 13) OVOZ BALANDLIGI
//     audio.volume 0 dan 1 gacha son oladi (0 = jim, 1 = eng baland).
//     Slayder esa 0 dan 100 gacha, shuning uchun 100 ga bo'lamiz.
// =====================================================
function updateVolume() {
  const value = Number(volumeEl.value);            // 0 ... 100

  audio.volume = value / 100;
  audio.muted = false;

  volNumber.textContent = value;
  volumeEl.style.setProperty("--fill", value + "%");

  // Ovoz 0 bo'lsa "o'chirilgan" ikonkasini ko'rsatamiz
  volOnIcon.style.display  = value === 0 ? "none"  : "block";
  volOffIcon.style.display = value === 0 ? "block" : "none";
}

// Slayder surilganda ovoz o'zgaradi
volumeEl.addEventListener("input", updateVolume);

// Dinamik tugmasi: ovozni o'chiradi / qayta yoqadi
muteBtn.addEventListener("click", function () {
  audio.muted = !audio.muted;

  volOnIcon.style.display  = audio.muted ? "none"  : "block";
  volOffIcon.style.display = audio.muted ? "block" : "none";
});

// =====================================================
// 14) BOSHLANISH: ovozni o'rnatamiz va birinchi qo'shiqni yuklaymiz
// =====================================================
updateVolume();
loadSong(0);
