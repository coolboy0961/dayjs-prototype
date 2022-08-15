import { Time } from "./util/Time";

console.log(Time.getTime1());
console.log(Time.getTime2());

const parsedDate = Time.parseDate("20221108");
console.log(`${parsedDate.year}年${parsedDate.month}月${parsedDate.day}日`)