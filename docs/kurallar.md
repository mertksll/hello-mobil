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

## PR güvenliği

- `master` dalı `master koruması` kural setiyle korunur. Her değişiklik PR ile girer; force push ve dal silme engellidir. Kural seti etkin, hedef varsayılan dal ve bypass listesi boştur.
- Depo sahibi ve yazma yetkili collaborator'lar PR birleştirebilir. Mevcut yetkililer `mertksll` ve eğitmen `keyvanarasteh`'tir; dışarıdan PR açmak merge yetkisi vermez.
- Tek kişilik projede zorunlu onay sayısı 0'dır; PR ve dosya incelemesi yine gereklidir. Merge commit ve birleştirilen kaynak dalların otomatik silinmesi açıktır.
- Dış katkıcılardan gelen bütün PR iş akışları onay gerektirir. Workflow izinleri içerik ve paket okumayla sınırlıdır; iş akışlarının PR onaylamasına izin verilmez.
- Tanımadığımız birinden gelen PR birleştirilmeden önce **Files changed** içindeki her dosya okunur. Özellikle `.github/workflows/`, `package.json` betikleri, `src-tauri/`, `bun.lock`, `Cargo.toml` ve `Cargo.lock` değişiklikleri incelenir.
- Dış katkının betiklerini çalıştırmadan önce kod ve bağımlılık değişiklikleri incelenir; ardından PR yerelde derlenip ilgili testlerle denenir. Okunmayan veya kontrolü başarısız PR birleştirilmez.

Kural seti: [master koruması](https://github.com/mertksll/kampus-coffee/rules/24822067). [Görev 09.1](tasks/week-4/09-1-master-korumasi.task.md) doğrulama adımlarını tanımlar.
