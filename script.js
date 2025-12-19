// ===== DATA CONFIGURATION =====

const teachers = [
    { 
        year: 1, 
        name: 'Sugi Arianto, S.Pd., Gr.', 
        photo: 'Image/1.1.webp', 
        role: 'Wali Kelas X (2023/2024)' 
    },
    { 
        year: 2, 
        name: 'Anggi Prayogo, S.Pd., Gr.', 
        photo: 'Image/2.2.webp', 
        role: 'Wali Kelas XI (2024/2025)' 
    },
    { 
        year: 3, 
        name: 'Dicky', 
        photo: 'Image/3.3.webp', 
        role: 'Wali Kelas XII (2025/2026)' 
    },
];

const memories = [
    // Kelas X
    { year: 1, src: 'Image/x/1.webp', caption: 'Masa Orientasi - Momen perkenalan pertama.' },
    { year: 1, src: 'Image/x/1.webp', caption: 'Lomba memasak di hari Kartini.' },
    { year: 1, src: 'Image/x/1.webp', caption: 'Kunjungan Industri: Melihat proses produksi.' },
    
    // Kelas XI
    { year: 2, src: 'Image/xi/1.webp', caption: 'Momen PKL: Pertama kali pakai ID Card perusahaan.' },
    { year: 2, src: 'Image/xi/2.webp', caption: 'Acara HUT Sekolah, kami jadi panitia inti.' },
    { year: 2, src: 'Image/xi/3.webp', caption: 'Studi Banding ke luar kota, menginap bersama.' },
    { year: 2, src: 'Image/xi/3.webp', caption: 'Studi Banding ke luar kota, menginap bersama.' },
    { year: 2, src: 'Image/xi/3.webp', caption: 'Studi Banding ke luar kota, menginap bersama.' },

    // Kelas XII
    { year: 3, src: 'Image/xii/1.webp', caption: 'Saat-saat terakhir ujian kompetensi keahlian.' },
    { year: 3, src: 'Image/xii/1.webp', caption: 'Batik Day: Foto studio sebelum hari kelulusan.' },
    { year: 3, src: 'Image/xii/1.webp', caption: 'Foto buku tahunan, pose paling heboh.' },
];

const classMembers = [
    { name: 'Amrin', photo: 'Image/1.webp', quote: '"Sukses itu pilihan, bukan kebetulan."' },
    { name: 'Ananda', photo: 'Image/2.webp', quote: '"Hidup adalah petualangan besar."' },
    { name: 'Anisa Bella', photo: 'Image/3.webp', quote: '"Masa SMK mengajarkan arti persahabatan."' },
    { name: 'Ardian Syah', photo: 'Image/4.webp', quote: '"Kecil di mata orang, besar di cita-cita."' },
    { name: 'Ari Yanti', photo: 'Image/5.webp', quote: '"Keep calm and code on."' },
    { name: 'Darwati Omeliyanti', photo: 'Image/6.webp', quote: '"Tidak ada kata terlambat untuk belajar."'},
    { name: 'Dea Aprilia', photo: 'Image/7.webp', quote: '"Inovasi adalah kuncinya."'},
    { name: 'Dela Restiana', photo: 'Image/8.webp', quote: '"Tetap semangat, jangan menyerah."'},
    { name: 'Eca Puspita Sari', photo: 'Image/9.webp', quote: '"Mimpi tidak pernah tidur."'},
    { name: 'Elda Indriani', photo: 'Image/10.webp', quote: '"Terima kasih untuk semua kenangan."'},
    { name: 'Jingga Amelia', photo: 'Image/11.webp', quote: '"Masa depan dimulai hari ini."'},
    { name: 'Lekat', photo: 'Image/12.webp', quote: '"Never stop creating."'},
    { name: 'M. Krisna Putra W.', photo: 'Image/13.webp', quote: '"Jadilah versi terbaik dari dirimu."'},
    { name: 'Meilani Citra Lestari', photo: 'Image/14.webp', quote: '"Terkadang yang terbaik itu sudah lulus."'},
    { name: 'M. Arfi Budiman', photo: 'Image/15.webp', quote: '"Setiap akhir adalah awal yang baru."'},
    { name: 'Okta Rafiansyah', photo: 'Image/16.webp', quote: '"Selalu ada pelajaran di setiap langkah."'},
    { name: 'Riza Wismala', photo: 'Image/17.webp', quote: '"Waktu terbaik adalah saat bersama kalian."'},
    { name: 'Rian Setiawan', photo: 'Image/18.webp', quote: '"Kerja keras, hasil manis."'},
    { name: 'Sintia Ramadani', photo: 'Image/19.webp', quote: '"SMK hebat, SMK bisa!"'},
    { name: 'Suci Ramadani', photo: 'Image/20.webp', quote: '"Satu untuk semua, semua untuk satu."'},
    { name: 'Sisi Lia', photo: 'Image/21.webp', quote: '"Semua akan indah pada waktunya."'},
    { name: 'Tasya Pratama', photo: 'Image/22.webp', quote: '"Jangan lupakan janji kita ini."'},
    { name: 'Tasya Yulia sari', photo: 'Image/23.webp', quote: '"Teruslah berjuang meraih impian."'},
    { name: 'Zapira Aulia', photo: 'Image/24.webp', quote: '"See you at the top!"'},
];

