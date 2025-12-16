/**
 * PENTING: Semua path gambar, video, dan audio harus menuju ke folder:
 * '../assets/images/' (Keluar dari folder 'js/', masuk ke 'assets/images/')
 * * JIKA ANDA MENGGUNAKAN SUBFOLDER (cth: 'foto member'), MAKA PATH HARUS JADI:
 * '../assets/images/foto member/namafile.jpg'
 * * Namun, sangat disarankan untuk meletakkan semua file langsung di 'assets/images/'
 * agar path lebih sederhana.
 */

// --- DATA SEMUA BAGIAN (TEACHERS, MEMORIES, MEMBERS, VIDEOS, GOALS) ---

/**
 * DATA WALI KELAS
 * Ganti [Nama Wali Kelas] dan pastikan path foto sudah benar.
 */
const teachers = [
    { 
        year: 1, 
        name: 'Sugi Arianto, S.Pd., Gr. ', 
        photo: 'Image/1.1.jpg', 
        role: 'Wali Kelas X (2023/2024)' 
    },
    { 
        year: 2, 
        name: 'Anggi Prayogo, S.Pd., Gr.', 
        photo: 'Image/2.2.jpg', 
        role: 'Wali Kelas XI (2024/2025)' 
    },
    { 
        year: 3, 
        name: 'Dicky', 
        photo: 'Image/3.3.jpg', 
        role: 'Wali Kelas XII (2025/2026)' 
    },
];

/**
 * DATA FOTO UMUM (Kelas 1, 2, 3)
 * PERHATIAN: JALUR FILE DI BAWAH SUDAH SAYA PERBAIKI AGAR KONSISTEN.
 * Jika Anda menggunakan subfolder 'foto member' di dalam 'assets/images',
 * harap ubah jalur file yang saya beri tanda komentar.
 */
const memories = [
    // Kelas X
    // JALUR LAMA: 'foto member/1.jpg' -> JALUR BARU (DIASUMSIKAN ADA DI assets/images):
    { year: 1, src: 'Image/x/1.JPG', caption: 'Masa Orientasi - Momen perkenalan pertama.' },
    { year: 1, src: 'Image/x/1.JPG', caption: 'Lomba memasak di hari Kartini.' },
    { year: 1, src: 'Image/x/1.JPG', caption: 'Kunjungan Industri: Melihat proses produksi.' },
    
    // Kelas XI
    { year: 2, src: 'Image/xi/1.jpg', caption: 'Momen PKL: Pertama kali pakai ID Card perusahaan.' },
    { year: 2, src: 'Image/xi/2.jpg', caption: 'Acara HUT Sekolah, kami jadi panitia inti.' },
    { year: 2, src: 'Image/xi/3.jpg', caption: 'Studi Banding ke luar kota, menginap bersama.' },
    
    // Kelas XII
    { year: 3, src: 'Image/xii/1.jpg', caption: 'Saat-saat terakhir ujian kompetensi keahlian.' },
    { year: 3, src: 'Image/xii/2.jpg', caption: 'Batik Day: Foto studio sebelum hari kelulusan.' },
    { year: 3, src: 'Image/xii/3.jpg', caption: 'Foto buku tahunan, pose paling heboh.' },
    // TAMBAHKAN SEMUA FOTO UMUM ANDA DI BAWAH INI
];

/**
 * DATA PROFIL ANGGOTA (25 Siswa/i)
 * Ganti nama, foto, dan kutipan sesuai anggota kelas Anda.
 */
