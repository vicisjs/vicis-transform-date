/**
 * @name toDateTime
 * @param {string|object=} config
 * @returns {function(*=): number|string}
 * @throws Error
 */
export declare function toDateTime(
  config?:
    | string
    | {
        format?: string;
        keepLocalTime?: boolean;
        keepOffset?: boolean;
        unixTimestamp?: boolean;
        utcOffset?: number | string;
      },
): (date: string | Date) => string | number;

/**
 * @name toFormat
 * @param {string=} format
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export declare function toFormat(format?: string, utcOffset?: number | string): (date: string | Date) => string;

/**
 * @name toHourMinSec
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export declare function toHourMinSec(utcOffset?: number | string): (date: string | Date) => string;

/**
 * @name toISO8601
 * @param {boolean=true} keepLocalTime
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export declare function toISO8601(
  keepLocalTime?: boolean,
  utcOffset?: number | string,
): (date: string | Date) => string;

/**
 * @name toISO
 * @param {boolean=true} keepLocalTime
 * @param {boolean=false} keepOffset
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export declare function toISO(
  keepLocalTime?: boolean,
  keepOffset?: boolean,
  utcOffset?: number | string,
): (date: string | Date) => string;

/**
 * @name toRFC2822
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export declare function toRFC2822(utcOffset?: number | string): (date: string | Date) => string;

/**
 * @name toUnix
 * @param {number|string=} utcOffset
 * @returns {function(*=): number}
 * @throws Error
 */
export declare function toUnix(utcOffset?: number | string): (date: string | Date) => string;

/**
 * @name toYearMonthDay
 * @param {number|string=} utcOffset
 * @returns {function(*=): string}
 * @throws Error
 */
export declare function toYearMonthDay(utcOffset?: number | string): (date: string | Date) => string;

declare class VicisTransformDate {
  /**
   * @name toDateTime
   * @static
   * @public
   * @param {string|object=} config
   * @returns {function(*=): number|string}
   * @throws Error
   */
  public static toDateTime(
    config?:
      | string
      | {
          format?: string;
          keepLocalTime?: boolean;
          keepOffset?: boolean;
          unixTimestamp?: boolean;
          utcOffset?: number | string;
        },
  ): (date: string | Date) => string | number;
  /**
   * @name toFormat
   * @static
   * @public
   * @param {string=} format
   * @param {number|string=} utcOffset
   * @returns {function(*=): number|string}
   * @throws Error
   */
  public static toFormat(format?: string, utcOffset?: number | string): (date: string | Date) => string;
  /**
   * @name toFunction
   * @static
   * @public
   * @param {string|object=} config
   * @returns {function(*=): number|string}
   */
  public static toFunction(
    config?:
      | string
      | {
      format?: string;
      keepLocalTime?: boolean;
      keepOffset?: boolean;
      unixTimestamp?: boolean;
      utcOffset?: number | string;
    },
  ): (date: number | string | Date) => number | string;
  /**
   * @name toHourMinSec
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  public static toHourMinSec(utcOffset?: number | string): (date: string | Date) => string;
  /**
   * @name toISO8601
   * @static
   * @public
   * @param {boolean=true} keepLocalTime
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  public static toISO8601(keepLocalTime?: boolean, utcOffset?: number | string): (date: string | Date) => string;
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
  public static toISO(
    keepLocalTime?: boolean,
    keepOffset?: boolean,
    utcOffset?: number | string,
  ): (date: string | Date) => string;
  /**
   * @name toRFC2822
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  public static toRFC2822(utcOffset?: number | string): (date: string | Date) => string;
  /**
   * @name toUnix
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): number}
   * @throws Error
   */
  public static toUnix(utcOffset?: number | string): (date: string | Date) => string;
  /**
   * @name toYearMonthDay
   * @static
   * @public
   * @param {number|string=} utcOffset
   * @returns {function(*=): string}
   * @throws Error
   */
  public static toYearMonthDay(utcOffset?: number | string): (date: string | Date) => string;
  /**
   * @name toFunction
   * @public
   * @param {string|object=} config
   * @returns {function(*=): number|string}
   */
  public toFunction(
    config?:
      | string
      | {
      format?: string;
      keepLocalTime?: boolean;
      keepOffset?: boolean;
      unixTimestamp?: boolean;
      utcOffset?: number | string;
    },
  ): (date: number | string | Date) => number | string;
}

export { VicisTransformDate };
