# Ajan uyum testleri — 10 Ekim 2026

Bu kayıt, eğitmenin Görev 08 geri bildiriminden sonra öğrencinin onayladığı iki küçük geliştirme görevinin uygulanmasını belgeler. İstemler onaylanan kapsamdan türetilmiştir; işlemler bu oturumdaki kodlama ajanı tarafından yapılmıştır. Ayrı bir bağımsız ajan değerlendirmesi veya geçmiş tarihli test iddia edilmez.

## Test 1 — Yardımcı metin renginin okunabilirliği

### Görev istemi

> AGENTS.md'yi ve marka kılavuzunu oku. Yardımcı metnin açık ve koyu temada kontrastını artır; yalnız --yazi-soluk token'ını değiştir. Renk tablosunu aynı PR'da güncelle, kullanılan zeminlerle kontrastı hesapla ve derlemeyi çalıştır. Yeni renk tablosunu başka belgelerde tekrarlama.

### Uygulama ve kurala uyum

- Okunan kurallar: [AGENTS.md](../AGENTS.md), [marka kılavuzu](branding.md), [PR güvenliği](kurallar.md#pr-güvenliği).
- Dal: `feature/ajan-renk-uyumu`; işlem korumalı master'dan açılan görev dalında yapıldı.
- `src/styles/app.css` içindeki iki tema güncellendi. Renklerin tek tablosu `docs/branding.md` içinde tutuldu; bu belgeye kopyalanmadı.
- Bu yeni belge AGENTS indeksine eklendi; CLAUDE/GEMINI yönlendirmeleri korundu.
- Değişiklik kapsamı yardımcı metin rengi, marka satırı, belge indeksi ve gerçek doğrulama kayıtlarıyla sınırlıdır.

### Doğrulama

- WCAG sRGB hesabında yardımcı metin/kart kontrastı açık temada **6.55:1**, koyu temada **8.97:1**; önceki değerlerden yüksektir. Kart, sayfa, vurgu ve hero zeminlerinin tamamında en az 4.5:1 sağlandı.
- `bun run build`: **44 sayfa, çıkış 0**. [Bu görevin sabit derleme kaydı](kanit/ajan-renk-build.txt).
- [Gerçek renk testi çıktısı](kanit/ajan-renk.txt): iki tema, dört zemin, belge eşleşmesi ve indeks denetimi başarılı.
- Kontrol statiktir; tarayıcıda görsel test yapıldığı iddia edilmez. [PR #17](https://github.com/mertksll/kampus-coffee/pull/17) normal merge ile birleştirildi; merge commiti `c241796d315bfb324cdecccb6fd9e2c89ecbbfd9`.

## Test 2 — Dört dilde sipariş rehberi

### Görev istemi

> AGENTS.md, sayfa mimarisi, klasör mimarisi ve iş kurallarını oku. Kullanıcıya kahve seçimi, tek kafeli sepet, toplu indirim, sınıf bilgileri ve sipariş kayıtlarını açıklayan bir Sipariş rehberi ekle. TR/EN/AR/FA sürümlerini birlikte oluştur; AR/FA sağdan sola olsun. Mevcut stilleri kullan, ortak navigasyon ve aynı sayfaya giden dil bağlantılarını ekle, mimari ağacı güncelle ve derlemeyi doğrula.

### Uygulama ve kurala uyum

- Okunan belgeler: [AGENTS](../AGENTS.md), [sayfa mimarisi](mimari-agac.md), [klasör mimarisi](klasor-mimarisi.md), [iş kuralları](kurallar.md), [Görev 08](tasks/week-3/08-agents-pro.task.md).
- Dal: `feature/ajan-siparis-rehberi`; renk görevinden sonra korumalı master'dan açıldı.
- Dört MDX dosyası mevcut `src/pages/` dil hiyerarşisine eklendi. Yeni rota ağacı yalnız [mimari belgede](mimari-agac.md) tutulur.
- Ortak `Layout.astro` içindeki alt menü ve dil seçici güncellendi; AR/FA yönü ortak layout'tan alınır.
- Mevcut `info-page` ve `btn` sınıfları kullanıldı; yeni sabit renk, ağ isteği, ödeme işlemi veya depolama kodu eklenmedi.

### Doğrulama

- `bun run build`: **48 sayfa, çıkış 0**. [Bu görevin sabit build kaydı](kanit/ajan-sayfa-build.txt).
- `bun run check`: Astro ve Svelte kontrollerinde **0 hata / 0 uyarı**; [komut çıktısı](kanit/check.txt).
- `bun run test`: **9 test / 25 doğrulama başarılı**; [komut çıktısı](kanit/test.txt).
- [Derlenmiş HTML denetimi](kanit/ajan-sayfa.txt): dört dilde başlık, beş içerik bölümü, AR/FA RTL, dört karşılıklı dil bağlantısı, koşullar bağlantısı ve 48 sayfanın alt menüsünden erişim doğrulandı.
- [Statik denetim](kanit/static-audit.txt): tüm yerel bağlantılar, belge indeksi, renk tablosu ve ikonlar başarılı. [Bileşen testinde](kanit/dom-test.txt) mevcut sepet, profil, sipariş ve dört dilde iletişim akışı da geçti.
- Bunlar derleme, statik HTML ve JSDOM kontrolleridir. Chrome aracı başlatılamadığı için gerçek tarayıcı görsel kontrolü yapılmadı. PR birleştirme sonucu son kayda eklenecektir.
