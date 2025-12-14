/**
 * PENTING: Semua path gambar dan video harus menuju ke folder:
 * '../assets/images/' (Keluar dari folder 'js/', masuk ke 'assets/images/')
 */

/**
 * DATA WALI KELAS
 * Ganti [Nama Wali Kelas] dan pastikan path foto sudah benar.
 */
const teachers = [
    { 
        year: 1, 
        name: 'Bapak/Ibu [Nama Wali Kelas X]', 
        photo: '../assets/images/wk_1.jpg', 
        role: 'Wali Kelas X (2022/2023)' 
    },
    { 
        year: 2, 
        name: 'Bapak/Ibu [Nama Wali Kelas XI]', 
        photo: '../assets/images/wk_2.jpg', 
        role: 'Wali Kelas XI (2023/2024)' 
    },
    { 
        year: 3, 
        name: 'Bapak/Ibu [Nama Wali Kelas XII]', 
        photo: '../assets/images/wk_3.jpg', 
        role: 'Wali Kelas XII (2024/2025)' 
    },
];

/**
 * DATA FOTO UMUM (Kelas 1, 2, 3)
 * Tambahkan semua foto umum Anda di sini.
 */
const memories = [
    // Kelas X
    { year: 1, src: '../assets/images/k1_01.jpg', caption: 'Masa Orientasi - Momen perkenalan pertama.' },
    { year: 1, src: '../assets/images/k1_02.jpg', caption: 'Lomba memasak di hari Kartini.' },
    { year: 1, src: '../assets/images/k1_03.jpg', caption: 'Kunjungan Industri: Melihat proses produksi.' },
    
    // Kelas XI
    { year: 2, src: '../assets/images/k2_01.jpg', caption: 'Momen PKL: Pertama kali pakai ID Card perusahaan.' },
    { year: 2, src: '../assets/images/k2_02.jpg', caption: 'Acara HUT Sekolah, kami jadi panitia inti.' },
    { year: 2, src: '../assets/images/k2_03.jpg', caption: 'Studi Banding ke luar kota, menginap bersama.' },
    
    // Kelas XII
    { year: 3, src: '../assets/images/k3_01.jpg', caption: 'Saat-saat terakhir ujian kompetensi keahlian.' },
    { year: 3, src: '../assets/images/k3_02.jpg', caption: 'Batik Day: Foto studio sebelum hari kelulusan.' },
    { year: 3, src: '../assets/images/k3_03.jpg', caption: 'Foto buku tahunan, pose paling heboh.' },
    // TAMBAHKAN SEMUA FOTO UMUM ANDA DI BAWAH INI
];

/**
 * DATA PROFIL ANGGOTA (25 Siswa/i)
 * Ganti nama, foto, dan kutipan sesuai anggota kelas Anda.
 */
const classMembers = [
    { name: 'Aditya P. Wardana', photo: '../assets/images/p_01.jpg', quote: '"Sukses itu pilihan, bukan kebetulan."' },
    { name: 'Bunga K. Sari', photo: '../assets/images/p_02.jpg', quote: '"Hidup adalah petualangan besar."' },
    { name: 'Citra Dewi', photo: '../assets/images/p_03.jpg', quote: '"Masa SMK mengajarkan arti persahabatan."' },
    { name: 'Dani Ramadhan', photo: '../assets/images/p_04.jpg', quote: '"Kecil di mata orang, besar di cita-cita."' },
    { name: 'Eka Lestari', photo: '../assets/images/p_05.jpg', quote: '"Keep calm and code on."' },
    { name: 'Faisal Aji', photo: '../assets/images/p_06.jpg', quote: '"Tidak ada kata terlambat untuk belajar."'},
    { name: 'Gilang Pratama', photo: '../assets/images/p_07.jpg', quote: '"Inovasi adalah kuncinya."'},
    { name: 'Hesti Nuraini', photo: '../assets/images/p_08.jpg', quote: '"Tetap semangat, jangan menyerah."'},
    { name: 'Iqbal Z. Siregar', photo: '../assets/images/p_09.jpg', quote: '"Mimpi tidak pernah tidur."'},
    { name: 'Jihan Khairunnisa', photo: '../assets/images/p_10.jpg', quote: '"Terima kasih untuk semua kenangan."'},
    { name: 'Kevin Santoso', photo: '../assets/images/p_11.jpg', quote: '"Masa depan dimulai hari ini."'},
    { name: 'Lia Fitriani', photo: '../assets/images/p_12.jpg', quote: '"Never stop creating."'},
    { name: 'M. Hafizuddin', photo: '../assets/images/p_13.jpg', quote: '"Jadilah versi terbaik dari dirimu."'},
    { name: 'Nadia Permata', photo: '../assets/images/p_14.jpg', quote: '"Terkadang yang terbaik itu sudah lulus."'},
    { name: 'Oscar Wijaya', photo: '../assets/images/p_15.jpg', quote: '"Setiap akhir adalah awal yang baru."'},
    { name: 'Putri Anggraini', photo: '../assets/images/p_16.jpg', quote: '"Selalu ada pelajaran di setiap langkah."'},
    { name: 'Qaisar A. Hakim', photo: '../assets/images/p_17.jpg', quote: '"Waktu terbaik adalah saat bersama kalian."'},
    { name: 'Rina Melati', photo: '../assets/images/p_18.jpg', quote: '"Kerja keras, hasil manis."'},
    { name: 'Septian Dwi', photo: '../assets/images/p_19.jpg', quote: '"SMK hebat, SMK bisa!"'},
    { name: 'Tia Monica', photo: '../assets/images/p_20.jpg', quote: '"Satu untuk semua, semua untuk satu."'},
    { name: 'Umar Bakri', photo: '../assets/images/p_21.jpg', quote: '"Semua akan indah pada waktunya."'},
    { name: 'Vina Oktaviani', photo: '../assets/images/p_22.jpg', quote: '"Jangan lupakan janji kita ini."'},
    { name: 'Wahyu Setyawan', photo: '../assets/images/p_23.jpg', quote: '"Teruslah berjuang meraih impian."'},
    { name: 'Xena Putri', photo: '../assets/images/p_24.jpg', quote: '"The best class ever!"'},
    { name: 'Yoga Hidayat', photo: '../assets/images/p_25.jpg', quote: '"See you at the top!"'},
];

