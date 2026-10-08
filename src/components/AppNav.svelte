<script lang="ts">
  let { currentPath = "/", lang = "tr" } = $props<{ currentPath?: string; lang?: string }>();
  const names: Record<string, string[]> = {
    tr: ["Keşfet", "Sepet", "Siparişler", "Profil"],
    en: ["Explore", "Cart", "Orders", "Profile"],
    ar: ["استكشف", "السلة", "الطلبات", "الملف"],
    fa: ["کشف", "سبد", "سفارش‌ها", "پروفایل"],
  };
  const routes = ["/", "/sepet/", "/siparisler/", "/profil/"];
  const icons = ["☕", "▧", "☷", "○"];
</script>

<nav
  class="alt-menu"
  aria-label={lang === "tr"
    ? "Ana menü"
    : lang === "ar"
      ? "القائمة الرئيسية"
      : lang === "fa"
        ? "منوی اصلی"
        : "Main navigation"}
>
  {#each routes as route, i}<a
      href={route}
      aria-current={currentPath === route ? "page" : undefined}
      ><span aria-hidden="true">{icons[i]}</span>{(names[lang] ?? names.tr)[i]}</a
    >{/each}
</nav>

<style>
  .alt-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    padding-bottom: env(safe-area-inset-bottom);
    background: var(--kart);
    border-top: 1px solid var(--kenar);
    z-index: 20;
  }
  .alt-menu a {
    flex: 1;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 10px 5px;
    font-size: 12px;
    color: var(--yazi-soluk);
    min-height: 64px;
  }
  .alt-menu a[aria-current="page"] {
    color: var(--renk-ana);
    font-weight: 800;
    border-top: 3px solid var(--renk-ana);
    padding-top: 7px;
  }
  .alt-menu span {
    font-size: 21px;
    line-height: 1.2;
  }
</style>
