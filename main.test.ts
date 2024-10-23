import { assertEquals, assertThrows } from "jsr:@std/assert";
import { zc } from "./main.ts"

Deno.test("invalid format", () => {
  assertThrows(() => {
    zc("1990/01/01");
  }, "日付はハイフン区切りで指定してください");
});

Deno.test("Unix Time (Jan Date)", () => {
  assertEquals(zc("1990-01-01"), "月曜日");
});

Deno.test("Feb Date Test", () => {
  assertEquals(zc("2024-02-01"), "木曜日");
});

Deno.test("Normal Date Test", () => {
  assertEquals(zc("2021-05-26"), "水曜日");
});
