import moment from "moment";
moment.suppressDeprecationWarnings = true;

/**
 * @name transform
 * @param {Date|number|string} dateTime
 * @param {*} config
 * @returns {number|string}
 */
function transform(dateTime, config) {
  if (!dateTime) {
    throw new Error(`Invalid Date: ${dateTime}`);
  }
  if (typeof config === "string") {
    config = { format: config };
  }
  const { format, keepLocalTime, keepOffset, rfc2822, unixTimestamp, utcOffset } = {
    ...{
      format: undefined,
      keepLocalTime: true,
      keepOffset: true,
      unixTimestamp: false,
      utcOffset: undefined,
      rfc2822: false,
    },
    ...config,
  };
  const instance = moment(dateTime);
  if (!instance.isValid()) {
    throw new Error(`Invalid Date: ${dateTime}`);
  }
  if (Number.isInteger(utcOffset) || (utcOffset && typeof utcOffset === "string")) {
    instance.utcOffset(utcOffset, keepLocalTime);
  }
  if (unixTimestamp === true) {
    return instance.valueOf();
  }
  if (typeof format === "string") {
    return instance.format(config.format);
  }
  if (rfc2822 === true) {
    return instance.toDate().toUTCString();
  }
  return instance.toISOString(keepOffset);
}

/**
 * @name toDateTime
 * @param {string|object=} config
 * @returns {function(*=): number|string}
 * @throws Error
 */
export function toDateTime(config) {
  return (date) => transform(date, config);
}

/**
 * @name toFormat
 * @param {string=} format
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export function toFormat(format = "YYYY-MM-DD HH:mm:ss", utcOffset) {
  return (date) => transform(date, { format, utcOffset });
}

/**
 * @name toHourMinSec
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export function toHourMinSec(utcOffset) {
  return (date) => transform(date, { format: "HH:mm:ss", utcOffset });
}

/**
 * @name toISO8601
 * @param {boolean=true} keepLocalTime
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export function toISO8601(keepLocalTime = true, utcOffset) {
  return (date) => transform(date, { keepLocalTime, keepOffset: true, utcOffset });
}

/**
 * @name toISO
 * @param {boolean=true} keepLocalTime
 * @param {boolean=false} keepOffset
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export function toISO(keepLocalTime = true, keepOffset = false, utcOffset) {
  return (date) => transform(date, { keepLocalTime, keepOffset, utcOffset });
}

/**
 * @name toRFC2822
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export function toRFC2822(utcOffset) {
  return (date) => transform(date, { rfc2822: true, utcOffset });
}

/**
 * @name toUnix
 * @param {number|string=} utcOffset
 * @returns {function(*=): number}
 * @throws Error
 */
export function toUnix(utcOffset) {
  return (date) => transform(date, { unixTimestamp: true, utcOffset });
}

/**
 * @name toYearMonthDay
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export function toYearMonthDay(utcOffset) {
  return (date) => transform(date, { format: "YYYY-MM-DD", utcOffset });
}

class VicisTransformDate {
  /**
   * @name toDateTime
   * @static
   * @public
   * @param {string|object=} config
   * @returns {function(*=): number|string}
   * @throws Error
   */
  static toDateTime = toDateTime;
  /**
   * @name toFormat
   * @static
   * @public
   * @param {string=} format
   * @param {number|string=} utcOffset
   * @returns {function(*=): number|string}
   * @throws Error
   */
  static toFormat = toFormat;
  static toFunction = () => toDateTime;
  /**
   * @name toHourMinSec
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  static toHourMinSec = toHourMinSec;
  /**
   * @name toISO8601
   * @static
   * @public
   * @param {boolean=true} keepLocalTime
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  static toISO8601 = toISO8601;
  /**
   * @name toISO
   * @static
   * @public
   * @param {boolean=true} keepLocalTime
   * @param {boolean=false} keepOffset
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  static toISO = toISO;
  /**
   * @name toRFC2822
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  static toRFC2822 = toRFC2822;
  /**
   * @name toUnix
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): number}
   * @throws Error
   */
  static toUnix = toUnix;
  /**
   * @name toYearMonthDay
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  static toYearMonthDay = toYearMonthDay;
}

export { VicisTransformDate };