const randomVideos = [
    { title: 'Cinematic Class X', src: 'Video/kelas x2.mp4' }, 
    { title: 'Trip Perpisahan', src: 'Video/kelas x1.mp4' }, 
    { title: 'Proyek Akhir', src: 'Video/kelas xi1.mp4' }, 
    { title: 'Acara Sekolah', src: 'Video/kelas xi2.mp4' },
    { title: 'Momen Bersama', src: 'Video/kelas xii1.mp4' },
    { title: 'Momen Bersama', src: 'Video/kelas xii2.mp4' },
];

// DATA ALBUM - Tambahkan foto sebanyak yang Anda mau!
const albumPhotos = [
    // Category: class (Kelas)
    { src: 'Image/album/class1.jpg', title: 'Kelas X - Hari Pertama', caption: 'Momen pertama kali masuk kelas', category: 'class' },
    { src: 'Image/album/class2.jpg', title: 'Belajar Bersama', caption: 'Diskusi kelompok di kelas', category: 'class' },
    { src: 'Image/album/class3.jpg', title: 'Presentasi Proyek', caption: 'Presentasi proyek akhir semester', category: 'class' },
    
    // Category: event (Event)
    { src: 'Image/album/event1.jpg', title: 'HUT Sekolah', caption: 'Perayaan HUT sekolah yang meriah', category: 'event' },
    { src: 'Image/album/event2.jpg', title: 'Lomba 17an', caption: 'Seru-seruan lomba kemerdekaan', category: 'event' },
    { src: 'Image/album/event3.jpg', title: 'Pensi Sekolah', caption: 'Pentas seni kelas kami', category: 'event' },
    
    // Category: trip (Trip & Perjalanan)
    { src: 'Image/album/trip1.jpg', title: 'Study Tour', caption: 'Perjalanan study tour ke museum', category: 'trip' },
    { src: 'Image/album/trip2.jpg', title: 'Kunjungan Industri', caption: 'Mengunjungi perusahaan teknologi', category: 'trip' },
    { src: 'Image/album/trip3.jpg', title: 'Outbound', caption: 'Kegiatan outbound di alam', category: 'trip' },
    
    // Category: pkm (PKL/PKM)
    { src: 'Image/album/pkl1.jpg', title: 'Hari Pertama PKL', caption: 'Memulai praktik kerja lapangan', category: 'pkm' },
    { src: 'Image/album/pkl2.jpg', title: 'Tim PKL', caption: 'Bersama rekan-rekan satu tempat PKL', category: 'pkm' },
    { src: 'Image/album/pkl3.jpg', title: 'Proyek PKL', caption: 'Mengerjakan proyek di tempat PKL', category: 'pkm' },
    
    // Category: graduation (Kelulusan)
    { src: 'Image/album/grad1.jpg', title: 'Foto Wisuda', caption: 'Momen kelulusan yang membanggakan', category: 'graduation' },
    { src: 'Image/album/grad2.jpg', title: 'Bersama Guru', caption: 'Foto bersama guru tercinta', category: 'graduation' },
    { src: 'Image/album/grad3.jpg', title: 'Pelukan Perpisahan', caption: 'Pelukan terakhir sebelum berpisah', category: 'graduation' },
    
    // TAMBAHKAN FOTO ANDA DI BAWAH INI - Contoh format:
    // { src: 'Image/album/namafile.jpg', title: 'Judul Foto', caption: 'Deskripsi foto', category: 'class/event/trip/pkm/graduation' },
];

