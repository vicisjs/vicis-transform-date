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

function VicisTransformDateToDateTime(config) {
  return (date) => transformDateTime(date, config);
}

function VicisTransformDateToUnix() {
  return (date) => transformDateTime(date, { unixTimestamp: true });
}

function VicisTransformDateToFormat(format) {
  return (date) => transformDateTime(date, { format });
}

function VicisTransformDateToISO(keepLocalTime = true, keepOffset = true, utcOffset) {
  return (date) => transformDateTime(date, { keepLocalTime, keepOffset, utcOffset });
}

const VicisTransformDate = {
  toDateTime: VicisTransformDateToDateTime,
  toFormat: VicisTransformDateToFormat,
  toISO: VicisTransformDateToISO,
  toUnix: VicisTransformDateToUnix,
  toFunction: () => VicisTransformDateToDateTime,
};

export { VicisTransformDate };
