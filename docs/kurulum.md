# Kurulum ve çalıştırma

## Önkoşullar

Web: Git, **Node.js 22.12 veya üstü**, Bun 1.3 veya üstü. Bu çalışma Bun 1.4.2 ile hazırlanmıştır. Astro 7, Node 20.11 ile çalışmaz; yalnızca Bun kurmak Node sürümünü yükseltmez.

Native: [Tauri önkoşulları](https://v2.tauri.app/start/prerequisites/), Rust/Cargo, Windows'ta MSVC C++ Build Tools ve WebView2; diğer platform araçları [mimari belgede](mimari-agac.md). Bu bilgisayarda Rust/Cargo bulunmadığından native çalıştırma doğrulanmamıştır.

## Komutlar

```bash
git clone https://github.com/mertksll/hello-mobil.git
cd hello-mobil
bun install
bun run dev
```

Geliştirme adresi: http://127.0.0.1:1420. Sunucuyu Ctrl+C ile durdurun.

```bash
bun run build
bun run preview
```

`build` statik `dist/` çıktısını üretir. Önizleme komutunun terminalde verdiği yerel adrese gidin.

```bash
bun run check
bun run test
bun run tauri dev
bun run tauri build
bun run tauri icon assets/app-icon.png
```

İlk iki komut Svelte/TypeScript ve iş kurallarını kontrol eder. Tauri dev/build, native önkoşullar tamamlandıktan sonra çalıştırılır; web build bu araçların yerine geçmez. Mobil için ayrıca `bun run tauri android init` / `bun run tauri ios init` ve platform kurulumu gerekir.

Kurulumda port kullanılıyorsa eski geliştirme sunucusunu kapatın; 1420 portunu değiştirmeyin. Depo klasörüne `.env`, parola veya erişim anahtarı eklemeyin. [Doğrulama kanıtları](teslim.md).
