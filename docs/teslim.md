# 9 Ekim 2026 — Batch 01 teslim kontrolü

Öğrenci: Mustafa Mert Köksal · 2620511152 · mertksll. Proje: **Kampus's Coffee**.

Uygulama, belgeler ve derleme ekran görüntüsü GitHub'a gönderildi; geliştirme PR’ları ayrı ayrı incelenerek `master` dalına birleştirildi. Birleştirilen ana dalın dosyaları doğrulanan yerel kaynakla birebir eşleşti. Bu teslim sürümünün etiketi `v0.1.0-batch-01` olarak belirlenmiştir. Blackboard'a 9 Ekim ZIP teslimi henüz yapılmadı; yüklemeyi öğrenci yapacak.

## Dokuz maddelik kontrol matrisi

| No | Alan | Durum | Kanıt |
|---|---|---|---|
| 1 | Fork ve davet | Fork doğrulandı; davet gönderildi | [Fork](https://github.com/mertksll/hello-mobil); kaynak commit f3ba476. Öğrenci daveti gönderdiğini bildirdi; önceki kontrolde kabul bekliyordu. |
| 2 | 7 Ekim Blackboard bildirimi | Öğrenci beyanıyla tamamlandı | Öğrenci sohbette gönderdiğini bildirdi; bu oturumda Blackboard açılmadı. |
| 3 | Proje fikri | Hazır | [Amaç ve ekranlar](proje-fikri.md) |
| 4 | README | GitHub ana dalında | [README](../README.md); README için ayrı [PR #4](https://github.com/mertksll/hello-mobil/pull/4) birleştirildi. |
| 5 | Ajan dosyaları | GitHub ana dalında | [AGENTS](../AGENTS.md), [CLAUDE](../CLAUDE.md), [GEMINI](../GEMINI.md) |
| 6 | Markalama ve ikonlar | GitHub ana dalında | [Marka kılavuzu](branding.md), [statik doğrulama](kanit/static-audit.txt) |
| 7 | Dört dilde bilgi sayfaları | 16 sayfa derlendi | [Build kaydı](kanit/build.txt), [form etkileşim testi](kanit/dom-test.txt) |
| 8 | Mimari ağaç | GitHub ana dalında | [Sayfa/platform matrisi](mimari-agac.md), [klasör belgesi](klasor-mimarisi.md) |
| 9 | Derleme | Başarılı, çıkış kodu 0; ekran görüntüsü eklendi | [Gerçek terminal ekran görüntüsü](kanit/build.png), [44 sayfalık build kaydı](kanit/build.txt), [tür kontrolü](kanit/check.txt), [9 iş kuralı testi](kanit/test.txt) |

## Doğrulama kapsamı

- Node.js 22.23.3, Bun 1.4.2. Kilitli bağımlılık kurulumu başarılı.
- `bun run build`: 44 statik sayfa; exit 0.
- `bun run check`: Astro ve Svelte; 0 hata, 0 uyarı.
- `bun run test`: 9 test; tümü geçti.
- İzole DOM testi: dört dilde form temizleme/bildirim, ağ isteği veya kayıt yapılmaması; sepetin saklanması; farklı kafenin reddi; indirimli onay/kod; durum ilerletme ve geçmiş silme. Bu, gerçek tarayıcı veya cihaz testi değildir.
- Statik audit: 44 rotanın dil/yönü, MDX stilleri, yerel bağlantılar, CSS-belge token eşleşmesi, kullanılan metin çiftlerinde en az 4.5:1 kontrast, ikon dosyaları ve ölçüleri.
- Öğrencinin paylaştığı gerçek terminal ekran görüntüsü değiştirilmeden [docs/kanit/build.png](kanit/build.png) olarak eklendi. Görüntüde `bun run build`, 44 sayfa, `Complete!` ve `Exit code: 0` okunuyor. Metin build kaydı, ajanın ayrı derleme çalıştırmasına aittir.
- Chrome kontrol aracı oturum başlatma hatası verdi; tüm ekranların görsel tarayıcı kontrolü hâlâ doğrulanmadı.
- Rust/Cargo ve platform geliştirme araçları kurulu olmadığından native uygulama çalıştırması ve APK/IPA/EXE/DMG üretimi doğrulanmadı. Bu ilk aşamada kaynak kod ve ikon setleri hazırlandı.

## Ajan uyumu kontrolü

Renk görevi: kahve paleti iki CSS temasıyla birlikte marka belgesine işlendi; statik audit token eşleşmesini ve kontrastı doğruladı.
Sayfa görevi: iletişim sayfası dört dilde oluşturuldu; ortak navigasyona ve mimari ağaç belgesine eklendi. Formdaki demo gönderim/reset izole DOM testinde doğrulandı. CLAUDE/GEMINI yalnızca AGENTS yönlendirmesi içerir; docs/*.md bağlantıları kontrol edildi.
Bu kayıt mevcut ajanın yaptığı doğrulamadır; ayrı bir ajanın değerlendirmesi olduğu iddia edilmez.

## GitHub PR kayıtları

Her PR için AI görevi ve doğrulama sonucu açıklamada yer alır. Dosya farkları incelendi; bağımlı dallarda önceki PR'ların değişiklikleri güncel ana dalla ayrıca karşılaştırıldı. Birleştirme normal merge yöntemiyle yapıldı; koruma veya kontrol atlatılmadı.

| PR | Dal | Ayrı kopyadaki build | Durum |
|---|---|---|---|
| [#1](https://github.com/mertksll/hello-mobil/pull/1) | `feature/agent-rules` | 11 sayfa, çıkış 0 | Birleştirildi |
| [#2](https://github.com/mertksll/hello-mobil/pull/2) | `feature/kampus-coffee-branding` | 11 sayfa, çıkış 0 | Birleştirildi |
| [#3](https://github.com/mertksll/hello-mobil/pull/3) | `feature/info-pages` | 26 sayfa, çıkış 0 | Birleştirildi |
| [#4](https://github.com/mertksll/hello-mobil/pull/4) | `docs/readme-patch` | 26 sayfa, çıkış 0 | Birleştirildi |
| [#5](https://github.com/mertksll/hello-mobil/pull/5) | `feature/coffee-experience` | 44 sayfa, çıkış 0 | Birleştirildi |
| [#6](https://github.com/mertksll/hello-mobil/pull/6) | `fix/interface-copy` | 44 sayfa, çıkış 0 | Birleştirildi |
| [#7](https://github.com/mertksll/hello-mobil/pull/7) | `fix/about-page` | 44 sayfa, çıkış 0 | Birleştirildi |
| [#8](https://github.com/mertksll/hello-mobil/pull/8) | `fix/terms-course-notice` | 44 sayfa, çıkış 0 | Birleştirildi |
| [#9](https://github.com/mertksll/hello-mobil/pull/9) | `docs/build-proof` | 44 sayfa, çıkış 0 | Birleştirildi |

Dal bazındaki doğrulama özeti: [PR derlemeleri](kanit/pr-builds.txt). Bu doğrulamalar yerel, ayrı kaynak kopyalarında gerçekleştirildi; GitHub CI çalıştırması olarak sunulmaz.

## Batch 01 sürüm bilgisi

Bu teslim sürümünün etiketi: [`v0.1.0-batch-01`](https://github.com/mertksll/hello-mobil/tree/v0.1.0-batch-01).
Etiket, PR'larla birleştirilmiş `master` commitini işaret eden açıklamalı Git etiketi olarak kullanılır. Açıklaması: “Hafta 3: Batch 01 - Proje altyapısı, markalama ve sayfalar tamamlandı”.

## Kalan teslim adımları

1. GitHub **Code → Download ZIP** ile güncel master ZIP'ini indir.
2. Öğrenci Blackboard'a yalnızca bu ZIP'i yükler; son tarih 9 Ekim 23:59, en fazla 3 deneme. Yüklemenin tamamlandığını Blackboard'da doğrular.

Yerelde üretilen kaynak ZIP, GitHub'dan indirilen final teslim ZIP'i olarak işaretlenmez. Blackboard teslimi yapılmadan bu adımı tamamlandı olarak değiştirmeyin.

## Arayüz yenilemesi — 9 Ekim

`feature/coffee-experience` dalında kullanıcı isteğiyle 24 fotoğraflı ürün, üç markanın raster logoları, yeniden tasarlanan sepet/sipariş/profil ekranları eklendi. Yerel profil ve favoriler, sepet sayacı, fiyat sıralaması, tekrar sipariş ve sipariş geçmişini onaylı silme uygulanmıştır. Var olan ürün kimlikleri korunmuştur.

Önizlemenin açık Chrome sekmesinde yeni içeriği metin olarak doğrulandı. Logo/fotoğraf dosyaları yerelde görsel olarak incelendi. Tarayıcı kontrol bağlantısı hata verdiğinden tüm ekranların gerçek tarayıcı ekran görüntüsüyle görsel testi yapılmış sayılmaz. Build/check ve izole DOM testlerinin güncel çıktıları kanıt klasöründedir. GitHub PR aşaması tamamlandı; sürüm adı yukarıda kayıtlıdır. Blackboard teslimi beklemektedir.

## Arayüz metinleri

Kullanıcı isteğiyle görünür demo/eğitim etiketleri sadeleştirildi. Profil alanı “Kahvene hangi ismi yazalım?” ve “İsim” olarak güncellendi. Bu değişiklik backend entegrasyonu eklemez; sipariş kayıtları cihazda kalır, iletişim formu içerik göndermez. Mevcut çalışma şekli koşullar/gizlilik ve geliştirme belgelerinde açıklanır. Kullanıcının onayıyla Kullanım Koşulları’nın dört diline uygulamanın İstinye Üniversitesi MYO063 Mobil Programlama dersi kapsamında geliştirildiği bildirimi eklendi. Böylece Görev 06 kapsamındaki üniversite projesi açıklaması karşılandı; akademik künye Hakkında ve README içinde de korunur.

## Hakkında sayfası

Hakkında içeriği dört dilde kurumsal bir anlatımla güncellendi. Amaç, kullanım özellikleri ve menüye geçiş öne çıkarıldı. Öğrenci/geliştirici ve teknoloji bilgileri, React ile oluşturulan erişilebilir açılır “Proje bilgileri” bölümünde korunur. İşlevsiz sayaç kaldırıldı. Mevcut marka renkleriyle telefon ve masaüstü için duyarlı düzen kullanılır. Chrome kontrol bağlantısı kullanılamadığından bu düzenin ekran görüntüsüyle görsel doğrulaması yapılmış sayılmaz.
