import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";

// Timezone機能を利用するため
dayjs.extend(timezone);
dayjs.extend(utc);

// カスタムフォーマット機能を利用するため
dayjs.extend(customParseFormat);

export class Time {
  static getTime1(): string {
    return dayjs().tz("Asia/Tokyo").format("YYYY-MM-DD HH:mm:ss");
  }

  static getTime2(): string {
    return dayjs().tz("America/New_York").format("YYYY/MM/DD HH:mm:ss");
  }

  static parseDate(date: string): {
    year: number;
    month: number;
    day: number;
  } {
    // 20221301のような存在しない日付の時に、falseになる
    // https://day.js.org/docs/en/parse/string-format
    if (!dayjs(date, "YYYYMMDD", true).isValid()) {
      return {
        year: 0,
        month: 0,
        day: 0,
      };
    }
    const parsedDate = dayjs(date, "YYYYMMDD");
    return {
      year: parsedDate.year(),
      month: parsedDate.month() + 1,
      day: parsedDate.date(),
    };
  }
}
