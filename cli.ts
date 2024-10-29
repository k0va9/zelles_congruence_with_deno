import { zc } from "./main.ts";

const date = Deno.args[0];

if(date === undefined) {
  console.error("引数に日付を指定してください");
  Deno.exit(1)
}
console.log(zc(date));
