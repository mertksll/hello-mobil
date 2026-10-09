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
- Kontrol statiktir; tarayıcıda görsel test yapıldığı iddia edilmez. PR kaydı, birleştirme doğrulanınca eklenecektir.

## Test 2 — Dört dilde sipariş rehberi

Renk görevi birleştirildikten sonra ayrı dal ve PR üzerinde uygulanacaktır; henüz başarılı olarak işaretlenmemiştir.
