export type Tema = "gunduz" | "gece";
class TemaYonetici {
  mod = $state<Tema>("gunduz");
  oku() {
    if (typeof document !== "undefined")
      this.mod = document.documentElement.dataset.tema === "gece" ? "gece" : "gunduz";
  }
  degistir() {
    if (typeof document === "undefined") return;
    this.mod = document.documentElement.dataset.tema === "gece" ? "gunduz" : "gece";
    document.documentElement.dataset.tema = this.mod;
    try {
      localStorage.setItem("tema", this.mod);
    } catch {
      /* Tema bu oturumda kullanılmaya devam eder. */
    }
  }
}
export const tema = new TemaYonetici();
