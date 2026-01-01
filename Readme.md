# 📌 CRUD Image with Laravel & React

Proyek fullstack sederhana untuk melakukan **CRUD gambar** menggunakan:

- **Laravel 11** sebagai Backend API
- **React JS** sebagai Frontend
- **MySQL** sebagai database

Mendukung upload gambar, edit gambar, dan hapus gambar dengan tampilan UI yang clean dan modern.

---

## 📸 Preview

### **Landing Page**

![Landing Page](image)

### **Halaman Utama**

![Home Page](image)

---

## ✨ Features

- 📤 **Upload gambar**
- ✏️ **Edit gambar**
- 🗑 **Remove / delete gambar**
- 🗄 **Simpan gambar ke database**
- 🔧 **REST API Laravel**
- ⚡ **React frontend with Axios**

---

# 🚀 Cara Menjalankan Project di Lokal

Clone repository:

```bash
git clone https://github.com/oneraid/CRUD-image-laravelreact.git

🔧 Backend (Laravel)

Masuk ke folder backend:

cd Laravel


Install dependencies:

composer install


Copy file environment:

cp .env.example .env


Atau rename manual:

.env.example → .env

⚙ Konfigurasi Database

Edit file .env:

DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password


Generate key:

php artisan key:generate


Migrasi tabel:

php artisan migrate


Jalankan server backend:

php artisan serve

⚠ Wajib: Atur Batas Upload di php.ini

Agar upload gambar tidak dibatasi hanya 2MB seperti default PHP.

Edit file php.ini yang digunakan server kamu (cek melalui phpinfo()):

upload_max_filesize = 100M
post_max_size = 100M


Setelah perubahan → Restart Apache/Laragon/XAMPP.

💻 Frontend (React)

Masuk ke folder frontend:

cd react


Install dependency:

npm install


Jalankan aplikasi:

npm start


Frontend berjalan di:

http://localhost:3000

📂 Struktur Folder
CRUD-image-laravelreact/
│
├── Laravel/         # Backend API (Laravel 11)
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── ...
│
└── react/           # Frontend React
    ├── src/
    ├── public/
    └── ...

🧰 Tools & Teknologi

Laravel 11

React Vite (jika digunakan)

Axios

MySQL / MariaDB

PHP 8+

Composer

Node.js + NPM

📜 License

Project ini open-source. Silakan digunakan untuk belajar atau pengembangan.

👤 Author

Ridhwan Firdaus
GitHub: https://github.com/oneraid


Jika ingin saya tambahkan:

- dokumentasi API (endpoint upload/update/delete)
- screenshot asli
- badge GitHub (stars / forks / license)
- GIF demo aplikasi

Tinggal bilang 👍
```
