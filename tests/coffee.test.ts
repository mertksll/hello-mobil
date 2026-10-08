import { describe, test, expect } from "bun:test";
import { totals, validCart, validOrders, unitPrice } from "../src/lib/coffee";
const latte = { productId: 1, size: "Standart", milk: "Normal süt", quantity: 4 };
describe("Sipariş iş kuralları", () => {
  test("4 kahvede indirim yok, 5 kahvede %10 indirim var", () => {
    expect(totals([latte])).toEqual({ quantity: 4, subtotal: 380, discount: 0, total: 380 });
    expect(totals([{ ...latte, quantity: 5 }])).toEqual({
      quantity: 5,
      subtotal: 475,
      discount: 47.5,
      total: 427.5,
    });
  });
  test("Büyük boy ve alternatif süt tutara dahil edilir", () => {
    expect(unitPrice({ ...latte, size: "Büyük", milk: "Yulaf sütü" })).toBe(120);
  });
  test("İndirim aynı kafedeki farklı ürünlerin toplam adedine uygulanır", () => {
    expect(
      totals([
        { ...latte, quantity: 3 },
        { ...latte, productId: 2, quantity: 2 },
      ]).discount,
    ).toBe(45.5);
  });
  test("Başka kafeden ürün içeren kayıt reddedilir", () => {
    expect(validCart([latte, { ...latte, productId: 3 }])).toBe(false);
  });
  test("Bozuk, negatif veya kesirli adet ve bilinmeyen seçenek reddedilir", () => {
    for (const value of [
      null,
      {},
      [{ ...latte, quantity: -1 }],
      [{ ...latte, quantity: 1.5 }],
      [{ ...latte, size: "dev" }],
      [{ ...latte, productId: 99 }],
    ])
      expect(validCart(value)).toBe(false);
  });
  test("Geçerli kayıt kabul edilir; bozuk sipariş kodu ve durum reddedilir", () => {
    const o = {
      code: "KMP-A7D2F9B4",
      cafe: "Starbucks",
      items: [latte],
      address: "A/2/203",
      total: 380,
      discount: 0,
      status: 0,
      created: "2026-10-09T10:00:00Z",
    };
    expect(validOrders([o])).toBe(true);
    expect(validOrders([{ ...o, status: 3 }])).toBe(false);
    expect(validOrders([{ ...o, code: "bad" }])).toBe(false);
  });
});