const classMembers = [
    { name: 'Amrin', photo: 'Image/1.jpg', quote: '"Sukses itu pilihan, bukan kebetulan."' },
    { name: 'Ananda', photo: 'Image/2.jpg', quote: '"Hidup adalah petualangan besar."' },
    { name: 'Anisa Bella', photo: 'Image/3.jpg', quote: '"Masa SMK mengajarkan arti persahabatan."' },
    { name: 'Ardian Syah', photo: 'Image/4.jpg', quote: '"Kecil di mata orang, besar di cita-cita."' },
    { name: 'Ari Yanti', photo: 'Image/5.jpg', quote: '"Keep calm and code on."' },
    { name: 'Darwati Omeliyanti', photo: 'Image/6.jpg', quote: '"Tidak ada kata terlambat untuk belajar."'},
    { name: 'Dea Aprilia', photo: 'Image/7.jpg', quote: '"Inovasi adalah kuncinya."'},
    { name: 'Dela Restiana', photo: 'Image/7.1.jpg', quote: '"Tetap semangat, jangan menyerah."'},
    { name: 'Eca Puspita Sari', photo: 'Image/8.jpg', quote: '"Mimpi tidak pernah tidur."'},
    { name: 'Elda Indriani', photo: 'Image/9.jpg', quote: '"Terima kasih untuk semua kenangan."'},
    { name: 'Jingga Amelia', photo: 'Image/10.jpg', quote: '"Masa depan dimulai hari ini."'},
    { name: 'Lekat', photo: 'Image/11.jpg', quote: '"Never stop creating."'},
    { name: 'M. Krisna Putra W.', photo: 'Image/12.jpg', quote: '"Jadilah versi terbaik dari dirimu."'},
    { name: 'Meilani Citra Lestari', photo: 'Image/13.jpg', quote: '"Terkadang yang terbaik itu sudah lulus."'},
    { name: 'M. Arfi Budiman', photo: 'Image/14.jpg', quote: '"Setiap akhir adalah awal yang baru."'},
    { name: 'Okta Rafiansyah', photo: 'Image/15.jpg', quote: '"Selalu ada pelajaran di setiap langkah."'},
    { name: 'Riza Wismala', photo: 'Image/16.jpg', quote: '"Waktu terbaik adalah saat bersama kalian."'},
    { name: 'Rian Setiawan', photo: 'Image/17.jpg', quote: '"Kerja keras, hasil manis."'},
    { name: 'Sintia Ramadani', photo: 'Image/18.jpg', quote: '"SMK hebat, SMK bisa!"'},
    { name: 'Suci Ramadani', photo: 'Image/19.jpg', quote: '"Satu untuk semua, semua untuk satu."'},
    { name: 'Sisi Lia', photo: 'Image/19.1.jpg', quote: '"Semua akan indah pada waktunya."'},
    { name: 'Tasya Pratama', photo: 'Image/20.jpg', quote: '"Jangan lupakan janji kita ini."'},
    { name: 'Tasya Yulia sari', photo: 'Image/21.jpg', quote: '"Teruslah berjuang meraih impian."'},
    { name: 'Zapira Aulia', photo: 'Image/25.jpg', quote: '"See you at the top!"'},
];

/**
 * DATA VIDEO RANDOM (MENGGUNAKAN FILE LOKAL .mp4)
 * PERHATIAN: JALUR FILE DI BAWAH SUDAH SAYA PERBAIKI AGAR KONSISTEN.
 */
const randomVideos = [
    // JALUR LAMA: 'foto member/jjboz.mp4' -> JALUR BARU (DIASUMSIKAN ADA DI assets/images):
    { title: 'Cinematic Class X', src: 'Video/kelas x2.mp4' }, 
    { title: 'Trip Perpisahan', src: 'Video/kelas x1.mp4' }, 
    { title: 'Proyek Akhir', src: 'Video/kelas xi1.mp4' }, 
    { title: 'Acara Sekolah', src: 'Video/kelas xi2.mp4' },
    { title: 'Acara Sekolah', src: 'Video/kelas x.mp4' },
    { title: 'Acara Sekolah', src: 'Video/kelas x.mp4' },
];

/**
 * DATA TUJUAN MASA DEPAN
 * Ganti tujuan dan status (Status: 'Kuliah', 'Kerja', atau 'Usaha')
 */
