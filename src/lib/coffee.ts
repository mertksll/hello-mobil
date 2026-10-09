import type { CartItem, Order } from "../types/coffee";
export type { CartItem, Order } from "../types/coffee";
export const cafes = ["Starbucks", "Kahve Dünyası", "Espressolab"];
export const products = [
  {
    id: 1,
    cafe: "Starbucks",
    name: "Caffè Latte",
    kind: "Sıcak",
    price: 95,
    image: "/coffee/latte.webp",
    description: "Espresso ile ipeksi süt köpüğünün dengeli buluşması.",
    tag: "Yumuşak içim",
    defaultMilk: "Normal süt",
  },
  {
    id: 2,
    cafe: "Starbucks",
    name: "Iced Americano",
    kind: "Soğuk",
    price: 85,
    image: "/coffee/americano.webp",
    description: "Espresso, soğuk su ve bol buz. Sade bir ferahlık.",
    tag: "Sade & ferah",
    defaultMilk: "Sütsüz",
  },
  {
    id: 3,
    cafe: "Kahve Dünyası",
    name: "Türk Kahvesi",
    kind: "Sıcak",
    price: 65,
    image: "/coffee/turkish.webp",
    description: "Yoğun aroması ve geleneksel sunumuyla küçük bir mola.",
    tag: "Klasik lezzet",
    defaultMilk: "Sütsüz",
  },
  {
    id: 4,
    cafe: "Kahve Dünyası",
    name: "Soğuk Latte",
    kind: "Soğuk",
    price: 90,
    image: "/coffee/iced-latte.webp",
    description: "Soğuk süt, espresso ve buzun yumuşak uyumu.",
    tag: "Serin bir mola",
    defaultMilk: "Normal süt",
  },
  {
    id: 5,
    cafe: "Espressolab",
    name: "Flat White",
    kind: "Sıcak",
    price: 100,
    image: "/coffee/flatwhite.webp",
    description: "Yoğun espressoyu tamamlayan ince, kadifemsi süt.",
    tag: "Yoğun & dengeli",
    defaultMilk: "Normal süt",
  },
  {
    id: 6,
    cafe: "Espressolab",
    name: "Cold Brew",
    kind: "Soğuk",
    price: 105,
    image: "/coffee/americano.webp",
    description: "Soğuk demleme kahvenin sade ve ferah karakteri.",
    tag: "Soğuk demleme",
    defaultMilk: "Sütsüz",
  },
  {
    id: 7,
    cafe: "Starbucks",
    name: "Cappuccino",
    kind: "Sıcak",
    price: 95,
    image: "/coffee/cappuccino.webp",
    description: "Espresso, sıcak süt ve bol köpük. Zamansız bir klasik.",
    tag: "Bol köpüklü",
    defaultMilk: "Normal süt",
  },
  {
    id: 8,
    cafe: "Starbucks",
    name: "Caramel Macchiato",
    kind: "Sıcak",
    price: 115,
    image: "/coffee/latte.webp",
    description: "Espresso ve süt, tatlı karamel dokunuşuyla tamamlanır.",
    tag: "Karamel dokunuşu",
    defaultMilk: "Normal süt",
  },
  {
    id: 9,
    cafe: "Starbucks",
    name: "Caffè Mocha",
    kind: "Sıcak",
    price: 110,
    image: "/coffee/cappuccino.webp",
    description: "Kahve ve çikolatanın sıcak, yumuşak birlikteliği.",
    tag: "Çikolatalı",
    defaultMilk: "Normal süt",
  },
  {
    id: 10,
    cafe: "Starbucks",
    name: "Iced Vanilla Latte",
    kind: "Soğuk",
    price: 110,
    image: "/coffee/iced-cream.webp",
    description: "Vanilya aroması, süt ve espresso. Buz gibi bir mola.",
    tag: "Vanilyalı",
    defaultMilk: "Normal süt",
  },
  {
    id: 11,
    cafe: "Starbucks",
    name: "Espresso",
    kind: "Sıcak",
    price: 70,
    image: "/coffee/espresso.webp",
    description: "Küçük fincanda güçlü bir kahve karakteri.",
    tag: "Yoğun espresso",
    defaultMilk: "Sütsüz",
  },
  {
    id: 12,
    cafe: "Starbucks",
    name: "Iced Caramel Latte",
    kind: "Soğuk",
    price: 115,
    image: "/coffee/coldbrew.webp",
    description: "Sütlü soğuk kahveye tatlı bir karamel dokunuşu.",
    tag: "Karamelli",
    defaultMilk: "Normal süt",
  },
  {
    id: 13,
    cafe: "Kahve Dünyası",
    name: "Damla Sakızlı Türk Kahvesi",
    kind: "Sıcak",
    price: 80,
    image: "/coffee/turkish.webp",
    description: "Geleneksel Türk kahvesine aromatik bir dokunuş.",
    tag: "Aromatik",
    defaultMilk: "Sütsüz",
  },
  {
    id: 14,
    cafe: "Kahve Dünyası",
    name: "Cappuccino",
    kind: "Sıcak",
    price: 85,
    image: "/coffee/cappuccino.webp",
    description: "Köpüğü bol, dengesi yerinde bir espresso klasiği.",
    tag: "Bol köpüklü",
    defaultMilk: "Normal süt",
  },
  {
    id: 15,
    cafe: "Kahve Dünyası",
    name: "Caffè Latte",
    kind: "Sıcak",
    price: 85,
    image: "/coffee/latte.webp",
    description: "Sıcak süt ve espresso ile yumuşacık bir kahve molası.",
    tag: "Yumuşak içim",
    defaultMilk: "Normal süt",
  },
  {
    id: 16,
    cafe: "Kahve Dünyası",
    name: "Filtre Kahve",
    kind: "Sıcak",
    price: 75,
    image: "/coffee/espresso.webp",
    description: "Sade kahve sevenler için günün uzun molası.",
    tag: "Sade kahve",
    defaultMilk: "Sütsüz",
  },
  {
    id: 17,
    cafe: "Kahve Dünyası",
    name: "Fındıklı Soğuk Latte",
    kind: "Soğuk",
    price: 100,
    image: "/coffee/iced-latte.webp",
    description: "Fındık aroması, soğuk süt ve espresso ile hazırlanır.",
    tag: "Fındık aromalı",
    defaultMilk: "Normal süt",
  },
  {
    id: 18,
    cafe: "Kahve Dünyası",
    name: "Buzlu Mocha",
    kind: "Soğuk",
    price: 105,
    image: "/coffee/iced-cream.webp",
    description: "Çikolata, espresso ve sütü serin bir bardakta buluşturur.",
    tag: "Çikolatalı",
    defaultMilk: "Normal süt",
  },
  {
    id: 19,
    cafe: "Espressolab",
    name: "Cortado",
    kind: "Sıcak",
    price: 90,
    image: "/coffee/flatwhite.webp",
    description: "Espresso ile sütün sade ve yoğun dengesi.",
    tag: "Dengeli",
    defaultMilk: "Normal süt",
  },
  {
    id: 20,
    cafe: "Espressolab",
    name: "Americano",
    kind: "Sıcak",
    price: 85,
    image: "/coffee/espresso.webp",
    description: "Sıcak su ile açılan espresso, uzun bir kahve keyfi.",
    tag: "Sade kahve",
    defaultMilk: "Sütsüz",
  },
  {
    id: 21,
    cafe: "Espressolab",
    name: "Caffè Latte",
    kind: "Sıcak",
    price: 100,
    image: "/coffee/latte.webp",
    description: "İpeksi süt dokusu ve espressoyu bir araya getirir.",
    tag: "Yumuşak içim",
    defaultMilk: "Normal süt",
  },
  {
    id: 22,
    cafe: "Espressolab",
    name: "Iced Latte",
    kind: "Soğuk",
    price: 105,
    image: "/coffee/iced-latte.webp",
    description: "Soğuk süt ve espressonun buz üzerinde buluşması.",
    tag: "Serin bir mola",
    defaultMilk: "Normal süt",
  },
  {
    id: 23,
    cafe: "Espressolab",
    name: "Iced Americano",
    kind: "Soğuk",
    price: 90,
    image: "/coffee/americano.webp",
    description: "Sade, yoğun ve serin. Buzlu espresso klasiği.",
    tag: "Sade & ferah",
    defaultMilk: "Sütsüz",
  },
  {
    id: 24,
    cafe: "Espressolab",
    name: "Caramel Latte",
    kind: "Sıcak",
    price: 120,
    image: "/coffee/cappuccino.webp",
    description: "Yumuşak sütlü kahveye karamel aroması eşlik eder.",
    tag: "Karamel dokunuşu",
    defaultMilk: "Normal süt",
  },
];
export type Product = (typeof products)[number];
export const sizes = ["Standart", "Büyük"];
export const milks = ["Normal süt", "Yulaf sütü", "Sütsüz"];
export const statuses = ["Hazırlanıyor", "Kuryede", "Teslim edildi"];
export const tl = (value: number) =>
  value.toLocaleString("tr-TR", { style: "currency", currency: "TRY" });
