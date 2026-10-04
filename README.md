# Batch Image Uploader

Siap dipasang di GitHub Pages dan menggunakan API ImgBB.

## Deploy
1. Buat repository GitHub baru.
2. Upload `index.html`, `style.css`, dan `app.js`.
3. Settings → Pages.
4. Deploy from a branch.
5. Pilih `main` dan `/ (root)`.
6. Save.

## Pakai
1. Buka web GitHub Pages.
2. Masukkan ImgBB API key.
3. Pilih banyak gambar.
4. Klik Upload Semua.
5. Copy All.

API key tidak di-hardcode ke source. Kalau centang “Simpan API key”, key hanya disimpan di localStorage browser tersebut.

Untuk web publik, lebih aman gunakan backend/proxy agar API key tidak dipakai langsung dari browser.
