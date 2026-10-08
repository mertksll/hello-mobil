# Demo iş kuralları

- Menüdeki kafe adları örnektir; işletme bağlantısı veya ortaklığı bulunmaz. Ürün, ücret ve kampanya verileri temsildir.
- Bir sepet tek kafeye aittir. Başka kafe seçilirse kullanıcıya açıklama gösterilir; sepet kendiliğinden silinmez.
- Aynı ürün/boyut/süt seçeneği birleştirilir; adet 1–99 arasında tam sayı olmalıdır.
- Aynı örnek sınıfa gönderilen tek siparişte 5 veya üzeri kahveye %10 indirim uygulanır. Bu aşamada başka kampanya yoktur; indirimler birleştirilmez.
- Ödeme veya mesaj gönderilmez. Onay sadece cihazdaki demo kaydını oluşturur.
- Kod KMP- ve sekiz büyük hexadecimal karakterden oluşur. Tauri'de Rust, webde Web Crypto üretir; cihazdaki geçmişle çakışma kontrolü yapılır ve en fazla 10 kez denenir.
- Sipariş durumunu kullanıcı demo düğmesiyle ilerletir. Gerçek kurye izleme bulunmaz.
- Tema, sepet, geçmiş, profil tercihleri (kampus-profile) ve favoriler (kampus-favorites) localStorage kullanır. Depolama engellenirse uyarı verilir. Geçmiş 100 siparişle sınırlıdır. Bozuk kayıtlar yüklenmez.
- İletişim formu geçerli alanlarla yerel bildirim gösterir; alanlar temizlenir, ağ isteği gönderilmez.
- Profilde sipariş geçmişi onaylı silinir; sepet, tercihler ve favoriler korunur. Tema dahil tüm site verisi tarayıcıdan silinir.

Gelecek kapsam: gerçek işletme bağlantıları, doğrulanmış kullanıcı hesabı, kafe bazlı öğrenci kampanyaları, kayıtlı teslimat tercihi ve kurye yönetimi. [Fikir belgesi](proje-fikri.md) bu hedefi anlatır; mevcut demo ile aynı tamamlanma iddiasını taşımaz.

- Menü 24 ürün içerir (her kafede 8). Ürün kimlikleri önceki kayıtlara uyumlu tutulmuştur.
- Hızlı ekleme standart boyu ve ürünün varsayılan süt seçimini kullanır. Tekrar sipariş, mevcut sepeti silmeden aynı kafe kuralına göre birleştirir.
- Profilde isim, favori kafe ve örnek sınıf kaydedilebilir; gerçek hesap oluşturulmaz.