const futureGoals = [
    { member: 'Amrin', goal: '---', status: 'Kuliah' },
    { member: 'Ananda', goal: 'Mau Pergi Ke Kota Orang', status: 'Merantau' },
    { member: 'Anisa Bella', goal: 'Mau Kerja Di Jepang', status: 'Kerja' },
    { member: 'Ardian Syah', goal: '---', status: 'Kerja' },
    { member: 'Ari Yanti', goal: '---', status: 'Kuliah' },
    { member: 'Darwati Omeliyanti', goal: '---', status: 'Kuliah' },
    { member: 'Dea Aprilia', goal: '---', status: 'Kerja' },
    { member: 'Dela Restiana', goal: 'Mau Jalan-Jalan Ke Jogja', status: 'Merantau' },
    { member: 'Eca Puspita Sari', goal: 'Mau Lanjut Kuliah di UGM ><', status: 'Kuliah' },
    { member: 'Elda Indriani', goal: 'Mau Kerja Di Batam', status: 'Kerja' },
    { member: 'Jingga Amelia', goal: 'Mau Kerja Di Jakarta', status: 'Kerja' },
    { member: 'Lekat', goal: 'Mau Langsung Kerja', status: 'Kerja' },
    { member: 'M. Krisna Putra W.', goal: '---', status: 'Usaha' },
    { member: 'Meilani Citra Lestari', goal: 'Mau Langsung Kerja', status: 'Kerja' },
    { member: 'M. Arif Budiman', goal: '---', status: 'Kuliah' },
    { member: 'Okta Rafiansyah', goal: 'Mau Dapetin Beasiswa Penuh Buat Kuliah di itebeeee', status: 'Kuliah' },
    { member: 'Riza Wismala', goal: 'Mau Kerja Di Jakarta', status: 'Kerja' },
    { member: 'Rian Setiawan', goal: '---', status: 'Usaha' },
    { member: 'Sintia Ramadani', goal: 'Mau lanjut Kuliah di UB ^^', status: 'Kuliah' },
    { member: 'Suci Ramadani', goal: '---', status: 'Kuliah' },
    { member: 'Sisi Lia', goal: '---', status: 'Kerja' },
    { member: 'Tasya Pratama', goal: 'Mau LPK Ke Jepang', status: 'Kerja' },
    { member: 'Tasya Yulia Sari', goal: 'Mau Kerja Di Jepang', status: 'Kerja' },
    { member: 'Zapira Aulia', goal: '---', status: 'Usaha' },
];

// ===== GLOBAL VARIABLES =====
let backgroundMusic = null;
let currentPlayingVideo = null;
let isBackgroundMusicReady = false;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadTeachers();
    loadGalleryByYear(1);
    loadGalleryByYear(2);
    loadGalleryByYear(3);
    loadFullGallery();
    loadClassProfiles();
    loadRandomVideos(); 
    loadAlbumPhotos(); // NEW: Load album photos
    loadFutureGoals(); 

    setupAccordion();
    setupLightbox();
    setupHamburgerMenu();
    setupAudioSystem();
    setupAlbumFilters(); // NEW: Setup album filters
});

// Handle Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;
    body.style.opacity = '1'; 
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); 
    }, 800); 
});

// ===== AUDIO MANAGEMENT SYSTEM =====
function setupAudioSystem() {
    backgroundMusic = document.getElementById('background-music');
    const ctaButton = document.querySelector('.cta-button');

    if (backgroundMusic && ctaButton) {
        // Play background music after user interaction
        ctaButton.addEventListener('click', function() {
            if (!isBackgroundMusicReady) {
                backgroundMusic.volume = 0.3; // Set volume to 30%
                backgroundMusic.play()
                    .then(() => {
                        isBackgroundMusicReady = true;
                        console.log("Background music started");
                    })
                    .catch(error => {
                        console.error("Failed to play background music:", error);
                    });
            }
        });
    }

    // Setup video audio management
    setupVideoAudioManagement();
}

function setupVideoAudioManagement() {
    // Wait for videos to be loaded
    setTimeout(() => {
        const allVideos = document.querySelectorAll('video');
        
        allVideos.forEach(video => {
            // When video starts playing
            video.addEventListener('play', function() {
                handleVideoPlay(this);
            });

            // When video is paused or ended
            video.addEventListener('pause', handleVideoStop);
            video.addEventListener('ended', handleVideoStop);

            // Set default volume for videos
            video.volume = 0.7; // 70% volume for videos
        });
    }, 1000);
}

function handleVideoPlay(video) {
    // Stop previous playing video if exists
    if (currentPlayingVideo && currentPlayingVideo !== video) {
        currentPlayingVideo.pause();
        currentPlayingVideo.currentTime = 0;
    }

    currentPlayingVideo = video;

    // Fade out background music
    if (backgroundMusic && isBackgroundMusicReady) {
        fadeOutAudio(backgroundMusic, 500);
    }
}

function handleVideoStop() {
    currentPlayingVideo = null;

    // Fade in background music
    if (backgroundMusic && isBackgroundMusicReady && backgroundMusic.paused) {
        fadeInAudio(backgroundMusic, 500);
    }
}

