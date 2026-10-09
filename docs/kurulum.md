# Kurulum ve çalıştırma

## Önkoşullar

Web: Git, **Node.js 22.12 veya üstü**, Bun 1.3 veya üstü. Bu çalışma Bun 1.4.2 ile hazırlanmıştır. Astro 7, Node 20.11 ile çalışmaz; yalnızca Bun kurmak Node sürümünü yükseltmez.

Native: [Tauri önkoşulları](https://v2.tauri.app/start/prerequisites/), Rust 1.90+ / Cargo, Windows'ta MSVC C++ Build Tools ve WebView2; diğer platform araçları [mimari belgede](mimari-agac.md). Windows x64 üzerinde Rust/Cargo 1.99.0, MSVC 14.44 ve Windows SDK 10.0.26100.0 ile `bun run tauri dev` derlemesi tamamlandı ve uygulama süreci başlatıldı; [çalıştırma kaydı](kanit/tauri-dev.txt) ve [ekran görüntüsü](kanit/tauri-dev.png). Mobil ve dağıtım paketleri ayrıca doğrulama gerektirir.

## Komutlar

```bash
git clone https://github.com/mertksll/kampus-coffee.git
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

## Windows için Tauri hazırlığı

1. [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) yükleyicisinde **Desktop development with C++ / C++ ile masaüstü geliştirme** iş yükünü ve Windows SDK bileşenini kurun.
2. [Rustup](https://rustup.rs/) ile kararlı `x86_64-pc-windows-msvc` araç zincirini kurun. Yeni terminalde `rustc --version` ve `cargo --version` komutlarını kontrol edin. Komutlar bulunamazsa Rustup kurulumunu ve `%USERPROFILE%\.cargo\bin` PATH girdisini kontrol edin.
3. [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/) çalışma zamanının kurulu olduğundan emin olun.
4. Proje klasöründe `bun install --frozen-lockfile` çalıştırın. Daha önce açılmış `bun run dev` sunucusunu kapatıp `bun run tauri dev` çalıştırın. İlk çalıştırmada Rust bağımlılıklarının derlenmesi daha uzun sürebilir.
5. Açılan **Kampus's Coffee** penceresini ve terminaldeki `Finished` / `Running` satırlarını gösteren ekran görüntüsünü `docs/kanit/tauri-dev.png` olarak kaydedin. Görüntüyü PR ile kaynak depoya ekledikten sonra GitHub'dan güncel ZIP'i indirin.

Tauri JavaScript API ve Rust crate sürümleri aynı major/minor aralığında tutulur: Tauri **2.12.x**, opener **2.7.x**. `bun.lock` ve `src-tauri/Cargo.lock` birlikte korunmalıdır. `bun run tauri dev` Windows geliştirme uygulamasını açar; Android/iOS paketi üretmez.