const futureGoals = [
    { member: 'Amrin', goal: '---', status: 'Kuliah' },
    { member: 'Ananda', goal: 'Mau Pergi Ke Kota Orang', status: 'Kerja' },
    { member: 'Anisa Bella', goal: 'Mau Kerja Di Jepang', status: 'Usaha' },
    { member: 'Ardian Syah', goal: '---', status: 'Kerja' },
    { member: 'Ari Yanti', goal: '---', status: 'Kuliah' },
    { member: 'Darwati Omeliyanti', goal: '---', status: 'Kuliah' },
    { member: 'Dea Aprilia', goal: '---', status: 'Kerja' },
    { member: 'Dela Restiana', goal: 'Mau Jalan-Jalan Ke Jogja', status: 'Usaha' },
    { member: 'Eca Puspita Sari', goal: 'Mau Lanjut Kuliah di Universitas Gajah Mada', status: 'Kerja' },
    { member: 'Elda Indriani', goal: 'Mau Kerja Di Batam', status: 'Usaha' },
    { member: 'Jingga Amelia', goal: 'Mau Kerja Di Jakarta', status: 'Kuliah' },
    { member: 'Lekat', goal: 'Mau Langsung Kerja', status: 'Kerja' },
    { member: 'M. Krisna Putra W.', goal: '---', status: 'Usaha' },
    { member: 'Meilani Citra Lestari', goal: 'Mau Langsung Kerja', status: 'Kerja' },
    { member: 'M. Arif Budiman', goal: '---', status: 'Kuliah' },
    { member: 'Okta Rafiansyah', goal: 'Mau Dapet Beasiswa Penuh Kuliah di itebeeee', status: 'Kuliah' },
    { member: 'Riza Wismala', goal: 'Mau Kerja Di Jakarta', status: 'Kerja' },
    { member: 'Rian Setiawan', goal: '---', status: 'Usaha' },
    { member: 'Sintia Ramadani', goal: 'Mau lanjut Kuliah di Universitas Brawijaya', status: 'Kuliah' },
    { member: 'Suci Ramadani', goal: '---', status: 'Kuliah' },
    { member: 'Sisi Lia', goal: '---', status: 'Kerja' },
    { member: 'Tasya Pratama', goal: 'Mau LPK Ke Jepang', status: 'Kerja' },
    { member: 'Tasya Yulia Sari', goal: 'Mau Kerja Di Jepang', status: 'Kerja' },
    { member: 'Zapira Aulia', goal: '---', status: 'Usaha' },
];


document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Load: Memuat semua konten dinamis
    loadTeachers();
    loadGalleryByYear(1);
    loadGalleryByYear(2);
    loadGalleryByYear(3);
    loadFullGallery();
    loadClassProfiles();
    loadRandomVideos(); 
    loadFutureGoals(); 

    // 2. Setup: Mengaktifkan fungsi interaktif
    setupAccordion();
    setupLightbox();
    
    // PANGGIL FUNGSI SETUP AUDIO BARU
    setupAudioPlay();
});

// 3. Handle Loading Screen
window.onload = () => {
    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;
    body.style.opacity = '1'; 
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.style.display = 'none', 1000); 
    }, 800); 
};


// --- FUNGSI AUDIO BARU ---

function setupAudioPlay() {
    const audio = document.getElementById('background-music');
    // Cari tombol CTA di Hero Section
    const ctaButton = document.querySelector('.cta-button'); 

    if (audio && ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Audio diizinkan untuk diputar setelah tombol diklik
            audio.play().then(() => {
                console.log("Audio berhasil diputar setelah interaksi.");
            }).catch(error => {
                console.error("Gagal memutar audio setelah klik:", error);
                // Jika gagal, pastikan file audio ada di Sound/musik_latar.mp3
            });
            // Tidak perlu e.preventDefault() karena kita ingin tombol tetap scroll ke #timeline
        });
    }
}


// FUNGSI UTILITY =======================================================

