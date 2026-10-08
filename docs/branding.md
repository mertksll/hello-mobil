# Kampus's Coffee — Marka ve Tasarım Kılavuzu

Kırık beyaz yüzeyler, koyu yeşil vurgu ve sıcak kahve fotoğrafları. Georgia başlıklar; Segoe UI / system-ui arayüz. Harici font isteği yok.

## Renk token'ları

Kontrast açık / koyu sırasıyla, WCAG sRGB formülüyle hesaplanmıştır. Dekoratif çiftler metin çifti olarak kullanılmaz.

| Token | Açık hex | Koyu hex | Kullanım | Kontrast / karşılaştırılan token |
|---|---|---|---|---|
| `--renk-ana` | `#28543f` | `#bed7bd` | Düğme, aktif bağlantı ve gezinme | 8.64:1 / 9.50:1 (--kart) |
| `--renk-koyu` | `#1a362a` | `#14251c` | Koyu marka rengi / gölgeler | 1.03:1 / 14.56:1 (--yazi); dekoratif çift |
| `--zemin` | `#f7f7f2` | `#161d19` | Sayfa zemini | 11.81:1 / 15.60:1 (--yazi) |
| `--kart` | `#ffffff` | `#212b24` | Kart ve form yüzeyi | 12.69:1 / 13.30:1 (--yazi) |
| `--yazi` | `#23372c` | `#f3f5ed` | Ana metin | 12.69:1 / 13.30:1 (--kart) |
| `--yazi-soluk` | `#58665d` | `#b8c5b9` | Yardımcı metin | 6.05:1 / 8.17:1 (--kart) |
| `--kenar` | `#dfe5dc` | `#3c4a3f` | Dekoratif sınır | 9.90:1 / 8.51:1 (--yazi); dekoratif çift |
| `--vurgu` | `#eaf0e5` | `#2d3d30` | Yumuşak vurgu | 10.94:1 / 10.48:1 (--yazi) |
| `--logo-zemin` | `#ffffff` | `#ffffff` | Sabit beyaz marka zemini | 12.69:1 / 1.10:1 (--yazi); dekoratif çift |
| `--ana-uzeri` | `#ffffff` | `#1b3021` | Ana renk üzerindeki yazı | 8.64:1 / 9.15:1 (--renk-ana) |
| `--hero-zemin` | `#efeee6` | `#273329` | Hero ve durum zemini | 10.91:1 / 12.00:1 (--yazi) |
| `--promo` | `#224733` | `#224733` | Kampanya alanı | 1.22:1 / 9.47:1 (--yazi); dekoratif çift |
| `--promo-yazi` | `#f1f5e8` | `#f1f5e8` | Kampanya alanı yazısı | 9.40:1 / 9.40:1 (--promo) |
| `--danger` | `#a0332f` | `#f2a6a0` | Silme / hata metni | 6.38:1 / 7.05:1 (--danger-zemin) |
| `--danger-zemin` | `#fff2ef` | `#3c2826` | Hata yüzeyi | 11.61:1 / 12.53:1 (--yazi); dekoratif çift |
| `--ikon-kahve` | `#6B3F2A` | `#6B3F2A` | Sabit uygulama ikon rengi | 6.19:1 / 6.19:1 (--ikon-krem) |
| `--ikon-krem` | `#E7D5BE` | `#E7D5BE` | İkonun sabit açık zemini | 6.19:1 / 6.19:1 (--ikon-kahve) |

## Tipografi ve yerleşim

`--radius: 18px` iki temada aynıdır. Fotoğraf kartları, ince kenarlıklar ve geniş aralıklar kullanılır. Ekran eşikleri [mimari belgede](mimari-agac.md). Arayüz ikonları sabit 24×24 viewBox'lı piktogramlardır; emoji kullanılmaz. Klavye focus, safe-area ve reduced-motion desteklenir.

## Logolar ve fotoğraflar

Kampus's Coffee simgesi özgün `public/logo.svg` kaynağından üretilen **192 px PNG** ile gösterilir. Starbucks, Kahve Dünyası ve Espressolab logoları kullanıcı isteğiyle **480×480 PNG** olarak eklendi. En-boy oranları korunur, beyaz zemin ve `object-fit: contain` kullanılır. Yatay Espressolab logosu kare alanda gerilmeden gösterilir. Marka logolarının özgün renkleri korunur; uygulama paletine boyanmaz.

Kahve görselleri `public/coffee/` içinde yerel WebP dosyalarıdır. Menüde lazy loading, hero fotoğrafında öncelikli yükleme vardır. Fotoğraflar temsilidir; ilgili markanın gerçek ürün çekimi oldukları iddia edilmez. [Görsel kaynaklar ve hak notları](kaynaklar.md).

## Platform ikonları

Özgün fincanın 1024×1024 şeffaf kaynak ikonu `assets/app-icon.png` dosyasıdır. Önceki ikon seti korunmuştur; #6B3F2A ve #E7D5BE ikonun sabit kaynak renkleridir ve iki CSS temasında token olarak tanımlıdır.

```bash
bun run tauri icon assets/app-icon.png
```

| Platform | Konum | Çıktı |
|---|---|---|
| macOS | src-tauri/icons/icon.icns | ICNS |
| Windows | src-tauri/icons/icon.ico | Çok boyutlu ICO |
| Linux | src-tauri/icons/ | 32, 128, 256, 512 px PNG |
| iOS | src-tauri/icons/ios/ | AppIcon seti |
| Android | src-tauri/icons/android/ | Mipmap setleri ve adaptive XML |
| Web | public/favicon.png; public/apple-touch-icon.png | 32 px; 180 px |