export const unitPrice = (item: CartItem) =>
  (products.find((p) => p.id === item.productId)?.price ?? 0) +
  (item.size === "Büyük" ? 15 : 0) +
  (item.milk === "Yulaf sütü" ? 10 : 0);
export function totals(items: CartItem[]) {
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + unitPrice(item) * item.quantity, 0);
  const discount = quantity >= 5 ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
  return { quantity, subtotal, discount, total: subtotal - discount };
}
export function validCart(value: unknown): value is CartItem[] {
  if (!Array.isArray(value) || value.length > 100) return false;
  return (
    value.every(
      (item) =>
        item &&
        products.some((p) => p.id === item.productId) &&
        sizes.includes(item.size) &&
        milks.includes(item.milk) &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1 &&
        item.quantity <= 99,
    ) && new Set(value.map((item) => products.find((p) => p.id === item.productId)!.cafe)).size <= 1
  );
}
export function validOrders(value: unknown): value is Order[] {
  return (
    Array.isArray(value) &&
    value.length <= 100 &&
    value.every(
      (o) =>
        o &&
        typeof o.code === "string" &&
        /^KMP-[0-9A-F]{8}$/.test(o.code) &&
        cafes.includes(o.cafe) &&
        validCart(o.items) &&
        o.items.length > 0 &&
        o.items.every(
          (i: CartItem) => products.find((p) => p.id === i.productId)!.cafe === o.cafe,
        ) &&
        typeof o.address === "string" &&
        o.address.length <= 160 &&
        Number.isFinite(o.total) &&
        o.total >= 0 &&
        Number.isFinite(o.discount) &&
        o.discount >= 0 &&
        Number.isInteger(o.status) &&
        o.status >= 0 &&
        o.status <= 2 &&
        typeof o.created === "string" &&
        !Number.isNaN(Date.parse(o.created)),
    )
  );
}

