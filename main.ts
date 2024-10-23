function parseDate(d: string): Record<string, number> {
  const pat = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!pat.test(d)) {
    throw new Error("日付はハイフン区切りで指定してください");
  }

  const D = new Date(d);
  return { y: D.getFullYear(), m: D.getMonth() + 1, d: D.getDate() };
}

function convert2String(day: number): string {
  const w = ["土", "日", "月", "火", "水", "木", "金"];
  return `${w.at(day)}曜日`;
}

export function zc(date: string) {
  let { y, m, d } = parseDate(date);

  // Jan and Feb convert to 13 and 14
  if (0 < m && m <= 2) {
    m += 12;
    y -= 1;
  }

  const C = Math.floor(y / 100);
  const Y = y % 100;
  const r = -2 * C + Math.floor(C / 4);

  const h = (d + Math.floor(26 * (m + 1) / 10) + Y + Math.floor(Y / 4) + r) % 7;

  return convert2String(h);
}

