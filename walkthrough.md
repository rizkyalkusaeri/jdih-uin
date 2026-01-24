# Walkthrough - About Pages Backend Implementation

## Changes

### Database

- Created `faqs` table (`question`, `answer`, `is_active`, `sort_order`).
- Created `generals` table (`title`, `slug`, `description` (RichText), `image`).

### Backend (Filament)

- **FaqResource**: Manage FAQs.
- **GeneralResource**: Manage static pages (Profil, Struktur, etc.).

### Seeders

- **FaqSeeder**: Populated with 5 default FAQs.
- **GeneralSeeder**: Populated with existing content for Profil, Struktur, Prasyarat, and Kebijakan Privasi.

### Frontend

- Updated `routes/web.php` to fetch `General` and `Faq` data.
- Updated Vue components (`Index.vue`, `Structure.vue`, `FAQ.vue`, `Prasyarat.vue`, `Privacy.vue`) to display data from the database.
- Added "Belum ada data" states for empty records.

## Usage

### Admin Panel

1.  Go to **/admin/faqs** to manage FAQs.
2.  Go to **/admin/generals** to edit "Tentang" pages content.
    - **Profil JDIH** (`slug: profil`)
    - **Struktur Organisasi** (`slug: struktur`) -> Can upload image here.
    - **Prasyarat** (`slug: prasyarat`)
    - **Kebijakan Privasi** (`slug: kebijakan-privasi`)

### Frontend Verification

- Visit **/tentang** -> Shows Profil content.
- Visit **/tentang/struktur-organisasi** -> Shows Structure text and image (defaults to placeholder if no image).
- Visit **/tentang/faq** -> Shows Accordion of FAQs.
- Visit **/tentang/prasyarat** -> Shows Prasyarat content.
- Visit **/tentang/kebijakan-privasi** -> Shows Privacy Policy content.

## Fixes & Troubleshooting

### Rich Text Formatting Issue

- **Problem**: Headings (h1, h2) in Rich Text content appeared as normal paragraphs.
- **Cause**: Missing `@tailwindcss/typography` plugin which provides the `prose` class.
- **Fix**: Installed `@tailwindcss/typography` and correctly configured it in `resources/css/app.css` using `@plugin`.
