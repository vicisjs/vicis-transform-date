import moment from "moment";
moment.suppressDeprecationWarnings = true;

function transformDateTime(dateTime, config) {
  if (!dateTime) {
    throw new Error(`Invalid Date: ${dateTime}`);
  }
  if (typeof config === "string") {
    config = { format: config };
  }
  const { format, keepLocalTime, keepOffset, unixTimestamp, utcOffset } = {
    ...{
      format: undefined,
      keepLocalTime: true,
      keepOffset: true,
      unixTimestamp: false,
      utcOffset: undefined,
    },
    ...config,
  };
  const instance = moment(dateTime);
  if (!instance.isValid()) {
    throw new Error(`Invalid Date: ${dateTime}`);
  }
  if (unixTimestamp === true) {
    return instance.valueOf();
  }
  if (typeof format === "string") {
    return instance.format(config.format);
  }
  if (Number.isInteger(utcOffset) || (utcOffset && typeof utcOffset === "string")) {
    instance.utcOffset(utcOffset, keepLocalTime);
  }
  return instance.toISOString(keepOffset);
}

/**
 * @name vicisTransformDateToDateTime
 * @param {Object|String} config
 * @returns {function(*=): number | string}
 */
function vicisTransformDateToDateTime(config) {
  return (date) => transformDateTime(date, config);
}

/**
 * @name vicisTransformDateToUnix
 * @returns {function(*=): number | string}
 */
function vicisTransformDateToUnix() {
  return (date) => transformDateTime(date, { unixTimestamp: true });
}

/**
 * @name vicisTransformDateToFormat
 * @param {String} format
 * @returns {function(*=): number | string}
 */
function vicisTransformDateToFormat(format) {
  return (date) => transformDateTime(date, { format });
}

/**
 * @name vicisTransformDateToISO
 * @param {Boolean=true} keepLocalTime
 * @param {Boolean=true} keepOffset
 * @param {Number|String=} utcOffset
 * @returns {function(*=): number | string}
 */
function vicisTransformDateToISO(keepLocalTime = true, keepOffset = true, utcOffset) {
  return (date) => transformDateTime(date, { keepLocalTime, keepOffset, utcOffset });
}

/**
 * @type {{toFormat: (function(String): function(*=): number | string), toUnix: (function(): function(*=): number | string), toISO: (function(Boolean=, Boolean=, (Number|String)=): function(*=): number | string), toDateTime: (function((Object|String)): function(*=): number | string), toFunction: (function(): function((Object|String)): function(*=): number | string)}}
 */
const VicisTransformDate = {
  toDateTime: vicisTransformDateToDateTime,
  toFormat: vicisTransformDateToFormat,
  toISO: vicisTransformDateToISO,
  toUnix: vicisTransformDateToUnix,
  toFunction: () => vicisTransformDateToDateTime,
};

export { VicisTransformDate };
