<script lang="ts">
  import { onMount } from "svelte";
  import { tema } from "$lib/tema.svelte";
  let { lang = "tr" } = $props<{ lang?: string }>();
  const labels: Record<string, string> = {
    tr: "Açık / koyu temayı değiştir",
    en: "Toggle light / dark theme",
    ar: "تبديل المظهر الفاتح والداكن",
    fa: "تغییر پوسته روشن و تیره",
  };
  onMount(() => tema.oku());
</script>

<header class="ust">
  <div class="header-inner">
    <a href="/" class="logo"
      ><span class="logo-mark"><img src="/logo.svg" alt="" width="38" height="38" /></span><span
        >Kampus's Coffee<small
          >{lang === "tr"
            ? "Kampüsün kahvesi."
            : lang === "en"
              ? "Your campus coffee."
              : lang === "ar"
                ? "قهوتك في الجامعة."
                : "قهوه تو در دانشگاه."}</small
        ></span
      ></a
    ><button
      class="theme"
      onclick={() => tema.degistir()}
      aria-label={labels[lang] ?? labels.tr}
      title={labels[lang] ?? labels.tr}>{tema.mod === "gece" ? "☀" : "☾"}</button
    >
  </div>
</header>

<style>
  .ust {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--kart);
    border-bottom: 1px solid var(--kenar);
    padding-top: env(safe-area-inset-top);
  }
  .header-inner {
    max-width: 1440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: -0.4px;
  }
  .logo small {
    display: block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: var(--yazi-soluk);
    margin-top: 3px;
  }
  .logo-mark {
    background: var(--logo-zemin);
    border-radius: 12px;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
  }
  .theme {
    border: 1px solid var(--kenar);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background: var(--kart);
    color: var(--yazi);
    font-size: 25px;
  }
</style>