function loadTeachers() {
    const container = document.getElementById('teacher-grid');
    if (!container) return;

    teachers.forEach(teacher => {
        const card = document.createElement('div');
        card.classList.add('teacher-card');
        
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('teacher-img-wrapper');

        const img = document.createElement('img');
        img.src = teacher.photo; 
        img.alt = `Foto Wali Kelas Tahun ${teacher.year}`;

        const info = document.createElement('div');
        info.classList.add('teacher-info');

        const name = document.createElement('h4');
        name.textContent = teacher.name;

        const role = document.createElement('p');
        role.textContent = teacher.role;

        imgWrapper.appendChild(img);
        info.appendChild(name);
        info.appendChild(role);
        card.appendChild(imgWrapper);
        card.appendChild(info);
        
        container.appendChild(card);
    });
}

function loadGalleryByYear(year) {
    const container = document.querySelector(`.photo-grid[data-year="${year}"]`);
    if (!container) return;
    const filteredMemories = memories.filter(m => m.year === year);
    filteredMemories.forEach(memory => {
        appendImageToContainer(container, memory);
    });
}

function loadFullGallery() {
    const container = document.getElementById('lightbox-gallery');
    if (!container) return;
    memories.forEach(memory => {
        appendImageToContainer(container, memory);
    });
}

function appendImageToContainer(container, memory) {
    const img = document.createElement('img');
    img.src = memory.src;
    img.alt = memory.caption;
    img.dataset.caption = memory.caption;
    img.classList.add('gallery-item');
    container.appendChild(img);
}

/**
 * FUNGSI BARU: Memuat Video Lokal (.mp4)
 */
function loadRandomVideos() {
    const container = document.getElementById('video-grid');
    if (!container) return;

    randomVideos.forEach(video => {
        const card = document.createElement('div');
        card.classList.add('video-card-container'); 
        
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('video-responsive');

        // Menggunakan elemen <video> untuk video lokal
        const videoElement = document.createElement('video');
        videoElement.setAttribute('src', video.src);
        videoElement.setAttribute('controls', ''); // Kontrol (play/pause, volume)
        videoElement.setAttribute('title', video.title);
        
        videoWrapper.appendChild(videoElement);

        const title = document.createElement('p');
        title.classList.add('video-title');
        title.textContent = video.title;
        
        card.appendChild(videoWrapper);
        card.appendChild(title);

        container.appendChild(card);
    });
}


function loadClassProfiles() {
    const container = document.getElementById('profile-grid');
    if (!container) return;

    classMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('profile-card');

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('profile-img-wrapper');
        
        const img = document.createElement('img');
        img.src = member.photo;
        img.alt = `Foto Profil ${member.name}`;

        const info = document.createElement('div');
        info.classList.add('profile-info');

        const name = document.createElement('h4');
        name.textContent = member.name;

        const quote = document.createElement('p');
        quote.textContent = member.quote;

        imgWrapper.appendChild(img);
        info.appendChild(name);
        info.appendChild(quote);
        card.appendChild(imgWrapper);
        card.appendChild(info);
        
        container.appendChild(card);
    });
}

function loadFutureGoals() {
    const container = document.getElementById('goals-grid');
    if (!container) return;

    futureGoals.forEach(goalData => {
        const card = document.createElement('div');
        card.classList.add('goal-card');

        const name = document.createElement('p');
        name.classList.add('member-name');
        name.textContent = goalData.member;

        const goalTitle = document.createElement('h5');
        goalTitle.textContent = goalData.goal;

        const status = document.createElement('p');
        status.classList.add('goal-status', goalData.status.toLowerCase());
        status.textContent = `Status: ${goalData.status}`;

        card.appendChild(name);
        card.appendChild(goalTitle);
        card.appendChild(status);
        container.appendChild(card);
    });
}

function setupAccordion() {
    const tabs = document.querySelectorAll('.accordion-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const contentId = `content-${this.dataset.year}`;
            const content = document.getElementById(contentId);
            document.querySelectorAll('.accordion-content').forEach(c => {
                if (c.id !== contentId) {
                    c.classList.remove('open');
                }
            });
            document.querySelectorAll('.accordion-tab').forEach(t => {
                t.classList.remove('active');
            });

            content.classList.toggle('open');
            this.classList.toggle('active');
        });
    });
}

function setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-item')) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            modalImg.alt = e.target.alt;
            captionText.innerHTML = e.target.dataset.caption;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }

}
