use std::sync::atomic::{AtomicU32, Ordering};
use std::time::{SystemTime, UNIX_EPOCH};
static SEQUENCE: AtomicU32 = AtomicU32::new(0);

// Eğitim demosu için takip kodu. Kimlik doğrulama veya ödeme anahtarı değildir.
// İstemci, cihazdaki geçmişe göre olası çakışmayı kontrol edip yeniden dener.
#[tauri::command]
fn siparis_olustur() -> String {
    let nanos = SystemTime::now().duration_since(UNIX_EPOCH).unwrap_or_default().as_nanos();
    let sequence = SEQUENCE.fetch_add(1, Ordering::Relaxed);
    format!("KMP-{:08X}", (nanos as u32).wrapping_add(sequence))
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![siparis_olustur])
        .run(tauri::generate_context!())
        .expect("Kampus's Coffee başlatılamadı");
}