export const brands = [
  { name: "Starbucks", image: "/brands/starbucks.png", label: "Sevdiğin kahve klasikleri" },
  {
    name: "Kahve Dünyası",
    image: "/brands/kahvedunyasi.png",
    label: "Tanıdık lezzetler, güzel molalar",
  },
  { name: "Espressolab", image: "/brands/espressolab.png", label: "Espressonun farklı tonları" },
];
export const brandFor = (name: string) => brands.find((b) => b.name === name) ?? brands[0];
export type Profile = { name: string; building: string; floor: string; room: string; cafe: string };
export const emptyProfile: Profile = {
  name: "",
  building: "",
  floor: "",
  room: "",
  cafe: "Starbucks",
};
export function validProfile(p: unknown): p is Profile {
  if (!p || typeof p !== "object") return false;
  const v = p as Record<string, unknown>;
  return (
    ["name", "building", "floor", "room"].every(
      (k) => typeof v[k] === "string" && (v[k] as string).length <= 50,
    ) &&
    typeof v.cafe === "string" &&
    cafes.includes(v.cafe)
  );
}
export function mergeCart(cart: CartItem[], incoming: CartItem[]): CartItem[] {
  if (!validCart(incoming) || !incoming.length) throw new Error("Kahve seçeneklerini kontrol et.");
  const merged = cart.map((i) => ({ ...i }));
  const first = products.find((p) => p.id === (cart[0] ?? incoming[0]).productId)!;
  if (incoming.some((i) => products.find((p) => p.id === i.productId)!.cafe !== first.cafe))
    throw new Error(`Sepetinde ${first.cafe} kahveleri var. Her sipariş tek kafeden hazırlanır.`);
  for (const item of incoming) {
    const found = merged.find(
      (i) => i.productId === item.productId && i.size === item.size && i.milk === item.milk,
    );
    if (found) found.quantity += item.quantity;
    else merged.push({ ...item });
  }
  if (!validCart(merged)) throw new Error("Bir seçenekten en fazla 99 adet ekleyebilirsin.");
  return merged;
}
