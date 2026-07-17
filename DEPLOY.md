# Panduan Deploy Laravel ke Dokploy Menggunakan Docker

Dokumen ini berisi tutorial langkah demi langkah untuk melakukan deployment project **JDIH UIN** ke platform **Dokploy** menggunakan Dockerfile yang telah kita buat.

---

## 📋 Apa yang Telah Dibuat?

Kami telah menambahkan beberapa file konfigurasi Docker untuk mendukung deployment production-grade:
1. **`Dockerfile`**: Menggunakan multi-stage build. Stage pertama melakukan build assets (Vite CSS/JS & Inertia SSR bundle) menggunakan Node.js, sedangkan stage kedua menjalankan aplikasi dengan PHP 8.3 FPM & Nginx pada OS Alpine yang sangat ringan dan aman.
2. **`docker/nginx.conf`**: Konfigurasi server Nginx production yang dikhususkan untuk optimalisasi Laravel.
3. **`docker/supervisord.conf`**: Pengatur proses untuk memastikan Nginx dan PHP-FPM (dan proses background lainnya) berjalan secara harmonis dalam container.
4. **`docker/php.ini`**: Optimasi php engine untuk production (seperti Opcache & limit size upload).
5. **`docker/docker-entrypoint.sh`**: Script otomatis untuk optimasi caching Laravel, migrasi database, dan manajemen service opsional (Inertia SSR / Queue Worker).
6. **`.dockerignore`**: Mencegah file lokal yang tidak perlu masuk ke build Docker image.

---

## 🚀 Langkah-Langkah Deployment di Dokploy

### Langkah 1: Siapkan Database di Dokploy (Opsional)
Jika Anda belum memiliki database eksternal, Anda bisa membuatnya langsung di Dokploy:
1. Masuk ke dashboard Dokploy Anda.
2. Buka menu **Databases** dan klik **Create Database**.
3. Pilih **MySQL** (atau MariaDB).
4. Isi nama database, username, dan password. Dokploy akan meng-host database tersebut dan memberikan kredensial koneksi internal.

### Langkah 2: Buat Aplikasi Baru di Dokploy
1. Buka dashboard Dokploy, pergi ke tab **Applications** lalu klik **Create Application**.
2. Berikan nama untuk aplikasi Anda (misal: `jdih-uin`).

### Langkah 3: Hubungkan dengan Provider Git (GitHub/Gitlab)
1. Pilih opsi source code Anda (GitHub, GitLab, atau Git repository manual).
2. Pilih repositori `jdih-uin`.
3. Tentukan **Branch** yang ingin dideploy (misal: `main` atau `master`).

### Langkah 4: Atur Konfigurasi Build (Build Settings)
1. Pada bagian **Build Type**, pilih **Dockerfile**.
2. Dokploy secara otomatis mendeteksi file `Dockerfile` di root folder. Jika tidak, pastikan:
   - **Dockerfile Path**: `Dockerfile`
   - **Context Path**: `/` (atau `.` )

### Langkah 5: Konfigurasi Environment Variables (Env)
Masuk ke tab **Environment** pada detail aplikasi Anda di Dokploy, lalu tambahkan variabel berikut:

| Key | Value | Keterangan |
| :--- | :--- | :--- |
| `APP_NAME` | `JDIH UIN SUNAN GUNUNG DJATI` | Nama aplikasi |
| `APP_ENV` | `production` | Lingkungan aplikasi |
| `APP_KEY` | `base64:xxxx...` | Key enkripsi Laravel (Gunakan hasil `php artisan key:generate`) |
| `APP_DEBUG` | `false` | Matikan debug mode demi keamanan |
| `APP_URL` | `https://domain-anda.com` | URL domain production Anda |
| `DB_CONNECTION` | `mysql` | Driver database |
| `DB_HOST` | `mysql-container-name` | Host database (bisa nama container database Dokploy atau IP eksternal) |
| `DB_PORT` | `3306` | Port database |
| `DB_DATABASE` | `nama_database` | Nama database production |
| `DB_USERNAME` | `username_db` | Username database |
| `DB_PASSWORD` | `password_db` | Password database |
| `RUN_MIGRATIONS` | `true` | **Set ke `true`** agar Dokploy otomatis menjalankan `php artisan migrate --force` setiap kali release baru |
| `ENABLE_SSR` | `true` | **Set ke `true`** jika Anda ingin mengaktifkan Inertia Server-Side Rendering (SSR) |
| `ENABLE_QUEUE_WORKER` | `true` | **Set ke `true`** jika Anda ingin menjalankan background worker untuk queue job |

---

## 💾 Langkah 6: Konfigurasi Persistent Storage (Volume)

> [!WARNING]
> **Penting untuk File Upload!**
> Karena container bersifat ephemeral (sementara), semua file PDF, gambar, atau dokumen yang diupload oleh user ke folder `storage/app/public` akan hilang setiap kali container di-restart atau dideploy ulang jika tidak menggunakan **Volume**.

Untuk menjaga agar file upload tetap aman:
1. Di halaman aplikasi Dokploy Anda, masuk ke tab **Volumes**.
2. Klik **Add Volume**.
3. Isi detailnya sebagai berikut:
   - **Volume Name / Source**: `jdih-storage` (bebas)
   - **Destination (Path inside container)**: `/var/www/html/storage`
4. Simpan konfigurasi volume. Ini akan memetakan folder storage Laravel ke media penyimpanan permanen di server host VPS Anda.

---

## 🌐 Langkah 7: Pengaturan Domain & SSL
1. Masuk ke tab **Domains** pada aplikasi Anda di Dokploy.
2. Tambahkan domain Anda (misal: `jdih.uin-sgd.ac.id` atau subdomain Dokploy).
3. Aktifkan fitur **SSL/TLS (HTTPS)** agar Dokploy otomatis meng-generate sertifikat SSL gratis via Let's Encrypt.
4. Klik **Save**.

---

## 🚀 Langkah 8: Mulai Deploy!
1. Buka halaman utama aplikasi Anda di Dokploy.
2. Klik tombol **Deploy** di pojok kanan atas.
3. Dokploy akan mulai men-download code, melakukan build multi-stage Docker image, menjalankan migrasi database, lalu memunculkan website Anda secara live!
4. Anda bisa melihat progress-nya secara real-time melalui tab **Logs** -> **Build Logs**.

---

## 🛠️ Perawatan & Troubleshooting (Tips Tambahan)

### Menjalankan Command Laravel Artisan
Jika Anda ingin menjalankan command artisan manual (misalnya melakukan seeding database atau membersihkan cache):
1. Masuk ke aplikasi Anda di Dokploy.
2. Pilih tab **Terminal** atau **Console**.
3. Jalankan command dengan format:
   ```bash
   php artisan db:seed
   ```
   atau untuk mengecek database dengan tinker:
   ```bash
   php artisan tinker
   ```

### Logs Aplikasi
Jika terjadi error (seperti HTTP 500), Anda bisa mendiagnosanya lewat:
1. **Application Logs**: Tab logs utama di Dokploy untuk melihat output server Nginx, PHP-FPM, atau worker.
2. **Laravel Logs**: Jalankan perintah `tail -n 100 storage/logs/laravel.log` di Terminal aplikasi Dokploy.