function fadeOutAudio(audio, duration) {
    const startVolume = audio.volume;
    const steps = 20;
    const stepDuration = duration / steps;
    const volumeStep = startVolume / steps;
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
        currentStep++;
        audio.volume = Math.max(0, startVolume - (volumeStep * currentStep));

        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            audio.pause();
            audio.volume = startVolume; // Reset volume for next play
        }
    }, stepDuration);
}

function fadeInAudio(audio, duration) {
    const targetVolume = 0.3; // Target volume 30%
    const steps = 20;
    const stepDuration = duration / steps;
    const volumeStep = targetVolume / steps;
    let currentStep = 0;

    audio.volume = 0;
    audio.play();

    const fadeInterval = setInterval(() => {
        currentStep++;
        audio.volume = Math.min(targetVolume, volumeStep * currentStep);

        if (currentStep >= steps) {
            clearInterval(fadeInterval);
        }
    }, stepDuration);
}

// ===== HAMBURGER MENU (MOBILE) =====
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.main-header nav a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ===== LOAD CONTENT FUNCTIONS =====
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
        img.loading = 'lazy'; // Lazy loading for better performance

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
    img.loading = 'lazy'; // Lazy loading
    container.appendChild(img);
}

function loadRandomVideos() {
    const container = document.getElementById('video-grid');
    if (!container) return;

    randomVideos.forEach(video => {
        const card = document.createElement('div');
        card.classList.add('video-card-container'); 
        
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('video-responsive');

        const videoElement = document.createElement('video');
        videoElement.setAttribute('src', video.src);
        videoElement.setAttribute('controls', '');
        videoElement.setAttribute('preload', 'metadata'); // Only load metadata initially
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
        img.loading = 'lazy';

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

// ===== NEW: ALBUM FUNCTIONS =====
function loadAlbumPhotos() {
    const container = document.getElementById('album-grid');
    if (!container) return;

    albumPhotos.forEach(photo => {
        const item = document.createElement('div');
        item.classList.add('album-item');
        item.dataset.category = photo.category;

        // Category Badge
        const badge = document.createElement('span');
        badge.classList.add('album-category-badge');
        badge.textContent = getCategoryName(photo.category);

        // Image Wrapper
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('album-img-wrapper');

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.title;
        img.loading = 'lazy';

        // Overlay
        const overlay = document.createElement('div');
        overlay.classList.add('album-overlay');

        const title = document.createElement('h4');
        title.textContent = photo.title;

        const caption = document.createElement('p');
        caption.textContent = photo.caption;

        overlay.appendChild(title);
        overlay.appendChild(caption);
        imgWrapper.appendChild(img);
        item.appendChild(badge);
        item.appendChild(imgWrapper);
        item.appendChild(overlay);

        // Make clickable for lightbox
        item.addEventListener('click', () => {
            openLightboxForAlbum(photo);
        });

        container.appendChild(item);
    });
}

function getCategoryName(category) {
    const categoryNames = {
        'class': 'Kelas',
        'event': 'Event',
        'trip': 'Trip',
        'pkm': 'PKL/PKM',
        'graduation': 'Kelulusan'
    };
    return categoryNames[category] || category;
}

function setupAlbumFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const albumItems = document.querySelectorAll('.album-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            albumItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.animation = 'fadeIn 0.5s ease-out';
                    }, 10);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

function openLightboxForAlbum(photo) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');

    modal.style.display = "block";
    modalImg.src = photo.src;
    modalImg.alt = photo.title;
    captionText.innerHTML = `<strong>${photo.title}</strong><br>${photo.caption}`;
    document.body.style.overflow = 'hidden';
}

// ===== INTERACTIVE FEATURES =====
function setupAccordion() {
    const tabs = document.querySelectorAll('.accordion-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const contentId = `content-${this.dataset.year}`;
            const content = document.getElementById(contentId);
            const isCurrentlyOpen = content.classList.contains('open');

            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.classList.remove('open');
            });
            document.querySelectorAll('.accordion-tab').forEach(t => {
                t.classList.remove('active');
            });

            // Toggle current accordion
            if (!isCurrentlyOpen) {
                content.classList.add('open');
                this.classList.add('active');
            }
        });
    });
}

function setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    // Open lightbox
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-item')) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            modalImg.alt = e.target.alt;
            captionText.innerHTML = e.target.dataset.caption;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });

    // Close lightbox
    const closeLightbox = () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    closeBtn.addEventListener('click', closeLightbox);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeLightbox();
        }
    });
}