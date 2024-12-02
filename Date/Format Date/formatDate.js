/**
 * @param {Date} date
 * @param {String} format
 * @param {Object} options
 * @returns
 */

function formatDate(date, format = "yyyy-MM-dd", options = {}) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date");
  }

  const tokens = {
    yyyy: (d) => d.getFullYear(),
    yy: (d) => String(d.getFullYear()).slice(-2),
    MMMM: (d, locale) =>
      new Intl.DateTimeFormat(locale, { month: "long" }).format(d),
    MMM: (d, locale) =>
      new Intl.DateTimeFormat(locale, { month: "short" }).format(d),
    MM: (d) => String(d.getMonth() + 1).padStart(2, "0"),
    M: (d) => String(d.getMonth() + 1),
    dd: (d) => String(d.getDate()).padStart(2, "0"),
    d: (d) => String(d.getDate()),
    EEEE: (d, locale) =>
      new Intl.DateTimeFormat(locale, { weekday: "long" }).format(d),
    EEE: (d, locale) =>
      new Intl.DateTimeFormat(locale, { weekday: "short" }).format(d),
    HH: (d) => String(d.getHours()).padStart(2, "0"),
    H: (d) => String(d.getHours()),
    hh: (d) => String(d.getHours() % 12 || 12).padStart(2, "0"),
    h: (d) => String(d.getHours() % 12 || 12),
    mm: (d) => String(d.getMinutes()).padStart(2, "0"),
    m: (d) => String(d.getMinutes()),
    ss: (d) => String(d.getSeconds()).padStart(2, "0"),
    s: (d) => String(d.getSeconds()),
    SSS: (d) => String(d.getMilliseconds()).padStart(3, "0"),
    a: (d) => (d.getHours() < 12 ? "AM" : "PM"),
  };

  if (options.localized) {
    const intlOptions = {
      dateStyle: options.dateStyle || "full",
      timeStyle: options.timeStyle || "full",
      timeZone: options.timeZone || undefined,
      locale: options.locale || undefined,
    };
    return new Intl.DateTimeFormat(intlOptions.locale, intlOptions).format(
      date
    );
  }

  return format.replace(
    /\[([^\]]+)\]|yyyy|yy|MMMM|MMM|MM|M|dd|d|EEEE|EEE|HH|H|hh|h|mm|m|ss|s|SSS|a/g,
    (match, contents) => {
      if (contents) {
        return contents;
      }

      return tokens[match](date, options.locale);
    }
  );
}

// Example usage:
const now = new Date();
console.log(formatDate(now)); // Default: "2023-10-02"
console.log(formatDate(now, "MMMM d, yyyy")); // "October 2, 2023"
console.log(formatDate(now, "EEE, MMM d, yyyy [at] HH:mm:ss")); // "Mon, Oct 2, 2023 at 15:30:45"
console.log(formatDate(now, "h:mm a")); // "3:30 PM"
console.log(formatDate(now, undefined, { localized: true, locale: "fr-FR" })); // "lundi 2 octobre 2023 à 15:30:45 UTC+2"
console.log(
  formatDate(now, undefined, {
    localized: true,
    locale: "ja-JP",
    dateStyle: "full",
    timeStyle: "short",
  })
); // "2023年10月2日月曜日 15:30"
