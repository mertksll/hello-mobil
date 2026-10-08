<script lang="ts">
  import { onMount } from "svelte";
  import {
    products,
    cafes,
    sizes,
    milks,
    statuses,
    tl,
    totals,
    unitPrice,
    validCart,
    validOrders,
    type CartItem,
    type Order,
  } from "$lib/coffee";
  let { view = "menu", productId = 1 } = $props<{ view?: string; productId?: number }>();
  let cart = $state<CartItem[]>([]),
    orders = $state<Order[]>([]);
  let query = $state(""),
    cafe = $state("Tümü"),
    kind = $state("Tümü");
  let size = $state("Standart"),
    milk = $state("Normal süt"),
    quantity = $state(1);
  let building = $state(""),
    floor = $state(""),
    room = $state("");
  let notice = $state(""),
    busy = $state(false),
    ready = $state(false);
  const selected = $derived(products.find((p) => p.id === productId) ?? products[0]);
  const filtered = $derived(
    products.filter(
      (p) =>
        (cafe === "Tümü" || p.cafe === cafe) &&
        (kind === "Tümü" || p.kind === kind) &&
        (p.name + " " + p.cafe).toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr")),
    ),
  );
  const sum = $derived(totals(cart));
  onMount(() => {
    try {
      const c = JSON.parse(localStorage.getItem("kampus-cart") ?? "[]");
      const o = JSON.parse(localStorage.getItem("kampus-orders") ?? "[]");
      if (validCart(c)) cart = c;
      if (validOrders(o)) orders = o;
    } catch {
      notice = "Cihaz kaydı okunamadı. Demo boş sepetle açıldı.";
    }
    ready = true;
  });
  function save() {
    try {
      localStorage.setItem("kampus-cart", JSON.stringify(cart));
      localStorage.setItem("kampus-orders", JSON.stringify(orders));
    } catch {
      notice = "Cihaz kaydı kullanılamıyor; sayfa yenilenince değişiklikler kaybolabilir.";
    }
  }
  function add() {
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      notice = "1 ile 99 arasında adet seç.";
      return;
    }
    if (cart.length && products.find((p) => p.id === cart[0].productId)!.cafe !== selected.cafe) {
      notice = "Bir sipariş tek kafeden hazırlanır. Önce mevcut sepeti tamamla veya temizle.";
      return;
    }
    const found = cart.find(
      (i) => i.productId === selected.id && i.size === size && i.milk === milk,
    );
    if (found && found.quantity + quantity > 99) {
      notice = "Bir ürün seçeneğinden en fazla 99 adet eklenebilir.";
      return;
    }
    if (found) found.quantity += quantity;
    else cart.push({ productId: selected.id, size, milk, quantity });
    notice = "Kahven sepete eklendi.";
    save();
  }
  async function checkout(event: SubmitEvent) {
    event.preventDefault();
    if (busy || !ready || !cart.length) return;
    if (!building.trim() || !floor.trim() || !room.trim()) {
      notice = "Bina, kat ve sınıfı doldur.";
      return;
    }
    if (orders.length >= 100) {
      notice = "Demo geçmişi 100 siparişle sınırlı. Profil bölümünden kayıtları temizleyebilirsin.";
      return;
    }
    busy = true;
    try {
      let code = "";
      for (let attempt = 0; attempt < 10; attempt++) {
        if ("__TAURI_INTERNALS__" in window) {
          const { invoke } = await import("@tauri-apps/api/core");
          code = await invoke<string>("siparis_olustur");
        } else {
          const bytes = crypto.getRandomValues(new Uint8Array(4));
          code =
            "KMP-" +
            Array.from(bytes, (b) => b.toString(16).padStart(2, "0"))
              .join("")
              .toUpperCase();
        }
        if (!orders.some((o) => o.code === code)) break;
        code = "";
      }
      if (!/^KMP-[0-9A-F]{8}$/.test(code)) throw new Error("code");
      orders.unshift({
        code,
        cafe: products.find((p) => p.id === cart[0].productId)!.cafe,
        items: cart.map((i) => ({ ...i })),
        address: `${building.trim()} / ${floor.trim()} / ${room.trim()}`,
        total: sum.total,
        discount: sum.discount,
        status: 0,
        created: new Date().toISOString(),
      });
      cart = [];
      notice = `Demo siparişin oluşturuldu: ${code}. Siparişler bölümünden izleyebilirsin.`;
      save();
    } catch {
      notice = "Sipariş kodu üretilemedi. Sepetin korundu; tekrar deneyebilirsin.";
    } finally {
      busy = false;
    }
  }
  function clear() {
    cart = [];
    orders = [];
    notice = "Bu demoya ait sepet ve sipariş geçmişi temizlendi.";
    save();
  }
