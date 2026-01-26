<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    // Profil
    Page::create([
      'title' => 'Tentang JDIH UIN SGD',
      'slug' => 'profil',
      'description' => <<<HTML
            <h2>Tentang JDIH UIN SGD</h2>
            <p>Jaringan Dokumentasi dan Informasi Hukum (JDIH) Universitas Islam Negeri Sunan Gunung Djati Bandung adalah wadah pendayagunaan bersama atas dokumen hukum secara tertib, terpadu, dan berkesinambungan yang bersarana pemberian pelayanan informasi hukum secara lengkap, akurat, mudah, dan cepat.</p>

            <h2>Dasar Hukum</h2>
            <ul>
                <li>Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional.</li>
                <li>Peraturan Menteri Hukum dan Hak Asasi Manusia Nomor 8 Tahun 2019 tentang Standar Pengelolaan Dokumen dan Informasi Hukum.</li>
                <li>Keputusan Rektor UIN Sunan Gunung Djati Bandung tentang Pembentukan Tim Pengelola JDIH.</li>
            </ul>

            <h2>Visi dan Misi</h2>
            <h3>Visi</h3>
            <p><em>"Terwujudnya Jaringan Dokumentasi dan Informasi Hukum yang Terpadu dan Terintegrasi untuk Mendukung UIN Sunan Gunung Djati Bandung yang Unggul dan Kompetitif."</em></p>

            <h3>Misi</h3>
            <ol>
                <li>Mewujudkan pengelolaan dokumentasi dan informasi hukum yang tertib, terpadu, dan berkesinambungan.</li>
                <li>Menyediakan informasi hukum yang lengkap, akurat, mudah, dan cepat diakses.</li>
                <li>Mengembangkan kerjasama jaringan dokumentasi dan informasi hukum dengan instansi lain.</li>
                <li>Meningkatkan kualitas sumber daya manusia pengelola JDIH.</li>
            </ol>

            <h2>Maksud dan Tujuan</h2>
            <p><strong>Maksud:</strong><br>Penyelenggaraan JDIH dimaksudkan untuk menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat, serta dapat diakses secara cepat dan mudah oleh sivitas akademika dan masyarakat umum.</p>
            <p><strong>Tujuan:</strong></p>
            <ul>
                <li>Menjamin terciptanya pengelolaan dokumentasi dan informasi hukum yang terpadu dan terintegrasi.</li>
                <li>Menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat.</li>
                <li>Meningkatkan kualitas pelayanan informasi hukum kepada publik.</li>
                <li>Mendukung proses pengambilan keputusan dan pembentukan produk hukum di lingkungan Universitas.</li>
            </ul>
HTML
    ]);

    // Struktur Organisasi
    Page::create([
      'title' => 'Struktur Organisasi',
      'slug' => 'struktur',
      'description' => <<<HTML
            <h2>Tentang Struktur Organisasi</h2>
            <p>Struktur Organisasi Jaringan Dokumentasi dan Informasi Hukum (JDIH) UIN Sunan Gunung Djati Bandung dirancang untuk memastikan pengelolaan dokumen dan informasi hukum berjalan secara efektif, efisien, dan terpadu.</p>
            <p>Organisasi ini dipimpin oleh Rektor sebagai Pengarah, dibantu oleh Wakil Rektor sebagai Penanggung Jawab, dan Kepala Pusat sebagai Ketua Pelaksana harian yang membawahi berbagai divisi teknis.</p>
            <h2>Bagan Struktur Organisasi</h2>
HTML
    ]);

    // Prasyarat
    Page::create([
      'title' => 'Prasyarat & Syarat Penggunaan',
      'slug' => 'prasyarat',
      'description' => <<<HTML
            <h2>Prasyarat</h2>
            <p>Harap baca dengan saksama syarat penggunaan di bawah ini sebelum menggunakan situs web ini, agar Anda dapat menggunakan informasi di situs web ini. Jika Anda tidak menyetujui syarat penggunaan, Anda tidak boleh melanjutkan ke langkah berikutnya. Jika Anda langsung menuju halaman berikutnya, maka Anda dianggap memahami dan menyetujui isi syarat penggunaan. Syarat-syarat ini dapat berubah dari waktu ke waktu sesuai dengan kebijakan yang telah ditetapkan, oleh karena itu diharapkan Anda mengikuti perkembangannya secara berkala.</p>
            
            <h2>Presentasi</h2>
            <p>Situs web ini dibangun untuk kenyamanan pengunjung. Untuk itu, kami berusaha menyajikan semua informasi (teks, grafik, dan semua atribut yang ada) sebaik mungkin. Semua halaman situs web ini dirancang untuk berjalan pada berbagai ukuran layar. Gunakan browser Chrome, Firefox, Safari, atau Internet Explorer (versi 11.00 ke atas) untuk mendapatkan hasil terbaik dari layanan ini. Namun, kami tidak dapat menjamin bahwa informasi yang kami berikan dapat memenuhi keinginan semua pengguna situs web ini.</p>
            
            <h2>Hak Cipta</h2>
            <p>Situs ini dilindungi hak cipta dan telah terdaftar secara resmi di Sekretariat UIN Sunan Gunung Djati Bandung. Oleh karena itu, seluruh konten (teks, grafik, dan media lainnya) di situs web ini adalah hak cipta dan milik UIN Sunan Gunung Djati Bandung. Semua bentuk penggunaan komersial materi harus mendapatkan izin dari Sekretaris UIN Sunan Gunung Djati Bandung. Setiap tindakan yang sengaja menyebabkan kerusakan pada data, program, informasi, dan hal-hal terkait dengannya, dianggap sebagai pelanggaran hukum.</p>
            
            <h2>Virus</h2>
            <p>Dampak perkembangan teknologi informasi adalah munculnya virus komputer baru di internet, sehingga kami memperingatkan Anda tentang bahaya yang ditimbulkan virus ini terhadap sistem Anda. Merupakan tanggung jawab Anda untuk mendeteksi semua materi yang diunduh dari internet. Kami tidak bertanggung jawab atas kerugian atau kerusakan apa pun yang disebabkan oleh virus.</p>
            
            <h2>Keamanan</h2>
            <p>Penggunaan internet dan email tidak bersifat rahasia. Karena ada kemungkinan informasi yang dikirimkan kepada kami dibaca atau digunakan oleh pihak lain. Untuk melindungi kerahasiaan Anda, disarankan agar email yang dikirim tidak memuat informasi sensitif seperti nilai rekening, laporan keuangan, dll.</p>
            
            <h2>Akses</h2>
            <p>Kami berhak untuk menghentikan akses yang tidak sah dan berbahaya ke situs ini untuk melindungi semua konten yang terdapat di dalamnya.</p>
            
            <h2>Umpan Balik</h2>
            <p>Kami menghargai setiap umpan balik yang diberikan kepada kami, untuk menghindari kesalahpahaman. Apa pun yang Anda kirimkan kepada kami, baik ide, saran, dll., akan menjadi milik kami tanpa kompensasi dan tidak ada klaim atasnya.</p>
HTML
    ]);

    // Kebijakan Privasi
    Page::create([
      'title' => 'Kebijakan Privasi',
      'slug' => 'kebijakan-privasi',
      'description' => <<<HTML
            <h2>Pendahuluan</h2>
            <p>Kami di JDIH UIN Sunan Gunung Djati Bandung menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan situs web kami. Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.</p>
            
            <h2>Informasi yang Kami Kumpulkan</h2>
            <p>Kami dapat mengumpulkan informasi yang dapat mengidentifikasi Anda secara pribadi ("Informasi Pribadi"), seperti nama, alamat email, dan nomor telepon, terutama ketika Anda menghubungi kami melalui formulir kontak atau menggunakan layanan tertentu. Kami juga mengumpulkan informasi non-pribadi secara otomatis, seperti alamat IP, jenis browser, halaman yang dikunjungi, dan waktu akses, untuk tujuan analitik dan peningkatan layanan.</p>
            
            <h2>Penggunaan Informasi</h2>
            <p>Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul>
                <li>Menyediakan dan memelihara layanan kami.</li>
                <li>Memberitahu Anda tentang perubahan pada layanan kami.</li>
                <li>Memungkinkan Anda untuk berpartisipasi dalam fitur interaktif layanan kami.</li>
                <li>Memberikan dukungan pelanggan.</li>
                <li>Mengumpulkan analisis atau informasi berharga sehingga kami dapat meningkatkan layanan kami.</li>
                <li>Memantau penggunaan layanan kami.</li>
                <li>Mendeteksi, mencegah, dan mengatasi masalah teknis.</li>
            </ul>
            
            <h2>Cookies</h2>
            <p>Kami menggunakan cookie dan teknologi pelacakan serupa untuk melacak aktivitas di layanan kami dan menyimpan informasi tertentu. Cookie adalah file dengan sejumlah kecil data yang mungkin menyertakan pengenal unik anonim. Anda dapat menginstruksikan browser Anda untuk menolak semua cookie atau untuk menunjukkan kapan cookie dikirim. Namun, jika Anda tidak menerima cookie, Anda mungkin tidak dapat menggunakan beberapa bagian dari layanan kami.</p>
            
            <h2>Keamanan Data</h2>
            <p>Keamanan data Anda penting bagi kami, tetapi ingatlah bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindungi Informasi Pribadi Anda, kami tidak dapat menjamin keamanannya secara mutlak.</p>
            
            <h2>Tautan ke Situs Lain</h2>
            <p>Layanan kami mungkin berisi tautan ke situs lain yang tidak dioperasikan oleh kami. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs pihak ketiga tersebut. Kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi setiap situs yang Anda kunjungi. Kami tidak memiliki kendali atas dan tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun.</p>
            
            <h2>Perubahan Kebijakan Privasi Ini</h2>
            <p>Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memposting kebijakan privasi baru di halaman ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan. Perubahan pada Kebijakan Privasi ini efektif ketika diposting di halaman ini.</p>
HTML
    ]);
  }
}
