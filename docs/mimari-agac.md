# Kampus's Coffee — Sayfa ve platform mimarisi

## Sayfa ve özellik ağacı

```text
Kampus's Coffee
├── /                         Menü, arama, kafe ve sıcak/soğuk filtreleri
├── /urun/1/ … /urun/6/        Kahve detayı, boyut/süt/adet, sepete ekleme
├── /sepet/                   Tek kafe, örnek sınıf, tutar ve indirim, demo onayı
├── /siparisler/              KMP kodu, yerel geçmiş, durum ilerletme
├── /profil/                  Misafir bilgisi, demo kayıtlarını silme, bilgi bağlantıları
├── /hakkinda/                TR MDX, proje ve React sayaç
├── /iletisim/                TR Astro + Svelte form
├── /kosullar/                TR MDX
├── /gizlilik/                TR MDX
├── /en/hakkinda/             EN MDX
├── /en/iletisim/             EN Astro + Svelte
├── /en/kosullar/             EN MDX
├── /en/gizlilik/             EN MDX
├── /ar/hakkinda/             AR MDX, RTL
├── /ar/iletisim/             AR Astro + Svelte, RTL
├── /ar/kosullar/             AR MDX, RTL
├── /ar/gizlilik/             AR MDX, RTL
├── /fa/hakkinda/             FA MDX, RTL
├── /fa/iletisim/             FA Astro + Svelte, RTL
├── /fa/kosullar/             FA MDX, RTL
└── /fa/gizlilik/             FA MDX, RTL
```

Toplam 26 statik rota: 4 ana sayfa, 6 ürün, 16 bilgi sayfası. Bilgi sayfaları alt bilgi ve profil üzerinden erişilir; dil seçici aynı bilgi sayfasının çevirisine gider. Menü ve sipariş akışı bu aşamada Türkçedir. Sayfalar standart bağlantılarla açılır; sepet ve geçmiş istemcide yüklenir. Tema tüm sayfalarda ortaktır.

Akış: keşfet → kahve seçenekleri → tek kafeli sepet → örnek sınıf ve demo onayı → sipariş geçmişi. Tauri içinde Rust `siparis_olustur`; webde Web Crypto ile demo kodu. Mevcut cihaz geçmişiyle kod çakışması denetlenir; bu kod güvenlik token'ı değildir.

## Hedef platformlar

| Platform | Sistem | Hedef çıktı | Gereken araçlar / durum |
|---|---|---|---|
| macOS | Apple Silicon / Intel | .dmg, .app | macOS + Xcode araçları; native test bekliyor |
| Windows | 10 / 11 x64 | .msi, .exe | Rust MSVC, C++ Build Tools, WebView2; native test bekliyor |
| Linux | Ubuntu / Debian | .deb, .AppImage | Rust, WebKitGTK ve sistem paketleri; native test bekliyor |
| iOS | iPhone / iPad | .ipa | macOS, Xcode, imzalama; native test bekliyor |
| Android | Telefon / tablet | .apk, .aab | Android Studio, SDK/NDK/JDK, Rust target; native test bekliyor |

Beş platform için ikon kaynakları bulunur; ikon üretimi native paketlerin oluşturulduğu anlamına gelmez. Web statik derlemesi teslim doğrulamasının temelidir.

## Duyarlı ve uyarlanabilir düzen

| Ekran | CSS aralığı | Düzen / gezinme |
|---|---|---|
| Telefon | <768 px (özellikle 375–430) | Tek sütun; üst başlık ve sabit alt menü; sadeleştirilmiş hero |
| Tablet | 768–1199 px (özellikle 768–1024) | İki sütun; ürün/sepet detayında iki panel; sabit alt menü |
| Masaüstü | 1200–1599 px | Üç sütun; ortalanmış max-width 1200 px; sınırlı genişlikte gezinme |
| Büyük ekran | ≥1600 px | Dört sütun; max-width 1440 px; menü öğeleri en fazla 220 px |

RTL düzeninde mantıksal CSS özellikleri kullanılır. Formlar klavye ile kullanılabilir; focus görünür, safe-area ve reduced-motion desteklenir. Gerçek cihaz test durumu [teslim belgesinde](teslim.md).
