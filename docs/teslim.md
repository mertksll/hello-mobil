# 9 Ekim 2026 — Batch 01 teslim kontrolü

Öğrenci: Mustafa Mert Köksal · 2620511152 · mertksll. Proje: **Kampus's Coffee**.

Kaynak uygulama ve kanıtlar bu depodadır. Final sürüm etiketi `v0.1.0-batch-01`, son PR'lar birleştirildikten sonra doğrulanan `master` commitine eşitlenir. Blackboard'a 9 Ekim ZIP yüklemesini öğrenci yapar; bu belge gönderim yapıldığını iddia etmez.

## Dokuz maddelik kontrol matrisi

- [x] **Fork ve işbirliği:** [mertksll/hello-mobil](https://github.com/mertksll/hello-mobil), `keyvanarasteh/hello-mobil` fork'udur. 9 Ekim GitHub kontrolünde eğitmenin işbirlikçi erişimi doğrulandı.
- [x] **7 Ekim bildirimi:** Öğrenci GitHub kullanıcı adı, fork bağlantısı ve proje fikrini gönderdiğini bildirdi. Bu madde öğrenci beyanına dayanır; 9 Ekim ZIP teslimi ayrıdır.
- [x] **Proje fikri:** [Amaç, üç temel ekran, hedef kitle ve kod formatı](proje-fikri.md) mevcut.
- [x] **README:** [Akademik bilgiler, rozetler, içindekiler, kurulum ve lisans](../README.md) mevcut; ayrı [README PR'ı](https://github.com/mertksll/hello-mobil/pull/4) birleştirildi.
- [x] **Ajan dosyaları:** [AGENTS](../AGENTS.md), [CLAUDE](../CLAUDE.md), [GEMINI](../GEMINI.md) mevcut; yönlendirmeler ve belge indeksi doğrulandı.
- [x] **Markalama:** [Renk token'ları ve beş platformun ikonları](branding.md), [statik doğrulama](kanit/static-audit.txt) ile kontrol edildi.
- [x] **Bilgi sayfaları:** TR/EN/AR/FA dillerinde 16 sayfa derlendi; AR/FA `dir="rtl"`. [İletişim formu testi](kanit/dom-test.txt) mevcut.
- [x] **Mimari:** [Klasör yapısı](klasor-mimarisi.md), [rota/platform/ekran matrisi](mimari-agac.md) ve [CSS sınır denetimi](kanit/responsive-audit.txt) mevcut.
- [x] **Derleme:** [Web build ekran görüntüsü](kanit/build.png), [44 sayfalık build kaydı](kanit/build.txt), [tür kontrolü](kanit/check.txt), [9 iş kuralı testi](kanit/test.txt), [Tauri ekran görüntüsü](kanit/tauri-dev.png) ve [Tauri çalıştırma kaydı](kanit/tauri-dev.txt) mevcut.

## Doğrulanan kapsam

- Node.js 22.23.3 ve Bun 1.4.2; `bun run build` 44 sayfa ve çıkış 0, `bun run check` 0 hata / 0 uyarı, `bun run test` 9 test / 25 doğrulama başarılı.
- Windows x64: Rust/Cargo 1.99.0, MSVC 14.44 ve Windows SDK 10.0.26100.0. `bun run tauri dev` derlendi ve `target/debug/hello-mobil.exe` açıldı. Öğrencinin gönderdiği iki gerçek ekran görüntüsü değiştirilmeden korunur.
- Tauri JavaScript ve Rust bağımlılıkları 2.12.x; opener bağımlılıkları 2.7.x aralığında eşleştirildi. Bun frozen lock ve Cargo locked metadata kontrolleri başarılı.
- Statik denetim 44 rotanın dil/yön bilgilerini, yerel dosya bağlantılarını, CSS–marka token eşleşmesini, kullanılan metin çiftlerinde en az 4.5:1 kontrastı ve platform ikonlarını kontrol eder.
- DOM testi; dört dilde iletişim formunun bildirim ve temizlemesini, dışarı veri göndermemesini, sepet/favori/profil işlemlerini, toplu indirim ve sipariş geçmişini kapsar. Gerçek tarayıcı veya cihaz testi olarak sunulmaz.
- CSS denetimi 375–1920 px arasındaki 13 genişlikte kahve sütunlarını, üst/alt gezinmeyi ve maksimum genişlikleri kontrol eder. Mimari belgesi bu kurallarla eşleştirilmiştir.
- Chrome görsel kontrol aracı oturum başlatma hatası verdi. Windows Tauri ana ekranının öğrenci görüntüsü mevcut; bütün sayfaların farklı genişliklerde görsel testi tamamlanmış değildir. Android/iOS ve MSI/DMG gibi dağıtım paketleri üretilmedi.

## Git ve PR kayıtları

| PR | Kapsam | Doğrulama |
|---|---|---|
| [#1](https://github.com/mertksll/hello-mobil/pull/1) | Ajan kuralları ve belge indeksi | Ayrı kopyada build, çıkış 0 |
| [#2](https://github.com/mertksll/hello-mobil/pull/2) | Kahve uygulaması ve markalama | Ayrı kopyada build, çıkış 0 |
| [#3](https://github.com/mertksll/hello-mobil/pull/3) | Dört dilde bilgi sayfaları | Ayrı kopyada build, çıkış 0 |
| [#4](https://github.com/mertksll/hello-mobil/pull/4) | README ve mimari belgeler | Ayrı kopyada build, çıkış 0 |
| [#5](https://github.com/mertksll/hello-mobil/pull/5) | Fotoğraflı menü, sepet, sipariş ve profil | Ayrı kopyada build, çıkış 0 |
| [#6](https://github.com/mertksll/hello-mobil/pull/6) | Profil ve arayüz metinleri | Ayrı kopyada build, çıkış 0 |
| [#7](https://github.com/mertksll/hello-mobil/pull/7) | Hakkında sayfası | Ayrı kopyada build, çıkış 0 |
| [#8](https://github.com/mertksll/hello-mobil/pull/8) | Üniversite dersi bildirimi | Ayrı kopyada build, çıkış 0 |
| [#9](https://github.com/mertksll/hello-mobil/pull/9) | Gerçek web build görüntüsü | Ayrı kopyada build, çıkış 0 |
| [#10](https://github.com/mertksll/hello-mobil/pull/10) | GitHub teslim durumunun kaydı | Build, çıkış 0 |
| [#11](https://github.com/mertksll/hello-mobil/pull/11) | Batch 01 sürüm bilgisi | Build, çıkış 0 |
| [#12](https://github.com/mertksll/hello-mobil/pull/12) | Tauri sürüm uyumu ve gerçek çalıştırma kanıtı | Windows Tauri dev, build/check/test başarılı |

Bu PR'lar normal merge yöntemiyle birleştirildi. Açıklamalarında AI görevi ve doğrulama kapsamı bulunur. İlk dokuz PR için ayrıntılı kayıt [PR derlemeleri](kanit/pr-builds.txt) dosyasındadır. Son belge ve rubrik düzeltmeleri `fix/final-rubric-review` dalı üzerinden PR ile sunulur; [GitHub PR listesinde](https://github.com/mertksll/hello-mobil/pulls) izlenebilir. Bu kayıtlar yerel doğrulamalardır, GitHub CI iddiası değildir.

**Eski Git kaydı:** [f3ba476](https://github.com/mertksll/hello-mobil/commit/f3ba476d134a9c81d17649587d9363991f23b7fa) proje fikri güncellemesinin GitHub'da ilişkili PR kaydı yoktur; başlığı Conventional Commit biçiminde değildir. Sonraki PR'lar bu eski işlemi geçmişe dönük değiştirmez. Kayıt korunmuştur. Görev 03 belgesi `docs/readme-patch` örneğini verirken Blackboard özeti `feature/*` veya `fix/*` ister; yeni düzeltmeler `fix/*` üzerinden yürütülür.

## Ajan uyumu kontrolü

Renk görevi sırasında iki CSS teması ve marka belgesi birlikte güncellendi; token ve kontrast eşleşmesi kontrol edildi. Sayfa görevi sırasında dört dilde iletişim sayfası, ortak navigasyon ve mimari ağaç birlikte düzenlendi. CLAUDE/GEMINI yalnızca AGENTS'e yönlendirir; tüm `docs/*.md` bağlantıları indekste bulunur. Bunlar mevcut ajanın doğrulamalarıdır; ayrı bir ajan değerlendirmesi iddia edilmez.

Hakkında sayfasında React ile üretilen açılır “Proje bilgileri” bölümü geliştirici ve teknik bilgileri korur. Kullanım Koşulları'nın dört dilinde İstinye Üniversitesi MYO063 kapsamı açıklanır. Siparişler cihazda saklanır; gerçek ödeme, kurye veya marka entegrasyonu bulunmaz.

## Etiket ve final ZIP

Final etiketi: [`v0.1.0-batch-01`](https://github.com/mertksll/hello-mobil/tree/v0.1.0-batch-01). Açıklama: “Hafta 3: Batch 01 - Proje altyapısı, markalama ve sayfalar tamamlandı”. Final kontrolde açıklamalı etiketin hedefi ile doğrulanmış `master` commitinin aynı olduğu ve ZIP içeriğinin bu commit ile eşleştiği denetlenir.

Önceden indirilmiş arşivler otomatik güncellenmez. Tauri kanıtı ve son belge düzeltmeleri için final kontrolden sonra yeniden indirme gerekir.

## Öğrencinin tamamlayacağı teslim

1. [GitHub master sayfasında](https://github.com/mertksll/hello-mobil/tree/master) **Code → Download ZIP** ile final arşivi indir.
2. ZIP'te `docs/kanit/build.png` ve `docs/kanit/tauri-dev.png` dosyalarını kontrol et. Yönergeler `docs/tasks/week-3/` içinde bulunur.
3. Blackboard'a yalnızca final ZIP'i yükle ve gönderimi kendin tamamla. Son tarih 9 Ekim 23:59, en fazla 3 deneme.
4. Blackboard gönderim onayını kontrol et. Bu işlem yapılmadan ZIP teslimi tamamlandı olarak işaretlenmez.
