# Kampus's Coffee — Marka ve Tasarım Kılavuzu

Slogan: **Kampüsün kahvesi, sınıfının kapısında.** Kahve kahverengisi, süt beyazı ve sıcak krem tonları; sade bir fincan ve iki buhar çizgisi. Logo özgün SVG çizimidir; işletme logoları kullanılmaz.

## Renk token'ları
Kontrast sütunu açık / koyu sırasındadır. WCAG sRGB bağıl parlaklık formülü ile hesaplanmıştır; CSS'nin iki temasıyla birebir eşleşir.

| Token | Açık hex | Koyu hex | Kullanım | Ölçülen kontrast / karşılaştırılan token |
|---|---|---|---|---|
| `--renk-ana` | `#6B3F2A` | `#E7B993` | Ana düğme, aktif bağlantı | 8.86:1 / 8.96:1 (--kart) |
| `--renk-koyu` | `#2D211B` | `#181310` | Vurgu alanı | 1.00:1 / 16.83:1 (--yazi); dekoratif token, metin çifti olarak kullanılmaz |
| `--zemin` | `#F8F4EF` | `#181310` | Sayfa zemini | 14.26:1 / 16.83:1 (--yazi) |
| `--kart` | `#FFFFFF` | `#28201B` | Kart ve form zemini | 15.61:1 / 14.61:1 (--yazi) |
| `--yazi` | `#2D211B` | `#F8F4EF` | Ana yazı | 15.61:1 / 14.61:1 (--kart) |
| `--yazi-soluk` | `#69584C` | `#CCBBAE` | Yardımcı yazı | 6.77:1 / 8.60:1 (--kart) |
| `--kenar` | `#D9CABC` | `#655447` | Dekoratif ayırıcı | 9.76:1 / 6.58:1 (--yazi); dekoratif token, metin çifti olarak kullanılmaz |
| `--vurgu` | `#E7D5BE` | `#3D3026` | Kahve görsel alanı | 10.90:1 / 11.63:1 (--yazi) |
| `--logo-zemin` | `#E7D5BE` | `#E7D5BE` | Sabit logo zemini | 6.19:1 / 6.19:1 (SVG fincan rengi) |
| `--ana-uzeri` | `#FFFFFF` | `#241912` | Ana renk üzerindeki yazı | 8.86:1 / 9.62:1 (--renk-ana) |

Ana yazı / zemin: 14.26:1 / 16.83:1.
Soluk yazı / zemin: 6.18:1 / 9.91:1.
Metin çiftleri normal metin için en az 4.5:1 hedefler. Kenarlık dekoratiftir; form kontrolleri ayrıca --yazi-soluk sınır kullanır. Logo dekoratiftir ve sabit açık vurgu zemini üzerinde gösterilir.

Logo zemin tokenı `--logo-zemin`: açık `#E7D5BE`, koyu `#E7D5BE`; SVG fincanın sabit dekoratif arka planıdır. Fincan rengi ile ölçülen kontrast: 6.19:1.

## Tipografi ve ölçüler
System UI / Segoe UI / sans-serif; harici font isteği yok. `--radius: 14px` iki temada aynıdır. Etkileşim hedefleri en az 44 px; klavye odağı görünür. Hareket azaltma tercihi desteklenir. Düzen eşikleri [mimari belgede](mimari-agac.md).

## İkon kaynağı ve çıktılar
`public/logo.svg` → `assets/app-icon.png` (1024×1024 RGBA, şeffaf köşeler).
Logo renkleri paletin #6B3F2A ve #E7D5BE token değerleridir.

```bash
bun run tauri icon assets/app-icon.png
```

| Platform | Konum | Çıktı |
|---|---|---|
| macOS | src-tauri/icons/icon.icns | Çok çözünürlüklü ICNS |
| Windows | src-tauri/icons/icon.ico | 16–256 px ICO |
| Linux | src-tauri/icons/ | 32, 128, 256, 512 px PNG |
| iOS | src-tauri/icons/ios/ | AppIcon PNG seti |
| Android | src-tauri/icons/android/ | mipmap-mdpi–xxxhdpi ve adaptive XML |
| Web | public/favicon.png; public/apple-touch-icon.png | 32 px; 180 px |

Native paketlerin platform araçlarıyla derlenmesi ikon üretiminden ayrı bir iştir; durum [teslim belgesinde](teslim.md).