</script>

<div class="sayfa">
  {#if view === "menu"}
    <section class="hero">
      <div>
        <p class="eyebrow">KAMPÜSÜN KAHVE MOLASI</p>
        <h1>Kahven hazır.<br />Sıradaki durak: sınıfın.</h1>
        <p>
          Kafeni seç, kahveni kişiselleştir. Arkadaşlarınla aynı sınıfa 5 kahve söyle, %10
          indirimden yararlan.
        </p>
        <a class="btn compact" href="#menu">Kahveleri keşfet <span aria-hidden="true">↗</span></a>
      </div>
      <div class="hero-art">
        <img src="/logo.svg" alt="Buharı yükselen kahve fincanı" width="240" height="240" /><span
          >Birlikte daha güzel.</span
        >
      </div>
    </section>
    <p class="demo-note">
      Eğitim demosu · Menü ve fiyatlar örnektir. Gerçek sipariş, ödeme, kurye veya marka ortaklığı
      yoktur.
    </p>
    <section id="menu" aria-labelledby="menu-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">SICAK BİR MOLA</p>
          <h2 id="menu-title">Bugün ne içelim?</h2>
        </div>
        <span class="muted">{filtered.length} kahve</span>
      </div>
      <div class="filters">
        <label class="grow"
          >Kahve veya kafe ara<input
            type="search"
            bind:value={query}
            placeholder="Latte, Türk kahvesi…"
          /></label
        ><label
          >Kafe<select bind:value={cafe}
            ><option>Tümü</option>{#each cafes as c}<option>{c}</option>{/each}</select
          ></label
        ><label
          >İçecek<select bind:value={kind}
            ><option>Tümü</option><option>Sıcak</option><option>Soğuk</option></select
          ></label
        >
      </div>
      <div class="coffee-grid">
        {#each filtered as p}<article class="kart coffee-card">
            <a
              class="coffee-visual"
              href={"/urun/" + p.id + "/"}
              aria-label={p.name + " seçenekleri"}
              ><img src="/logo.svg" alt="" width="115" height="115" /><span class="pill"
                >{p.kind}</span
              ></a
            >
            <div class="card-body">
              <p class="eyebrow">{p.cafe}</p>
              <h3>{p.name}</h3>
              <p class="muted">{p.description}</p>
              <div class="card-bottom">
                <strong>{tl(p.price)}</strong><a class="text-link" href={"/urun/" + p.id + "/"}
                  >Seçenekler →</a
                >
              </div>
            </div>
          </article>{/each}
      </div>
      {#if !filtered.length}<p class="bos">
          Aramana uygun kahve bulunamadı. Filtreleri değiştirebilirsin.
        </p>{/if}
    </section>
  {:else if view === "detail"}
    <a class="text-link" href="/">← Menüye dön</a>
    <div class="detail-grid">
      <div class="kart detail-art">
        <img src="/logo.svg" alt={selected.name + " için kahve simgesi"} width="260" height="260" />
      </div>
      <section class="kart padded">
        <p class="eyebrow">{selected.cafe} · {selected.kind}</p>
        <h1>{selected.name}</h1>
        <p>{selected.description}</p>
        <p class="muted">Örnek menü · seçenekler demo amaçlıdır.</p>
        <div class="form-stack">
          <label
            >Boyut<select bind:value={size}
              >{#each sizes as s}<option>{s}</option>{/each}</select
            ></label
          ><label
            >Süt<select bind:value={milk}
              >{#each milks as m}<option>{m}</option>{/each}</select
            ></label
          ><label>Adet<input type="number" min="1" max="99" step="1" bind:value={quantity} /></label
          >
          <p>Büyük boy +15 TL · Yulaf sütü +10 TL</p>
          <strong
            >{tl(
              unitPrice({ productId: selected.id, size, milk, quantity: 1 }) * (quantity || 1),
            )}</strong
          ><button class="btn" disabled={!ready} onclick={add}>Sepete ekle</button><a
            class="text-link"
            href="/sepet/">Sepetimi gör →</a
          >
        </div>
      </section>
    </div>
  {:else if view === "cart"}
    <p class="eyebrow">KAHVE MOLANA AZ KALDI</p>
    <h1>Sepetin</h1>
    {#if cart.length}<div class="detail-grid">
        <section class="kart padded">
          <h2>Kahvelerin</h2>
          {#each cart as item, index}<div class="cart-row">
              <div>
                <strong>{products.find((p) => p.id === item.productId)?.name}</strong>
                <p class="muted">{item.size} · {item.milk} · {item.quantity} adet</p>
                <span>{tl(unitPrice(item) * item.quantity)}</span>
              </div>
              <button
                class="outline compact"
                disabled={busy}
                onclick={() => {
                  cart.splice(index, 1);
                  save();
                }}
                aria-label={products.find((p) => p.id === item.productId)?.name +
                  " ürününü sepetten çıkar"}>Kaldır</button
              >
            </div>{/each}<button
            class="text-link"
            disabled={busy}
            onclick={() => {
              cart = [];
              save();
            }}>Sepeti temizle</button
          >
        </section>
        <form class="kart padded form-stack" onsubmit={checkout}>
          <h2>Sınıfa teslimat</h2>
          <p class="muted">Yalnızca örnek sınıf bilgisi gir. Bu işlem gerçek sipariş oluşturmaz.</p>
          <label
            >Bina<input
              required
              maxlength="50"
              bind:value={building}
              placeholder="Örn. A Blok"
            /></label
          >
          <div class="two-fields">
            <label
              >Kat<input required maxlength="20" bind:value={floor} placeholder="Örn. 2" /></label
            ><label
              >Sınıf<input
                required
                maxlength="50"
                bind:value={room}
                placeholder="Örn. A-203"
              /></label
            >
          </div>
          <div class="summary-line"><span>Ara toplam</span><span>{tl(sum.subtotal)}</span></div>
          <div class="summary-line">
            <span>Toplu sipariş indirimi</span><span>−{tl(sum.discount)}</span>
          </div>
          <p class="muted">Aynı sınıfa, tek kafeden 5 ve üzeri kahvede %10 demo indirim.</p>
          <div class="summary-line total">
            <strong>Toplam</strong><strong>{tl(sum.total)}</strong>
          </div>
          <button class="btn" disabled={busy || !ready}
            >{busy ? "Hazırlanıyor…" : "Demo siparişi oluştur"}</button
          >
        </form>
      </div>{:else}<div class="kart padded">
        <h2>Henüz kahve eklemedin.</h2>
        <p>Menüden bir kahve seçerek başlayabilirsin.</p>
        <a class="btn compact" href="/">Menüyü keşfet</a>
      </div>{/if}
  {:else if view === "orders"}
    <p class="eyebrow">MOLALARININ HİKÂYESİ</p>
    <h1>Siparişlerin</h1>
    <p class="muted">Durumlar örnektir; demo düğmesiyle ilerletilir.</p>
    {#if !orders.length}<div class="kart padded">
        <p>Henüz kayıtlı siparişin yok.</p>
        <a class="text-link" href="/">İlk kahveni seç →</a>
      </div>{/if}
    <div class="coffee-grid">
      {#each orders as order}<article class="kart padded">
          <p class="eyebrow">{order.cafe}</p>
          <h2><bdi>{order.code}</bdi></h2>
          <p>{order.address}</p>
          <ul>
            {#each order.items as i}<li>
                {i.quantity} × {products.find((p) => p.id === i.productId)?.name} · {i.size}
              </li>{/each}
          </ul>
          <p>{tl(order.total)} · {new Date(order.created).toLocaleDateString("tr-TR")}</p>
          <p class="pill">{statuses[order.status]}</p>
          {#if order.status < 2}<button
              class="outline"
              onclick={() => {
                order.status++;
                save();
              }}>Demo: sonraki durum</button
            >{/if}
        </article>{/each}
    </div>
  {:else}
    <p class="eyebrow">SANA AİT BİR MOLA</p>
    <h1>Profil ve ayarlar</h1>
    <section class="kart padded">
      <h2>Misafir öğrenci</h2>
      <p>Bu demoda hesap açman gerekmiyor. Sepetin ve örnek siparişlerin bu cihazda saklanır.</p>
      <a class="text-link" href="/siparisler/">Siparişlerime git →</a>
    </section>
    <section class="kart padded">
      <h2>Uygulama hakkında</h2>
      <div class="link-list">
        <a href="/hakkinda/">Hakkında →</a><a href="/iletisim/">İletişim →</a><a href="/kosullar/"
          >Kullanım koşulları →</a
        ><a href="/gizlilik/">Gizlilik →</a>
      </div>
    </section>
    <section class="kart padded">
      <h2>Cihazdaki demo kayıtları</h2>
      <p>Sepeti ve sipariş geçmişini bu cihazdan silebilirsin.</p>
      <button class="outline" onclick={clear} disabled={!ready || (!cart.length && !orders.length)}
        >Sepet ve sipariş kayıtlarını sil</button
      >
    </section>
  {/if}
  <p class:notice role="status" aria-live="polite">{notice}</p>
</div>
