import type { CartItem, Order } from "../types/coffee";
export type { CartItem, Order } from "../types/coffee";
export const cafes = ["Starbucks", "Kahve Dünyası", "Espressolab"];
export const products = [
  {
    id: 1,
    cafe: cafes[0],
    name: "Caffè Latte",
    kind: "Sıcak",
    price: 95,
    description: "Espresso ve bol süt. Ders arası için yumuşak bir mola.",
  },
  {
    id: 2,
    cafe: cafes[0],
    name: "Iced Americano",
    kind: "Soğuk",
    price: 85,
    description: "Buz üzerinde espresso ve su. Sade ve ferah.",
  },
  {
    id: 3,
    cafe: cafes[1],
    name: "Türk Kahvesi",
    kind: "Sıcak",
    price: 65,
    description: "Klasik Türk kahvesi. Küçük fincanda güçlü bir lezzet.",
  },
  {
    id: 4,
    cafe: cafes[1],
    name: "Soğuk Latte",
    kind: "Soğuk",
    price: 90,
    description: "Soğuk süt ve espresso, buzla tamamlanır.",
  },
  {
    id: 5,
    cafe: cafes[2],
    name: "Flat White",
    kind: "Sıcak",
    price: 100,
    description: "Yoğun espresso, ince süt köpüğü ve dengeli bir içim.",
  },
  {
    id: 6,
    cafe: cafes[2],
    name: "Cold Brew",
    kind: "Soğuk",
    price: 105,
    description: "Soğuk demlenmiş kahve. Uzun çalışma günlerine bir mola.",
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