/**
 * DATA VIDEO RANDOM (MENGGUNAKAN FILE LOKAL .mp4)
 * Pastikan file video ini ada di folder 'assets/images/'.
 */
const randomVideos = [
    // Ganti src dengan nama file video Anda
    { title: 'Momen Kelas Terbaik', src: 'foto member/jjboz.mp4' }, 
    { title: 'Trip Perpisahan', src: 'foto member/jjboz.mp4' }, 
    { title: 'Proyek Akhir', src: 'foto member/jjboz.mp4' }, 
    { title: 'Acara Sekolah', src: 'foto member/jjboz.mp4' },
    { title: 'Acara Sekolah', src: 'foto member/jjboz.mp4' },
    { title: 'Acara Sekolah', src: 'foto member/jjboz.mp4' },
];

/**
 * DATA TUJUAN MASA DEPAN
 * Ganti tujuan dan status (Status: 'Kuliah', 'Kerja', atau 'Usaha')
 */
const futureGoals = [
    { member: 'Aditya P. Wardana', goal: 'Melanjutkan kuliah di Teknik Informatika UGM', status: 'Kuliah' },
    { member: 'Bunga K. Sari', goal: 'Langsung bekerja sebagai Junior Developer di PT Sinar', status: 'Kerja' },
    { member: 'Citra Dewi', goal: 'Membuka bisnis online aksesoris handmade', status: 'Usaha' },
    { member: 'Dani Ramadhan', goal: 'Kerja di luar negeri melalui program magang', status: 'Kerja' },
    { member: 'Eka Lestari', goal: 'Lolos di Poltek Negeri Jurusan Akuntansi', status: 'Kuliah' },
    { member: 'Faisal Aji', goal: 'Mendapatkan beasiswa penuh ke Jepang', status: 'Kuliah' },
    { member: 'Gilang Pratama', goal: 'Bekerja di industri manufaktur otomotif', status: 'Kerja' },
    { member: 'Hesti Nuraini', goal: 'Mencoba peruntungan di dunia trading saham', status: 'Usaha' },
    { member: 'Iqbal Z. Siregar', goal: 'Bergabung dengan TNI/Polri', status: 'Kerja' },
    { member: 'Jihan Khairunnisa', goal: 'Menjadi desainer grafis freelance profesional', status: 'Usaha' },
    { member: 'Kevin Santoso', goal: 'Melanjutkan pendidikan di jurusan Multimedia', status: 'Kuliah' },
    { member: 'Lia Fitriani', goal: 'Bekerja sebagai staf administrasi di kantor pemerintahan', status: 'Kerja' },
    { member: 'M. Hafizuddin', goal: 'Membuka bengkel motor sendiri', status: 'Usaha' },
    { member: 'Nadia Permata', goal: 'Bekerja di Bank BUMN', status: 'Kerja' },
    { member: 'Oscar Wijaya', goal: 'Kuliah di bidang Pariwisata', status: 'Kuliah' },
    { member: 'Putri Anggraini', goal: 'Menjadi Guru SMK/Vokasi', status: 'Kuliah' },
    { member: 'Qaisar A. Hakim', goal: 'Bekerja sebagai teknisi jaringan', status: 'Kerja' },
    { member: 'Rina Melati', goal: 'Membangun UMKM kuliner', status: 'Usaha' },
    { member: 'Septian Dwi', goal: 'Mengambil kursus sertifikasi profesional', status: 'Kerja' },
    { member: 'Tia Monica', goal: 'Melanjutkan S1 di Universitas Negeri', status: 'Kuliah' },
    { member: 'Umar Bakri', goal: 'Mencari pengalaman kerja di ibukota', status: 'Kerja' },
    { member: 'Vina Oktaviani', goal: 'Menjadi YouTuber/Content Creator', status: 'Usaha' },
    { member: 'Wahyu Setyawan', goal: 'Bekerja di pabrik multinasional', status: 'Kerja' },
    { member: 'Xena Putri', goal: 'Kuliah sambil bekerja (part-time)', status: 'Kuliah' },
    { member: 'Yoga Hidayat', goal: 'Membangun startup di bidang edukasi', status: 'Usaha' },
];


document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Load: Memuat semua konten dinamis
    loadTeachers();
    loadGalleryByYear(1);
    loadGalleryByYear(2);
    loadGalleryByYear(3);
    loadFullGallery();
    loadClassProfiles();
    loadRandomVideos(); // FUNGSI VIDEO BARU
    loadFutureGoals(); 

    // 2. Setup: Mengaktifkan fungsi interaktif
    setupAccordion();
    setupLightbox();
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